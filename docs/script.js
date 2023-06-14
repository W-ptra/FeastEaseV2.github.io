function showPop() {
  var loginPop = document.getElementById("loginPop");
  if (loginPop.style.visibility === "visible") {
    loginPop.style.visibility = "hidden";
  } else {
    loginPop.style.visibility = "visible";
  }
}

function downloadImage() {
  var imageUrl = "95846e2f-5ae2-4b8c-9026-4116908ca8c5.jfif";
  var link = document.createElement("a");
  link.href = imageUrl;
  link.download = "Awikwok.jpg";
  link.click();
}


function registerDone(){
  alert("Selamat Anda Sudah Rerdaftar ✋😆🤚")
}

function removeDate() {
    var elementsToShow = document.getElementsByClassName('tanggal');
    var windowWidth = window.innerWidth;
  
    if (windowWidth <= 800) {
      for (var i = 0; i < elementsToShow.length; i++) {
        elementsToShow[i].classList.add('hidden');
      }
    } else {
      for (var i = 0; i < elementsToShow.length; i++) {
        elementsToShow[i].classList.remove('hidden');
      }
    }
  }

  function menuContent() {
    var elementsToShow = document.getElementsByClassName('element-to-delete');
    var windowWidth = window.innerWidth;
  
    if (windowWidth <= 700) {
      for (var i = 0; i < elementsToShow.length; i++) {
        elementsToShow[i].classList.add('gone');
      }
    } else {
      for (var i = 0; i < elementsToShow.length; i++) {
        elementsToShow[i].classList.remove('gone');
      }
    }
  }

  // Add event listener to the window resize event
  window.addEventListener('resize', function() {
    removeDate();
    menuContent();
  });
  
  // Call the function initially to handle the initial state
  removeDate();
  menuContent();
  

  let valueElement = document.getElementById('satu');
  let value = 1;
  
  function incrementValue() {
    value++;
    valueElement.textContent = value;
  }
  
  function decrementValue() {
    if (value > 0) {
      value--;
      valueElement.textContent = value;
    }
  }
  
  function resetValue() {
    value = 0;
    valueElement.textContent = value;
  }


let akunPop = document.getElementById("akunPop");

function akunShow(){
  akunPop.style.visibility = "visible";
}
function akunHidden(){
  akunPop.style.visibility = "hidden";
}
  
