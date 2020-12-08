let catList = [ 'Home', 'Games', 'Family', 'Food', 'Beach', 'Summer', 'Winter', ]

window.addEventListener('load', function() {
    let selectList = document.querySelector('#category-list');
    catList.forEach(cat => {
        selectList.appendChild(document.createElement('p')).outerHTML = `
        <option id="${cat}" value="${cat}"></option>
        `;
    });
});