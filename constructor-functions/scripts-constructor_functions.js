function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.andar = () => {
        console.log(nome + " andou");
    }
}


const nth = new Pessoa("Nathan", 27);
const nany = new Pessoa("Elaine", 53);
const zanne = new Pessoa("Rosanne", 37);


function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;

    this.addClass = (classe) => {
        elementList.forEach((element) => {
            element.classList.add(classe);
        })
        
    }
}

const title = new Dom('div');
