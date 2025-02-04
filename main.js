


// Selfwork Oggetti 2
// Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:
// mostrare tutti i contatti dell’agenda
// mostrare un singolo contatto
// eliminare un contatto dall’agenda
// aggiungere un nuovo contatto
// modificare un contatto esistente  

// Suggerimento:

// let rubrica = {
//   'contacts': [
//       {'nome': 'Nicola', 'telefono': '3331111111'},
//       {'nome': 'Lorenzo', 'telefono': '3332222222'},
//       {'nome': 'Paola', 'telefono': '3333333333'},
//       {'nome': 'Jenny', 'telefono': '3334444444'}
//   ],
//   ...
// }


// NON RIESCO A SVOLGERE L'ESERCIZIO UTILIZZANDO IL SUGGERIMENTO: non riesco ad applicare i metodi su oggetti che sono dentro un oggetto, ho svolto l'esercizio utilizzando dati all'interno di un array


let rubrica = {
    
    'contatti' : [
        `Mario`,
        `Luigi`, 
        `Filippo`
    ],
    
    // comando per mostrare tutti i contatti
    'mostra_contatti' : function () {  
        this.contatti.forEach ( (contatti) => console.log(contatti)  );
         
    },

    // comando per mostrare un singolo contatto, se presente in rubrica
    'mostra_contatto' : function (contatto) {

        let index = this.contatti.indexOf(contatto);

        if (index >= 0) {
        console.log(contatto);
        } else {
            console.log(`contatto non presente in rubrica`);
            
        }
    },


    // comando per aggiungere un contatto in rubrica
    'aggiungi_contatto' : function (dato_da_aggiungere) {

        this.contatti.push(dato_da_aggiungere);

    },



    // comando per eliminare un contatto dalla ribrica, se presente in rubrica
    'elimina_contatto' : function (dato_da_eliminare) {

        let index = this.contatti.indexOf(dato_da_eliminare);
        
        if ( index >= 0) {
                        
            this.contatti.splice(index, 1);

            console.log(`${dato_da_eliminare} è stato cancellato`);

        } else {
            console.log(`${dato_da_eliminare} non presente in rubrica`);
            
        }
    },
 

    // comando per modificare un contatto in rubrica se presente in rubrica
    'modifica_contatto' : function (dato_da_modificare, nuovo_dato) {

        let index = this.contatti.indexOf(dato_da_modificare);

        if (index >= 0 ) {
                        
            this.contatti.splice(index, 1, nuovo_dato);

            console.log(`il contatto "${dato_da_modificare}" è stato modificato in "${nuovo_dato}"`);

        } else {
            console.log(`"${dato_da_modificare}" non presente in rubrica, non può essere modificato`);
            
        }
    },
    
};




rubrica.mostra_contatto(`Paolo`);

rubrica.aggiungi_contatto(`Carmelo`);

rubrica.elimina_contatto(`Mario`);

rubrica.modifica_contatto(`Mario`, `Marietto`);

rubrica.aggiungi_contatto(`Giuseppe`);

rubrica.aggiungi_contatto(`Pino`);

rubrica.modifica_contatto(`Pino`, `Pinuccio`);

rubrica.modifica_contatto(`Pino`, `Pina`);

rubrica.mostra_contatti();











