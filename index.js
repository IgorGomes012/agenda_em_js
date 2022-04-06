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

   //esta adicionando um nome a tabela



let marcar_horario = entradaDados.question('digite um dia disponivel: ')

if (dias_trabalhados[marcar_horario - 1].marcado === true) {
    console.log('erro')
    process.exit(1)
    //throw new Error('erro')
}

dias_trabalhados[--marcar_horario].nome = entradaDados_nome.question('digite um nome: ')

console.log(dias_trabalhados)















