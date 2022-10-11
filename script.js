const sendButton = document.querySelector('button');
const input = document.querySelector('input');

sendButton.onclick = function() {
    sendButton.innerHTML = 'Thanks!';
    sendButton.style.backgroundColor = 'lightgreen';
    sendButton.style.color = 'black';
    sendButton.style.border = 'lightgreen';
    input.innerHTML = 'Thank You!';
}