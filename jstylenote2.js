window.onload = function () {
      var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    

        var word;             // Selected word
        var guess;            // Geuss
        var guesses = [];     // Selected word
        var lives;            // Lives
        var counter;          // Count correct geusses
        var space;            // Number of spaces in word

        // Get elements 
        var showLives = document.getElementById("mylives");
        var showCatagory = document.getElementById("scatagory");

        // Select Category (organi, armi, trapple, lughi, insetti, predatore, killer)
        var selectCat = function (){
            if(chosenCategory === categories[0]){
            categoryName.innerHTML = "La Categoria scelta è Killer";
        } else if (chosenCategory === categories[1]){
            categoryName.innerHTML = "La Categoria scelta è Insetti";
        } else if (chosenCategory === categories[2]){
            categoryName.innerHTML = "La Categoria scelta è Luoghi";
            }
        }

        // Crea geusses ul
        result = function () {
            wordHolder = document.getElementById('hold');
            correct = document.createElement('ul');

            for (var i = 0; i < word.length; i++) {
                correct.setAttribute('id', 'my-word');
                guess = document.createElement('li');
                guess.setAttrubute('class', 'guess');
                if (word[i] === "-") {
                    guess.innerHTML = "-";
                    space = 1;
                } else {
                    guess.innerHTML = "_";
                }

                guesses.push(guess);
                wordHolder.appendChild(correct);
                correct.appendChild(guess);
            }
        }

        // Show lives
        comments = function () {
            showLives.innerHTML = "You have "+ lives + " lives";
            if (lives < 1) {
                showLives.innerHTML = "Game Over";
            }
            for (var i = 0; i < guesses.length; i++) {
                showLives.innerHTML = "You Win!";
            }
        }

        //Animate man (...)
        /*var animate = function(){

            myStickman = document.getElementById("stickman");
            contex = mySticman.getContex('2d');
            contex.beginPath();
            contex.strokeStyle = "#fff";
            contex.lineWidth = 2;

            (...)
        }*/

}
