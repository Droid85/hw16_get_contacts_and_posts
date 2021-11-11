init();

function init() {
    const http = new HTTP();
    const ui = new RENDEREL();

    ui.containerEl.addEventListener('click', onClickShowBtn)

    http.get(ENVIRONMENT.USERS.getUsers)
    .then(response => response.data)
    .then(rdata => {
        rdata.forEach(element => {
            ui.createUser(element.name, element.id)
        });
        return rdata
    })
    .catch(error => console.log('USERS ERROR', error))
//get posts
    http.get(ENVIRONMENT.USERS.getPosts + )
    .then(response => console.log(response))
    .catch(error => console.log('POSTS ERROR', error))
}

function onClickShowBtn(e) {
    if (e.target.classList.contains('show-posts-btn')) {
        return e.target.id
    }
}