function isUnnaturalPrime(n) {
  
  if (n<0){
     return isUnnaturalPrime(-1*n)
  }
  else {
    let i = 2;
    if (n==0 || n == 1) {
        return false 
    }
    else{
      while(i <= Math.floor(Math.sqrt(n)))
    {
        if (n % i == 0)
        { return false }
        i+=1;
    }
    
    return true;
  }
    }
        

}
