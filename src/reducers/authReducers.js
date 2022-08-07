import { SET_CURRENT_USER } from '../actions/types';

const intitialState={
  user:{}
};

export default function( state=intitialState, action){

  switch(action.type){

    case SET_CURRENT_USER:

      
      return {
        ...state,
        user:action.payload
      };

    default:
      return state;

  }

}