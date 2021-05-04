var txt = 'gluhtlishjrvbadvyyplkaohavbyjpwolypzavvdlhrvuuleatlzzhnlzdpajoavcpnlulyljpwolyrlfdvykpzaolopkkluzftivsvmklhaoputfmhcvypalovsilpuluk vwduwljudeehghyhubwklqjlfrxogilqgsohdvhuhwxuqdqbeoxhsulqwviruydxowd qgdodupghvljqedvhgrqzklfkedqnbrxghflghrqldpvhwwlqjxsvdihkrxvhfr';
shift = 26;
var alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'; // double length to easily get around the wrap around problem.

// Ceasar decypher function.
function ceasarDecypher (text, shift) {
    
    decodedText = '';
    // select letter in text
    var index = 0;
    
    if (shift > 26) {
        return 'Try again and enter a number that is <=26.';
    }

    while (index <= text.length) {
        // Select current letter within text.
        currentLetter = text[index]; // g

        // Select index of current letter within text.
        currentLetterIndex = alphabet.indexOf(currentLetter); // 7

        // Apply Cypher Shift to the current letter.
        shiftedLetterIndex = currentLetterIndex + shift;

        // Select the shifted letter.
        shiftedLetter = alphabet[shiftedLetterIndex];

        // Add shifted letter to the decoded text.
        decodedText += shiftedLetter;
        index ++;
    }
    return decodedText;
}


function bruteForceCeasarDecypher(txt) {
    i = 0;
    // loop trough every letter in the alphabet.
    // Return the shifted index and the decyphered message.
    while (i <= 26) {
        // call the decypher function with the current iteration
        decypheredMessage = ceasarDecypher(txt, i);
        console.log('Ceasar(' + i + '): ', decypheredMessage);
        i++;
    }
}


// console.log(ceasarDecypher(txt, shift));
// console.log(bruteForceCeasarDecypher(txt))