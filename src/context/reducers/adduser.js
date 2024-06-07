import { ADD, REMOVE, EDIT } from "../actions"; // Import EDIT

const initialState = {
  value: JSON.parse(localStorage.getItem("users")) || [],
};

export const addUser = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      const newValue = [...state.value, action.payload];
      localStorage.setItem("users", JSON.stringify(newValue));
      return {
        ...state,
        value: newValue,
      };
    }
    case REMOVE: {
      const newValue = state.value.filter(
        (user) => user.id !== action.payload.id
      );
      localStorage.setItem("users", JSON.stringify(newValue));
      return {
        ...state,
        value: newValue,
      };
    }
    case EDIT: {
      const newValue = state.value.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      localStorage.setItem("users", JSON.stringify(newValue));
      return {
        ...state,
        value: newValue,
      };
    }
    default:
      return state;
  }
};
