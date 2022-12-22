window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;      // stopping the function from running

    audio.currentTime = 0;  // the issue we were getting here was that while pressing key multiple times over and over it wont play the element from the start so, we solved the issue by rewinding the element's audio to 0 to play it from start.

    //now when we have the audio element then PLAY IT!
    audio.play();

    // console.log(key);
    key.classList.add('playing');       // Vanilla JS method
    // key.addClass('playing');        // JQuery method
});

const keys = document.querySelectorAll('.key'); // we need to check for every key that is why we used queryselectorALL. it gives us NODELIST of every single element that is matched.

// transition END event ---- we need to loop on every single element 
keys.forEach( key => key.addEventListener('transitionend', removeTransition));

// removeTransition
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip it if it's not a transform
    // console.log(e.propertyName);
    this.classList.remove('playing');
}
