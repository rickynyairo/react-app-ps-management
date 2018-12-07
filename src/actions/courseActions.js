import actions from './actionTypes';
import courseApi from '../api/mockCourseApi';

export const loadCoursesSuccess = (courses) => {
    return { type: actions.LOAD_COURSES_SUCCESS, courses };
}

export const loadCourses = () => {
    return (dispatch) => {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        })
        .catch(err => {throw(err);});
    };
}