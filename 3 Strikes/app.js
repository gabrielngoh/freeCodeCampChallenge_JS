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
