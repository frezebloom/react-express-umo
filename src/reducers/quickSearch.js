export default function newStateAddForm(state = "", action) {
  if (action.type === "QUICK_SEARCH") {
    return action.payload;
  }
  return state;
}
