function payment(){
  alert("Horeee terima kasih 🥳🥳🥳");
}

function lupaPass(){
  alert("Waduh 😅☝️");
}

function clickLogin(){
  alert("Selamat Datang di FeastEase  🥳🥳🥳")
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
  