const square = (n)=> n*n;
function sumOfSquares(n) {
  if (n==1) 
    return 1;
  return square(n) + sumOfSquares(n-1);
}
