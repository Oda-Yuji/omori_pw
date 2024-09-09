function show() 
{
    document.getElementById('preto')
        .style.display = "flex";
    document.getElementById('algo')
        .style.display = "flex";
    document.getElementById('logo')
        .style.display = "none";
}
function unshow() 
{
    document.getElementById('preto')
        .style.display = "none";
    document.getElementById('algo')
        .style.display = "none";
    document.getElementById('logo')
        .style.display = "flex";
}
function unshow2() 
{
    document.getElementById('porta')
        .style.display = "none";
    document.getElementById('trailer')
        .style.display = "block";
    document.getElementById('trailer').play();
}