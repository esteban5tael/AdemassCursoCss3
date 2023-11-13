const cardCreator=()=>{
            // Número de tarjetas que deseas crear
            const numberOfCards = 1;
        

            // Contenedor de tarjetas
            const cardsContainer = document.querySelector('.cards');
            
            
        
            // Bucle para crear y agregar tarjetas al contenedor
            for (let i = 0; i < numberOfCards; i++) {
                // Crear una nueva tarjeta
                const newCard = document.createElement('div');
                newCard.className = 'card';
        
                // Agregar contenido a la tarjeta (puedes personalizar esto según tus necesidades)
                newCard.innerHTML = '<h3 class="card-title">Card Title ' + (i + 1) + '</h3><h3 id="cleaner" class="card-title">Card Title ' + (i + 1) + '</h3><h3 class="card-title">Card Title ' + (i + 1) + '</h3>';
        
                // Agregar la nueva tarjeta al contenedor
                cardsContainer.appendChild(newCard);
            } 
}

const paragraphCreator=()=>{
    const paragrapDiv = document.querySelector('.paragrapDiv');
        // Bucle para crear y agregar parrafos al contenedor
        for (let i = 0; i < 10; i++) {
            // Crear un nuevo parrafo
            const newP = document.createElement('p');
                
            // Agregar contenido a la tarjeta (puedes personalizar esto según tus necesidades)
            newP.innerHTML = i+' - Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nemo, esse temporibus reiciendis, placeat dolorum vel officiis exercitationem consectetur numquam minus ratione? Distinctio vel ratione earum quam sequi, iure dicta?';
    
            // Agregar la nueva tarjeta al contenedor
            paragrapDiv.appendChild(newP);
        }  
}

const main=()=>{
   
      cardCreator();paragraphCreator();
}

main();