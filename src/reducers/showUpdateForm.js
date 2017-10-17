export default function newStateUpdateForm(state = false, action) {
   if(action.type === 'SHOW_UPDATEFORM'){
      return action.payload;
   }
   return state;
}
