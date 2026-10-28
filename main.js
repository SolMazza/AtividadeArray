let nomes = [];


function adicionarNome() {
    adicionar = true;

    while (adicionar) {
        let nome = prompt("digite o nome que quer adicionar: ");
        nomes.push(nome);

        if (window.confirm("Nome adicionado! \n Quer adicionar mais um nome?")) {
            adicionar = true;
        } else {
            adicionar = false;
        }

    };
}
