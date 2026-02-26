document.addEventListener("DOMContentLoaded", ()=>{

  function aplicarTema(){

    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();

    const horario = horas * 60 + minutos;

    const manha = 5 * 60 + 30;   // 05:30
    const noite = 17 * 60 + 30;  // 17:30

    if(horario >= manha && horario < noite){
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }

  }

  aplicarTema();
  setInterval(aplicarTema, 60000);

});