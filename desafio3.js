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

