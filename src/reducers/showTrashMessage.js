<<<<<<< HEAD
export default function showTrashMessage(state = false, action) {
  if (action.type === "SHOW_TRASHMESSAGE") {
    return action.payload;
  }
  return state;
=======
export default function showTrashMessage(state = false, action){
   if(action.type === 'SHOW_TRASHMESSAGE'){
      return action.payload;
   }
   return state;
>>>>>>> bf8b45855b2f573fb807351f2ccb5221d1cbaf51
}
