let shareBtn = document.querySelector('.btn');

shareBtn.addEventListener('click', function(e) {
    this.parentElement.children[0].classList.toggle('modal-open');
    this.classList.toggle('clicked');
})