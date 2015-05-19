var createElement = require('./createElement');
var hasClass = require('./hasClass');
var addClass = require('./addClass');
var setStyle = require('./setStyle');
var empty = require('./empty');

var domLite = function(target) {

    return {
        hasClass: hasClass.bind(target),
        addClass: addClass.bind(target),
        setStyle: setStyle.bind(target),
        empty: empty.bind(target)
    }
};

domLite.createElement = createElement;


module.exports = domLite;