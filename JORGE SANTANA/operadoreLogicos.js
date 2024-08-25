let idade = prompt("Insira a sua idade:")

if (idade >= 18 && idade <= 60 ) {

    document.write("Você é maior de idade")
    
} else if (idade > 60){
    document.write("Você é idoso")
    
} else{
    document.write("Valor invalido")
}