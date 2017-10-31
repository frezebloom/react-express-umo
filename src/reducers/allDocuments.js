export default function allDocuments(state = [], action) {
  if (action.type === "ALL_DOCUMENTS") {
    return action.payload;
  }
  return state;
}
