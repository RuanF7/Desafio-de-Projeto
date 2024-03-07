class heroiGenerico{
  constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  
    /*heroi = new heroiGenerico('John', 25, ['guerreiro', 'mago', 'monge', 'ninja']);
      console.log(heroi); */

      atacar(){
        let ataque;

        if(this.tipo === 'guerreiro'){
          ataque = 'espada';
        }else if(this.tipo === 'mago'){
          ataque = 'magia';
        }else if(this.tipo === 'monge'){
          ataque = 'artes marciais'
        }else if(this.tipo === 'ninja'){
          ataque = 'shuriken';
        }
        console.log(`O ${this.tipo} ${this.nome}, ${this.idade} anos, inicia sua aventura! \nDerrepente ele encontra uma aranha gigante que vai pra cima dele! \nO que ele faz? \nEle ataca! \n`)
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
      }
    }
      

let heroi = new heroiGenerico('John', 25, 'guerreiro');
heroi.atacar(); // Outputs: "o guerreiro atacou usando espada"