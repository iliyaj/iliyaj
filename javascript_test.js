// creates a button that will open a new window
function myFunction() { 
    var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    myWindow.document.write("<p>This is 'MsgWindow'.</p>");
}
