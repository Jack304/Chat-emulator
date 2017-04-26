var messageIdNumber = 0;
function sendMessage() {
    var input = document.getElementById("text_message_id_1").value;
    var createMessage = document.createElement("div");
    createMessage.textContent = input;
    createMessage.id = "message_id_" + messageIdNumber;
    createMessage.className = "message";
    document.getElementById("message_area_id_1").appendChild(createMessage);
    messageIdNumber++;
    document.getElementById("text_message_id_1").value = "";
}

var searchInput = document.getElementById("search_id_1");
searchInput.onkeyup = search;
function search() {
    var userList = document.getElementById("user_list_id_1");
    var users = userList.getElementsByClassName("user");
    for (i = 0; i < users.length; i++) {
      if (users[i].textContent.includes(searchInput.value) || searchInput.value == "") {
        users[i].style.display="list-item";
      }
      else {
        users[i].style.display="none";
      }
    }
}
