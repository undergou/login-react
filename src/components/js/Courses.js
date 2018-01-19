import React from 'react';
import CourseHeader from './CourseHeader.js';
import CourseGrid from './CourseGrid.js';
import CourseMenu from './CourseMenu.js';
import '../less/courses.less';
import getData from '../services/getData.js';
import { Dispatcher } from 'flux';
import keyMirror from 'fbjs/lib/keyMirror';
import { EventEmitter } from 'events';

const appDispatcher = new Dispatcher();

const actions = keyMirror({
    CHANGE_STATE: null
})

const handleState = (action) =>{
    appDispatcher.dispatch(action)
}

const storeItems = Object.assign({}, EventEmitter.prototype, {
    items:[],
    getState: () => {
        return this.items;
    },
    setState: (newState) => {
        this.items = newState;
        storeItems.emit('change');
    },
    addChangeListener: (callback) => {
        storeItems.on('change', callback);
    },
    removeChangeListener: (callback) => {
        storeItems.removeListener('change', callback);
    }
});

appDispatcher.register(action =>{
    const state = storeItems.getState();
    switch(action.type){
        case actions.CHANGE_STATE: {
            const {value} = action;
            storeItems.setState({courses: value})
            break;
        }
        default:
            return null;
    }
})

export default class Courses extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            courses: storeItems.getState(),
            activeItem:'all'
        };
    }
    updateState(){
        this.setState(storeItems.getState());
    }
    componentDidMount(){
        storeItems.addChangeListener(this.updateState.bind(this));
        let sessionData = JSON.parse(sessionStorage.getItem('courses'));
        if(sessionData){
            handleState({
                type: actions.CHANGE_STATE,
                value: sessionData
            })
        } else{
            getData('https://iamit.gq/api/courses?locale=ru')
                .then(response => {
                    return response.json();
                }).then(data => {
                handleState({
                    type: actions.CHANGE_STATE,
                    value: data
                })
                let dataJSON = JSON.stringify(data);
                sessionStorage.setItem('courses', dataJSON);
            })
        }
    }
    componentWillUnmount(){
        storeItems.removeChangeListener(this.updateState.bind(this))
    }
    filterCourses(courses, tag){
        if(tag == 'all'){
            return courses;
        } else {
            const newList = this.state.courses.filter((item, index)=>{
                return item.tags[0] == tag
            });
            return newList;
        }
    }
    handleActiveItem(event){
        this.setState({activeItem: event.target.innerHTML.toLowerCase()})
    }
    render() {
        const coursesRender = this.filterCourses(this.state.courses, this.state.activeItem);
        return (
            <div>
                <CourseHeader />
                <CourseMenu onHandleActiveItem={this.handleActiveItem.bind(this)} activeItem={this.state.activeItem} />
                <CourseGrid courses={coursesRender?coursesRender:[]} />
            </div>
        );
    }
}
