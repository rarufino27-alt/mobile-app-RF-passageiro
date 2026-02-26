function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", ()=>{

  const sidebar = document.getElementById("sidebar");

  sidebar.innerHTML = `
    <h2>RF Motorista</h2>
    <a href="driver-home.html">Início</a>
    <a href="carteira.html">Carteira</a>
    <a href="historico.html">Histórico</a>
    <a href="perfil.html">Perfil</a>
    <a href="veiculo.html">Veículo</a>
    <a href="configuracoes.html">Configurações</a>
    <a href="politica.html">Política</a>
    <a href="termos.html">Termos</a>
    <a href="suporte.html">Suporte</a>
    <hr>
    <a href="offline.html">Ficar Offline</a>
  `;

  document.getElementById("overlay").addEventListener("click", toggleSidebar);

});