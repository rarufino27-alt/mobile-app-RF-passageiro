const DataManager = {
  rotas: [],

  arquivos: [
    "/mobile-app-RF/data/condominio-porto-do-cabo.json",
    "/mobile-app-RF/data/gaibu.json",
    "/mobile-app-RF/data/enseadas.json",
    "/mobile-app-RF/data/setor-4.json",
    "/mobile-app-RF/data/xareu.json",
    "/mobile-app-RF/data/itapuama.json",
    "/mobile-app-RF/data/calhetas.json",
    "/mobile-app-RF/data/lote-garapu2-lote-dona-amara.json",
    "/mobile-app-RF/data/cohab.json",
    "/mobile-app-RF/data/centro-do-cabo.json",
    "/mobile-app-RF/data/shopping-costa-dourada.json",
    "/mobile-app-RF/data/aguia-american-club-br-101.json",
    "/mobile-app-RF/data/empresas.json",
    "/mobile-app-RF/data/engenhos.json",
    "/mobile-app-RF/data/hospitais-clinicas.json",
    "/mobile-app-RF/data/interurbanas.json",
    "/mobile-app-RF/data/interestaduais.json",
    "/mobile-app-RF/data/lazer-festa.json",
    "/mobile-app-RF/data/locais.json",
    "/mobile-app-RF/data/longas-locais.json",
    "/mobile-app-RF/data/praias.json",
    "/mobile-app-RF/data/bairro-sao-francisco-baixo.json"
  ],

  async carregar() {
    try {
      const respostas = await Promise.all(
        this.arquivos.map(a =>
          fetch(a).then(r => {
            if (!r.ok) throw new Error("Falha ao carregar " + a);
            return r.json();
          })
        )
      );

      this.rotas = respostas.flat();
      console.log("✅ Rotas carregadas:", this.rotas.length);
    } catch (e) {
      console.error("❌ Erro ao carregar rotas", e);
      throw e;
    }
  },

  listarOrigens() {
    return [...new Set(this.rotas.map(r => r.origem))].sort();
  },

  listarDestinos(origem) {
    return this.rotas
      .filter(r => r.origem === origem)
      .map(r => r.destino);
  },

  buscarValor(origem, destino) {
    let rota = this.rotas.find(
      r => r.origem === origem && r.destino === destino
    );

    if (!rota) {
      rota = this.rotas.find(
        r => r.origem === destino && r.destino === origem
      );
    }

    return rota ? Number(rota.valor) : null;
  },

  calcularValorCompleto(origem, parada, destino) {

    if (!origem || !destino) return null;

    if (!parada) {
      return this.buscarValor(origem, destino);
    }

    const trecho1 = this.buscarValor(origem, parada);
    const trecho2 = this.buscarValor(parada, destino);

    if (trecho1 === null || trecho2 === null) return null;

    return trecho1 + trecho2;
  }
};

window.DataManager = DataManager;