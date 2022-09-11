< html >
    <
    head >
    <
    title > Arrays!!! < /title> <
    script type = "text/javascript" >
    var students = new Array("John", "Ann", "Aaron", "Edwin", "Elizabeth");
Array.prototype.displayItems = function() {
    for (i = 0; i < this.length; i++) {
        document.write(this[i] + "<br />");
    }
}
document.write("students array<br />");
students.displayItems();
document.write("<br />The number of items in students array is " + students.length + "<br />");
document.write("<br />The SORTED students array<br />");
students.sort();
students.displayItems();
document.write("<br />The REVERSED students array<br />");
students.reverse();
students.displayItems();
document.write("<br />THE students array after REMOVING the LAST item<br />");
students.pop();
students.displayItems();
document.write("<br />THE students array after PUSH<br />");
students.push("New Stuff");
students.displayItems(); <
/script> <
/head> <
body >
    <
    /body> <
    /html>