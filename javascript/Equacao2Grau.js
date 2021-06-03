/*
1 -4 5
4 4 1
1 -5 6
*/
a = 1
b = -5
c = 6

delta = b*b - 4*a*c
if(delta < 0){
    console.log("não existem raízes reais")
} else {
    valor1 = (-b + Math.sqrt(delta))/2*a 
    valor2 = (-b - Math.sqrt(delta))/2*a 
    console.log(valor1+" "+valor2)
}
