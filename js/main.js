const projetos = [
    {
        titulo: "Freeway",
        url: "https://freeway-rho.vercel.app/"
    },
    {
        titulo: "Pong",
        url: "https://pong-sand.vercel.app/"
    }
]

// Função para gerar a lista de certificados

function gerarListaProjetos() {
    const lista = document.getElementById('projetos-lista')

    projetos.forEach(projeto => {
        const li = document.createElement('li')
        li.className = 'principal__lista__linha'
        li.innerHTML = `<a class="principal__lista__link" href="${projeto.url}">${projeto.titulo}</a>`
        lista.appendChild(li)
    })
}

// Chama a função para gerar a lista quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', gerarListaProjetos)