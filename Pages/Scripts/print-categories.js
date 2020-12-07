let catList = [ 'Home', 'Games', 'Family', 'Food', 'Beach', 'Summer', 'Winter', ]

let formDiv = document.getElementById('category-list');
let counter = 1;
catList.forEach(p => {
    let newInput = document.createElement('input');
    let newTypeAttribute = document.createAttribute('type');
    let newNameAttribute = document.createAttribute('name');
    let newValueAttribute = document.createAttribute('value');
    let newLabel = document.createElement('label');
    let newForAttribute = document.createAttribute('for');
    newTypeAttribute.value = 'checkbox';
    newNameAttribute.value = `category${counter}`;
    newForAttribute.value = `category${counter}`
    newValueAttribute.value = p;
    
    newInput.setAttributeNode(newTypeAttribute);
    newInput.id = `category${counter}`;
    newInput.setAttributeNode(newNameAttribute);
    newInput.setAttributeNode(newValueAttribute);
    formDiv.appendChild(newInput);

    newLabel.setAttributeNode(newForAttribute);
    newLabel.innerText = p;
    formDiv.appendChild(newLabel);
    formDiv.appendChild(document.createElement('br'))

    counter += 1;
});

