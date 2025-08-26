const regex =/[aeiou]/ig

function isBalanced(s) {
  let firstHalf ;
  let secondHalf;
  isEven(s)? hasEvenLenght() : hasOddLenght(); 
  return (countVowels(firstHalf) == countVowels(secondHalf));
}

```
 hasEvenLenght()  
 hasOddLenght() 
 update firstHalf and secondHalf value respectivily for Even and Odd string length 
```
const countVowels = (str)=> (str.match(regex)|| []).length; // prevent str.match() to return null when str doesn't match regex
const isEven = (s)=> s.length % 2 == 0 ;
const hasEvenLenght = ()=>{firstHalf = s.slice(0,s.length/2); secondHalf = s.slice(s.length/2,s.lenght) ;};
const hasOddLenght = ()=>{firstHalf = s.slice(0,(s.length - 1 )/2); secondHalf = s.slice((s.length + 1) /2,s.length) ;};