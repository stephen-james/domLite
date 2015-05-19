// creates a single element with syntax similar to jade/haml/zen syntax
// eg createElement('div#mySlider.someClass') creates a div element with id
// mySlider, and class someClass.
var createElement = function(elementZen, parent) {
    var elementType = elementZen.replace(/[\.#]/, '|').split('|')[0];
    var classesAndIds = elementZen.match(/([\.#][a-z\-\_]*)/gi);
    var element = document.createElement(elementType);
    var i = 0;
    var modifier;
    var classDelimiter;

    if (classesAndIds) {
        for (; i < classesAndIds.length; ++i) {
            modifier = classesAndIds[i];

            if (modifier.length > 1 && modifier[0] === '.') {
                // its a class modifier
                classDelimiter = element.className.length ? ' ' : '';
                element.className += classDelimiter + modifier.slice(1);
            } else if (modifier[0] === '#') {
                // its an id modifier
                element.setAttribute("id", modifier.slice(1));
            }
        }
    }

    if (parent) {
        parent.appendChild(element);
    }

    return element;
};

module.exports = createElement;