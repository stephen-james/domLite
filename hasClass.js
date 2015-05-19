module.exports = function(className) {
    var classExpression = new RegExp('(^|\\s)' + className + '($|\\s)', 'g');

    return this.className && this.className.match(classExpression);
};
