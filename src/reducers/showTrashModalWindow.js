export default function newStateTrashModalWindow(state = false, action) {
  if (action.type === "SHOW_TRASHMODALWINDOW") {
    return action.payload;
  }
  return state;
}
