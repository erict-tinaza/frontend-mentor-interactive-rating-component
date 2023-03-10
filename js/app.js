function init() {

const titleEl = document.getElementById("title-el");
const descriptionEl = document.getElementById("description-el");
const cardEl = document.getElementById("card-el");
const submitEl = document.getElementById("submit-el");
let rateBtnsEl = document.getElementsByClassName("rate-btns");
rateBtnsEl.addEventListener('click', function (event) {
    console.log("hello")
})
submitEl.addEventListener("click", function () {
    view.renderThankYouPage();
})




let view = {
   renderThankYouPage(){
    cardEl.innerHTML= `<div>   <img class="illus-thankyou" src="../images/illustration-thank-you.svg" alt=""></div>
    <div><p>You selected  out of 5 </p></div>
    <h1 id="title-el">Thank you!</h1>

   <p class="msg"> We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch! </p>`
   }
}
let model = {

}
let controller = {

}

}
window.onload = init();