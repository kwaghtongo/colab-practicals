// Wrap every letter in a span
var textWrapper = document.querySelector('.animate1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.animate1 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.animate1',
    opacity: 0,
    duration: 6000,
    easing: "easeOutExpo",
    delay: 1000
  });

  //To animate Welcome Note
  var move4 = document.querySelector(".animate2");
  move4.innerHTML=move4.textContent.replace (/\S/g, "<span class='animate3'>$&</span>");
  anime.timeline({loop: true})
  .add({
      targets: ".animate2 .animate3",
      scale: [4,1],
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 800,
      delay: (el, i) => 800 * i
  }).add({
      targets: ".animate2",
      opacity: 0,
      duration: 1000,
      easing: "easeInExpo",
      delay: 1000,
  })