import { ADD_TO_TEST, TOGGLE_HAPPY, NEW_CHATMESSAGE, DELETE_MESSAGE } from './../ChatActions';
// import from dummy data to access chat
import { CHATROOM } from './../../data/dummy-data';

const initialState = {
    happy: false,
    test: ['Hi', 'There'],
    chatrooms: CHATROOM,
    //...
}

const ChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MESSAGE:
            const deleteChatArray = state.chatrooms.find(room => room.id === action.payload.roomId).chatMessages
                .filter(message => message.id !== action.payload.messageId);
            
            const deleteChatRoom = {...state.chatrooms.find(room => room.id === action.payload.roomId)};
            deleteChatRoom.chatMessages = deleteChatArray;

            const chatroomIndexDelete = state.chatrooms.findIndex(room => room.id === action.payload.roomId);
            const deleteRoomArray = [...state.chatrooms];
            deleteRoomArray.splice(chatroomIndexDelete, 1, deleteChatRoom);

            return {
                ...state,
                chatrooms: deleteRoomArray
            };
        
        // Call a new action creator, that you create, when clicking the button. Pass relevant info. in payload.
        // 1: find the right chatroom in the array and copy the chatmessages array.
        case NEW_CHATMESSAGE:
            const chatroom = state.chatrooms.find(room => room.id === action.payload.chatroomId);
            const chatmessages = [...chatroom.chatMessages, action.payload.message];

            
            // 2: Copy chatroom object and attach new chat array that you copied.
            const newChatRoom = { ...chatroom };
            newChatRoom.chatMessages = chatmessages;

            //3: Insert the new chatroom object into the array of chatrooms
            // Hint: use js-array's findIndex function, to find the index in the array of the object we want.
            // js Splice method to create a new array and insert the created chatroom object.
            
            const index = state.chatrooms.findIndex(room => room.id === action.payload.chatroomId);
            const chatroomArray = [...state.chatrooms];
            chatroomArray.splice(index, 1, newChatRoom);

            return {
                ...state,
                chatrooms: chatroomArray
            };

        case ADD_TO_TEST: 
            console.log("reducer "+ action.payload);
            // Adds the new value to the array, but without making state mutations.
            return {
                ...state,
                test: [...state.test, action.payload]
            }

        case TOGGLE_HAPPY:
            return {
                ...state, 
                happy: !state.happy
            }
 
        // case NEW_CHAT:
            //

        default:
            return state;
    }
}


export default ChatReducer;