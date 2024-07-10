const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let fix = document.querySelector('#fixed')
let elem = document.querySelector('#element-container')

elem.addEventListener('mouseenter', function(){
    fix.style.display = 'block'
})
elem.addEventListener('mouseleave',function(){
    fix.style.display = 'none'
})
document.querySelectorAll('.element').forEach(function(e){
    e.addEventListener('mouseenter',function(){
        const image = e.getAttribute('data-image')
         fix.style.backgroundImage = `url(${image})`
    })
})