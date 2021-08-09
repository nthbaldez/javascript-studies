const regExpNome = /[a-zA-z]/g;

const newCpf = /(\d{3})?(\d{3})?(\d{3})?(\d{2})/;


const validations = {
    
    validateName(){

        let nome = document.getElementById('nome').value;
         
        
        if (nome.match(regExpNome)){
            console.log('Deu bom');
        } else {
            console.log('Deu ruim, preencha o nome e sem números');
        }
    },

    

    validateCpf(){
        let cpf = document.getElementById('cpf').value;
        let cpfAtual = cpf.replace(newCpf, "$1.$2.$3-$4");

        document.getElementById('cpf').value = cpfAtual;

        console.log(cpfAtual)
        
        if (cpf.match(newCpf)){
            console.log('Deu bom');
            
        } else {
            console.log('Deu ruim');
        }
    }

    
}

