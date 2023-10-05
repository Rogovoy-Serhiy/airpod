const chooseColor = document.querySelectorAll('.choose_color-btn');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function(el){
    el.addEventListener('click', open)
})

function open(ev){
    const target = ev.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`)

    chooseColor.forEach(function(item){
        item.classList.remove('choose_color-btn-active');
    })

    target.classList.add('choose_color-btn-active');

    contentItem.forEach(function(item){
        item.classList.remove('content-item-active');
    })

    contentActive.forEach(function(item){
        item.classList.add('content-item-active');
    })
}