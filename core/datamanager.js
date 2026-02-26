const DataManager = {

  /* CRÉDITOS */
  window.DataManager = {

  getCreditos(){
    return parseFloat(localStorage.getItem("rf_creditos")) || 0;
  },

  setCreditos(valor){
    localStorage.setItem("rf_creditos", parseFloat(valor));
  },

  adicionarCreditos(valor){
    let atual = this.getCreditos();
    this.setCreditos(atual + parseFloat(valor));
  },

  descontarCreditos(valor){
    let atual = this.getCreditos();
    this.setCreditos(atual - parseFloat(valor));
  },

  setOnline(status){
    localStorage.setItem("rf_online", status ? "1" : "0");
  },

  isOnline(){
    return localStorage.getItem("rf_online") === "1";
  }

};

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