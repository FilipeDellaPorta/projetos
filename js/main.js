const projetos = [
  {
    titulo: "Freeway",
    descricao:
      "Um remake em JavaScript do jogo Freeway, onde você deve ajudar a vaquinha a atravessar a estrada sem ser atropelada.",
    url: "https://freeway-rho.vercel.app/",
    imagem: "../assets/freeway.png",
  },
  {
    titulo: "Pong",
    descricao:
      "Uma recriação do clássico jogo Pong, usando JavaScript para lógica e interatividade.",
    url: "https://pong-sand.vercel.app/",
    imagem: "../assets/pong.png",
  },
];

// Função para gerar a lista de certificados

function gerarListaProjetos() {
  const lista = document.getElementById("projetos-lista");

  projetos.forEach((projeto) => {
    const li = document.createElement("li");
    li.className = "principal__lista__linha";
    li.innerHTML = `<div class="projeto__item"><img class="projeto__imagem" src="${projeto.imagem}" alt="Jogo ${projeto.titulo}"><div class="projeto__texto"><a class="projeto__link" href="${projeto.url}">${projeto.titulo}</a><p class="projeto__descricao">${projeto.descricao}</p></div></div>`;
    lista.appendChild(li);
  });
}

// Chama a função para gerar a lista quando o documento estiver carregado
document.addEventListener("DOMContentLoaded", gerarListaProjetos);
