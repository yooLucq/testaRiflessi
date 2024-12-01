//selezione elementi semaforo
const rosso1 = document.getElementById('rosso1');
const rosso2 = document.getElementById('rosso2');
const rosso3 = document.getElementById('rosso3');
const green = document.getElementById('verde');

//pulsante e contenitore "start"

const startButton = document.getElementById('startButton');
const timer = document.getElementById('timer');

//variabili globali per controllare il verde
let verdeTime = 0; // timer dell'accensione
let verdeAcceso = false; // acceso verde si o no

//aggiunge un evento click al pulsante "start"
startButton.addEventListener('click', () => {
//reset delle luci e del risultato
rosso1.style.backgroundColor = 'gray';
rosso2.style.backgroundColor = 'gray';
rosso3.style.backgroundColor = 'gray';
verde.style.backgroundColor = 'gray';
resultTimer.innerText = '0.00'; //reset del risultato
verdeAcceso = false; //reset stato del semaforo
//accensione progressiva delle luci rosse

setTimeout(() => {
    rosso1.style.backgroundColor = '#FF0000'; //prima luce rossa
    setTimeout(() => {
        rosso2.style.backgroundColor = '#FF0000'; //seconda luce rossa
        setTimeout(() => {
            rosso3.style.backgroundColor = '#FF0000'; //terza luce rossa

            //accendi il verde con un timer casuale (1-3 secondi)
            const verdeTimer = Math.random() * 2000 + 1000; //timer casuale
            setTimeout(() => {
                verde.style.backgroundColor = '#44FF00'; //accende la luce verde
                verdeTime = Date.now(); //salva il timer del verde
                verdeAcceso = true; //stato del verde acceso a vero
                }, verdeTimer);
            }, Math.random() * 1000 + 500); //timer casuale tra le luci rosse
        }, Math.random() * 1000 + 500);
    }, Math.random() * 1000 + 500);
});

//aggiungi evento click al corpo della pagina
document.body.addEventListener('click', () => {
const time = (Date.now() - verdeTime) / 1000; //calcola il tempo di reazione
}); 