export default function manageBand(state = {
  bands: [], bandId: -1
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let band = {name: action.name}
      band.id = state.bandId + 1
      console.log(`Added one to ${state.bandId} to get ${band.id}`)
      return { ...state, bands: [...state.bands, band], bandId: band.id}

    case 'DELETE_BAND':
      let bandIdx = state.bands.findIndex(band => band.id === action.id)
      if (bandIdx || bandIdx === 0) {
        return {
          ...state, 
          bands: [
            ...state.bands.slice(0, bandIdx), 
            ...state.bands.slice(bandIdx + 1)
          ]
        }
      } else {
        console.log(`Failed to delete ${action.id}: ${bandIdx}`)
        return state
      }
    default:
      return state;
  }
};
