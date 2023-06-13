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


function payment(){
  alert("Horeee terima kasih 🥳🥳🥳");
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
  
    if (windowWidth <= 580) {
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
  