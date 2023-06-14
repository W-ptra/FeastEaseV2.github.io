let payment = document.getElementById("payment");

function showPayment(){
  payment.style.visibility = "visible";
}
function hidePayment(){
  payment.style.visibility = "hidden";
  alert("Pembayaran berhasil");
  window.location.href = "menu-list_responsive.html";
}

let checkbox1 = document.getElementById("checkbox1");
let checkbox2 = document.getElementById("checkbox2");
let checkbox3 = document.getElementById("checkbox3");
let checkbox4 = document.getElementById("checkbox4");
let checkbox5 = document.getElementById("checkbox5");

let array = [checkbox1,checkbox2,checkbox3,checkbox4,checkbox5];

function resetCheckbox(){
  for(let i=0;i<5;i++){
    array[i].checked = false;
  }
}

function check1(){
  resetCheckbox();
  checkbox1.checked = true;
}
function check2(){
  resetCheckbox();
  checkbox2.checked = true;
}
function check3(){
  resetCheckbox();
  checkbox3.checked = true;
}
function check4(){
  resetCheckbox();
  checkbox4.checked = true;
}
function check5(){
  resetCheckbox();
  checkbox5.checked = true;
}
