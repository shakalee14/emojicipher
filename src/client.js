var input = document.querySelector('#my-text-box');

var messages = document.querySelector('#messages');

input.addEventListener('input', function(){
    messages.textContent += 'input changed to: ' + input.value + '\n';
});