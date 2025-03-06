var R = Number(prompt("digite o numero a ser analisado"))

if (R % 3 == 0 && R % 7 == 0){
    alert("Divisivel por 3 e 7")
}
else if (R % 3 == 0 && R % 7 != 0){
    alert("Divisivel por 3 nao por 7")
}
else if (R % 3 != 0 && R % 7 == 0){
    alert("Divisivel por 7 nao por 3")
}
else{
    alert("nao e divisivel por 3 ou 7")
}