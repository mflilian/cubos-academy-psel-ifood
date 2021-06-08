function solucao(produtos) {
	//seu codigo aqui
    let topDeLinha = 0;
    let produtosNormais = 0;
    let totalTopDeLinha = 0;
    let totalProdutosNormais = 0;
   


    for(let item of  produtos) {
        let produto = item.preco;
        
        if(produto>10000){
            topDeLinha++;
            totalTopDeLinha+=item.preco
        }else{
            produtosNormais++;
            totalProdutosNormais+=item.preco
        }
        
    }

    let faturamentoTotal = totalProdutosNormais + totalTopDeLinha;
    let faturamentoTopDeLinha = totalTopDeLinha /faturamentoTotal

    let resultado = {
        totalTop: totalTopDeLinha,
        percentual: faturamentoTopDeLinha
        
    };


    console.log(resultado);

    
}
