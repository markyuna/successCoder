// import PaidCourse from "../../data/PaidCourseModel";
// import { ADD_TO_CART, REMOVE_COURSE_CART, ADD_PAYMENT } from "../constants";

// const initialState = {
//   cartCourses: [],
//   total: 0,
// };

// const reducerCart = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//         const course = action.course;
//         const idCourse = course.id;
//         const price = course.price;
//         const title = course.title;

//       const newCourse = new PaidCourse(idCourse, price, title);

//       return {
//         ...state,
//         cartCourses: state.cartCourses.concat(newCourse),
//         total: state.total + price
//       };

//       case REMOVE_COURSE_CART:
//         const indexResult = state.cartCourses.findIndex(course => course.id === action.prodId);
//         const newCartCoursesArray = [...state.cartCourses];
//         const coursePrice = newCartCoursesArray[indexResult].price;
//         newCartCoursesArray.splice(indexResult, 1);
      
//         return {
//           ...state,
//           cartCourses: newCartCoursesArray,
//           total: state.total - coursePrice,
//         };      

//     case ADD_PAYMENT:
//       return {
//         ...state,
//         cartCourses: [],
//         total: 0,
//       };

//     default:
//       return state;
//   }
// };

// export default reducerCart;



import { ADD_TO_CART, REMOVE_COURSE_CART, ADD_PAYMENT } from "../constants";

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

    default:
      return state;
  }
};

export default reducerCart;
