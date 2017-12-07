export default function distributionOfTraining(state = [], action) {
  if (action.type === "INFO_DT") {
    return [...state, action.payload];
  }
  return state;
}
