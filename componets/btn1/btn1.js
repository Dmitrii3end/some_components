document.querySelector('#btn1').addEventListener('mousemove', e => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;

    document.querySelector('#btn1').style.setProperty('--x-btn1', x + 'deg');
})