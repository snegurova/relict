// LettersAnimation

const textToAnimate = document.querySelectorAll('._animated-letters');
const lettersSetsToAnimate = [];
if (textToAnimate) {
  textToAnimate.forEach(el => lettersSetsToAnimate.push(el.textContent.split('')));
}

lettersSetsToAnimate.forEach((set, i) => {
  textToAnimate[i].innerHTML = '';
  set.forEach(letter => {
    if (letter === ' ') {
      letter = '&nbsp;';
    }
    textToAnimate[i].innerHTML += `<span class="_animated-letter">${letter}</span>`
  });
});

let char = 0;
const chars = document.querySelectorAll('._animated-letter');
const animateAfterElements = document.querySelectorAll('._after-letters-animation');

if (chars.length > 0) {
  let timer = setInterval(onTick, 20);
  
  function onTick() {
    const span = chars[char];
    span.classList.add('_fade-up');
    char++;
    if (char === chars.length) {
      complete();
      return;
    }
  }
  
  function complete() {
    clearInterval(timer);
    animateAfterElements.forEach(el => el.classList.add('_active'));
  }
}


//=================