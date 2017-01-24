function sendInput() {
    var z = document.getElementById("textMessage").value;
//    document.getElementById("demo").innerHTML = x;
    var x = document.createElement("P");
    var t = document.createTextNode(z);
    x.appendChild(t);
    document.getElementById("demo").appendChild(x);
}
