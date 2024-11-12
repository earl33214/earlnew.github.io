function hideImageIfNoSpace() {
    const image = document.querySelector('.responsive-image');
    const containerWidth = window.innerWidth;  // You can adjust to a specific container
    const containerHeight = window.innerHeight;

    // Example condition: if width or height is less than 400px, hide the image
    if (containerWidth < 400 || containerHeight < 300) {
      image.style.display = 'none';
    } else {
      image.style.display = 'block';
    }
  }

  // Call the function on window resize
  window.addEventListener('resize', hideImageIfNoSpace);

  // Initial check
  hideImageIfNoSpace();
  


  let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");
  
 let progressStartvalue=0,
     progressEndvalue=80,
     speed=50;

let progress = setInterval(() =>{
      progressStartvalue++;
      progressValue.textContent= `${progressStartvalue}%`
      circularProgress.style.background =`conic-gradient(#7d2ae8 ${progressStartvalue * 3.6}deg,#ededed 0deg)`

      if(progressStartvalue == progressEndvalue){
        clearInterval(progress);
      }
}, speed);






let circularProgress2 = document.querySelector(".circular-progress2"),
progressValue2 = document.querySelector(".progress-value2");

let progressStartvalue2=0,
   progressEndvalue2=90,
   speed2=50;

let progress2= setInterval(() =>{
    progressStartvalue2++;
    progressValue2.textContent= `${progressStartvalue2}%`
    circularProgress2.style.background =`conic-gradient(#7d2ae8 ${progressStartvalue2 * 3.6}deg,#ededed 0deg)`

    if(progressStartvalue2 == progressEndvalue2){
      clearInterval(progress2);
    }
}, speed2);

let circularProgress3 = document.querySelector(".circular-progress3"),
progressValue3 = document.querySelector(".progress-value3");

let progressStartvalue3=0,
   progressEndvalue3=98,
   speed3=50;

let progress3= setInterval(() =>{
    progressStartvalue3++;
    progressValue3.textContent= `${progressStartvalue3}%`
    circularProgress3.style.background =`conic-gradient(#7d2ae8 ${progressStartvalue3 * 3.6}deg,#ededed 0deg)`

    if(progressStartvalue3 == progressEndvalue3){
      clearInterval(progress3);
    }
}, speed3);

let circularProgress4 = document.querySelector(".circular-progress4"),
progressValue4 = document.querySelector(".progress-value4");

let progressStartvalue4=0,
   progressEndvalue4=70,
   speed4=50;

let progress4= setInterval(() =>{
    progressStartvalue4++;
    progressValue4.textContent= `${progressStartvalue2}%`
    circularProgress4.style.background =`conic-gradient(#7d2ae8 ${progressStartvalue4 * 3.6}deg,#ededed 0deg)`

    if(progressStartvalue4 == progressEndvalue4){
      clearInterval(progress4);
    }
}, speed4);

