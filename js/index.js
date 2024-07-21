let nameInput = document.getElementById('nameInput')
let nameAlert = document.getElementById('nameAlert')
let emailInput = document.getElementById('emailInput')
let emailAlert = document.getElementById('emailAlert')
let phoneInput = document.getElementById('phoneInput')
let phoneAlert = document.getElementById('phoneAlert')
let ageInput = document.getElementById('ageInput')
let ageAlert = document.getElementById('ageAlert')
let passInput = document.getElementById('PassInput')
let passAlert = document.getElementById('passAlert')
let repassInput = document.getElementById('repassInput')
let repassAlert = document.getElementById('repassAlert')









// ^Now playing ------------------>
async function getMovie(){
    let loading = document.querySelector('.loading')
    
    let responce = await fetch(`https://api.themoviedb.org/3/movie/now_playing?&api_key=d73debdb68846155296fed0b217a7a08`)
    let data = await responce.json()
    displayMovies(data.results);

    $('.loading').fadeOut(1000);
}
getMovie()
function displayMovies(array){
   
    let cartona=``;
    for(var i=0 ; i < array.length; i++){
        cartona += `<div class="col-md-4 mt-4">
        <figure class="card-img text-center text-white">
<img src=https://image.tmdb.org/t/p/w500${array[i].poster_path} alt="" class="w-100">
<figcaption class="layer">
<div class="text">
<h1 class="movie-title">
${array[i].title}
</h1>
<p class="movie-overview ">
    ${array[i].overview}
</p>
<p>
    <span>
        Release Date: <span>${array[i].release_date}</span>
    </span>
</p>
<p class="stars"></p>
<p class="vote">${array[i].vote_average.toFixed(1)}</p>
</div>
</figcaption>
        </figure>
    </div>` 
 
    }
  document.querySelector('.rowData').innerHTML =cartona;
}
// * Popular Movies ----------------->
async function getPopular(){
    let responce = await fetch(`https://api.themoviedb.org/3/movie/popular?&api_key=d73debdb68846155296fed0b217a7a08`)
    let data = await responce.json()

    displayPopular(data.results);
    console.log(data.results);
}

function displayPopular(array){
   
    let cartona=``;
    for(var i=0 ; i < array.length; i++){
        cartona += `<div class="col-md-4 mt-4">
        <figure class="card-img text-center text-white">
<img src=https://image.tmdb.org/t/p/w500${array[i].poster_path} alt="" class="w-100">
<figcaption class="layer">
<div class="text">
<h1 class="movie-title">
${array[i].title}
</h1>
<p class="movie-overview ">
    ${array[i].overview}
</p>
<p>
    <span>
        Release Date: <span>${array[i].release_date}</span>
    </span>
</p>
<p class="stars"></p>
<p class="vote">${array[i].vote_average.toFixed(1)}</p>
</div>
</figcaption>
        </figure>
    </div>` 
    
    }
  document.querySelector('.rowData').innerHTML =cartona;
}
// * Top Rated------------------->
async function getTop(){
    let responce = await fetch(`https://api.themoviedb.org/3/movie/top_rated?&api_key=d73debdb68846155296fed0b217a7a08`)
    let data = await responce.json()

    displayTop(data.results);
    console.log(data.results);
}

function displayTop(array){
   
    let cartona=``;
    for(var i=0 ; i < array.length; i++){
        cartona += `<div class="col-md-4 mt-4">
        <figure class="card-img text-center text-white">
<img src=https://image.tmdb.org/t/p/w500${array[i].poster_path} alt="" class="w-100">
<figcaption class="layer">
<div class="text">
<h1 class="movie-title">
${array[i].title}
</h1>
<p class="movie-overview ">
    ${array[i].overview}
</p>
<p>
    <span>
        Release Date: <span>${array[i].release_date}</span>
    </span>
</p>
<p class="stars"></p>
<p class="vote">${array[i].vote_average.toFixed(1)}</p>
</div>
</figcaption>
        </figure>
    </div>` 
   
    }
  document.querySelector('.rowData').innerHTML =cartona;
}

// * Trending ----------------->

async function getTrend(){
    let responce = await fetch(`https://api.themoviedb.org/3/trending/movie/day?&api_key=d73debdb68846155296fed0b217a7a08`)
    let data = await responce.json()

    displayTrend(data.results);
    console.log(data.results);
}

function displayTrend(array){
   
    let cartona=``;
    for(var i=0 ; i < array.length; i++){
        cartona += `<div class="col-md-4 mt-4">
        <figure class="card-img text-center text-white">
<img src=https://image.tmdb.org/t/p/w500${array[i].poster_path} alt="" class="w-100">
<figcaption class="layer">
<div class="text">
<h1 class="movie-title">
${array[i].title}
</h1>
<p class="movie-overview ">
    ${array[i].overview}
</p>
<p>
    <span>
        Release Date: <span>${array[i].release_date}</span>
    </span>
</p>
<p class="stars"></p>
<p class="vote">${array[i].vote_average.toFixed(1)}</p>
</div>
</figcaption>
        </figure>
    </div>` 
    
    }
  document.querySelector('.rowData').innerHTML =cartona;
}
// * Up Coming ----------------->
async function getUpcoming(){
    let responce = await fetch(`https://api.themoviedb.org/3/movie/upcoming?&api_key=d73debdb68846155296fed0b217a7a08`)
    let data = await responce.json()

    displayUpcoming(data.results);
    console.log(data.results);
}

function displayUpcoming(array){
   
    let cartona=``;
    for(var i=0 ; i < array.length; i++){
        cartona += `<div class="col-md-4 mt-4">
        <figure class="card-img text-center text-white">
<img src=https://image.tmdb.org/t/p/w500${array[i].poster_path} alt="" class="w-100">
<figcaption class="layer">
<div class="text">
<h1 class="movie-title">
${array[i].title}
</h1>
<p class="movie-overview ">
    ${array[i].overview}
</p>
<p>
    <span>
        Release Date: <span>${array[i].release_date}</span>
    </span>
</p>
<p class="stars"></p>
<p class="vote">${array[i].vote_average.toFixed(1)}</p>
</div>
</figcaption>
        </figure>
    </div>` 
    
    }
  document.querySelector('.rowData').innerHTML =cartona;
}

//  ^ Search Movie ---------------->

$('.searchInput').on("input", function () {
    searchMovie(this.value);
})

async function searchMovie(term){
    let responce = await fetch(`https://api.themoviedb.org/3/search/movie?query=${term}&api_key=d73debdb68846155296fed0b217a7a08`)
    let data = await responce.json()
   
    displayData(data.results);
}

// searchMovie("")


function displayData(array){
   
    let cartona=``;
    for(var i=0 ; i < array.length; i++){
        cartona += `<div class="col-md-4 mt-4">
        <figure class="card-img text-center text-white">
<img src=https://image.tmdb.org/t/p/w500${array[i].poster_path} alt="" class="w-100">
<figcaption class="layer">
<div class="text">
<h1 class="movie-title">
${array[i].title}
</h1>
<p class="movie-overview ">
    ${array[i].overview}
</p>
<p>
    <span>
        Release Date: <span>${array[i].release_date}</span>
    </span>
</p>
<p class="stars"></p>
<p class="vote">${array[i].vote_average.toFixed(1)}</p>
</div>
</figcaption>
        </figure>
    </div>` 
  
    }
  document.querySelector('.rowData').innerHTML =cartona;
}
// & Siade Nav ---------------->
 function openNav()
{
    if ($("nav").css("margin-left") == "250px") {
        closeNav();
    } else {
        $(".side-nav").css("margin-left","0px");
        $("nav").css("margin-left", "250px");
        $('.menu ul li').animate({"paddingTop":"25px","opacity":"1"},1000);
        $('.nav-menu').html('<i class="fa-solid fa-xmark"></i>');
    }
}
function closeNav() 
{
    $('.menu ul li').animate({"paddingTop":"250px","opacity":"0"},1000);
    $(".side-nav").css("margin-left","-250px");
    $("nav").css("margin-left", "0px");
    $('.nav-menu').html('<i class="fa-solid fa-align-justify"></i>');
}
$('.nav-menu').click(openNav);

// & ================ Validation ================>
    
//    ^ Check Validation ======================>

 let nameInputTouch = false;
 let emailInputTouch = false;
 let phoneInputTouch = false;
 let ageInputTouch = false;
 let passInputTouch = false;
 let repassInputTouch = false;

 nameInput.addEventListener('focus' , function(){
    nameInputTouch = true;
 })
 emailInput.addEventListener('focus' , function(){
    emailInputTouch = true;
 })
 phoneInput.addEventListener('focus' , function(){
    phoneInputTouch = true;
 })
 ageInput.addEventListener('focus' , function(){
    ageInputTouch = true;
 })
 passInput.addEventListener('focus' , function(){
    passInputTouch = true;
 })
 repassInput.addEventListener('focus' , function(){
    repassInputTouch = true;
 })
    $('form input').on('keyup', function () {
        if (nameInputTouch){
            if(nameValidation()){
                nameAlert.classList.replace('d-block','d-none')
                nameInput.classList.add('is-valid');
                nameInput.classList.remove('is-invalid');
            }else{
                nameAlert.classList.replace('d-none' , 'd-block')
                nameInput.classList.add('is-invalid');
                nameInput.classList.remove('is-valid');
            }
    
        }
       if(emailInputTouch){
        if(emailValidation()){
            emailAlert.classList.replace('d-block','d-none')
            emailInput.classList.add('is-valid');
            emailInput.classList.remove('is-invalid');
        }else{
            emailAlert.classList.replace('d-none' , 'd-block')
            emailInput.classList.add('is-invalid');
            emailInput.classList.remove('is-valid');
        }
       }
       if(phoneInputTouch){
        if(phoneValidation()){
            phoneAlert.classList.replace('d-block','d-none')
            phoneInput.classList.add('is-valid');
            phoneInput.classList.remove('is-invalid');
        }else{
            phoneAlert.classList.replace('d-none' , 'd-block')
            phoneInput.classList.add('is-invalid');
            phoneInput.classList.remove('is-valid');
        }
       }
       
if(ageInputTouch){
    if(ageValidation()){
        ageAlert.classList.replace('d-block','d-none')
        ageInput.classList.add('is-valid');
        ageInput.classList.remove('is-invalid');
    }else{
        ageAlert.classList.replace('d-none' , 'd-block')
        ageInput.classList.add('is-invalid');
        ageInput.classList.remove('is-valid');

    }
}
      
if(passInputTouch){
    if(passValidation()){
        passAlert.classList.replace('d-block','d-none')
        passInput.classList.add('is-valid');
        passInput.classList.remove('is-invalid');
    }else{
        passAlert.classList.replace('d-none' , 'd-block')
        passInput.classList.add('is-invalid');
        passInput.classList.remove('is-valid');
    }
}
       if(repassInputTouch){
        if(repassValidation()){
            repassAlert.classList.replace('d-block','d-none')
            repassInput.classList.add('is-valid');
            repassInput.classList.remove('is-invalid');

        }else{
            repassAlert.classList.replace('d-none' , 'd-block')
            repassInput.classList.add('is-invalid');
            repassInput.classList.remove('is-valid');
        }
       }
       


       if(nameValidation()&& emailValidation() && phoneValidation() && ageValidation() && passValidation() && repassValidation()){
       
        $('.form-btn').removeAttr('disabled');
       }else{
        $('.form-btn').attr('disabled', true);
       }
    });
   // ^ Inputs Validation ================>
    function nameValidation(){
        let regex =/^[a-zA-Z ]+$/;
       
       return   (regex.test(nameInput.value))
        
    }
    function emailValidation(){
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        return   (regex.test(emailInput.value))
        
    }
    function phoneValidation(){
        let regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
        return   (regex.test(phoneInput.value))
        
    }
    function ageValidation(){
        let regex = /^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/
        return   (regex.test(ageInput.value))
        
    }
    function passValidation(){
        let regex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/
        return   (regex.test(passInput.value))
        
    }
    function repassValidation(){
      return repassInput.value == passInput.value
        
    }




// // * back to top function

// var toTopButton = document.querySelector("back-to-top");

// toTopButton.style.display = "none";//by default should be hidden
// function topFunction(){
//     document.querySelector('body').onscroll = function(){//whenever they scroll
//         if (window.scrollY > 150)//if scroll is 150px from top
//           toTopButton.style.display = "block";//if they scroll down, show
//         else
//           toTopButton.style.display = "none";//if they scroll up, hide
//       };
// }
