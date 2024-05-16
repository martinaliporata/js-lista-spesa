const shoppingList = ['pasta', 'pesce', 'carne', 'fagioli', 'cartore', 'torta']
const ulElement = document.querySelector('ul');

let index = 0;

while (index < shoppingList.length) {
    const element = document.createElement('li');
    element.append(shoppingList[index]);
    ulElement.appendChild(element);
}