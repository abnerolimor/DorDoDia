var R = Number(prompt("insira o numero a ser analisado"));
var D = 2;
while(R%D != 0)
    D++;

if(R == D)
    alert("o numero " + R + " é primo");
else
    alert("o numero " + R + " nao é primo");