window.addEventListener("load",()=>{

    const usa=document.querySelector(".team-usa");
    const pol=document.querySelector(".team-poland");
    const vs=document.querySelector(".vs-badge");

    const flash=document.querySelector(".flash");

    const players=document.querySelectorAll(".hero-player");

    const texts=document.querySelectorAll(".team-usa-text,.team-poland-text");

    // Entran las banderas
    setTimeout(()=>{

        usa.classList.add("show");
        pol.classList.add("show");

    },200);

    // Flash al "chocar"
    setTimeout(()=>{

        flash.classList.add("active");

    },900);

    // Aparece el VS
    setTimeout(()=>{

        vs.classList.add("show");

    },1000);

    // Jugadores
    setTimeout(()=>{

        players.forEach(p=>p.classList.add("show"));

    },1200);

    // Textos
    setTimeout(()=>{

        texts.forEach(t=>t.classList.add("show"));

    },1500);

});