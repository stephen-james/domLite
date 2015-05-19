var empty = function empty() {
    var target = this;

    // clear out the target element
    while(target.firstChild) {
        target.removeChild(target.firstChild);
    }
};

module.exports = empty;