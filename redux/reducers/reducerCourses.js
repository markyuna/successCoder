import CourseModel from '../../data/CourseModel';
import COURSES from '../../data/testData';
import {
   ADD_TO_CART,
   REMOVE_COURSE_CART, 
   DELETE_COURSE, 
   EDIT_COURSE,
   CREATE_COURSE,
   } from '../constants';

const initialState = {
  existingCourses: COURSES,
  loggedInmemberCourses: COURSES.filter(course => course.instructorId === '1'),
};

const reducerCourses = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const indexCourseToModify = state.existingCourses.findIndex(course => course.id === action.course.id);

      const copyExistingCourses = [...state.existingCourses];
      const modifiedCourse = {
        ...copyExistingCourses[indexCourseToModify],
        selected: true,
      };
      copyExistingCourses[indexCourseToModify] = modifiedCourse;

      return {
        ...state,
        existingCourses: copyExistingCourses,
        loggedInmemberCourses: state.loggedInmemberCourses
      };

    case REMOVE_COURSE_CART:
      const indexCourseToDeleteFromCart = state.existingCourses.findIndex(course => course.id === action.prodId);

      const copyExistingCoursesRemoved = [...state.existingCourses];
      const removedCourse = {
        ...copyExistingCoursesRemoved[indexCourseToDeleteFromCart],
        selected: false,
      };
      copyExistingCoursesRemoved[indexCourseToDeleteFromCart] = removedCourse;

      return {
        ...state,
        existingCourses: copyExistingCoursesRemoved,
        loggedInmemberCourses: state.loggedInmemberCourses,
      };

    case DELETE_COURSE:
        return {
          ...state,
          existingCourses: state.existingCourses.filter(course => course.id !== action.courseId),
          loggedInmemberCourses: state.loggedInmemberCourses.filter(course => course.id !== action.courseId),
        }
        
    case EDIT_COURSE:
        const idCourse = action.courseId
        const indexCourseToUpdate = state.loggedInmemberCourses.findIndex(course => course.id === idCourse);

        const updateCourse = new CourseModel(
          idCourse,
          action.updateCourse.title,
          action.updateCourse.description,
          action.updateCourse.image,
          state.loggedInmemberCourses[indexCourseToUpdate].price,
          state.loggedInmemberCourses[indexCourseToUpdate].selected,
          state.loggedInmemberCourses[indexCourseToUpdate].instructorId,

        )

        const newLoggedInmemberCourses = [...loggedInmemberCourses]
        newLoggedInmemberCourses[indexCourseToUpdate] = updateCourse

        const indexExistingCourses = state.existingCourses.filter(course => course.id !== idCourse)
        const newExistingCourses = [...state.existingCourses];
        newExistingCourses[indexExistingCourses] = updateCourse
        
        return {
          ...state,
          existingCourses: newExistingCourses,
          loggedInmemberCourses: newLoggedInmemberCourses,
        }

    case CREATE_COURSE:
      const newCourse = new CourseModel(
        Date.now().toString(),
        action.newCourse.title,
        action.newCourse.description,
        action.newCourse.image,
        action.newCourse.price,
        false,
        '1', 
      )
      return {
        ...state,
        existingCourses: state.existingCourses.concat(newCourse),
        loggedInmemberCourses: state.loggedInmemberCourses.concat(newCourse),
      }

    default:
      return state;
  }
};

export default reducerCourses;
