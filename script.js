const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const outside = document.getElementById('outside-box');
outside.style.display = 'none';
btnOpen.addEventListener('click', function () {
outside.style.display = 'block';
})
btnClose.addEventListener('click', function () {
    outside.style.display = 'none';
})
