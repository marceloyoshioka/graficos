function fatorial(numero){
    if(numero === 0){
      return 1;
    } else{
      let resultado = 1;
      while(numero > 0){
        resultado = resultado * numero;      
        numero = numero - 1;
      } 
      return resultado;
    }
  }
  
  let arrayNovo = (numero) => {
    const arrayFatorial = [0];
    let tamanho = numero;
    let i = 0;
    while(i < tamanho){
      arrayFatorial[i] = numero;
      numero = numero - 1;
      i=i+1;
    }
    return arrayFatorial;  
    
  }
  
  let fatorialComReduce = (valor) => {
    const array1 = arrayNovo(valor);
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    return array1.reduce(reducer);
  }
  
  let valor = 7;
  console.log(fatorial(valor));
  
  //calculo do fatorial usando reduce
  let resultado = fatorialComReduce(valor);
  console.log(resultado);