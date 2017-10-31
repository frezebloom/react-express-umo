export default function newStateAddForm(state = false, action) {
  if (action.type === "SHOW_ADDFORM") {
    return action.payload;
  }
  return state;
}
