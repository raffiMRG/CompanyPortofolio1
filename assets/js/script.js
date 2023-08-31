const jointChat = document.querySelector('.joint-chat');

const circle = jointChat.querySelector('.circle');

const message = document.querySelector('.message');

message.addEventListener('mouseover', function(e){
    e.target.style.cursor ='context-menu';
});

message.addEventListener('click', function(e){
    // alert('ok')
    e.stopPropagation();
});

circle.addEventListener('click', function(e){
    circle.classList.toggle('size');
    // circle.style.transition = '.3s width, .3s height';
});

