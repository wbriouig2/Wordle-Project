function myFunction() {

/* var answers = ["window", "apples",  'abroad', 'accept', 'access', 'across', 'acting', 'action'];
var answer = answers[Math.floor(Math.random()*answers.length)];
*/ 
answer = "short"

numberOfGuesses = 6
                                                                        /* Concatenate Row 1 */
const square1 = document.getElementById("square1").value;
var square2 = document.getElementById("square2").value;
var square3 = document.getElementById("square3").value;
var square4 = document.getElementById("square4").value;
var square5 = document.getElementById("square5").value;
var row1 = square1.concat(square2, square3, square4, square5)
                                                                        /* Concatenate Row 2 */
var square6 = document.getElementById("square6").value;
var square7 = document.getElementById("square7").value;
var square8 = document.getElementById("square8").value;
var square9 = document.getElementById("square9").value;
var square10 = document.getElementById("square10").value;
var row2 = square6.concat(square7, square8, square9, square10)
                                                                        /* Concatenate Row 3 */
var square11 = document.getElementById("square11").value;
var square12 = document.getElementById("square12").value;
var square13 = document.getElementById("square13").value;
var square14 = document.getElementById("square14").value;
var square15 = document.getElementById("square15").value;
var row3 = square11.concat(square12, square13, square14, square15)
                                                                        /* Concatenate Row 4 */
var square16 = document.getElementById("square16").value;
var square17 = document.getElementById("square17").value;
var square18 = document.getElementById("square18").value;
var square19 = document.getElementById("square19").value;
var square20 = document.getElementById("square20").value;
var row4 = square16.concat(square17, square18, square19, square20)
                                                                        /* Concatenate Row 5 */
var square21 = document.getElementById("square21").value;
var square22 = document.getElementById("square22").value;
var square23 = document.getElementById("square23").value;
var square24 = document.getElementById("square24").value;
var square25 = document.getElementById("square25").value;
var row5 = square21.concat(square22, square23, square24, square25)
                                                                        /* Concatenate Row 6 */
var square26 = document.getElementById("square26").value;
var square27 = document.getElementById("square27").value;
var square28 = document.getElementById("square28").value;
var square29 = document.getElementById("square29").value;
var square30 = document.getElementById("square30").value;
var row6 = square26.concat(square27, square28, square29, square30)

/* Use this to edit code without deleting */
if (row1.length == 5) {
    document.getElementById("square1").readOnly = true;
    document.getElementById("square2").readOnly = true;
    document.getElementById("square3").readOnly = true;
    document.getElementById("square4").readOnly = true;
    document.getElementById("square5").readOnly = true;
}
if (row2.length == 5) {
    document.getElementById("square6").readOnly = true;
    document.getElementById("square7").readOnly = true;
    document.getElementById("square8").readOnly = true;
    document.getElementById("square9").readOnly = true;
    document.getElementById("square10").readOnly = true;
}
if (row3.length == 5) {
    document.getElementById("square11").readOnly = true;
    document.getElementById("square12").readOnly = true;
    document.getElementById("square13").readOnly = true;
    document.getElementById("square14").readOnly = true;
    document.getElementById("square15").readOnly = true;
}
if (row4.length == 5) {
    document.getElementById("square16").readOnly = true;
    document.getElementById("square17").readOnly = true;
    document.getElementById("square18").readOnly = true;
    document.getElementById("square19").readOnly = true;
    document.getElementById("square20").readOnly = true;
}
if (row5.length == 5) {
    document.getElementById("square21").readOnly = true;
    document.getElementById("square22").readOnly = true;
    document.getElementById("square23").readOnly = true;
    document.getElementById("square24").readOnly = true;
    document.getElementById("square25").readOnly = true;
}
if (row6.length == 5) {
    document.getElementById("square26").readOnly = true;
    document.getElementById("square27").readOnly = true;
    document.getElementById("square28").readOnly = true;
    document.getElementById("square29").readOnly = true;
    document.getElementById("square30").readOnly = true;
}

    if (row1 == answer) {
        document.getElementById("answer").innerText = "Correct!";
    }       
        
    if (row1 != answer && row1.length == 5 ) {
        document.getElementById("answer").innerHTML = "Oops!";
        document.getElementById("square6").focus();
        document.getElementById("square6").select();
}
    if (row2 == answer) {
        document.getElementById("answer").innerText = "Correct!";
}
    if (row2 != answer && row2.length == 5) {
        document.getElementById("square11").focus();
        document.getElementById("square11").select();
}
    if (row3 == answer) {
        document.getElementById("answer").innerText = "Correct!";
}
    if (row3 != answer && row3.length == 5) {
        document.getElementById("square16").focus();
        document.getElementById("square16").select();
}
    if (row4 == answer) {
        document.getElementById("answer").innerText = "Correct!";
}
    if (row4 != answer && row4.length == 5) {
        document.getElementById("square21").focus();
        document.getElementById("square21").select();
}
    if (row5 == answer){
        document.getElementById("answer").innerText = "Correct!";
}
    if (row5 != answer && row5.length == 5) {
        document.getElementById("square26").focus();
        document.getElementById("square26").select();
}
    if (row6 == answer){
        document.getElementById("answer").innerText = "You Got It!";
}
    if (row6 != answer && row6.length == 5) {
        document.getElementById("answer").innerText = "";
        document.getElementById("OutOfTries").innerHTML = "You Lose! Answer was " + answer.toUpperCase();
    }
var rowIndex1 = ['square1', 'square2', 'square3', 'square4', 'square5']

 for (let i = 0; i < rowIndex1.length; i++) {
    var input = document.getElementById(rowIndex1[i]);
    if (input.value == answer[i]) {
        input.style.backgroundColor = 'green';
        }
    }
var rowIndex2 = ['square6', 'square7', 'square8', 'square9', 'square10']
 
 for (let i = 0; i < rowIndex2.length; i++) {
    var input = document.getElementById(rowIndex2[i]);
    if (input.value == answer[i]) {
        input.style.backgroundColor = 'green';
        }
    }   
var rowIndex3 = ['square11', 'square12', 'square13', 'square14', 'square15']

for (let i = 0; i < rowIndex3.length; i++) {
    var input = document.getElementById(rowIndex3[i]);
    if (input.value == answer[i]) {
        input.style.backgroundColor = 'green';
        }
    }
var rowIndex4 = ['square16', 'square17', 'square18', 'square19', 'square20']

for (let i = 0; i < rowIndex4.length; i++) {
    var input = document.getElementById(rowIndex4[i]);
    if (input.value == answer[i]) {
        input.style.backgroundColor = 'green';
        }
    }
var rowIndex5 = ['square21', 'square22', 'square23', 'square24', 'square25']

for (let i = 0; i < rowIndex5.length; i++) {
    var input = document.getElementById(rowIndex5[i]);
    if (input.value == answer[i]) {
        input.style.backgroundColor = 'green';
        }
    }
var rowIndex6 = ['square26', 'square27', 'square28', 'square29', 'square30']

for (let i = 0; i < rowIndex6.length; i++) {
    var input = document.getElementById(rowIndex6[i]);
    if (input.value == answer[i]) {
        input.style.backgroundColor = 'green';
        }
    }

                                        /* Check to see if character is part of the answer but not in the right spot */
for (let i = 0; i < rowIndex1.length; i++) {
    var input = document.getElementById(rowIndex1[i]);
    if (input.value != answer[i] && answer.includes(input.value) && row1.length == 5) {
        input.style.backgroundColor = 'orange';
    }

} 
for (let i = 0; i < rowIndex2.length; i++) {
    var input = document.getElementById(rowIndex2[i]);
    if (input.value != answer[i] && answer.includes(input.value) && row2.length == 5) {
        input.style.backgroundColor = 'orange';
    }

}
for (let i = 0; i < rowIndex3.length; i++) {
    var input = document.getElementById(rowIndex3[i]);
    if (input.value != answer[i] && answer.includes(input.value) && row3.length == 5) {
        input.style.backgroundColor = 'orange';
    }

}  
for (let i = 0; i < rowIndex4.length; i++) {
    var input = document.getElementById(rowIndex4[i]);
    if (input.value != answer[i] && answer.includes(input.value) && row4.length == 5) {
        input.style.backgroundColor = 'orange';
    }

} 
for (let i = 0; i < rowIndex5.length; i++) {
    var input = document.getElementById(rowIndex5[i]);
    if (input.value != answer[i] && answer.includes(input.value) && row5.length == 5) {
        input.style.backgroundColor = 'orange';
    }

} 
for (let i = 0; i < rowIndex6.length; i++) {
    var input = document.getElementById(rowIndex6[i]);
    if (input.value != answer[i] && answer.includes(input.value) && row6.length == 5) {
        input.style.backgroundColor = 'orange';
    }

}    

}



