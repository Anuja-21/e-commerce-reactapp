const cartLogger = store => next => action => {
  console.log("Action:", action.type);
  const result = next(action);
  console.log("Updated Cart:", store.getState().cart);
  return result;
};

export default cartLogger;
