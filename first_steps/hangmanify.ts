// given a word that is a string and a string of guessed letters
// generate a hangmanified word where letters are replaced with '-'
// unless they are present in the guessed letters

function hangmanify(word: string, guessedLetters: string): string {

    let hangmanWord = ""

    if (guessedLetters.length === 0) { // if no guessed letters
        // return a string of dashes the same length as the word
        for (let i = 0; i < word.length; i++) {
            hangmanWord += "-"
        }
        return hangmanWord
    }

    // convert both word and letters to upper case before trying to match letters
    word = word.toUpperCase()
    guessedLetters = guessedLetters.toUpperCase()

    for (let i = 0; i < word.length; i++) { // for each letter in the word
        for (let j = 0; j < guessedLetters.length; j++) { // loop through guessed letters

            if (word[i] === guessedLetters[j]) { // if the letter in the word matches a guessed letter
                hangmanWord += guessedLetters[j] // save it to the hangmanWord
                break // and move onto the next letter in the word
            }

            if (j === guessedLetters.length - 1) { // when the last guessed letter has been checked and its not in the word
                hangmanWord += "-" // save a - to the hangmanWord
            }
        }
    }

    return hangmanWord
}


hangmanify("rosie", "voice")
