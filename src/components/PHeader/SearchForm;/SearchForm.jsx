// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   toggleSearchForm,
//   focusSearchInput,
//   blurSearchInput,
// } from "../../../store/slice/appSlice";
// import "./SearchForm.scss";

// const SearchForm = () => {
//   const dispatch = useDispatch();
//   const { expanded, focused } = useSelector((state) => state.app.searchForm); // Adjust the path according to your state structure
//   // console.log(state);
//   const handleClick = () => {
//     dispatch(toggleSearchForm());
//     if (!expanded) {
//       dispatch(focusSearchInput());
//     } else {
//       dispatch(blurSearchInput());
//     }
//   };

//   return (
//     <div className="container_Search">
//       <div className="content">
//         <input
//           type="text"
//           name="input"
//           className={`input  ${focused ? "focused" : ""}`}
//           onFocus={() => dispatch(focusSearchInput())}
//           onBlur={() => dispatch(blurSearchInput())}
//         />
//         <button
//           type="reset"
//           className={`search  ${focused ? "close" : ""}`}
//           onClick={handleClick}
//         ></button>
//       </div>
//     </div>
//   );
// };

// export default SearchForm;
