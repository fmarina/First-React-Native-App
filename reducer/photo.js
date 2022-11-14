import { FAILURE, LOADING, SUCCESS } from "../actions/actionTypes"

export const initialState = {
  loading: false,
  error: false,
  photos: [],
  nextPage: 1,
}

export function reducer(state, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, error: false }
    case SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        photos: [...state.photos, ...action.payload.photos],
        nextPage: state.nextPage + 1,
      }
    case FAILURE:
      return { ...state, loading: false, error: true }
  }
}