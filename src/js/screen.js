export default class Screen {
    constructor(el) {
        this.DOM = {el: el};
        this.DOM.full = this.DOM.el.querySelector('.screen--full');
    }
}