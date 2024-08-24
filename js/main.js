const projetos = [
    {
        titulo: "Freeway",
        url: "https://freeway-rho.vercel.app/",
        imagem: "../assets/freeway.png" 
    },
    {
        titulo: "Pong",
        url: "https://pong-sand.vercel.app/",
        imagem: "../assets/pong.png"
    }
]

// Função para gerar a lista de certificados

function gerarListaProjetos() {
    const lista = document.getElementById('projetos-lista')

    projetos.forEach(projeto => {
        const li = document.createElement('li')
        li.className = 'principal__lista__linha'
        li.innerHTML = `<div class="lista_projeto_imagem"><img class="imagem_projeto" src="${projeto.imagem}" alt="Jogo ${projeto.imagem}"><a class="principal__lista__link" href="${projeto.url}">${projeto.titulo}</a></div>`
        lista.appendChild(li)
    })
}

// Chama a função para gerar a lista quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', gerarListaProjetos)