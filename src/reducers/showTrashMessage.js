export default function showTrashMessage(state = false, action){
   if(action.type === 'SHOW_TRASHMESSAGE'){
      return action.payload;
   }
   return state;
}
