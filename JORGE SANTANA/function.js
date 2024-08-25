function calcularAreaTerreno(largura, comprimento) {
    var area = largura * comprimento;
    return area;
    
}

let largura = prompt(parseInt("Digite a largura do terreno"))
let comprimento = prompt(parseInt("Digite o comprimento do terreno"))

var area = calcularAreaTerreno(largura, comprimento)

document.write("A area do terreno é de:" + area)






