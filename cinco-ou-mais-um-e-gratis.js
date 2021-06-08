function solucao(precos) {
    //seu codigo aqui
    let soma = 0;  
    let menor = Math.min(...precos)
    let mais= precos.length>=5;
    for(let i = 0; i < precos.length; i++) {
    soma += precos[i];
    }
    if(mais) {
      console.log(soma-menor)
    } else{
    console.log(soma)
    }
 }

function processData(input) {
	solucao(input.trim().split(" ").filter(x => x).map(x => parseInt(x, 10)));
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