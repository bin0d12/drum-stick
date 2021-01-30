function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);



// function playSound(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if(!audio) return; // stop the function from running the all together
//     audio.currentTime = 0; //rewind to the start
//     audio.play();
//     key.classList.add('playing');
// }
// function removeTransition(e){
//     if (e.propertyName !== 'transform') return;
//     this.classList.remove('playing');
// }
// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventlistener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);







//   function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;
// key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
//   }
//   function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
//   }

//   const keys = Array.from(document.querySelectorAll('.key'));
//   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//   window.addEventListener('keydown', playSound);