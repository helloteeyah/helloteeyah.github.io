console.log("javascript")

var image_m = document.getElementById('M');
var image_e = document.getElementById('E');
var image_ss = document.getElementById('SS');
var image_a = document.getElementById('A');
var image_g = document.getElementById('G');
var image_e2 = document.getElementById('E2');

var letter_m = document.getElementById('m');
var letter_e = document.getElementById('e');
var letter_d = document.getElementById('d');
var letter_i = document.getElementById('i');
var letter_u = document.getElementById('u');
var letter_m2 = document.getElementById('m2');

image_m.style.visibility = "hidden";
image_e.style.visibility = "hidden";
image_ss.style.visibility = "hidden";
image_a.style.visibility = "hidden";
image_g.style.visibility = "hidden";
image_e2.style.visibility = "hidden";

letter_m.addEventListener('click', click_m);
letter_e.addEventListener('click', click_e);
letter_d.addEventListener('click', click_d);
letter_i.addEventListener('click', click_i);
letter_u.addEventListener('click', click_u);
letter_m2.addEventListener('click', click_m2);

image_m.addEventListener('click', click_m);
image_e.addEventListener('click', click_e);
image_ss.addEventListener('click', click_d);
image_a.addEventListener('click', click_i);
image_g.addEventListener('click', click_u);
image_e2.addEventListener('click', click_m2);

function click_m(){
    if (letter_m.style.visibility == "visible") {
        letter_m.style.visibility = "hidden";
        image_m.style.visibility = "visible";
    } else {
        letter_m.style.visibility = "visible";
        image_m.style.visibility = "hidden";
    }

}

function click_e(){
    if (letter_e.style.visibility == "visible") {
        letter_e.style.visibility = "hidden";
        image_e.style.visibility = "visible";
    } else {
        letter_e.style.visibility = "visible";
        image_e.style.visibility = "hidden";
    }

}

function click_d(){
    if (letter_d.style.visibility == "visible") {
        letter_d.style.visibility = "hidden";
        image_ss.style.visibility = "visible";
    } else {
        letter_d.style.visibility = "visible";
        image_ss.style.visibility = "hidden";
    }

}

function click_i(){
    if (letter_i.style.visibility == "visible") {
        letter_i.style.visibility = "hidden";
        image_a.style.visibility = "visible";
    } else {
        letter_i.style.visibility = "visible";
        image_a.style.visibility = "hidden";
    }

}

function click_u(){
    if (letter_u.style.visibility == "visible") {
        letter_u.style.visibility = "hidden";
        image_g.style.visibility = "visible";
    } else {
        letter_u.style.visibility = "visible";
        image_g.style.visibility = "hidden";
    }

}

function click_m2(){
    if (letter_m2.style.visibility == "visible") {
        letter_m2.style.visibility = "hidden";
        image_e2.style.visibility = "visible";
    } else {
        letter_m2.style.visibility = "visible";
        image_e2.style.visibility = "hidden";
    }

}