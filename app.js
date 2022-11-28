let nam = document.getElementById('inp').value;
let bigtext = document.getElementById('bigtext').value;
let button = document.getElementById('btn');
let note = document.getElementsByClassName('Notes');



button.addEventListener('click', ()=>{
    console.log(toString(nam));
    console.log(bigtext.value);
})

