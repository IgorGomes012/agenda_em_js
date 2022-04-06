import entradaDados from 'readline-sync';
import entradaDados_nome from 'readline-sync';
import escolha from 'readline-sync'
import retirar_dados from 'readline-sync'
import valornull from 'readline-sync'

let contador = 0
let dias_do_mes



let dias_trabalhados = [

    { dia: 1, marcado: false, nome: "" },
    { dia: 2, marcado: true, nome: "roberto" },
    { dia: 3, marcado: false, nome: "" },
    { dia: 4, marcado: false, nome: "" },
    { dia: 5, marcado:  false, nome: "" },
    { dia: 6, marcado:  true, nome: "joao" },
    { dia: 7, marcado:  true, nome: "carlos" },
    { dia: 8, marcado:  true, nome: "antonio" },
    { dia: 9, marcado:  false, nome: "" },
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



const excluir = () => {

    
   const retirar = dias_trabalhados.filter((valor)=>{
       return valor.marcado === true     
   })

console.log(retirar)

let  excluir_dados = 'sim'

switch(excluir_dados){

  case 'sim':
      const excluir_dia = valornull.question('digite o dia que deseja desmarcar')
      dias_trabalhados[excluir_dia -1].marcado = ""
      dias_trabalhados[excluir_dia -1].nome = ""
      console.log(dias_trabalhados)
    break;

  case 'nao':
    console.log('operação encerrada')
    process.exit() 
    break;

  default:
      console.log('nao entendi')  
}


}
const adicionar = () => {

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

}


const adicionar_ou_excluir = escolha.question('Voce deseja ' + 'marcar ' + 'desmarcar ' )

switch (adicionar_ou_excluir) {

    case 'marcar':

         adicionar()

        break;

    case 'desmarcar':
         
         excluir() 

        break;

    default:

        console.log('Invalido')

}















