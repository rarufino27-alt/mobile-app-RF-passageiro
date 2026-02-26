window.SoundService = {

  sounds: {
    CHAMADA: "/mobile-app-RF/assets/sounds/notificacao.mp3",
    ACEITA: "/mobile-app-RF/assets/sounds/viagem-aceita.mp3",
    CANCELADA: "/mobile-app-RF/assets/sounds/viagem-cancelada.mp3",
    SEM_CREDITO: "/mobile-app-RF/assets/sounds/sem-credito.mp3",
    CREDITO_ADD: "/mobile-app-RF/assets/sounds/credito-adicionado.mp3",
    MSG_PASSAGEIRO: "/mobile-app-RF/assets/sounds/mensagem.mp3",
    MSG_APP: "/mobile-app-RF/assets/sounds/mensagem1.mp3",
    ONLINE: "/mobile-app-RF/assets/sounds/online.mp3",
    OFFLINE: "/mobile-app-RF/assets/sounds/viagem-cancelada.mp3"
  },

  play(tipo){

    const caminho = this.sounds[tipo];
    if(!caminho) return;

    const audio = new Audio(caminho);
    audio.currentTime = 0;
    audio.play().catch(()=>{});

  }

};