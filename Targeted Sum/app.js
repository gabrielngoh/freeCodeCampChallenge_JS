function findTarget(arr, target) {
  for (let i = 0 ; i < arr.length - 1;i+=1 )
  {
    for (let j = i+1; j<=arr.length - 1;j+=1 )
    {
      if (arr[i] + arr[j]==target){
        return [i,j]

      }
    }
  }
  return "Target not found"
  
}
