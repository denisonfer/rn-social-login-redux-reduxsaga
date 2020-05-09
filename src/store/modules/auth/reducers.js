import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  signed: false,
  token: null,
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/LOG_IN_SUCCESS': {
        draft.loading = false;
        draft.signed = true;
        draft.token = action.payload.token;
        break;

      }

      case '@auth/LOG_OUT': {
        draft.signed = false;
        draft.token = null;
        break;
      }

      default:
        return state;
    }
  })
}