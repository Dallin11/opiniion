// Click Delete button to hide the current list item
window.onload = function deleteButton() {
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
// Add Name to list 
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("first_name").value + " " + document.getElementById("last_name").value;
 
   
   //Append anchor  tag to list item with name. 
    var a = document.createElement("a");
    a.setAttribute("href", "#");
    li.appendChild(a);
    tn = document.createTextNode(inputValue);
    a.appendChild(tn);
    
    //Append close button image to list item
    var img = document.createElement("img");
    img.setAttribute("src", "https://cdn2.iconfinder.com/data/icons/picons-essentials/71/close-exit-512.png");
    img.className = "close";
    img.onclick =  function deleteButton1(){
        var div = this.parentElement;
                div.style.display = "none";
    };
    li.appendChild(img);

    if (inputValue === '') {
        alert("Please insert first and last names");
    } else {
        document.getElementById("names-list").appendChild(li);
    }
    inputValue = "";
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
// Search list of names
function searchList() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search_input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("names-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}