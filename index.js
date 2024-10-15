/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

       const changeTitle = function () {
        const h1 = document.getElementsByTagName('h1')[0]
        h1.innerText = "Qualcos'altro!"
        
       }
       changeTitle()

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
       const addClassToTitle = function () {
        const h1 = document.getElementsByTagName('h1')[0]
        h1.classList.add('myHeading')

       }
       addClassToTitle()
 
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
 
       const changePcontent = function () {
        const allDivP = document.querySelectorAll('div p')
        for (let i=0; i<allDivP.length; i++){
            allDivP[i].innerText = 'testo cambiato'        
        }
       }

       changePcontent()
 
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
       const changeUrls = function () {
        const changedLink = document.getElementById('newLink')
            changedLink.setAttribute('href', 'https://www.google.com')
        }
        
       changeUrls()
 
       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 
       const addToTheSecond = function () {
        const newLi = document.createElement('li')
        newLi.innerText = 'nuovo elemento lista'
        const secondList = document.getElementById('secondList')
        secondList.appendChild(newLi)
       }
       addToTheSecond()
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
       const addParagraph = function () {
        const newP = document.createElement('p')
        newP.innerText = 'nuovo paragrafo'
        const firstDiv = document.querySelector('div:first-of-type')
        firstDiv.appendChild(newP)
       }
       addParagraph()
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
       const hideFirstUl = function () {
        const deletedList = document.getElementById('firstList')
        deletedList.remove()
       }
       hideFirstUl()
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {
        const paintedList = document.getElementsByTagName('ul') 
        for (let i = 0; i < paintedList.length; i++) {
            paintedList[i].classList.add('listBackground')
        }
       }
       paintItGreen()
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
 
       const makeItClickable = function () {
        const title = document.getElementById('title')

        title.addEventListener('click', function(){
            title.textContent = title.textContent.slice(0, -1)  
              }
            )
        }
           

       makeItClickable()
 
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {
        const footerAlert = document.getElementById('footerAlert')
           footerAlert.addEventListener('click', function(){
            const link = document.getElementById('link')
            alert(link) 
            }
            )
         }

         revealFooterLink()
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 
       const generateTable = function () {
          
        }
        

       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function () {

       }
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {}
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {
        
        const subTitle = document.getElementById('subTitle')

        subTitle.addEventListener('click', function(){
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
            subTitle.style.color = randomColor  
              }
            )
       }

       changeColorWithRandom()