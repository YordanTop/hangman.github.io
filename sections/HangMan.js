let wordForGuessing = {
    word:["artificial intelligence","pp"],
    description:["the simulation of human intelligence processes by machines, especially computer systems",
                 "MM",
                 ""]
}

let BodyPart = function(part){
    let doc = document.getElementById(part);
    return doc;
}
let bodyParts = [BodyPart("Head")
                ,BodyPart("Gibbet-part-one")
                ,BodyPart("Gibbet-part-two")
                ,BodyPart("Rope")
                ,BodyPart("Body")
                ,BodyPart("Left-Arm")
                ,BodyPart("Right-Arm")
                ,BodyPart("Left-Leg")
                ,BodyPart("Right-Leg")];

let tries = 0;
let rand = Math.floor(Math.random()* 2);
let printWord = document.getElementById("guess-word");
let counter = 0;
let keeper = [];

let panel = document.getElementById("panel");
let result = document.getElementById("result");
let gWord = document.getElementById("guessed-word");

let PrintSpace = function(word){
    
    for(let i = 0; i < word.length;i++){
        if(word[i] !== " "){
            if(keeper[i] == undefined){
               keeper[i] = " _ "
            }
            printWord.innerHTML+=keeper[i];
        }
        else{
            printWord.innerHTML+=" <br>  ";
            
        }
    }
    
}
let GuessWord = function(){
    PrintSpace(wordForGuessing.word[rand]);
    let userInput = document.getElementById("text-input");
    let userData;
    userInput.addEventListener('keypress',function(e){
        if(e.key === 'Enter'){
            userData = userInput.value;

            if(userData.length <= 1){
                CheckLetter(userData);
            }
            else{
                CheckWord(userData);
            }

            e.preventDefault();
        }
    });
}

let CheckWord = function(word){
    if(word !== wordForGuessing.word[rand]){

        if(tries == bodyParts.length-1){
            panel.style.display="block";
            result.textContent = "You Lost"
            gWord.textContent = "The word was: " + wordForGuessing.word[rand];
        }

       bodyParts[tries].style.display="block";
       tries++;
    }else{
        //Win Condition
       panel.style.display="block";
       gWord.textContent = "The word was: " + wordForGuessing.word[rand];
    }
}

let CheckLetter = function(letter){
let previous_board = printWord.textContent;
    for(let i = 0; i<wordForGuessing.word[rand].length; i++){
        if(letter === wordForGuessing.word[rand][i]){
            keeper[i] = letter;
            printWord.textContent = "";
            PrintSpace(wordForGuessing.word[rand]);
            counter++;
        }
    }

    let keepResult = keeper.join('').split('').length; 
    if(counter == keepResult){
        gWord.textContent = "The word was: " + wordForGuessing.word[rand];
        panel.style.display="block";
    }else
    if(tries == bodyParts.length-1){
        bodyParts[tries].style.display="block";
        tries++;

        panel.style.display="block";
        result.textContent = "You Lost"
        gWord.textContent = "The word was: " + wordForGuessing.word[rand];
    }else
    if(previous_board === printWord.textContent){
        printWord.textContent = "";
        bodyParts[tries].style.display="block";
        tries++;
        PrintSpace(wordForGuessing.word[rand]);
    }
    
}

GuessWord();