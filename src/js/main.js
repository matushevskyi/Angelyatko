// Off-canvas menu

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// Sticky navbar

let sticky = document.querySelector('.navbar-sticky');

if (sticky.style.position !== 'sticky') {
    let stickyTop = sticky.offsetTop;

    document.addEventListener('scroll', function () {
        window.scrollY >= stickyTop ?
            sticky.classList.add('fixed') :
            sticky.classList.remove('fixed');
    });
}