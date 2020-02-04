export const SET_ORDER = "SET_ORDER";
export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export function setOrder(order) {
  return { type: SET_ORDER, order };
}

export function addFilter(facility) {
  return { type: ADD_FILTER, facility };
}

export function removeFilter(facility) {
  return { type: REMOVE_FILTER, facility };
}

export function clearFilters() {
  return { type: CLEAR_FILTERS };
}
