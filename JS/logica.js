window.addEventListener("load",inicio,true);

function inicio(){
    document.getElementById("cadena").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    }, true);
    
    document.getElementById("Cifrar").addEventListener("click",function(){  
        var texto = document.getElementById("cadena").value;
        var desplazamiento = document.getElementById("desplazamiento").value;               
        document.getElementById("resultado").value = cifrar2(texto, desplazamiento);
    },true);
    document.getElementById("Descifrar").addEventListener("click",function(){  
        var texto = document.getElementById("cadena").value;
        var desplazamiento = document.getElementById("desplazamiento").value;                               
        document.getElementById("resultado").value = descifrar(texto, desplazamiento);
    },true);
}

function cifrar(texto, desplazamiento) {
    if (!texto) 
        return ''; 
    const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    desplazamiento = (desplazamiento % 26 + 26) % 26; 
    return texto.replace(/[A-\u00d1-Z]/ig, c => letras[(letras.indexOf(c) + desplazamiento) % 26]);
}

function descifrar(texto, desplazamiento) {
    if (!texto) 
        return ''; 
    const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    desplazamiento = (desplazamiento % 26 - 26) % 26; 
    return texto.replace(/[A-\u00d1-Z]/ig, c => letras[(letras.indexOf(c) - desplazamiento) % 26]);
}

function cifrar2(texto, desplazamiento) {
    var resultado='';
    var letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    desplazamiento = (desplazamiento % 26 + 26) % 26; 
    
    if (texto){
        for (var i=0; i<texto.length; ++i){
            if (letras.indexOf(texto[i])!=-1)
            { 
                var posicion=((letras.indexOf(texto[i])+desplazamiento) % 26);
                resultado+=letras[posicion];
            }
            else
                resultado+=texto[i];
        }
    }
    return resultado;
}

