import React from 'react';

export default class CourseOne extends React.Component {
    render() {
        const oneCourse = this.props.course;
        return (
            <div className="course-one">
                <div className="course-one-subtitle">
                    {oneCourse.subtitle?oneCourse.subtitle:'Cool course'}
                </div>
                <img src={oneCourse.image} />
                <h3>{oneCourse.title}</h3>
                <div className="course-one-access">
                    {oneCourse.access}
                </div>
            </div>
        );
    }
}