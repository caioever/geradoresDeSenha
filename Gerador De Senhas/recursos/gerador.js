function garadorDeSenha(tamanho) {
    var caracteres = "abcdefghijklmnopqrstuvwxyzç!@#$%^&*()-+<>ABCDEFGHIJKLMNOPÇ1234567890";
    var resultado = "";
    for (var x = 0; x < tamanho; x++) {
        var i = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres.charAt(i);
    }
    return resultado;
}

function gerar() {
    formulario.saida.value = garadorDeSenha(formulario.tamanho.value);
}

var clipboard = new Clipboard('.btn');
clipboard.on('success', function(e) {
    console.log(e);
});
clipboard.on('error', function(e) {
    console.log(e);
});
