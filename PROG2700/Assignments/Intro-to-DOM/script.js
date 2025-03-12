
function updateContent() {
    
    document.getElementById('myParagraph').textContent = 'Welcome to my website!';

    document.getElementById('myDiv').style.backgroundColor = 'lightblue';

    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    document.getElementById('myList').appendChild(newItem);
}
document.getElementById('updateButton').addEventListener('click', updateContent);