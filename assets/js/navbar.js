const checkNav = () => {
    if (document.documentElement.scrollTop >= 51) {
        document.querySelector('.page-tools').classList.add('is-scrolled');
        if (document.querySelector('.page-tools-inner')) {
            document.querySelector('.page-tools-inner').classList.add('is-scrolled');
        }
    } else {
        document.querySelector('.page-tools').classList.remove('is-scrolled');
        if (document.querySelector('.page-tools-inner')) {
            document.querySelector('.page-tools-inner').classList.remove('is-scrolled');
        }
    }

    window.requestAnimationFrame(checkNav);
}

checkNav();
