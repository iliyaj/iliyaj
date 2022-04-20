// creates a button that will open a new window and then close it
function myFunction() {
    var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    myWindow.document.write("<p>This is 'MsgWindow'.</p>");
    myWindow.document.write("<p>Click the 'X' to close me.</p>");
    myWindow.document.close();
}