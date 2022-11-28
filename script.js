let nam = document.querySelector('#inp');
let bigtext = document.querySelector('#bigtext');
let button = document.querySelector('#btn');
let note = document.querySelector('.Notes')
let second = document.querySelector('.main-second');

// const box = document.createElement("div");
// box.id = "box";
// document.body.appendChild(box);

// function element(text){
//     let first = document.createElement(text);
// }


function div(text){
    let a = document.createElement('div');
    a.innerHTML = text;
    document.body.appendChild(a);

}

function length(text){
    let a = text.length;
    console.log(a);
}

button.addEventListener('click', ()=>{
    // console.log(nam.value);
    // note.innerHTML = nam.value;
    console.log(bigtext.value);
    note.classList.remove('Notes')
    note.classList.toggle('Note_1');
    note.innerHTML = "";


    const label = document.createElement("label");
    label.innerText = "Name: ";
    note.appendChild(label);


    const header = document.createElement("h3");
    header.innerText = nam.value;
    note.appendChild(header);


    const para = document.createElement("div");
    para.id = "paragraph"
    second.appendChild(para);

    let third = document.querySelector('#paragraph');



    const label3 = document.createElement("label");
    label3.innerText = "Notes : ";
    third.appendChild(label3);

    const parag = document.createElement("p");
    parag.innerText = bigtext.value;
    third.appendChild(parag);


})
