const inp = document.querySelector("#binary");
const dec = document.querySelector(".decimal");
const btn = document.querySelector("#btn");

btn.addEventListener('click', () => {

    let bin = inp.value;
    let num = parseInt((bin + '').replace(/[^01]/gi, ''), 2);
    
    dec.innerHTML = `<div>${num}</div>`;
    
});
