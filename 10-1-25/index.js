// task-1

var container1 = document.getElementById("container-1");

var p1 = document.createElement("p");
p1.innerText = "Task 1: create a New Paragraph";

function callp(){
    container1.appendChild(p1);

}
// TASK-2


var container2 = document.getElementById("container-2");
 
var p2 = document.createElement("p");
p2.innerText = "Task 2: Remove the Last Element";

container2.appendChild(p2);

function removep(){
    p2.remove();
}

// TASK-3

var container3 = document.getElementById("container-3");

var p3 = document.createElement("p");
 
p3.innerText = "Task 3: Toggle a Box";

contaimer3.appendChild(p3);

function toggle(){
    container3.style.background = "green";
    container3.style.height = "100px";
    p3.remove();
}

// TASK-4
var container4 = document.getElementById("container-4");

var p4 = document.createElement("p");
p4.innerText = "Create a button that, when clicked,changes its text to something else.";

container4.appendChild(p4);
 
function mess(){
    p4.innerText = "Task 4: Change Button Text";
}


// TASK-5

var container5 = document.getElementById("container-5");

var ol = document.createElement("ol");

var li1= document.createElement("li");
li1.innerText = "item-1";

var li2= document.createElement("li");
li2.innerText = "item-2";

var li3= document.createElement("li");
li3.innerText = "item-3";

ol.append(li1,li2,li3);

var ul = document.createElement("ul");

var li4 = document.createElement("li");
li4.innerText = "id";

var li5 = document.createElement("li");
li5.innerText = "Name";

var li6 = document.createElement("li");
li6.innerText = "About";

ul.append(li4,li5,li6);

function change1(){
    container5.appendChild(ol);
    ul.remove();
}
function change2(){
    container5.appendChild(ul);
    ol.remove();
}




