import {
  TICKET_FETCHED,
  COMMENT_POST_SUCCESS,
  EDIT_TICKET_SUCCESS
} from "./actions";

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case TICKET_FETCHED:
      return action.payload;
    case COMMENT_POST_SUCCESS:
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            ...action.payload.comment,
            user: { userName: action.payload.userName }
          }
        ]
      };
    case EDIT_TICKET_SUCCESS: {
      const { price, description, imageUrl, updatedAt } = action.payload;
      return { ...state, price, description, imageUrl, updatedAt };
    }
    default:
      return state;
  }
}
