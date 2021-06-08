function solucao(ano) {
	//seu codigo aqui
    const resto = ano%4;

   if(resto == 2){
       console.log("COPA")
   }else if(resto == 0){
       console.log("JOGOS")
   }else{
       console.log("MEH")
   }
}


function processData(input) {
	solucao(parseInt(input, 10));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
