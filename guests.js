/*GUEST INFO VISIBILITY*/
//queryselector not elementbyid because these are classes not ids being called
const guestToggles = document.querySelectorAll('.guest-toggle');
const guestInfo = document.querySelectorAll('.guest-info');

for (let i = 0; i < guestToggles.length; i++) {
  guestToggles[i].addEventListener('click', function () {
    guestInfo[i].classList.toggle('visible');
  });
}