function salvarToken(token){
    // Aqui salvo o usuario na Store
    localStorage.setItem('token', token)
}

function obterToken(token){
    // Obtenho o token da store
   return localStorage.getItem("token");
}

function salvarUsuario(usuario){
    // Aqui pego o usuario0 em obj e converto ele para json e salvo n a store.
   return localStorage.setItem('usuario', JSON.stringify(usuario));
}

function obterUsuario(usuario){
    // pego o usuario como json na store e converto ele para objeto e devolvo no return.
    let usuarioStore = localStorage.getItem("usuario");
    return JSON.parse(usuarioStore);
}

function sairDoSistema(){
    localStorage.removeItem('token'); 
    localStorage.removeItem('usuario');
    window.open('login.html', '_self');
}
