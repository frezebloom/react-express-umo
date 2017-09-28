export default function newStateAddForm(state = false, action) {
   if(action.type === 'NEW_ADDFORM'){
      return action.payload;
   }
   return state;
}
