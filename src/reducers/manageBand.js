export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      return {
        ...state,
        bands: [
          ...state.bands,
          {
            name: action.name,
            id: Math.floor( Math.random() * 10000000000 ),
          }
        ]
      }

      case 'DELETE_BAND':

        return {
          ...state,
          bands: state.bands.filter(band => band.id !== action.id),
        }
  
    default:
      return state;
  }
};
