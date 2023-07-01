const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#button4")
const button5 = document.querySelector("#button5")
const button6 = document.querySelector("#button6")
const button7 = document.querySelector("#button7")
const button8 = document.querySelector("#button8")
const button9 = document.querySelector("#button9")
function catAmount() {
    alert("three")
}
function catName() {
    alert("panther, pizhma, sova")
}
function right(){
    alert("right");
};
function wrong(){
    alert("wrong");
};
button1.onclick = catAmount;
button2.onclick = catName;
button3.onclick = wrong;
button4.onclick = wrong;
button5.onclick = wrong;
button6.onclick = right;
button7.onclick = right;
button8.onclick = wrong;
button9.onclick = wrong;