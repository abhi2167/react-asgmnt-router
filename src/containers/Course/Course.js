import React, { Component } from 'react';

class Course extends Component {
    render () {
        let post = <div></div>;
        if(this.props.id) {
            post = (<div onClick={this.props.selectCourseHandler}>
                        <h1>{this.props.title}</h1>
                        <p>You selected the Course with ID: {this.props.id}</p>
                    </div>);
        }
        
        if(this.props.match && this.props.match.params.id) {
            console.log(this.props);
            post = (<div>
                        <p>You selected the Course with ID: {this.props.match.params.id}</p>
                        <p>{this.props.location.search}</p>
                    </div>);
        }
        return (
            <div>
                {post}
            </div>
        );
    }
}

export default Course;