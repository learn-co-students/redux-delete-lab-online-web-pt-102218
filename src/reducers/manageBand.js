import uuid from "uuid";
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      //debugger
      action.band={id:uuid(),name:action.name}
      
      return { ...state, bands: [...state.bands, action.band] }
    case 'DELETE_BAND':
      let i = state.bands.findIndex((band)=>band.id===action.id)
      debugger
      return {...state,bands:[...state.bands.slice(0,i),...state.bands.slice(i+1)]}
    default:
      return state;
  }
};
