const sliderItems = document.getElementById('slides'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    indicatots_ol = document.getElementById('indicatots-ol'),
    carouselImages = document.querySelectorAll('.carousel-seat');

for (const [key, value] of Object.entries(sliderItems.children)) {
    let addchiled = document.createElement('li');
    addchiled.setAttribute('class', 'indicator-item');
    indicatots_ol.appendChild(addchiled);

}
/*[...].forEach(() => {
    

})*/
indicatots_ol.firstElementChild.classList.add('selected');

function slide(items, prev, next, ind) {
    var posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        threshold = 100,
        slides = items.children,
        slidesLength = sliderItems.childElementCount,
        firstSlide = items.firstElementChild,
        lastSlide = items.lastElementChild,
        cloneFirst = firstSlide.cloneNode(true),
        cloneLast = lastSlide.cloneNode(true),
        allowShift = true;
    var index = 0;
    window.index = index;
    window.slidesLength = slidesLength
        // Clone first and last slide
    items.appendChild(cloneFirst);
    items.insertBefore(cloneLast, firstSlide);

    const dragStart = (e) => {
        e = e || window.event;
        console.log(e)
        e.preventDefault();
        posInitial = items.offsetLeft;
        if (e.type == 'touchstart') {
            posX1 = e.touches[0].clientX;
        } else {
            posX1 = e.clientX;
            document.onmousemove = dragAction;
            document.onmouseup = dragEnd;

        }
    }
    const dragAction = (e) => {
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
    const dragEnd = (e) => {
        posFinal = items.offsetLeft;
        if (posFinal - posInitial < -threshold) {
            shiftSlide(1);
        } else if (posFinal - posInitial > threshold) {
            shiftSlide(-1);
        } else {
            items.style.left = (posInitial) + "px";
        }
        e.preventDefault()
        console.log(document.onmouseup, document.onmousemove)
        document.onmouseup = false;
        document.onmousemove = false;
    }
    const shiftSlide = (dir) => {
        items.classList.add('shifting');
        console.log('index shiftSlide', index)
        if (allowShift) {
            document.querySelector('.selected').classList.remove('selected');
            if (dir == 1) {
                if (index === ind.childElementCount - 1) {

                    ind.firstElementChild.classList.add('selected');
                } else {

                    ind.children[index + 1].classList.add('selected');
                }
                items.style.left = -((index + 2) * 100) + '%';
                index++;
            } else if (dir == -1) {
                if (index === 0) {
                    ind.children[ind.childElementCount - 1].classList.add('selected');
                } else {

                    ind.children[index - 1].classList.add('selected');
                }
                items.style.left = -(index * 100) + '%';

                index--;
            }
        };
        allowShift = false;
    }
    const checkIndex = () => {
            items.classList.remove('shifting');
            console.log('index check', index)
            if (index == -1) {
                items.style.left = -(ind.children.length * 100) + "%";

                index = ind.children.length - 1;
            }
            if (index == ind.children.length) {
                items.style.left = -(1 * 100) + "%";
                index = 0;
            }
            allowShift = true;
        }
        // Click events
    function getEventTarget(e) {
        e = e || window.event;
        return e.target;
    }
    ind.addEventListener("click", function(event) {
        let target = getEventTarget(event);
        let li = target.closest('li'); // get reference
        if (li == null) {
            target.preventDefault
        } else {
            document.querySelector('.selected').classList.remove('selected');
            let nodes = Array.from(ind.children); // get array
            let index3 = nodes.indexOf(li);
            li.classList.add('selected');
            items.classList.add('shifting');
            items.style.left = -((index3 + 1) * 100) + "%";

            index = index3;
            console.log('index addEventListener', index)
            alert(index3);
        }
    });
    /*-------------------Key events------------------ */
    document.addEventListener('keydown', function(e) {
        switch (e.code) {
            case "KeyA":
            case "ArrowLeft":
                shiftSlide(-1);
                break;
            case "KeyD":
            case "ArrowRight":
                nextT();
                break;
        }
    });
    /*-------------------Click events----------------- */
    prev.addEventListener('click', function() {
        shiftSlide(-1)

    });
    const nextT = () => {

        shiftSlide(1)
    }
    next.addEventListener('click', nextT);
    // Mouse events
    items.onmousedown = dragStart;
    // Touch events
    items.addEventListener('touchstart', dragStart);
    items.addEventListener('touchend', dragEnd);
    items.addEventListener('touchmove', dragAction);
    // Transition events
    items.addEventListener('transitionend', checkIndex);
    //setInterval(nextT, 5000)
}
/*------add images--------- */
//buttonAdd.disabled = true
// const log = document.getElementById('values');
// const parval = document.getElementById('val');
// imageInputUrl.addEventListener('input', updateValue);
// function updateValue(e, url) {
//     //log.textContent = e.target.value;
//     if (e.target.value.trim() != '') {
//         (async () => {
//             let response = await fetch(e.target.value.trim());
//             console.log(response);
//             if (response.ok) {
//                 console.log("ok: " + response.status);
//             } else {
//                 console.log("HTTP-Error: " + response.status);
//             }
//         })()
//     } else {
//         console.log('epit')
//     }
// }
const imageInputUrl = document.getElementById('url');
const buttonAdd = document.getElementById('add')
buttonAdd.addEventListener("click", e => {
        var chiled1 = sliderItems.lastElementChild.cloneNode(true);
        chiled1.children[0].children[0].setAttribute('id', 'image');
        sliderItems.insertBefore(chiled1, sliderItems.children[sliderItems.childElementCount - 2])
        let image = document.getElementById("image");
        /*-------------check status url--------- */

        if (imageInputUrl.value) {
            (async() => {
                let response = await fetch(imageInputUrl.value);

                if (response.ok) { // if HTTP-status is 200-299
                    // get the response body (the method explained below)
                    //let json = await response.json();
                    image.src = imageInputUrl.value.trim();
                    image.removeAttribute('id', 'image')
                    var copy1 = indicatots_ol.lastElementChild.cloneNode()
                    copy1.setAttribute('class', 'indicator-item')
                    indicatots_ol.insertBefore(copy1, indicatots_ol.children[indicatots_ol.childElementCount - 2])
                    alert("ok: " + response.status);
                } else {
                    alert("HTTP-Error: " + response.status);
                }
            })()
        }
    })
    /*const input = document.querySelector('input');


    input.addEventListener('input', updateValue);

    function updateValue(e) {
        return e.target.value;
    }*/
slide(sliderItems, prev, next, indicatots_ol);
/*----------------set image in localStorage-----------*/
// const jojo = document.createElement('span'),
//     myButton = document.createElement('button'),
//     myButton1 = document.querySelector('button'),
//     myHeading = document.querySelector('span');
// document.body.appendChild(jojo);
// myButton1.setAttribute('id', 'clear')

// function setUserName() {
//     var myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla is cool, ' + myName;
// }
// if (!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     var storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla is cool, ' + storedName;
// }
// myButton.onclick = function () {
//     setUserName();
// }
// myButton1.onclick = function () {
//     localStorage.clear();
//     myHeading.remove();
// }