document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offsetTop = targetSection.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

//explication du code
//Ce code JavaScript est conçu pour ajouter une fonctionnalité de défilement fluide
// aux liens de navigation (navLinks) de ma page weeb. Lorsqu'un utilisateur clique sur
// l'un de ces liens, la page défile en douceur jusqu'à la section correspondante, 
//au lieu de sauter directement à cette section....

//1. document.addEventListener('DOMContentLoaded', function() { ... });
//ajoute un enregistreur d'événement à l'objet document qui déclenche une fonction
// lorsque le contenu du DOM (Document Object Model) est entièrement chargé.
// L'événement 'DOMContentLoaded' est particulièrement utile pour s'assurer que le script s'exécute après 
//que le HTML a été entièrement chargé

//2. const navLinks = document.querySelectorAll('nav ul li a');
//Cette ligne sélectionne tous les éléments de lien (<a>) et retourne une nodelist de ces element

//3. navLinks.forEach(link => { ... });
// Parcour chaque élément de la NodeList navLinks. Pour chaque lien trouvé, excécute la fonction.

//4. link.addEventListener('click', function(event) { ... });
//À l'intérieur de la boucle forEach, cette ligne ajoute un enregisteureur d'événement pour l'événement 'click'
// à chaque lien . Lorsque l'utilisateur clique sur un lien, la fonction est exécutée.

//5. event.preventDefault();
 // empêche le comportement par défaut du lien , qui serais la navigation immédiate vers l'ID de la section correspondante.
 //permet un défilement fluide.

//6. const targetId = this.getAttribute('href').substring(1);
// extrait l'ID de la section de destination à partir de l'attribut href du lien cliqué.
// La méthode getAttribute('href') retourne la valeur de l'attribut href.La méthode substring(1) supprime le caractère #
// pour obtenir l'ID pur.

//7. const targetSection = document.getElementById(targetId);
// Cette ligne utilise l'ID pour sélectionner l'élément correspondant dans le document 
 //avec document.getElementById(targetId).


//8. window.scrollTo({ top: offsetTop, behavior: 'smooth' });
 //utilise la méthode window.scrollTo pour faire défiler la fenêtre jusqu'à la position verticale offsetTop.
 // L'option { behavior: 'smooth' } indique que le défilement doit se faire de manière fluide.