var messageIdNumber = 0;
function sendMessage() {
    var input = document.getElementById("text_message").value;
    var createMessage = document.createElement("div");
    createMessage.textContent = input;
    createMessage.id = "message_id_" + messageIdNumber;
    createMessage.className = "message";
    document.getElementById("message_area_id_1").appendChild(createMessage);
    messageIdNumber++;
}
