function solucao(tempo, distancia) {

    if(tempo<5 && distancia != 0){
        console.log(6*100);
    }else if(tempo>=5 && tempo <60){
        console.log((100*tempo) + (0.50*distancia)*100)
    }else if(tempo>60 && distancia<100){
        console.log((2*distancia)*100)
    }else if(tempo>60 && distancia>=100){
        console.log((1.50*distancia)*100)
    }
}


function processData(input) {
    const {tempo, distancia} = JSON.parse(input);
    solucao(tempo, distancia);
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