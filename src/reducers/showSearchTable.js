export default function showSearchTable(state = false, action) {
  if (action.type === "SHOW_SEARCHTABLE") {
    return action.payload;
  }
  return state;
}
