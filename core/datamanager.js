const DataManager = {

  cache: {},
  origemSelecionada: null,

  async carregarOrigens() {

    if (this.cache.origens) return this.cache.origens;

    const arquivos = [
      "condominio-porto-do-cabo.json",
      "gaibu.json",
      "enseadas.json",
      "setor-4.json",
      "xareu.json",
      "itapuama.json",
      "calhetas.json",
      "lote-garapu2-lote-dona-amara.json",
      "cohab.json",
      "centro-do-cabo.json",
      "shopping-costa-dourada.json",
      "aguia-american-club-br-101.json",
      "empresas.json",
      "engenhos.json",
      "hospitais-clinicas.json",
      "interurbanas.json",
      "interestaduais.json",
      "lazer-festa.json",
      "locais.json",
      "longas-locais.json",
      "praias.json",
      "bairro-sao-francisco-baixo.json"
    ];

    const respostas = await Promise.all(
      arquivos.map(nome =>
        fetch("data/" + nome)
          .then(r => r.ok ? r.json() : [])
      )
    );

    const rotas = respostas.flat();
    this.cache.rotas = rotas;

    const origens = [...new Set(rotas.map(r => r.origem))].sort();
    this.cache.origens = origens;

    return origens;
  },

  listarDestinos(origem) {
    if (!this.cache.rotas) return [];

    return this.cache.rotas
      .filter(r => r.origem === origem)
      .map(r => r.destino);
  },

  buscarValor(origem, destino) {
    if (!this.cache.rotas) return null;

    const rota = this.cache.rotas.find(r =>
      (r.origem === origem && r.destino === destino) ||
      (r.origem === destino && r.destino === origem)
    );

    return rota ? Number(rota.valor) : null;
  }

};

window.DataManager = DataManager;