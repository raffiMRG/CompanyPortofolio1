// media mobile phone script

const hamburger = document.querySelector('.navbar-extra')

const navbarNav = document.querySelector('.navbar-nav')

hamburger.onclick = () => {
    navbarNav.classList.toggle('navbar-nav-active')
}

// tutup navbar jika di klik di tempat lain
document.addEventListener('click', function(e){
    // if(!hamburger.contains())
    // console.log(!hamburger.contains(e.target));
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('navbar-nav-active')
    }
})