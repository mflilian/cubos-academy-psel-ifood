function solucao(obj) {
    if((obj.temIngresso != true && obj.idade <obj.censura) || 
       (obj.temIngresso == true && obj.estaComPais == false && obj.idade <obj.censura) ||
       (obj.temIngresso == false && obj.estaComPais == false) || 
       (obj.temIngresso !=true) || 
       (obj.temIngresso == false)){
       console.log("ACESSO NEGADO")
   }else if(obj.temCarteirinha == false && obj.idade>18){
       console.log("INTEIRA")
   }else if(obj.temCarteirinha == true || obj.idade <18){
       console.log("MEIA")
   }

}


function processData(input) {
    solucao(JSON.parse(input));
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