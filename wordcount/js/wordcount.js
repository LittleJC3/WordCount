
function count_words(evt) {

    evt = document.getElementById('inputText').value;
    
    document.getElementById('numberOfWords').value = evt.trim().split(/\s+/).length;
}

window.onload = function (evt) {
    if (document && document.getElementById) {
        document.getElementById('btnConvert').onclick = count_words;
    }
}
