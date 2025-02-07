document.getElementById('imagen_tigre').addEventListener('click', function(){

    let imagen = document.getElementById('img_jumpscare');
    let audio = document.getElementById('sound_jumpscare')

    imagen.style.display = 'block';
    audio.play();

    setTimeout(() =>{
        imagen.style.display = 'none';
    }, 2000)
})