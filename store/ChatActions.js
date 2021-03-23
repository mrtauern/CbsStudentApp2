import User from './../models/User';
import ChatMessage from './../models/ChatMessage';

export const TOGGLE_HAPPY = 'TOGGLE_HAPPY';
export const ADD_TO_TEST = 'ADD_TO_TEST';
export const NEW_CHATMESSAGE = 'NEW_CHATMESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const toggleHappy = (happy) => {
    return {type: TOGGLE_HAPPY, payload: happy};
};

export const addToTest = (text) => {
    console.log("text " + text);
    return {type: ADD_TO_TEST, payload: text};
};

export const addToChats = (text, chatroomId) => {
    const tempUser = new User('1','Felix Sandgren', '1234', 'felix@sandgren.dk', '', 'MSc in Medicine', true);
    const message = new ChatMessage(Math.random().toString(), new Date(), text, tempUser);

    return {type: NEW_CHATMESSAGE, payload: {message, chatroomId }};
};

export const deleteMessage = (roomId, messageId) => {
    return {type: DELETE_MESSAGE, payload: {roomId, messageId}};
};