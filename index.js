// const wrap = document.getElementsByClassName('wrap')[0];
// const container = document.querySelector('section');
// let page = 0;
// const lastPage = container.length - 1;

// window.addEventListener('wheel',(e)=>{
//     e.preventDefault();
//     if(e.deltaY > 0){
//         page++;
//     }else if(e.deltaY < 0){
//         page--;
//     }
//     if(page < 0){
//         page=0;
//     }else if(page > 3){
//         page = 3;
//     }
//     console.log(e.deltaY)
//     wrap.style.top = page * -100 + 'vh';
// },{passive:false});

const headerTag = document.querySelector("header")
document.addEventListener("scroll", function(){
    const pixels = window.scrollY;

    if(pixels>=headerTag.getBoundingClientRect().height){
        headerTag.classList.add("scrolled");
    }else{
        headerTag.classList.remove("scrolled")
    }
})

const animatedTags = document.querySelectorAll(".img-box, .text-box")
animatedTags.forEach(tag => {
    tag.style.opacity = 0
})

document.addEventListener("scroll", function(){
    let delay = 0.25;
    animatedTags.forEach(tag =>{
        const tagTop = tag.getBoundingClientRect().top;
        const tagBottom = tag.getBoundingClientRect().bottom;

        if(tagTop < window.innerHeight && tagBottom >0){
            tag.style.animation = `fadeIn 1s ${delay}s both`;
            delay +=0.25;
        }else{
            tag.style.animation = "0";
        
        }
    })
})