let payment = document.getElementById("payment");

function showPayment(){
  payment.style.visibility = "visible";
}
function hidePayment(){
  payment.style.visibility = "hidden";
  alert("Pembayaran berhasil");
  window.location.href = "menu-list_responsive.html";
}