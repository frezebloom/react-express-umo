export default function allDocuments(state = [], action){
   if(action.type === 'ALL_DOCUMENTS'){
      return [
         ...state,
         action.payload
      ];
   }
   return state;
}
