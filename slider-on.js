let controlPrev = document.querySelector('.control-prev'),
    controlNext = document.querySelector('.control-next'),
    productBlockOne = document.querySelector('.one');


function slideron(prev, next, continer) {
    let index = 0;

    function next1() {

        if (index + 4 < continer.childElementCount) {
            prev.classList.remove('disabled')
            continer.style.transform = `translateX(-${(index+1)* 25}%)`;
            index++
            if (index + 4 == continer.childElementCount) {
                next.classList.add('disabled')
            }

        } else {
            next.classList.add('disabled')
        }

    }

    function prev1() {

        if (index > 0) {
            next.classList.remove('disabled')
            continer.style.transform = `translateX(-${(index-1)* 25}%)`;
            index--
            if (index == 0) {
                prev.classList.add('disabled')
            }

        } else {
            prev.classList.add('disabled')
        }

    }
    console.log(index)
    next.addEventListener('click', next1);
    prev.addEventListener('click', prev1);
}

slideron(controlPrev, controlNext, productBlockOne)





/*
controlPrev.addEventListener("click", function (event) {
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
});*/