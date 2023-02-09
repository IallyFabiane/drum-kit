let button = document.querySelectorAll('.drum');

button.forEach( (element) => { 
   element.addEventListener('click', (event) => {
    handleClick(event.target.button);
   })
})

function handleClick(event) {
   let audio = new Audio('./sounds/tom-1.mp3');
   audio.play();
}

