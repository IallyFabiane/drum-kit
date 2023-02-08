let button = document.querySelectorAll('.drum');

button.forEach( (element) => { 
   element.addEventListener('click', (event) => {
    handleClick(event.target.button);
   })
})

function handleClick(event) {
   alert('i got clicked');
}

