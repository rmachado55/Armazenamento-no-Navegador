// Session Storage
    document.getElementById('setSessionBtn').addEventListener('click', function (){
    const input = document.getElementById('session')
    window.sessionStorage.setItem('info', input.value)
    input.value = ""
})

    document.getElementById('clrSessionBtn').addEventListener('click', function (){
    window.sessionStorage.clear()
    alert('SESSION STORAGE apagado.')
})

    document.getElementById('readSessionBtn').addEventListener('click', function () {
    const info = sessionStorage.getItem('info')
    if(info === "" || info === null){
    alert(`Não há informação salva em SESSION STORAGE no momento.\n
    Utilize o campo abaixo para armazenar uma informação.`)}else{
    alert(`Você armazenou: "${info}" em uma SESSION STORAGE`)}
})

// Local Storage

document.getElementById('setLocalBtn').addEventListener('click', function (){
    const input = document.getElementById('local')
    window.localStorage.setItem('local', input.value)
    input.value = ""
})

document.getElementById('clrLocalBtn').addEventListener('click', function (){
    window.localStorage.clear()
    alert("LOCAL STORAGE apagado")
})

document.getElementById('readLocalBtn').addEventListener('click', function () {
    const t = localStorage.getItem('local')
    if(t === "" || t === null){
    alert(`Não há informação salva em LOCAL STORAGE no momento.\n
    Utilize o campo abaixo para armazenar uma informação.`)}else{
    alert(`Você armazenou: "${t}" em LOCAL STORAGE.`)}
})

// Cookies

document.getElementById('setCookieBtn').addEventListener('click', function (){
    const input = document.getElementById('cookie')
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2022,12,12) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
})

document.getElementById('clrCookieBtn').addEventListener('click', function (){
    const cookie = 'info=' + ';'
    const expiration = 'expires=' + new Date(1900,12,12) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    alert("COOKIES apagados")
})

document.getElementById('readCookieBtn').addEventListener('click', function(){
    const c = document.cookie
    if(c === undefined || c === ""){
        alert(`Não há informações salvas em COOKIES no momento.\n
        Utilize o campo abaixo para armazenar uma informação.`)}else{
        alert(`Você armazenou ${document.cookie.split("info=",)} em COOKIES.`)
        }
    } 
)

