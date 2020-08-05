//focus btn
const btns = document.querySelectorAll('.btn');


btns.forEach(btn => {
    btn.addEventListener('mousedown', function(e) {
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
/*------------alerts------------------- */
const creatAlert = (el, ref) => {
    const div = document.createElement('div'),
        icon = document.createElement('i');
    div.setAttribute('class', 'alert');
    icon.setAttribute('class', 'fas fa-check-circle');
    div.appendChild(icon);
    el.insertBefore(div, ref)
}
const removAlert = () => {
    const elementRemove = document.querySelector('.alert');
    elementRemove.remove()
}
const pos = document.querySelectorAll('.pos');


pos.forEach(posbtn => {
    posbtn.addEventListener('click', function(e) {


        let x1 = e.target.parentElement,
            left1 = e.target.offsetLeft;



        creatAlert(x1, e.target)
        const alert1 = e.target.previousElementSibling;
        alert1.style.left = left1 + 'px';
        alert1.classList.toggle('alertactive');
        e.target.style.opacity = '0';

        function rem() {
            alert1.classList.toggle('alertactive')
        }

        function opcity() {
            e.target.style.opacity = '1';
        }

        posbtn.classList.toggle("fas");
        posbtn.classList.toggle("red");
        console.log(e.target, left1);
        setTimeout(opcity, 1000)



        setTimeout(rem, 1000)
        setTimeout(removAlert, 1000);









    });
});

console.log(firebase)


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