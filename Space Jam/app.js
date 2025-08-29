const spaceRegex =/\s+/g;

// Main Function 
function spaceJam(s) {
  let replacedStr = s ;
  if (hasStringSpace(s))
   {
    replacedStr=deleteSpace(s);
   }
 
   return replacedStr.split('').join('  ').toUpperCase();
}

//My own Help Functions
const hasStringSpace =(str)=>  spaceRegex.test(str)
const deleteSpace =(str)=> str.replace(spaceRegex , '')
