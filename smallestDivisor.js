const smallestDivisor = (num) => {   //итеративным процессом решение
  if(num > 1){  //проверяет условие больше 1

    const small = (begin, end) => {
      if (begin % 2 === 0){
        return 2;
      }else if(begin % 3 === 0){
        return 3;
      }else if(begin % end === 0 ){
          return end;
      }
      return small(begin, end + 1);
    }
    return small(num,2);
  }else if(num == 1 || num == 0){
    return num;
  }
};

// BEGIN (write your solution here)
const smallestDivisor = (n) =>{  // императивный итеративный процесс
  if(n < 1){
    return NaN;
  }else if(n == 1){
    return n;
  }else if(n > 1){
     
      let b = 1;
      let c = 2;

      while(b < n){
         if (n % 2 === 0){
            return 2;
          }else if(n % 3 === 0){
            return 3;
          }else if(n % c ==0){
            return c;
          }
        c += b;
      }

  }

}
