// temperature = (fahrenheit - 32) * 5/9

function convert() {
    let f = document.getElementById('num').value;
    let x = document.getElementById('temp');
    let t = (f - 32) * 5/9;

    if (f === '') {
        alert('Please enter a numerical value');
        return false;
    } else if (isNaN(f)) {
        alert('Not a number');
        return false;
    }  

    x.innerHTML = t;
}