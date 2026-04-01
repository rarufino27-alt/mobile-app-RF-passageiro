const DataManager = {

  get(){
    return JSON.parse(localStorage.getItem("rf_admin")) || {
      corridas: [],
      motoristas: [],
      passageiros: []
    };
  },

  save(data){
    localStorage.setItem("rf_admin", JSON.stringify(data));
  },

  adicionarCorrida(corrida){
    const data = this.get();

    data.corridas.push(corrida);

    this.atualizarMotorista(corrida.motorista);
    this.atualizarPassageiro(corrida);

    this.save(data);
  },

  atualizarMotorista(nome){

    const data = this.get();

    let motorista = data.motoristas.find(m => m.nome === nome);

    if(!motorista){
      motorista = {
        nome,
        totalCorridas: 0,
        contribuicaoEmDia: true
      };
      data.motoristas.push(motorista);
    }

    motorista.totalCorridas++;

    this.save(data);
  },

  atualizarPassageiro(corrida){

    const data = this.get();

    let passageiro = data.passageiros.find(p => p.telefone === corrida.telefone);

    if(!passageiro){
      passageiro = {
        nome: corrida.solicitante,
        telefone: corrida.telefone,
        totalViagens: 0,
        grupo: corrida.grupo
      };
      data.passageiros.push(passageiro);
    }

    passageiro.totalViagens++;

    this.save(data);
  }

};
