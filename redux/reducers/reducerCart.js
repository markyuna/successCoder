import { ADD_TO_CART, REMOVE_COURSE_CART, ADD_PAYMENT, DELETE_COURSE } from "../constants";

const initialState = {
  cartCourses: [],
  total: 0,
};

const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const course = action.course;

      return {
        ...state,
        cartCourses: state.cartCourses.concat({
          id: course.id,
          price: course.price,
          title: course.title,
        }),
        total: state.total + course.price,
      };

    case REMOVE_COURSE_CART:
      const indexResult = state.cartCourses.findIndex(course => course.id === action.prodId);
      const newCartCoursesArray = [...state.cartCourses];
      const coursePrice = newCartCoursesArray[indexResult].price;
      newCartCoursesArray.splice(indexResult, 1);

      return {
        ...state,
        cartCourses: newCartCoursesArray,
        total: state.total - coursePrice,
      };

    case ADD_PAYMENT:
      return {
        ...state,
        cartCourses: [],
        total: 0,
      };

    case DELETE_COURSE:
      const indexCourseResult = state.cartCourses.findIndex(course => course.id === action.courseId);

      if (indexCourseResult >= 0) {
        const newCartCourses = [...state.cartCourses];
        const courseInfo = newCartCourses[indexCourseResult];
        newCartCourses.splice(indexCourseResult, 1);

        return {
          ...state,
          cartCourses: newCartCourses,
          total: state.total - courseInfo.price,
        };
      }
      break;

    default:
      return state;
  }
};

export default reducerCart;
