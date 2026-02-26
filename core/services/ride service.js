const RideService = {

  aceitarCorrida(dados){
    DataManager.setCorridaAtual(dados);
    window.location.href = "corrida-ativa.html";
  },

  finalizarCorrida(){

    const corrida = DataManager.getCorridaAtual();
    if(!corrida) return;

    const valor = corrida.valor;
    const taxa = valor * CONFIG.TAXA_PLATAFORMA;

    DataManager.descontarCreditos(taxa);
    DataManager.atualizarGanhos(valor);

    const historico = JSON.parse(
      localStorage.getItem(CONFIG.STORAGE_KEYS.HISTORICO)
    ) || [];

    historico.push({
      valor,
      taxa,
      origem: corrida.origem,
      destino: corrida.destino,
      data: new Date().toISOString()
    });

    localStorage.setItem(
      CONFIG.STORAGE_KEYS.HISTORICO,
      JSON.stringify(historico)
    );

    DataManager.limparCorrida();
    window.location.href = "driver-home.html";
  }

};