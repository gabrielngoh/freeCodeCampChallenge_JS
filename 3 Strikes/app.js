function squaresWithThree(n) {
  let count = 0 ;
  for (let i=1 ; i<=n;i+=1)
  {
    if (/3/.test(`${i * i}`))
    {
      count+=1;
    } 
  }
  return count;
}

/**
 * Solution 2 :
 * 
 * function squaresWithThree(n) {
  let count = 0 ;
  for (let i=1 ; i<=n;i+=1)
  {
    if (hasThree(`${i * i}`))
    {
      count+=1;
    } 
  }
  return count;
}

const hasThree = (el)=> {
  for (let i of el)
  {
    if (i == 3){
      return true;
    }
  }
  return false ;
}
 */
/**
 * Solution 3 : 
 * 
 * function squaresWithThree(n) {
  let count = 0 ;
  for (let i=1 ; i<=n;i+=1)
  {
    if (`${i * i}`.includes(3))
    {
      count+=1;
    } 
  }
  return count;
}
*/