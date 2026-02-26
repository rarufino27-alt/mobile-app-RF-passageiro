window.RideCard = {

  tempo: 15,
  timer: null,

  show(corrida){

    this.injectHTML();

    document.getElementById("rfRideCard").style.display = "block";

    document.getElementById("rfValor").innerText =
      corrida.valor.toFixed(2);

    document.getElementById("rfOrigem").innerText =
      corrida.origem || "Centro";

    document.getElementById("rfDestino").innerText =
      corrida.destino || "Shopping";

    SoundService.play("CHAMADA");

    this.startTimer();

  },

  hide(){
    clearInterval(this.timer);
    document.getElementById("rfRideCard").style.display = "none";
  },

  startTimer(){

    this.tempo = 15;
    const contador = document.getElementById("rfContador");

    this.timer = setInterval(()=>{

      this.tempo--;
      contador.innerText = this.tempo;

      if(this.tempo <= 0){
        clearInterval(this.timer);
        this.recusar();
      }

    },1000);
  },

  aceitar(){

    clearInterval(this.timer);

    SoundService.play("ACEITA");

    DataManager.atualizarStatusCorrida("aceita");

    window.location.href = "corrida-ativa.html";
  },

  recusar(){

    clearInterval(this.timer);

    SoundService.play("CANCELADA");

    DataManager.limparCorrida();

    this.hide();
  },

  enviarContra(){

    const valor = parseFloat(document.getElementById("rfContra").value);

    if(!valor || valor <= 0){
      alert("Informe um valor válido.");
      return;
    }

    SoundService.play("MSG_PASSAGEIRO");

    alert("Contra-proposta enviada: R$ " + valor.toFixed(2));
  },

  injectHTML(){

    if(document.getElementById("rfRideCard")) return;

    const card = document.createElement("div");
    card.id = "rfRideCard";
    card.className = "rf-ride-central";
    card.style.display = "none";

    card.innerHTML = `
      <div class="rf-ride-header">
        <span>RF Corrida</span>
        <span class="rf-timer" id="rfContador">15</span>
      </div>

      <div class="rf-ride-price">
        <h2>R$ <span id="rfValor">0.00</span></h2>
        <small>Oferta do Passageiro</small>
      </div>

      <div class="rf-ride-route">
        <strong>Origem</strong>
        <p id="rfOrigem"></p>

        <strong>Destino</strong>
        <p id="rfDestino"></p>
      </div>

      <input type="number" id="rfContra" placeholder="Sua contra-oferta" />

      <div class="rf-ride-actions">
        <button onclick="RideCard.recusar()">Recusar</button>
        <button class="rf-contra" onclick="RideCard.enviarContra()">Enviar</button>
        <button class="rf-accept" onclick="RideCard.aceitar()">Aceitar</button>
      </div>
    `;

    document.querySelector(".rf-body").appendChild(card);
  }

};