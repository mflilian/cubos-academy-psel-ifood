function solucao(letra, palavras) {
	//seu codigo aqui
    let perdedores = 0;

    for(let item of palavras){
      if(item[0]!= letra){
        perdedores++
      }
    }
  
    console.log(perdedores)
 }


function processData(input) {
	const {letra, palavras} = JSON.parse(input)[0];
    solucao(letra, palavras);
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