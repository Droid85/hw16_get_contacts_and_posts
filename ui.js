class RENDEREL {
    containerEl = document.querySelector('#cont');
    blockEl = 'div';
    paragraphEl = 'p';
    btnEl = 'button';
    blockClass = 'user-block';
    btnClass = 'show-posts-btn';
    paragraphClass = 'user-paragraph';
    btnTxt = 'Show posts';

    createUser(name, id) {
        this.containerEl.insertAdjacentHTML('beforeend', `<${this.blockEl} class = "${this.blockClass}">
            <${this.paragraphEl} class = "${this.paragraphClass}">${name}</${this.paragraphEl}>
            <${this.btnEl} class = "${this.btnClass}" id = "${id}">${this.btnTxt}</${this.btnEl}>
            </${this.blockEl}>`)
    }
}
