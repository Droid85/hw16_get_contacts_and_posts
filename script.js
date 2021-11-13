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

    function onClickShowBtn(e) {
        if (e.target.classList.contains('show-posts-btn')) {
            ui.clearPosts()
            let userId = e.target.id;
            http.get(ENVIRONMENT.USERS.getPosts + userId)
                .then(response => response.data)
                .then(postData => {
                    postData.forEach(element => {
                        ui.createUserPosts(element.title, element.body)
                    })
                    return postData
                })
                .catch(error => console.log('POSTS ERROR', error))
        }
    }
}
