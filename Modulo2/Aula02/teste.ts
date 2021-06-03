/**
 * TypeScript é uma extensão de JS ou seja, tem tudo que o JS tem e um pouco mais
 * o TS tem a tipagem estatica, a verificação de tipos ocorre durante a compilação
 * o que apresenta vantagens, a saber:
 *  1 - Muitos erros já são detectados na compilação e não na produção
 *  2 - A manutenção do código é mais simplificada
 *  3 - O suporte ferramental é uma vantagem, sua IDE auxilia na criação do código (autocomplete, por ex).
 */

// A extensão de TypeScript é .ts

//Um código em JS também será um código TS

function somaJS(a, b) {
    return a + b
}

function somaTS(a: number, b: number) {
    return a + b
}

somaJS("a", 3) //função válida
//somaTS("a", 6) //função inválida, o compilador já avisa que está errado
somaTS(9,8) //função válida

/**
 * Além de number podemos ter todos os outros primitivos 'string, boolean, array, etc"
 * quando não há declaração de tipo, o TS colocara tipo:n que é qualquer coisa
 */

// Objetos

function cadastraAluno(aluno: {
    matricula: number,
    nome: string
}){

}

cadastraAluno({matricula: 123, nome: "Jeff"});
// cadastraAluno({matricula: "123", nome: "Jeff"}); //Erro de tipagem

// não é conveniente declarar e definir a estrutura do objeto no lugar que estamos anotando o tipo
// isso pode ficar extenso e confuso
// para isso existe o recurso interface, olhe abaixo

interface Aluno {
    matricula: number,
    nome: string,
    bolsista: boolean,
    semestre: number,
    turno: string,
    idade: number,
    PNE: boolean
}

//com isso eu já posso referenciar isso ao invés de repetir toda a vez

function cadastraAluno2(aluno: Aluno) {
    aluno.matricula
}

//classes 

class Estudante {
    matricula: number;
    nome: string;
    bolsista: boolean;
    semestre: number;
    turno: string;
    idade: number;
    PNE: boolean;

    adicionarFalta(){
        //codigo interessante aqui
    }

    calculaMensalidade(){
        //código para calcular mesalidade
    }
}

let estudante = new Estudante()

estudante.adicionarFalta()
estudante.PNE = false

