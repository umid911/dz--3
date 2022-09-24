  /* let res = +prompt('Ввидите число')
    let a = +prompt('Ввидите число')
    for (let i = res; i <= a; i++)
        res = res * i
    alert(res)/*  */



/* 1 задание */

  do {
      var num = +prompt('Ввидите цифру')
  } while (isNaN(num) || num == 0)

  do {
      var power = +prompt('Ввидите степень')
  } while (isNaN(power)) {
      if (power == 0) {
          power = 2
      }
      
  }
  
 let result = 1;

  for (let i = 0; i < power; i++) {
      result = result * num
  }

  alert(result);

  /* 2 задиние */

  do {
    var count = +prompt('Ввидите кол-во ступенек')
  }while(isNaN(count) || count<= 0)
  
  do{
    var symbol  = +prompt('Ввидите  символ отступов')
  }while( symbol == '')
  do{
    var finalsymbol  = +prompt('Ввидите конечный символ')
  }while(finalsymbol == '')  

  for(let i = 0; i < count; i++) {
    finalsymbol = i == 0 ? finalsymbol : symbol + finalsymbol
     console.log(finalsymbol);
  }

