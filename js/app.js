// Função principal chamada quando o botão "Comprar" é clicado
function comprar() {
    // Obtém o elemento <select> do tipo de ingresso pelo seu id
    let tipo = document.getElementById('tipo-ingresso');
    // Obtém o elemento <input> da quantidade pelo seu id
    let qtdInput = document.getElementById('qtd');
    // Converte o valor digitado (texto) em número inteiro
    let qtd = parseInt(qtdInput.value);


    // Verificar se a quantidade é um número positivo
    if (isNaN(qtd) || qtd <= 0) {
        // Se não for um número válido ou for <= 0, mostra um alerta de erro
        alert('Por favor, insira uma quantidade válida.');
        // Encerra a função sem prosseguir com a compra
        return;
    }


    // Verifica qual opção foi selecionada no <select>
    if (tipo.value == 'pista') {
        // Se escolheu "Pista", chama a função de compra da pista com a quantidade
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        // Se escolheu "Cadeira superior", chama a função de compra superior
        comprarSuperior(qtd);
    } else {
        // Caso contrário (cadeira inferior), chama a função de compra inferior
        comprarInferior(qtd);
    }
}


// Função que processa a compra de ingressos de pista
function comprarPista(qtd) {
    // Lê o número atual de ingressos de pista exibidos na página e converte em inteiro
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        // Se a quantidade pedida é maior que o disponível, mostra alerta de indisponibilidade
        alert('Quantidade indisponível para tipo pista');
    } else {
        // Subtrai a quantidade comprada do total disponível
        qtdPista = qtdPista - qtd;
        // Atualiza o número exibido na página com o novo valor
        document.getElementById('qtd-pista').textContent = qtdPista;
        // Confirma a compra com uma mensagem de sucesso
        alert('Compra realizada com sucesso!');
    }
}


// Função que processa a compra de ingressos de cadeira superior
function comprarSuperior(qtd) {
    // Lê o número atual de ingressos superiores e converte em inteiro
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        // Se não há estoque suficiente, informa a indisponibilidade
        alert('Quantidade indisponível para tipo superior');
    } else {
        // Subtrai a quantidade comprada do estoque disponível
        qtdSuperior = qtdSuperior - qtd;
        // Atualiza o valor exibido na página
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        // Confirma a compra com uma mensagem de sucesso
        alert('Compra realizada com sucesso!');
    }
}


// Função que processa a compra de ingressos de cadeira inferior
function comprarInferior(qtd) {
    // Lê o número atual de ingressos inferiores e converte em inteiro
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        // Se não há estoque suficiente, informa a indisponibilidade
        alert('Quantidade indisponível para tipo inferior');
    } else {
        // Subtrai a quantidade comprada do estoque disponível
        qtdInferior = qtdInferior - qtd;
        // Atualiza o valor exibido na página
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        // Confirma a compra com uma mensagem de sucesso
        alert('Compra realizada com sucesso!');
    }
}

// Função auxiliar que recebe um texto e o converte em número inteiro
function converterParaInteiro(valorString) {
    // Usa parseInt para transformar a string em um número inteiro
    return parseInt(valorString);
}

// Exemplo de uso
let valorString = "42"; // Define uma variável com o texto "42"
let valorInteiro = converterParaInteiro(valorString); // Converte "42" para o número 42
console.log(valorInteiro);  // Saída esperada: 42
