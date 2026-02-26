window.SoundService = {

  sounds: {
    SEM_CREDITO: "https://rarufino27-alt.github.io/mobile-app-RF/assets/sounds/sem-credito.mp3",
    CHAMADA: "https://rarufino27-alt.github.io/mobile-app-RF/assets/sounds/notificacao.mp3",
    ACEITA: "https://rarufino27-alt.github.io/mobile-app-RF/assets/sounds/viagem-aceita.mp3",
    CANCELADA: "https://rarufino27-alt.github.io/mobile-app-RF/assets/sounds/viagem-cancelada.mp3",
    CREDITO: "https://rarufino27-alt.github.io/mobile-app-RF/assets/sounds/credito-adicionado.mp3",
    MSG_PASSAGEIRO: "https://rarufino27-alt.github.io/mobile-app-RF/assets/sounds/mensagem.mp3",
    MSG_APP: "https://rarufino27-alt.github.io/mobile-app-RF/assets/sounds/mensagem1.mp3",
    ONLINE: "https://rarufino27-alt.github.io/mobile-app-RF/assets/sounds/online.mp3",
    OFFLINE: "https://rarufino27-alt.github.io/mobile-app-RF/assets/sounds/viagem-cancelada.mp3"
  },

  play(type){

    if(!this.sounds[type]) return;

    const audio = new Audio(this.sounds[type]);
    audio.volume = 1;
    audio.play().catch(()=>{});

  }

};