//focus btn
const btns = document.querySelectorAll('.btn');


btns.forEach(btn => {
    btn.addEventListener('mousedown', function (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        //console.log(btn.childNodes[0].style.color = 'red')
        let ripples = document.createElement('span');
        ripples.setAttribute('class', 'btnspan')
        ripples.style.left = `${x}px`;
        ripples.style.top = `${y}px`;
        btn.appendChild(ripples);
        setTimeout(() => ripples.remove(), 900);
    });
});
const pos = document.querySelectorAll('.pos');
pos.forEach(posbtn => {
    posbtn.addEventListener('click', function (e) {

        let x1 = e.target;
        console.log(posbtn);



        posbtn.classList.toggle("fas");
        posbtn.classList.toggle("red");







    });
});



/*
const pos = document.querySelectorAll('.pos');
pos.forEach(posbtn => {
    posbtn.addEventListener('click', function (e) {
        e.preventDefault()
        let x1 = e.target,

            cart = document.querySelector('.fa-shopping-cart'),
            parent = e.target.parentElement.getBoundingClientRect(),
            positonx = cart.getBoundingClientRect().x - posbtn.getBoundingClientRect().x,
            positony = cart.getBoundingClientRect().y - posbtn.getBoundingClientRect().y,
            y1 = e.offsetY;
        console.log(posbtn);
        posbtn.style.position = 'absolute'

        if (x1.classList[1] === "fa-heart") {
            posbtn.style.transform = `translate(${positonx-75}px, ${positony}px)`;
            e.preventDefault();
        } else {
            posbtn.style.transform = `translate(${positonx+75}px, ${positony}px)`;

        }





    });
});*/