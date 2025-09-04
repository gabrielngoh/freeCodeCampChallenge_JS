function factorial(n) {

 try {

   if (n<0 || (/\D+/i).test(n))
      throw new Error('Invalid Syntaxe')


    if (n== 1 || n==0)
      return 1
  
    return n*factorial(n-1);

 }

 catch(e){
  return `Error  : ${e.message}`
 }

}
