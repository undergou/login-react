import React from 'react';
import CourseOne from './CourseOne.js';

export default class CourseGrid extends React.Component {
    render() {
        const courses = this.props.courses.map((course,index) => {
            return <CourseOne course={course} key={index} />;
        });
        return (
            <div className="course-grid">
                {courses}
            </div>
        );
    }
}