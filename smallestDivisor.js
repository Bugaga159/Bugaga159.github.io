const smallestDivisor = (num) => {
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
