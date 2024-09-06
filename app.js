
// 1. Selecionamos o elemento HTML com o ID 'resultados-pesquisa' e armazenamos essa referência na variável 'section'.
//    Esse elemento será usado para exibir os resultados da pesquisa.

let resultado = "";
let titulo ="";
let descricao = "";
// 2. Inicializamos uma string vazia chamada 'resultado'. Essa string será usada para construir o HTML que será exibido.
//    A cada iteração do loop, adicionaremos mais HTML a essa string.

function pesquisar() { 
  // 3. Definimos uma função chamada 'pesquisar'. Essa função será responsável por gerar a lista de resultados.
let section = document.getElementById('resultados-pesquisa');

let campoPesquisa = document.getElementById('campo').value.toLowerCase();

if(campoPesquisa == ""){
    section.innerHTML = "<p>Informe alguma coisa na pesquisa</p>";
    return
}

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    // 4. Iniciamos um loop 'for...of' para percorrer cada elemento (objeto) do array 'dados'.
    //    A variável 'dado' representará o objeto atual em cada iteração.
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
    resultado = `<div class="item-resultado">
    <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
    <p class="descricao-meta">${dado.descricao}</p><a href="#" target="_blank">${dado.link}</a>
    </div>`;
}else{
    resultado = `<p>Não foi encontrado nenhum resultado com: ${campoPesquisa}`
}
    // 5. Em cada iteração, construímos uma nova div com as classes e conteúdo correspondentes a um resultado de pesquisa.
    //    O conteúdo é extraído das propriedades 'titulo', 'descricao' e 'link' do objeto 'dado'.
    //    Essa nova div é concatenada à string 'resultado'.

  }
  section.innerHTML = resultado;
  // 6. Após o loop, atribuímos o conteúdo final da string 'resultado' ao atributo 'innerHTML' do elemento 'section'.
  //    Isso substitui todo o conteúdo HTML dentro do elemento 'section' pela lista de resultados gerada.
}

