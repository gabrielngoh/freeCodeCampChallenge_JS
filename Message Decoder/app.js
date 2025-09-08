
// MY OWN HELPER FUNCTION : Check if char is in upper case 
const isUpperCase = (char)=> char.charCodeAt(0)<=90 && char.charCodeAt(0)>= 65;

//MAIN FUNCTION 
function decode(message, shift)
 {

  let Alphabet = "abcdefghijklmnopqrstuvwxyz"
  let result = "";

  for (let char of message){
    
    if(/[a-zA-z]/.test(char))
    {
      
      let index = Alphabet.indexOf(char.toLowerCase());
      let newIndex = (index - shift + Alphabet.length) % Alphabet.length;
      isUpperCase(char)?result += Alphabet[newIndex].toUpperCase():result+=Alphabet[newIndex]
      
    }

    else{
      result+=char
    }
    
  }

   return result;

}

 