 // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
 let vh = window.innerHeight * 0.01;
 // Then we set the value in the --vh custom property to the root of the document
 document.documentElement.style.setProperty('--vh', `${vh}px`);

 // We listen to the resize event
 window.addEventListener('resize', () => {
     // We execute the same script as before
     let vh = window.innerHeight * 0.01;
     document.documentElement.style.setProperty('--vh', `${vh}px`);
 });

 var upperItem2 = document.getElementsByClassName('js-vacant');
 var elNodes = document.querySelectorAll(".js-vacant");
 var applyForm = document.querySelector('.apply-popup');
 var applyCloser = document.querySelector('.apply-popup__closer');

 for (var i = 0; i < upperItem2.length; i++) {
     var elem = upperItem2[i];
     elem.addEventListener("click", function() {
         event.preventDefault();
         applyForm.classList.add('active');
     });
 }

 if (applyCloser) {
     applyCloser.addEventListener('click', function() {
         event.preventDefault();
         applyForm.classList.remove('active');
     });
 };


 var awardOpener = document.querySelector('.open-btn');
 var awardPopup = document.querySelector('.popup-award');
 var awardCloser = document.querySelector('.popup-award__closer');

 if (awardOpener) {
     awardOpener.addEventListener('click', function() {
         awardPopup.classList.add('active');
     });
 };

 if (awardCloser) {
     awardCloser.addEventListener('click', function() {
         awardPopup.classList.remove('active');
     });
 };
