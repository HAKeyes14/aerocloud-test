import { SET_ORDER } from "./actions";

const initialState = {
  order: "desc"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDER:
      return { ...state, order: action.order };
    default:
      return state;
  }
}
