/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {
    name:"sri",
    friends:255,
    messages:["hi","how r u?","take care"],
    postMessage: function addMessage(message){
        facebookProfile.messages.push(message);
        },
    deleteMessage: function removeMessage(index){
        facebookProfile.messages.splice(index,1);
    },
    addFriend: function(){
        facebookProfile.friends +=1;
    },
    removeFriend: function(){
        facebookProfile.friends -=1;
    },
};