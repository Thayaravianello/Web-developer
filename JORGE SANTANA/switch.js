
var semana = prompt("Digite o dia da semana em número, sendo segunda o número 1")

switch (parseInt(semana)) {
    case 1: // trecho que será executado
        document.write("Hoje é Segunda-feira")
        break;

        case 2: // trecho que será executado
        document.write("Hoje é Terça feira")
        break;

        case 3:// trecho que será executado
        document.write("Hoje é Quarta-feira")
        break;
        case 4:// trecho que será executado
        document.write("Hoje é Quinta-feira")
        break;
        case 5:// trecho que será executado
        document.write("Hoje é Sexta-feira")
        break;
        case 6:// trecho que será executado
        document.write("Hoje é Sábado")
        break;
        case 7:// trecho que será executado
        document.write("Hoje é Domingo")
        break;

    default: // trecho que será executado
    document.write("Dados inseridos incorreto")
        break;
}