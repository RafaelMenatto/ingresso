function comprar() { // Função principal chamada quando o botão "Comprar" é clicado
    let tipo = document.getElementById('tipo-ingresso'); // Obtém o elemento <select> do tipo de ingresso pelo seu id
    let qtdInput = document.getElementById('qtd'); // Obtém o elemento <input> da quantidade pelo seu id
    let qtd = parseInt(qtdInput.value); // Converte o valor digitado (texto) em número inteiro


    if (isNaN(qtd) || qtd <= 0) { // Verificar se a quantidade é um número positivo
        alert('Por favor, insira uma quantidade válida.'); // Se não for um número válido ou for <= 0, mostra um alerta de erro
        return; // Encerra a função sem prosseguir com a compra
    }


    if (tipo.value == 'pista') { // Verifica qual opção foi selecionada no <select>
        comprarPista(qtd); // Se escolheu "Pista", chama a função de compra da pista com a quantidade
    } else if (tipo.value == 'superior') { // Se a opção selecionada for "Cadeira superior"
        comprarSuperior(qtd); // Chama a função de compra superior
    } else { // Caso contrário (cadeira inferior)
        comprarInferior(qtd); // Chama a função de compra inferior
    }
}


function comprarPista(qtd) { // Função que processa a compra de ingressos de pista
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent); // Lê o número atual de ingressos de pista exibidos na página e converte em inteiro
    if (qtd > qtdPista) { // Se a quantidade pedida é maior que o disponível
        alert('Quantidade indisponível para tipo pista'); // Mostra alerta de indisponibilidade
    } else { // Caso haja estoque suficiente
        qtdPista = qtdPista - qtd; // Subtrai a quantidade comprada do total disponível
        document.getElementById('qtd-pista').textContent = qtdPista; // Atualiza o número exibido na página com o novo valor
        alert('Compra realizada com sucesso!'); // Confirma a compra com uma mensagem de sucesso
    }
}


function comprarSuperior(qtd) { // Função que processa a compra de ingressos de cadeira superior
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent); // Lê o número atual de ingressos superiores e converte em inteiro
    if (qtd > qtdSuperior) { // Se não há estoque suficiente
        alert('Quantidade indisponível para tipo superior'); // Informa a indisponibilidade
    } else { // Caso haja estoque suficiente
        qtdSuperior = qtdSuperior - qtd; // Subtrai a quantidade comprada do estoque disponível
        document.getElementById('qtd-superior').textContent = qtdSuperior; // Atualiza o valor exibido na página
        alert('Compra realizada com sucesso!'); // Confirma a compra com uma mensagem de sucesso
    }
}


function comprarInferior(qtd) { // Função que processa a compra de ingressos de cadeira inferior
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent); // Lê o número atual de ingressos inferiores e converte em inteiro
    if (qtd > qtdInferior) { // Se não há estoque suficiente
        alert('Quantidade indisponível para tipo inferior'); // Informa a indisponibilidade
    } else { // Caso haja estoque suficiente
        qtdInferior = qtdInferior - qtd; // Subtrai a quantidade comprada do estoque disponível
        document.getElementById('qtd-inferior').textContent = qtdInferior; // Atualiza o valor exibido na página
        alert('Compra realizada com sucesso!'); // Confirma a compra com uma mensagem de sucesso
    }
}

function converterParaInteiro(valorString) { // Função auxiliar que recebe um texto e o converte em número inteiro
    return parseInt(valorString); // Usa parseInt para transformar a string em um número inteiro
}

let valorString = "42"; // Exemplo de uso: define uma variável com o texto "42"
let valorInteiro = converterParaInteiro(valorString); // Converte "42" para o número 42
console.log(valorInteiro);  // Saída esperada: 42