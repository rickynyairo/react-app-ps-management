import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';


class CoursesPage extends React.Component {å
    render(){
        const {courses} = this.props;
        return(
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>           
            </div>
        );
    }
}

function mapStateToProps(state, _ownProps){
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
