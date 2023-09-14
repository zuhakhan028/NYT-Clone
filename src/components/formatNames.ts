export function formatNames(inputString: string): string {
 
    // Split the input string into words
    const words = inputString.split(' ');

    // Define an array to store the modified words
    const modifiedWords = [];

    // Loop through each word and apply custom rules
    for (const word of words) {
        if (word.toLowerCase() === 'and') {
            modifiedWords.push('and');
        } else if (word.toLowerCase() === 'by') {
            modifiedWords.push('By');
        } else {
            modifiedWords.push(word.toUpperCase());
        }
    }

    // Join the modified words back into a string
    const resultString = modifiedWords.join(' ');

    return resultString;
}

// Example usage:


      
 
  