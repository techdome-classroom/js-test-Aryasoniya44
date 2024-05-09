const decodeTheRing = function (s, p) {

  function isDecoderKeyValid(message, key) {
    // If message and key have different lengths, return false
    if (message.length !== key.length) {
        return false;
    }

  
    for (let i = 0; i < message.length; i++) {
        const messageChar = message[i];
        const keyChar = key[i];

      
        if (keyChar !== '?' && keyChar !== '*') {
          
            if (messageChar !== keyChar) {
                return false;
            }
        } else if (keyChar === '?') {
            
            continue;
        } else if (keyChar === '*') {
            
            let nextCharPosition = i + 1;
            let nextKeyChar = key[nextCharPosition];
            // Skip any consecutive stars in the key
            while (nextKeyChar === '*') {
                nextCharPosition++;
                nextKeyChar = key[nextCharPosition];
            }
           
            if (nextKeyChar === undefined) {
                return true;
            }
           
            const nextCharIndex = message.indexOf(nextKeyChar, i + 1);
           
            if (nextCharIndex === -1) {
                return false;
            }
           
            i = nextCharIndex - 1;
        }
    }

    
    return true;
}

// Examples:
console.log(isDecoderKeyValid("aa", "a"));  // Output: false
console.log(isDecoderKeyValid("aa", "*"));  // Output: true
console.log(isDecoderKeyValid("cb", "?a"));  // Output: false



  
  module.exports = decodeTheRing;
};
