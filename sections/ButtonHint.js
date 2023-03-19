let Hint = function(number){
    let button = document.getElementById("hint");
    let panel = document.getElementById("panel-hint")
    button.addEventListener('click',function(e){
        button.style.display="none";
        panel.textContent = wordForGuessing.description[number];
    })
}

Hint(rand);