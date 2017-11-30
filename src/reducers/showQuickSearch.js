export default function showQuickSearch(state = true, action) {
  if (action.type === "SHOW_QUICKSEARCH") {
    return action.payload;
  }
  return state;
}
