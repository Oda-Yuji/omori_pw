function show() 
{
    document.body.style.overflowY = "hidden";
    document.getElementById('cg')
        .style.height = "100vh";
    document.getElementById('cg')
        .style.minHeight = "100vh";
    document.getElementById('cg')
        .style.maxHeight = "100vh";
    document.getElementById('preto')
        .style.display = "flex";
    document.getElementById('algo')
        .style.display = "flex";
    document.getElementById('logo')
        .style.display = "none";
    
}
function unshow() 
{
    document.body.style.overflowY = "scroll";
    document.getElementById('cg')
        .style.height = "100%";
    document.getElementById('cg')
        .style.minHeight = "100vh";
    document.getElementById('cg')
        .style.maxHeight = "100%";
    document.getElementById('preto')
        .style.display = "none";
    document.getElementById('algo')
        .style.display = "none";
    document.getElementById('logo')
        .style.display = "flex";
}

(function(window)
{
    function video()
    {
        var v = document.getElementById('cole');
        v.addEventListener('mouseover', function() {this.controls = true}, false);
        v.addEventListener('mouseout', function() {this.controls = false}, false);
    }

    window.addEventListener('load', video, false);
})(window)
