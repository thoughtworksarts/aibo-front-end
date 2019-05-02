import pythonAPI from "../apis/pythonAPI";

export const getAIResponse = voiceToTextInput => async dispatch => {
  const response = await pythonAPI.get("/functional_chat");

  dispatch({ type: "AI", payload: "BOT: " + response.data.intent });
};

export const saveHumanInput = humanInput => {
  return {
    type: "HUMAN",
    payload: "HUMAN " + humanInput
  };
};
