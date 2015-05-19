module.exports = function(className) {
    var classDelimiter = this.className && this.className.length ? ' ' : '';

    this.className += classDelimiter + className;
}
