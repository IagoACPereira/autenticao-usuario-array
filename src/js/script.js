const usuarios = Array(
    {user: 'admin@admin.com.br', senha: 'admin@admin', url: './src/html/pg-admin.html'},
    {user: 'user@user.com.br', senha: 'user@user', url: './src/html/pg-user.html'}
);

const entrada_usuario = document.querySelector('#usuario');
const entrada_senha = document.querySelector('#senha');
const btn_submit = document.querySelector('#btn-submit');

btn_submit.addEventListener('click', () => {
    usuarios.forEach(autenticacao);
});

const autenticacao = (item, indice, array) => {
    if(entrada_usuario.value == item['user'] && entrada_senha.value == item['senha']) {
        location.href = item['url'];
    }
}