// 1. Change Text Content Dynamically
const greetingElement = document.getElementById('greeting');
const changeTextButton = document.getElementById('changeTextBtn');

changeTextButton.addEventListener('click', function() {
    if (greetingElement.textContent === 'Hello there!') {
        greetingElement.textContent = 'Greetings from Kitengela!';
    } else {
        greetingElement.textContent = 'Hello there!';
    }
});

// 2. Modify CSS Styles via JavaScript
const contentArea = document.getElementById('content-area');
const changeStyleButton = document.getElementById('changeStyleBtn');

changeStyleButton.addEventListener('click', function() {
    contentArea.style.backgroundColor = 'lightblue';
    contentArea.style.color = 'darkblue';
    contentArea.style.border = '2px solid blue';
    contentArea.style.padding = '25px';
});

// 3. Add or Remove an Element When a Button is Clicked
const addElementButton = document.getElementById('addElementBtn');
const dynamicElementsDiv = document.getElementById('dynamic-elements');
let paragraphCount = 0;

addElementButton.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `New paragraph added (${++paragraphCount}) at ${new Date().toLocaleTimeString()}`;
    newParagraph.classList.add('new-paragraph');

    // Add a button to remove this paragraph
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        dynamicElementsDiv.removeChild(newParagraph);
    });

    newParagraph.appendChild(removeButton);
    dynamicElementsDiv.appendChild(newParagraph);
});