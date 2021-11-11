init();

function init() {
    const http = new HTTP();
    const ui = new RENDEREL();
    http.get(ENVIRONMENT.USERS.getUsers)
    .then(response => response.data)
    .then(rdata => {
        rdata.forEach(element => {
            ui.createUser(element.name, element.id)
        });
        return rdata
    })
    /* .then(r => {
        ui.containerEl.addEventListener('click', onClickShowBtn)

        function onClickShowBtn(e) {
            for (let i = 0; i < r.length; i++) {
                if (e.target.id && r[i].id && e.target.id === r[i].id) {
                    return console.log(e.target.id)
                }
            }
        }
    }) */
    .catch(error => console.log('ERROR', error))

    ui.containerEl.addEventListener('click', onClickShowBtn)

    function onClickShowBtn(e) {
        const elements = ui.containerEl.children;
        for (let i = 0; i < elements.length; i++) {
            if (e.target.id && elements[i].id && elements[i].id === e.target.id) {
                return console.log(e.target)
            }
        }
    }
}
