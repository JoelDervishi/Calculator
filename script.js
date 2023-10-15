function addChar(n){
    let d1 = document.getElementById("d1");
    d1.value += n;
}
function AC(){
    let d1 = document.getElementById("d1");
    d1.value = '';
}
function equal(){
    let d1 = document.getElementById("d1");
    d1.value = eval(d1.value.replace('√', "Math.sqrt"));
}
function dot(n){
    let d1 = document.getElementById("d1");
    let d1a = d1.value.split(/[+]|[-]|[*]|[/]/);
    if(d1a[d1a.length - 1].includes('.') === true)
        return;
    d1.value += n;
}
function sqrt(){
    let d1 = document.getElementById("d1");
    d1.value = `√(${d1.value})`;
}
function del(){
    let d1 = document.getElementById("d1");
    d1.value = d1.value.slice(0,-1);
}