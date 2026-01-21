class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    
    atacar(){
        let ataque;

        if (this.tipo === "mago"){
            ataque = "magia";
        }else if (this.tipo === "gurreiro"){
            ataque = "espada";
        }else if (this.tipo === "monge"){
            ataque = "artes marciais";
        }else if (this.tipo === "ninja"){
            ataque = "shuriken";
        } else {
            ataque = "sem ataque"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}


let lutador = new heroi ("Paulo", 30, "gurreiro")
lutador.atacar()

// Instruções para entrega
// # 3️⃣ Escrevendo as classes de um Jogo

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos

// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// if (tipo ==  "Mago") {
//     console.log(`O Mago atacou usando Magia`)
// } else if (tipo == "Guerreiro"){
//     console.log(`O Guerreiro atacou usando Espada`)
// } else if (tipo == "Monge"){
//     console.log(`O Monge atacou usando Artes Marciais`)
// } else {
//     console.log(`O Ninja atacou usando Shuriken`)
// }


// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada
 

 
// Bons estudos 😉