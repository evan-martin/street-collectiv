import { SET_FILTER } from "./location.types";

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
