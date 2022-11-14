import { FAILURE, LOADING, SUCCESS } from "./actionTypes";

export const actionCreators = {
  loading: () => ({ type: LOADING }),
  failure: () => ({ type: FAILURE }),
  success: (photos, page) => ({
    type: SUCCESS,
    payload: { photos, page },
  }),
}