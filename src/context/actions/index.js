export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const EDIT = "EDIT";

export const adding = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

export const removing = (payload) => {
  return {
    type: REMOVE,
    payload,
  };
};

export const editing = (payload) => {
  return {
    type: EDIT,
    payload,
  };
};
