const DataManager = {

  /* CRÉDITOS */
  getCreditos(){
    return parseFloat(localStorage.getItem(CONFIG.STORAGE_KEYS.CREDITOS)) || 0;
  },

  setCreditos(valor){
    localStorage.setItem(CONFIG.STORAGE_KEYS.CREDITOS, valor.toFixed(2));
  },

  adicionarCreditos(valor){
    let atual = this.getCreditos();
    this.setCreditos(atual + valor);
  },

  descontarCreditos(valor){
    let atual = this.getCreditos();
    this.setCreditos(atual - valor);
  },

  /* ONLINE */
  isOnline(){
    return localStorage.getItem(CONFIG.STORAGE_KEYS.ONLINE) === "true";
  },

  setOnline(status){
    localStorage.setItem(CONFIG.STORAGE_KEYS.ONLINE, status);
  },

  /* CORRIDA */
  getCorridaAtual(){
    return JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.CORRIDA_ATUAL));
  },

  setCorridaAtual(corrida){
    localStorage.setItem(CONFIG.STORAGE_KEYS.CORRIDA_ATUAL, JSON.stringify(corrida));
  },

  limparCorrida(){
    localStorage.removeItem(CONFIG.STORAGE_KEYS.CORRIDA_ATUAL);
  },

  /* GANHOS DO DIA */
  atualizarGanhos(valor){

    const hoje = new Date().toDateString();
    const dataSalva = localStorage.getItem(CONFIG.STORAGE_KEYS.DATA_GANHOS);

    if(dataSalva !== hoje){
      localStorage.setItem(CONFIG.STORAGE_KEYS.GANHOS_DIA, 0);
      localStorage.setItem(CONFIG.STORAGE_KEYS.DATA_GANHOS, hoje);
    }

    let atual = parseFloat(localStorage.getItem(CONFIG.STORAGE_KEYS.GANHOS_DIA)) || 0;
    localStorage.setItem(CONFIG.STORAGE_KEYS.GANHOS_DIA, atual + valor);
  },

  getGanhosHoje(){
    return parseFloat(localStorage.getItem(CONFIG.STORAGE_KEYS.GANHOS_DIA)) || 0;
  }

};