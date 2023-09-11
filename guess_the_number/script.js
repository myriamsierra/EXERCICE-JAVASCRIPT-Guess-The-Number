//1 regarder si ma page est ok
console.log("ok")


//2 Générer un nombre aléatoire entre 0 et 100
const randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber)

//3 Récupérer mes elements
const formulaire = document.querySelector('.cta-form');
const button = document.getElementById('button');
const vie = document.querySelectorAll('.fa-heart');
const description = document.querySelector('.description');
const reponse = document.querySelector('.reponse');
const finalReponse = document.querySelector('.final-reponse');
const thermometre = document.querySelector('.thermomètre');
const chaud = document.querySelector('.chaud');
const brulant = document.querySelector('.brulant');
const tiede = document.querySelector('.tiede');
const froid =document.querySelector ('.froid');





//nombre de vie et icone coeur
let totalVies = 5;
function nombreDeVies() {
    for (let i = 0; i < vie.length; i++) {
        if (i < totalVies) {
            vie[i].style.color = 'initial'; 
        } else {
            vie[i].style.color = 'gray'; 
        }
    }
}




 // Fonction pour mettre à jour l'affichage du thermomètre
function couleurThermometre(difference) {
    thermometre.classList.remove('brulant', 'chaud', 'tiede', 'froid');
        if (difference === 0) {
            thermometre.classList.add('brulant');
        } else if (difference <= 2) {
            thermometre.classList.add('brulant');
        } else if (difference <= 5) {
            thermometre.classList.add('chaud');
        } else if (difference <= 10) {
            thermometre.classList.add('tiede');
        } else {
            thermometre.classList.add('froid');
        }
}


// Fonction pour gérer le formulaire
formulaire.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombreDujoueur = parseInt(button.value, 10);
    if (isNaN(nombreDujoueur) || (nombreDujoueur <0) || (nombreDujoueur >100)) {
        reponse.textContent = "Veuillez entrer un nombre valide entre 0 et 100.";
    }
    if (nombreDujoueur === randomNumber) {
        reponse.textContent = "Félicitations ! Vous avez deviné";
        let tempsRestant = 5; 
        let compteARebours = document.getElementById("compteARebours");
        let timer = setInterval(function() {
            compteARebours.textContent = "Rejouer dans " + tempsRestant + " secondes...";
            tempsRestant--;
            if (tempsRestant < 0) {
                clearInterval(timer); 
                location.reload();
            }
        }, 1000); 
    } else {
        totalVies--;
        nombreDeVies();
        const difference = Math.abs(randomNumber - nombreDujoueur);
         if (difference <= 2) {
            description.innerHTML = '<h3>Brûlant</h3><p>+2</p>';
        } else if (difference <= 5) {
            description.innerHTML = '<h3>Chaud</h3><p>+5</p>';
        } else if (difference <= 10) {
            description.innerHTML = '<h3>Tiède</h3><p>+10</p>';
        } else {
            description.innerHTML = '<h3>Froid</h3><p>+ de 10</p>';
        }
        if (difference === 0) {
            thermometre.classList.add('brulant');
        } else if (difference <= 2) {
            thermometre.classList.add('brulant');
        } else if (difference <= 5) {
            thermometre.classList.add('chaud');
        } else if (difference <= 10) {
            thermometre.classList.add('tiede');
        } else {
            thermometre.classList.add('froid');
        }
    }
    const difference = Math.abs(randomNumber - nombreDujoueur);
    if (difference <= 2) {
        description.innerHTML = '<h3>Brûlant</h3><p>+2</p>';
        brulant.style.background ="red";
        chaud.style.background ="initial";
        tiede.style.background ="initial";
        froid.style.background = "initial";
    } else if (difference <= 5) {
        description.innerHTML = '<h3>Chaud</h3><p>+5</p>';
        brulant.style.background ="red";
        chaud.style.background ="orange";
        tiede.style.background ="initial";
        froid.style.background = "initial";
    } else if (difference <= 10) {
        description.innerHTML = '<h3>Tiède</h3><p>+10</p>';
        brulant.style.background ="red";
        chaud.style.background ="orange";
        tiede.style.background ="greenyellow";
        froid.style.background = "initial";
    } else {
        description.innerHTML = '<h3>Froid</h3><p>+ de 10</p>';
        brulant.style.background ="red";
        chaud.style.background ="orange";
        tiede.style.background ="greenyellow";
        froid.style.background = "aqua";
    }
    if (nombreDujoueur > randomNumber) {
        reponse.textContent="";
        reponse.textContent = 'Trop grand';
    } else if (nombreDujoueur < randomNumber) {
        reponse.textContent="";
        reponse.textContent = 'Trop petit'; 
    }
    if (totalVies === 0) {
        finalReponse.textContent = "Dommage ! Le nombre correct etait " + randomNumber;
        let tempsRestant = 5; 
        let compteARebours = document.getElementById("compteARebours");
        let timer = setInterval(function() {
            compteARebours.textContent = "Rejouer dans " + tempsRestant + " secondes...";
            tempsRestant--;
            if (tempsRestant < 0) {
                clearInterval(timer); 
                location.reload();
            }
        }, 1000); 
    }
    button.value = '';
});
nombreDeVies();
