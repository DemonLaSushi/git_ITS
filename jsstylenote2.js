
//array string

//generatore n casuale con rand

// accedo ad elmeto n di array  = parola

//stringa.lunghezza = n.casell

//creo form con max.n.caselle

    //submit
        //concatenazione con singoli caratteri 
        //controllo se è uguale a parola


window.onload = function () {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var categorie;           // Array dei topic 
    var chosenCategory;     // Selected category 
    var word;               // Selected word
    var guess;              // Guess
    var geusses = [];       // Stored guesses
    var lives;              // Lives
    var counter;            //count correct guesses
    var sapce;              // Number of spaces in word '-'

    // Get elements 

    var showLives = document.getElementById("mylives");
    var showCategory = document.getElementById("scategory");

    // create alphabet ul (N/D)
    var buttons = function () {
        myButtons = document.getElementById('buttons');  //try
        letters = document.createElement('ul');
    
        for (var i = 0; i < alphabet.length; i++) {
          letters.id = 'alphabet';
          list = document.createElement('li');
          list.id = 'letter';
          list.innerHTML = alphabet[i];
          check();
          myButtons.appendChild(letters);
          letters.appendChild(list);
        }
      }                                                   //try
        
    // Selected Category

    var selectedCate = function (){
        if (chosenCategory === categorie[0]){
        categoryName.innerHTML = "The Category is: Insetti";
        } else if (chosenCategory === categorie[1]){
            categoryName.innerHTML = "The Category is: Luoghi";
        } else if (chosenCategory === categorie[2]){
            categoryName.innerHTML = "The Category is: ?"
        }
    }

    // Crea Geusses ul
    result = function (){
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct. setAttribute('id', 'my-word');
            guess = document.createElement('li');
            geusses.setAttribute('class', 'guess');
            if (word[i] == "-"){
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
            }
        }

        //Show lives
        comment = function (){
            showLives.innerHTML = "You have " + lives + "lives";
            if (lives < 1) {
                showLives.innerHTML = "Game Over";
            }
            for (var i = 0; i < geusses.length; i++) {
                if (counter + sapce === geusses.length){
                    showLives.innerHTML = "You Win"
                }
            }
        }

        // Animate man (...)


        // Hangman (...)
            // var canvas
            // "stickman" 

        // OnClick function -- remix

        // Play - Categorie
        play = function (){
            categorie = ["Tarantola", "Mille-piedi", "Calyptra", "Lo-scarrafone"],
                        ["Laguna", "Er-Sottotevere", "Tufello", "Anagnina"],
                        ["Australopiteco", "Mesozoico", "Endoclinologo", "Elisabbetta-seconda"];

            chosenCategory = categorie[Math.floor(Math.random() * categorie.length)];
            word = chosenCategory[Math.floor(Math.random() * categoie.length)];
            word = word.replace(/\s/g, "-");
            console.log(word);
            bottons();

            geusses = [];
            lives = 10;
            counter = 0;
            sapce = 0;
            result();
            comment();
            //canvas(); -------------------------------
        } 

        //Reset

        document.getElementById('reset').onclick = function() {
            correct.parentNode.removeChild(correct);
            letters.parentNode.removeChild(letters);
            context.clearRect(0, 0, 400, 400);
            play();
        }

    }
