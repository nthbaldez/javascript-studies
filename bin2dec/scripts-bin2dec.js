function convert() {
    
    var binNum = document.getElementById("binary").value;
    var num = parseInt((binNum + '').replace(/[^01]/gi, ''), 2);

    
    
    document.querySelector(".decimal").innerText = num;
    
    console.log(num);
}







