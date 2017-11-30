export default function searchDocuments(state = [], action) {
  if (action.type === "SEARCH_DOCUMENTS") {
    return [...state, action.payload];
  }
  return state;
}
