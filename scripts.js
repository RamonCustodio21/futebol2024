const goleiros = [
  { nome: 'Eniton', premios: 2, foto: 'https://i.imgur.com/ZOFrqfs.jpg' },
  { nome: 'Teste', premios: 3, foto: 'link_para_foto_alisson.jpg' },
  // Adicione mais goleiros conforme necessário
];

const jogadores = [
  { nome: 'Neymar', premios: 8, foto: 'link_para_foto_neymar.jpg' },
  { nome: 'Messi', premios: 10, foto: 'link_para_foto_messi.jpg' },
  // Adicione mais jogadores conforme necessário
];

function criarLista(ranking, listaId) {
  const lista = document.getElementById(listaId);
  ranking.sort((a, b) => b.premios - a.premios);
  
  ranking.forEach((participante, index) => {
    const listItem = document.createElement('li');
    const img = document.createElement('img');
    img.src = participante.foto;
    const text = document.createTextNode(`${index + 1}. ${participante.nome} - ${participante.premios} prêmios`);
    listItem.appendChild(img);
    listItem.appendChild(text);
    lista.appendChild(listItem);
  });
}

criarLista(goleiros, 'goleiros-ranking');
criarLista(jogadores, 'jogadores-ranking');
