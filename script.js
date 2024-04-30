
const btn = document.querySelector('button');
//const resultPara = document.querySelector('.result');
const compartilhar = document.querySelector('#compartilhar');
const copiar = document.querySelector('#copiar');


// botao compartilhar
compartilhar.addEventListener('click', async() => {
  const area = document.getElementById("areaEventoID");
  const local = document.getElementById("localidadeID");
  const hora = document.getElementById("dataHoraID");
  const gainfo = document.getElementById("gaID");
  const sper = document.getElementById("coordenacaoID");
  const obsv = document.getElementById("obsID");
  const acoes = document.getElementById("acaoID");
  const classEv = document.getElementById("classificacaoEventoID");
  const perda = document.getElementById("perdaID");
  const perdaReal = document.getElementById("perdaRealID");
  const perdaPot = document.getElementById("perdaPotencialID");
  const controlada = document.getElementById("classificaAtividadeID");

  let texto = `📌INFORME DE EVENTO📌
  ${area.value}
  Data e Hora: ${hora.value}
  Local:  ${local.value}
  GG ou GA: ${gainfo.value}
  Sup./Coord: ${sper.value}
  \n 
  📃 Descrição do evento:
  ${obsv.value}
  \n 
  🚧 Ações imediatas:
  ${acoes.value}
  Classificação do evento: ${classEv.value}
  Tipo de Perda: ${perda.value}
  Perda Real (Segurança): ${perdaReal.value}
  Perda Potencial: ${perdaPot.value}
  Classificação da atividade: ${controlada.value}
  `

  let shareData = {
    title: 'Eventos',
    text: texto
  };

 alert(shareData.text);

// botao copiar
});


  copiar.addEventListener('click', async() => {
  const area = document.getElementById("areaEventoID");
  const local = document.getElementById("localidadeID");
  const hora = document.getElementById("dataHoraID");
  const gainfo = document.getElementById("gaID");
  const sper = document.getElementById("coordenacaoID");
  const obsv = document.getElementById("obsID");
  const acoes = document.getElementById("acaoID");
  const classEv = document.getElementById("classificacaoEventoID");
  const perda = document.getElementById("perdaID");
  const perdaReal = document.getElementById("perdaRealID");
  const perdaPot = document.getElementById("perdaPotencialID");
  const controlada = document.getElementById("classificaAtividadeID");

  let texto = `📌INFORME DE EVENTO📌
  ${area.value}
  Data e Hora: ${hora.value}
  Local:  ${local.value}
  GG ou GA: ${gainfo.value}
  Sup./Coord: ${sper.value}
  \n 
  📃 Descrição do evento:
  ${obsv.value}
  \n 
  🚧 Ações imediatas:
  ${acoes.value}
  Classificação do evento: ${classEv.value}
  Tipo de Perda: ${perda.value}
  Perda Real (Segurança): ${perdaReal.value}
  Perda Potencial: ${perdaPot.value}
  Classificação da atividade: ${controlada.value}
  `

  let shareData = {
    title: 'Eventos',
    text: texto
  };

 alert("Conteúdo copiado para a área de transfeência!");    
 await navigator.clipboard.writeText(shareData.text);


});


