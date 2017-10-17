export default function updateDocument(state = [], action){
   if(action.type === 'UPDATE_DOCUMENT'){
      return action.payload;
   }
   return state;
}
