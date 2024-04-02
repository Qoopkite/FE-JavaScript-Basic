function solution(arr) {
  var answer = [];
  
  if (arr.length<=1) return [-1];
   let a = Math.min(...arr);
   let cnt=-1;
   for(i=0;i<arr.length;i++){
       cnt++;
       if(a==arr[i]) break;
   }
      arr.splice(cnt,1);
  return arr;
  
}