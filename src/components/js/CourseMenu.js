import React from 'react';

export default class CourseMenu extends React.Component {
    render() {
        return (
            <div className="course-menu">
                <ul onClick={this.props.onHandleActiveItem} className="courses-menu-list">
                    <li className={this.props.activeItem=='all'?'course-menu-active':''}>All</li>
                    <li className={this.props.activeItem=='web'?'course-menu-active':''}>Web</li>
                    <li className={this.props.activeItem=='informatics'?'course-menu-active':''}>Informatics</li>
                </ul>
            </div>
        );
    }
}