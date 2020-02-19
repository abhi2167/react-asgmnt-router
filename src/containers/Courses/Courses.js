import React, { Component } from 'react';
import Course from '../Course/Course';
import './Courses.css';
import {Link, Route} from 'react-router-dom';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedCourseId: null
    }

    selectCourseHandler = (id) => {
        console.log(id);
        this.setState({
            selectedCourseId: id
        });
    };

    render () {
        let courseList = this.state.courses.map( course => {
            return (
                <Link key={course.id} to={
                    {
                        pathname: this.props.match.url + '/' +course.id,
                        search: '?title='+course.title
                    }}>
                    <Course className="Course" 
                            id = {course.id} 
                            title={course.title} 
                            selectCourseHandler={() => this.selectCourseHandler(course.id)}/>
                </Link>
                );
            });
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {courseList}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={Course}/>
            </div>
        );
    }
}

export default Courses;