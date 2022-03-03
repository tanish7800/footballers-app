import { PLAYERS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE } from '../actions/players';
import { SET_FILTERS } from '../actions/players';

const initialState = {
    players: PLAYERS,
    filteredPlayers: PLAYERS,
    favouritePlayers: []
};

const playersReducer = ( state = initialState , action ) => {
    switch(action.type) {
        case TOGGLE_FAVOURITE:
            const existingIndex = state.favouritePlayers.findIndex(player=>player.id===action.playerId);
            if(existingIndex>=0){
                const updatedFavPlayers = [...state.favouritePlayers];
                updatedFavPlayers.splice(existingIndex,1);
                return { ...state,favouritePlayers: updatedFavPlayers };
            } else {
                return { ...state, favouritePlayers: state.favouritePlayers.concat( state.players.find(player=>player.id===action.playerId) ) };
            } 
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updatedFilteredPlayers = state.players.filter(player => {
                if(appliedFilters.injuredFilter && !player.isInjured ){
                    return false;
                }
                if(appliedFilters.retiredFilter && !player.isRetired ){
                    return false;
                }
                return true;
            });
            return {...state, filteredPlayers: updatedFilteredPlayers};
        default:
            return state;
    }
}

export default playersReducer;