import produce from 'immer';

const INITIAL_STATE = {
  perfil_usuario: null,
  origem_usuario: null,
}

export default function usuario(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/LOG_IN_SUCCESS': {
        draft.perfil_usuario = action.payload.usuario;
        draft.origem_usuario = action.payload.origem;

        break;
      }

      default:
        return state;
    }
  })
}