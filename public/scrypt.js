/*const print = new Function('...arg', 'return arg+1')
console.log(print(1, 2))

 var Prix1 = 300,
    Prix2 = 200,
    Prix3,
    Prix4,
    hi;


Prix3 =  Prix1 - Prix2
Prix4 = Prix1 - Prix3
hi=[Prix1,Prix2,Prix3,Prix4]
for (let i = 0; i < hi.length; i++) {
    const output = hi[i];
    document.getElementById('hi').innerHTML = output;
    
    
} */

/* el1 = document.getElementById('hi');

output = "<div id=\"outerbox\">"; //initialize output string

//build output string
for(var i=0; i<hi.length; i++){
    output +="<div class=\"agebox\" onclick=\"Relationship('"+i+"')\">"+hi[i]+"</div>";
}

output += "</div><button type=\"button\" onclick=\"goback('Gender')\">back</button>";

el1.innerHTML = output 



var jojo = document.createElement('span');
document.body.appendChild(jojo) var myButton = document.createElement('button')
var myButton1 = document.querySelector('button');
var myHeading = document.querySelector('span');
var att = document.createAttribute("id");
att.value = "clear";
myButton1.setAttributeNode(att)

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;

}
myButton.onclick = function () {
    setUserName();
}
var myButton1 = document.getElementById('clear');


myButton1.onclick = function () {
    localStorage.clear();
    myHeading.remove();
}

window.addEventListener('mousemove', function (e) {
    document.getElementById('hi').textContent = (`x :  ${e.offsetX} \n Y : ${ e.offsetY}`);
});

// const user = {
//     name: 'tamer',
//     san: 'hassan',
//     wafe: 'zineb',
//     mama: 'massouda',
//     baba: 'massoud1',
//     ang:{
//         html: '70ù',
//         css: '50',
//         js: '50%'
//     }
// };

// const {name,san,mama,baba}=user;
// var text='';
// for ( key of Object.values(user)) {
//     text +=  `<div class='container'>  ${key}  </div>`;
// };
// document.getElementById('hi1').innerHTML= text;
// document.getElementById('hi').textContent=`fesrt :${Object.keys(user)} `
/*

var map = new Map([
    ["APPLE", 1],
    ["ORANGE", 2],
    ["MANGO", 3]
]);


document.body.onload = addElement;

function addElement() {
    // create a new div element 
    
    // and give it some content 
    var text = '';
    for (let [key, value] of map.entries()) {
        var newDiv = document.createElement("div");
        text += `key : ${key} => value: ${value}`;
        var newContent = document.createTextNode(text);
        newDiv.appendChild(newContent);
    };
    
    // add the text node to the newly created div
    

    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("hi1");
    document.body.insertBefore(newDiv, currentDiv);
}



const carouselContainer = document.querySelector('.carousel-container');
const carouselSlider = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel-seat');
console.log(carouselSlider.isConnected)

console.log(carouselImages[0])
// const zt = new ZingTouch.Region(carouselContainer);

//buttons
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

//counter
let counter = -1;
const size = carouselImages[0].clientWidth;


//carouselSlider.style.transform = `translateX(${-size * counter}px)`;

function prevImg() {
    if (counter < 0) {
        console.log('prevImgffff = ', counter);
        counter = carouselImages.length - 1;
        carouselSlider.style.transform = `translateX(${-100 * counter}%)`;
        counter--;
        console.log('prevImgffff = ', counter);
    } else {
        carouselSlider.style.transition = 'transform 0.4s ease-in-out';

        console.log('prevImg = ', counter)
        console.log(counter <= 0)
        carouselSlider.style.transform = `translateX(${-100 * counter}%)`;
        counter--;
    }




}



function nextImg() {
    console.log('next counter + 1', counter + 1)
    if ((counter + 1) >= carouselImages.length - 1) {
        counter = -2;
    }
    carouselSlider.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    console.log('nextImg = ', counter + 1)
    carouselSlider.style.transform = `translateX(${-100 * (counter + 1)}%)`;
}

// zt.bind(carouselContainer, 'swipe', function (e) {
//     const direction = e.detail.data[0].currentDirection;
//     const left = 90 < direction && 270 > direction;
//     const right = 90 > direction || (270 < direction && direction <= 360);
//     if (left) nextImg();
//     if (right) prevImg();
// });


prev.addEventListener('click', prevImg);

next.addEventListener('click', nextImg);


const carouselClass = document.querySelector('.leo-control-nav');


carouselImages.forEach(() => {
    const addchiled = document.createElement('li');
    addchiled.setAttribute('class', 'indicator-item');
    carouselClass.appendChild(addchiled);

})


/*
while (a <= carouselImages.length - 1) {
    const addchiled = document.createElement('li');
    addchiled.setAttribute('class', 'indicator-item');
    // Runs 5 times, with values of step 0 through 4.
    console.log(carouselClass.appendChild(addchiled));
    a++
}*/
/*

for (let i = 0; i <= carouselImages.length - 1; i++) {
    const addchiled = document.createElement('li');
    addchiled.setAttribute('class', 'indicator-item');
    // Runs 5 times, with values of step 0 through 4.
    console.log(carouselClass.appendChild(addchiled));
}

*/
// carouselSlider.addEventListener('transitionend', () => {
//     if (carouselImages[counter].id === 'lastClone') {
//         carouselSlider.style.transition = 'none';
//         counter = carouselImages.length - 2;
//         carouselSlider.style.transform = `translateX(${-100 * counter}%)`;
//     }

//     if (carouselImages[counter].id === 'firstClone') {
//         carouselSlider.style.transition = 'none';
//         counter = carouselImages.length - counter;
//         carouselSlider.style.transform = `translateX(${-100 * counter}%)`;
//     }
// });
/*
var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('slides'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');
console.log(sliderItems.lastElementChild, '\n', sliderItems.getElementsByClassName('carousel-seat')[0].offsetWidth,
    '\n', sliderItems.firstElementChild.offsetWidth)

function slide(wrapper, items, prev, next) {

    var posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        threshold = 100,
        slides = items.children,
        slidesLength = slides.length,
        slideSize = items.firstElementChild.offsetWidth,


        firstSlide = items.firstElementChild,
        lastSlide = items.lastElementChild,
        cloneFirst = firstSlide.cloneNode(true),
        cloneLast = lastSlide.cloneNode(true),
        index = 0,
        allowShift = true;

    // Clone first and last slide
    items.appendChild(cloneFirst);
    items.insertBefore(cloneLast, firstSlide);
    wrapper.classList.add('loaded');

    // Mouse events
    items.onmousedown = dragStart;

    // Touch events
    items.addEventListener('touchstart', dragStart);
    items.addEventListener('touchend', dragEnd);
    items.addEventListener('touchmove', dragAction);

    // Click events
    prev.addEventListener('click', function () {
        shiftSlide(-1)
    });
    next.addEventListener('click', function () {
        shiftSlide(1)
    });

    // Transition events
    items.addEventListener('transitionend', checkIndex);

    function dragStart(e) {
        e = e || window.event;
        e.preventDefault();
        posInitial = items.offsetLeft;

        if (e.type == 'touchstart') {
            posX1 = e.touches[0].clientX;
        } else {
            posX1 = e.clientX;
            document.onmouseup = dragEnd;
            document.onmousemove = dragAction;
        }
    }

    function dragAction(e) {
        e = e || window.event;

        if (e.type == 'touchmove') {
            posX2 = posX1 - e.touches[0].clientX;
            posX1 = e.touches[0].clientX;
        } else {
            posX2 = posX1 - e.clientX;
            posX1 = e.clientX;
        }
        items.style.left = (items.offsetLeft - posX2) + "px";
    }

    function dragEnd(e) {
        posFinal = items.offsetLeft;
        if (posFinal - posInitial < -threshold) {
            shiftSlide(1, 'drag');
        } else if (posFinal - posInitial > threshold) {
            shiftSlide(-1, 'drag');
        } else {
            items.style.left = (posInitial) + "px";
        }

        document.onmouseup = null;
        document.onmousemove = null;
    }

    function shiftSlide(dir, action) {
        items.classList.add('shifting');

        if (allowShift) {
            if (!action) {
                posInitial = items.offsetLeft;
            }

            if (dir == 1) {
                items.style.left = (posInitial - slideSize) + "px";
                index++;
            } else if (dir == -1) {
                items.style.left = (posInitial + slideSize) + "px";
                index--;
            }
        };

        allowShift = false;
    }

    function checkIndex() {
        items.classList.remove('shifting');

        if (index == -1) {
            items.style.left = -(slidesLength * slideSize) + "px";
            index = slidesLength - 1;
        }

        if (index == slidesLength) {
            items.style.left = -(1 * slideSize) + "px";
            index = 0;
        }

        allowShift = true;
    }

}


slide(slider, sliderItems, prev, next);*/




const carousel = document.querySelector('.wrap');
const slider = document.querySelector('.carousel');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction;

function prevF() {
    console.log('yoyo prev', direction)
    if (direction === -1) {
        console.log('yoyo prev', direction)
        direction = 1;

        slider.appendChild(slider.lastElementChild);
    }
    direction = 1;
    //carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate(100%)';

};

function nextF() {
    console.log('yoyo next', direction)

    if (direction === 1) {
        console.log('yoyo next', direction) // right
        direction = -1;
        // prepend currently visible child to the beginning so that way it will slide to the first element when we translate (-20%)
        slider.prepend(slider.firstElementChild);
    }
    direction = -1;
    //carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-100%)';
}
next.addEventListener('click', nextF);

prev.addEventListener('click', prevF);

slider.addEventListener('transitionend', function () {
    // get the last element and append it to the front

    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
        console.log('hi')
    } else {
        slider.appendChild(slider.firstElementChild);
        console.log('ho')
    }
    console.log(direction)
    slider.style.transition = 'none';
    console.log(slider.style.transition)
    //slider.style.transform = 'translate(0)';
    setTimeout(() => {
        slider.style.transition = 'all 0.5s';
    })
}, false);



/*------------------- event key start------------------ */
document.addEventListener('keydown', function (e) {
    switch (e.code) {
        case "KeyA":
        case "ArrowLeft":
            prevF();
            break;

        case "KeyD":
        case "ArrowRight":
            nextF();
            break;

    }
});
/*------------------- event key end------------------ */

/*------------------- copy items and insert for control start------------------ */
const carouselClass = document.querySelector('.leo-control-nav');
const carouselImages = document.querySelectorAll('.carousel-seat');


carouselImages.forEach(() => {
    const addchiled = document.createElement('li');
    addchiled.setAttribute('class', 'indicator-item');
    carouselClass.appendChild(addchiled);

})


const indicators = document.querySelectorAll('.indicator-item');
indicators[0].classList.add('selected')
index = 0;

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        console.log(i)
        document.querySelector('.selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transition = 'none';
        slider.style.transform = `translateX(${(i) * -100 +100}%)`;
        setTimeout(() => {
            slider.style.transition = 'all 0.5s';

        })

        index = i;

    });
});
/*------------------- copy items and insert for control end------------------ */
//setInterval(nextF, 5000)

/*

Array.prototype.slice.call(a, 0, 2);
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
[a, b] = [animals.slice(4), animals.slice(0, 4)]
console.log([...a, ...b]);

const arraySparse = [1, 3, 7]
let numCallbackRuns = 1

arraySparse.forEach((element, index) => {
    console.log(element, index - numCallbackRuns)

})

console.log("numCallbackRuns: ", numCallbackRuns)*/

//ex[0].children[0].src='hi'

document.getElementById("add").addEventListener("click", e => {
    let copy1 = slider.lastElementChild.cloneNode(true)
    copy1.children[0].children[0].setAttribute('id', 'image');

    slider.appendChild(copy1)
    let imageInput = document.getElementById("url");
    let image = document.getElementById("image");

    if (imageInput.value) image.src = imageInput.value;
    image.removeAttribute('id', 'image')
    const addchiled = document.createElement('li');
    addchiled.setAttribute('class', 'indicator-item');
    carouselClass.appendChild(addchiled);

});