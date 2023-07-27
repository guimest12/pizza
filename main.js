// Aqui você pode criar o array com os itens do menu de pizzas
let menuListArray = ['Calabresa', 'Marguerita', 'Portuguesa', 'Quatro Queijos', 'Frango com Catupiry'];
let selectedPizzaIndex = null; // Índice da pizza selecionada

function getmenu() {
    let menuDiv = document.getElementById('displayMenu');

    // Se o menu já estiver visível, ocultá-lo
    if (menuDiv.style.display === 'block') {
        menuDiv.style.display = 'none';
    } else { // Caso contrário, exibir o menu
        menuDiv.innerHTML = ''; // Limpar o conteúdo antes de exibir

        // Exibir a lista de pizzas no elemento com id="displayMenu"
        for (let i = 0; i < menuListArray.length; i++) {
            // Adicionar um emoji de "certinho" ao lado de cada pizza
            menuDiv.innerHTML += `<div>${menuListArray[i]} <span class="emoji" onclick="selectPizza(${i})">&#9989;</span></div>`;
        }

        menuDiv.style.display = 'block';
    }
}

// Exibir as pizzas quando o botão "Mostrar Pizza" for clicado
document.getElementById('mostrarPizza').addEventListener('click', getmenu);

// Função para adicionar sugestão de ingredientes à pizza
function adicionarSugestao() {
    let sugestao = prompt('Digite os ingredientes sugeridos para a pizza:');
    if (sugestao && sugestao.trim() !== '') {
        menuListArray.push(sugestao);
        getmenu(); // Atualizar a lista após adicionar a sugestão
    }
}

// Adicionar sugestão quando o botão "Adicionar Sugestão" for clicado
document.getElementById('adicionarSugestao').addEventListener('click', adicionarSugestao);

// Função para simular a compra de uma pizza
function pedirPizza() {
    let confirmacao = confirm('Selecione a pizza ou pizzas desejadas e clique em "Ok" para confirmar a compra.');
    if (confirmacao) {
        alert('Pedido realizado com sucesso! Volte sempre!');
        selectedPizzaIndex = null; // Limpar a seleção da pizza
        updateSelectedPizza(); // Atualizar o estilo do emoji de "certinho"
    }
}

// Pedir uma pizza quando o botão "Pedir uma Pizza" for clicado
document.getElementById('pedirPizza').addEventListener('click', pedirPizza);

// Função para selecionar uma pizza
function selectPizza(index) {
    selectedPizzaIndex = index;
    updateSelectedPizza(); // Atualizar o estilo do emoji de "certinho"
}

// Função para atualizar o estilo do emoji de "certinho"
function updateSelectedPizza() {
    let emojis = document.getElementsByClassName('emoji');

    for (let i = 0; i < emojis.length; i++) {
        if (i === selectedPizzaIndex) {
            emojis[i].classList.add('selected');
        } else {
            emojis[i].classList.remove('selected');
        }
    }
}
