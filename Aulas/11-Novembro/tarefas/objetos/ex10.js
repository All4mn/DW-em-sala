const usuarios = [
    usuario1 = {
        nome:"Allan",
        idade:17,
        email:"allan@gmail.com",
    },
    usuario2 = {
        nome:"Andre",
        idade:16,
        email:"andre@gmail.com",
    }
]
const copia = usuarios.map( usuario => { usuariocp = usuario
    delete usuariocp.nome
    return usuariocp})
console.log(copia)