

window.onload = function digital_fn(){
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function(event){
        collapse.classList.toggle('active')
        // console.log(toggle);
    });

    // masonry js cdn for grid layouts
    let grid = document.querySelector("#site-main .recent-work-area .images-flex")
    let msnry = new Masonry(grid,{
        itemSelector : '.flex-item',
        gutter : 100,
        fitWidth : true
    })
}


// rellax scroll effect code
var rellax = new Rellax('.rellax',{
    center: true
})