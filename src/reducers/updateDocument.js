export default function updateDocument(state = [], action){
   if(action.type === 'UPDATE_DOCUMENT'){
     return [
        ...state,
        action.payload
     ];
   }
   return state;
}
