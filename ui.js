class RENDEREL {
    containerEl = document.querySelector('#users-container');
    postsContainerEl = document.querySelector('#posts-container');
    blockEl = 'div';
    titleEl = 'h4';
    paragraphEl = 'p';
    btnEl = 'button';
    blockClass = 'user-block';
    postClass = 'post-block';
    btnClass = 'show-posts-btn';
    paragraphClass = 'user-paragraph';
    btnTxt = 'Show posts';

    createUser(name, id) {
        this.containerEl.insertAdjacentHTML('beforeend', `<${this.blockEl} class = "${this.blockClass}">
            <${this.paragraphEl} class = "${this.paragraphClass}">${name}</${this.paragraphEl}>
            <${this.btnEl} class = "${this.btnClass}" id = "${id}">${this.btnTxt}</${this.btnEl}>
            </${this.blockEl}>`)
    }

    createUserPosts(title, body) {
        this.postsContainerEl.insertAdjacentHTML('beforeend', `<${this.blockEl} class = "${this.postClass}">
        <${this.titleEl}>${title}</${this.titleEl}>
        <${this.paragraphEl} class = "${this.paragraphClass}">${body}</${this.paragraphEl}>
        </${this.blockEl}>`)
    }

    clearPosts() {
        this.postsContainerEl.innerHTML = '';
    }
}
