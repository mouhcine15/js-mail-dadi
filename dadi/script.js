const btn = document.querySelector("button");

btn.addEventListener('click',

    function () {
        let umano = Math.floor(Math.random() * 6) + 1;
        console.log(umano);  
        let computer = Math.floor(Math.random() * 6) + 1;
        console.log(computer);

        if (umano > computer) {
            document.getElementById("risposta").innerHTML = ("HAI VINTO");
        }   else if (computer > umano) {
            document.getElementById("risposta").innerHTML = ("HAI PERSO");
        }   else 
            document.getElementById("risposta").innerHTML = ("PAREGGIO");

        
    }

);