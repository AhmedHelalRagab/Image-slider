let arrOfImages=Array.from(document.querySelectorAll('.slider-container img'));

let sliderNumber=document.querySelector('.slider-num');

let indicator=document.querySelector('.indicators');

let nextButton=document.querySelector('.next');

let prevButton=document.querySelector('.prev');


let currentSlide=1;

let bullets=arrOfImages.length;

let ul=document.createElement('ul');

function addingBullets(){
    
    for(let i=1;i<=bullets;i++){
        let li=document.createElement('li');
        if(i==1){
            li.className='active';
        }
        li.innerHTML=`${i}`;
        ul.appendChild(li);
    }
    indicator.appendChild(ul);
    
}
addingBullets();
let liOfindicator=document.querySelectorAll('.indicators ul li');

if(currentSlide==1){
    prevButton.classList.add('disabled');
    sliderNumber.textContent=`Slide # ${currentSlide} of ${bullets}`;
}

function nextSlide(){
    if(currentSlide===bullets)
    {
        return false;
    }else{
        currentSlide++;
        nextAndPrevHandle();
    }
}
function prevSlide(){
    if(currentSlide==1)
    {
        return false;
    }else{
        currentSlide--;
        nextAndPrevHandle();
    }
}

nextButton.onclick=nextSlide;

prevButton.onclick=prevSlide;

indicator.addEventListener('click',(e)=>{

    currentSlide=parseInt(e.target.innerHTML);
    nextAndPrevHandle();
})

function nextAndPrevHandle(){

    sliderNumber.textContent=`Slide # ${currentSlide} of ${bullets}`;

    removeAllActiveClasses();

    arrOfImages[currentSlide-1].classList.add('active');

    liOfindicator[currentSlide-1].classList.add('active');

    if(currentSlide==1){
        prevButton.classList.add('disabled');
    }else{
        prevButton.classList.remove('disabled');
        
    }
    if(currentSlide==bullets){
        nextButton.classList.add('disabled');
    }else{
        nextButton.classList.remove('disabled');
        
    }
}

function removeAllActiveClasses(){
    arrOfImages.forEach((img)=>{
        img.classList.remove('active');
    })
    liOfindicator.forEach((li)=>{
        li.classList.remove('active');
    })
}

