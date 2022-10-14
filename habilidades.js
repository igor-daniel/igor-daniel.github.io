const campoText = document.querySelector('.texto-descricao');
const skills = document.querySelectorAll('.skill-box');
const sobreSkill = [ '<h1>HTML</h1> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
'<h1>CSS</h1> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
'<h1>JavaScript</h1> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',  
'<h1>Git</h1> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>'];

skills.forEach((elemento, index) =>{
  let index1 = index;
  elemento.addEventListener('mouseover', (evento)=>{
    campoText.innerHTML = `<p> ${sobreSkill[index1]} </p>`;
  })
})
// elemento.addEventListener('mouseout', (evento, elemento) =>{
//   campoText.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */
// }
