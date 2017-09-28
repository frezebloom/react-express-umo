export default function newDocument(state = [], action){
   if(action.type === 'NEW_DOCUMENT'){
      return [
         ...state,
         action.payload
      ];
   }
   return state;
}
