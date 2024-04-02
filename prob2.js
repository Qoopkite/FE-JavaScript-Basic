function solution(n) {
  var answer = 0;
  let fact=1;
  if(n==0) return 0;
      for(let i=1; i<=n; i++){
          fact=fact*i;
          if(fact<=n) answer=i;
          }
          return answer;
       }