const charStrengthTable = [
  // a-z
  { char: 'a', strength: 1 },
  { char: 'b', strength: 2 },
  { char: 'c', strength: 3 },
  { char: 'd', strength: 4 },
  { char: 'e', strength: 5 },
  { char: 'f', strength: 6 },
  { char: 'g', strength: 7 },
  { char: 'h', strength: 8 },
  { char: 'i', strength: 9 },
  { char: 'j', strength: 10 },
  { char: 'k', strength: 11 },
  { char: 'l', strength: 12 },
  { char: 'm', strength: 13 },
  { char: 'n', strength: 14 },
  { char: 'o', strength: 15 },
  { char: 'p', strength: 16 },
  { char: 'q', strength: 17 },
  { char: 'r', strength: 18 },
  { char: 's', strength: 19 },
  { char: 't', strength: 20 },
  { char: 'u', strength: 21 },
  { char: 'v', strength: 22 },
  { char: 'w', strength: 23 },
  { char: 'x', strength: 24 },
  { char: 'y', strength: 25 },
  { char: 'z', strength: 26 },

  // A-Z
  { char: 'A', strength: 27 },
  { char: 'B', strength: 28 },
  { char: 'C', strength: 29 },
  { char: 'D', strength: 30 },
  { char: 'E', strength: 31 },
  { char: 'F', strength: 32 },
  { char: 'G', strength: 33 },
  { char: 'H', strength: 34 },
  { char: 'I', strength: 35 },
  { char: 'J', strength: 36 },
  { char: 'K', strength: 37 },
  { char: 'L', strength: 38 },
  { char: 'M', strength: 39 },
  { char: 'N', strength: 40 },
  { char: 'O', strength: 41 },
  { char: 'P', strength: 42 },
  { char: 'Q', strength: 43 },
  { char: 'R', strength: 44 },
  { char: 'S', strength: 45 },
  { char: 'T', strength: 46 },
  { char: 'U', strength: 47 },
  { char: 'V', strength: 48 },
  { char: 'W', strength: 49 },
  { char: 'X', strength: 50 },
  { char: 'Y', strength: 51 },
  { char: 'Z', strength: 52 },
  { char: '0', strength: 0 },
  { char: '1', strength: 1 },
  { char: '2', strength: 2 },
  { char: '3', strength: 3 },
  { char: '4', strength: 4 },
  { char: '5', strength: 5 },
  { char: '6', strength: 6 },
  { char: '7', strength: 7 },
  { char: '8', strength: 8 },
  { char: '9', strength: 9 },
];
// Main Function 
function battle(myArmy, opposingArmy) {

if (myArmy.length > opposingArmy.length) 
    return "Opponent retreated";
  if (myArmy.length < opposingArmy.length) 
    return "We retreated";
 
  let victory = 0;
  let tie = 0;
  let defeat = 0;
  
  for (let i = 0;i< myArmy.length;i+=1){

    let strMyArmy =strenghtChar(myArmy[i]);
    let strOppArmy =strenghtChar(opposingArmy[i]);
    if (strMyArmy == strOppArmy){
      tie +=1;
    } 
    if (strMyArmy > strOppArmy){
      victory+=1;

    } 

   }

   defeat = myArmy.length - (victory + tie);
   let result = showBattleResult (victory , defeat);
   return result;
  
}

// My Own Help Function => strenghtChar () return the strenght of a single character &&  showBattleResult () return reponse 
function strenghtChar(char){
  let score =0 ;
  for (let el of charStrengthTable) 
    {
    if( el.char == char)
     {
       score = el.strength;
       break;
     }
    }

  return score ;
}

function showBattleResult (victory , defeat)
{
if (victory == defeat )
  return "It was a tie";

 if (victory > defeat )
  return "We won";

 if (victory < defeat )
  return "We lost";

}