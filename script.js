function volume_sphere() {
    var r = document.getElementById("radius").value;
    r = parseFloat(r);

    var v = (r >= 0 && !isNaN(r)) ? ((4 / 3) * Math.PI * r * r * r).toFixed(4) : NaN;

    document.getElementById("volume").value = v;
    return false;
}

window.onload = function () {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};
