import entradaDados from 'readline-sync';
import entradaDados_nome from 'readline-sync';

let contador = 0
let dias_do_mes

let dias_trabalhados = [

    { dia: 1, marcado: false, nome: "" },
    { dia: 2, marcado: true, nome: "roberto" },
    { dia: 3, marcado: false, nome: "" },
    { dia: 4, marcado: false, nome: "" },
    { dia: 5, marcado: false, nome: "" },
    { dia: 6, marcado: true, nome: "joao" },
    { dia: 7, marcado: true, nome: "carlos" },
    { dia: 8, marcado: true, nome: "antonio" },
    { dia: 9, marcado: false, nome: "" },
    { dia: 10, marcado: true, nome: "diano" },
    { dia: 11, marcado: true, nome: "anna" },
    { dia: 12, marcado: true, nome: "paula" },
    { dia: 13, marcado: true, nome: "cristina" },
    { dia: 14, marcado: false, nome: "" },
    { dia: 15, marcado: true, nome: "miguel" },
    { dia: 16, marcado: true, nome: "carolzinha" },
    { dia: 17, marcado: true, nome: "paulo" },
    { dia: 18, marcado: false, nome: "" },
    { dia: 19, marcado: true, nome: "larissa" },
    { dia: 20, marcado: false, nome: "" },
    { dia: 21, marcado: true, nome: "manoel" },
    { dia: 22, marcado: true, nome: "lucas" },
    { dia: 23, marcado: true, nome: "bruna" },
    { dia: 24, marcado: false, nome: "" },
    { dia: 25, marcado: true, nome: "maria" },
    { dia: 26, marcado: true, nome: "eliane" },
    { dia: 27, marcado: true, nome: "trista" },
    { dia: 28, marcado: false, nome: "" },
    { dia: 29, marcado: true, nome: "peixonauta" },
    { dia: 30, marcado: true, nome: "leticia" },
    { dia: 31, marcado: false, nome: "" }
]


while (contador < dias_trabalhados.length) {

    let dias_total = dias_trabalhados[contador]
    dias_do_mes = contador
    contador++

    if (dias_total.marcado == true) {
        continue
    }

    // esta pegando apenas as variaveis com elemento false e mostrando na tela

    let dias_disponiveis = dias_do_mes + 1
    console.log('dias diponiveis: ' + dias_disponiveis);
}


const marcar_horario = entradaDados.question('digite um dia disponivel: ')

//const marcar_horario = 1

//caso tenha o dia disponivel marque na agenda
switch (marcar_horario) {

    case 1:

        dias_trabalhados[0].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
            ;

    case 2:
        dias_trabalhados[2].nome = entradaDados_nome.question('digite seu nome') ;
        console.log(dias_trabalhados);
        break;

    case 3:
        dias_trabalhados[3].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 4:
        dias_trabalhados[4].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados.nome);
        break;

    case 5:
        dias_trabalhados[5].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 6:
        dias_trabalhados[6].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 7:
        dias_trabalhados[7].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 8:
        dias_trabalhados[8].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 9:
        dias_trabalhados[9].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 10:
        dias_trabalhados[10].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;


    case 11:
        dias_trabalhados[11].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 12:
        dias_trabalhados[12].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 13:
        dias_trabalhados[13].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 14:
        dias_trabalhados[14].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 15:
        dias_trabalhados[15].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 16:
        dias_trabalhados[16].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 17:
        dias_trabalhados[17].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 19:
        dias_trabalhados[18].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;


    case 20:
        dias_trabalhados[19].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 21:
        dias_trabalhados[20].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 22:
        dias_trabalhados[21].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 23:
        dias_trabalhados[22].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;


    case 24:
        dias_trabalhados[23].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 25:
        dias_trabalhados[24].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 26:
        dias_trabalhados[25].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 27:
        dias_trabalhados[26].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 28:
        dias_trabalhados[27].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 29:
        dias_trabalhados[28].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 30:
        dias_trabalhados[29].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;

    case 31:
        dias_trabalhados[30].nome = entradaDados_nome.question('digite seu nome');
        console.log(dias_trabalhados);
        break;


}









