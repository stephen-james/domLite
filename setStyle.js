module.exports = function(style, value) {
    var i = 0;
    var len = style.length;

    if (len) {
        for (; i < len; i++) {
            this.style[style[i]] = value;
        }
    } else {
        this.style = value;
    };
}
