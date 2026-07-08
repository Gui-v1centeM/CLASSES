class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
let pessoa1 = new Pessoa("Maria", 20);
let pessoa2 = new Pessoa("João", 23);

pessoa1.apresentar();
pessoa2.apresentar();

////////////////////////////////////////////////////////////////////////////////////

class ContaBancaria {
    #saldo;
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }
    depositar(valor) {
        this.#saldo += valor;
    }
    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }
    mostrarSaldo() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo: R$ ${this.#saldo}`);
    }
}
let minhaConta = new ContaBancaria("João", 10000);
minhaConta.depositar(5000);
minhaConta.sacar(8000);
minhaConta.mostrarSaldo();

////////////////////////////////////////////////////////////////////////////////////

class Produto {
    constructor(nome, preco, quantidad) {
        this.nome = nome;
        this.preco = preco;
        this.quantidad = quantidad;
    }
    adicionarEstoque(qtdd) {
        this.quantidad += qtdd;
    }
    vender(qtdd) {
        if (qtdd <= this.quantidad) {
            this.quantidad -= qtdd;
        } else {
            console.log("Estoq insuficiente.");
        }
    }
    mostrarProduto() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Quantidde: ${this.quantidad}`);
    }
}
let meuProduto = new Produto("Notebook", 4500, 5);

meuProduto.adicionarEstoque(5);
meuProduto.vender(2);
meuProduto.mostrarProduto();