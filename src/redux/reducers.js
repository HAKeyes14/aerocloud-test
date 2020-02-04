import { SET_ORDER, ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS } from "./actions";

const initialState = {
  order: "desc",
  facilities: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDER:
      return { ...state, order: action.order };
    case ADD_FILTER:
      return { ...state, facilities: [...state.facilities, action.facility] };
    case REMOVE_FILTER:
      return {
        ...state,
        facilities: state.facilities.filter(
          element => element !== action.facility
        )
      };
    case CLEAR_FILTERS:
      return { ...state, facilities: [] };
    default:
      return state;
  }
}
