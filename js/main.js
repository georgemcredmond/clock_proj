function startclock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout (startclock, 1000);}
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
};

function timeStuff() {
    setInterval(function() {
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        if (h<10) { h = "0" + h; }
        if (m<10) { m = "0" + m; }
        if (s<10) { s = "0" + s; }
        var hex = "#" + h + m + s;
        if (12 > h && h > 0) {
            //morning
            document.getElementById('greeting').innerHTML = "Good Morning!";
        } else if (18 > h && h > 12) {
            //afternoon
            document.getElementById('greeting').innerHTML = "Good Afternoon!";
        } else if (h > 18) {
            //night
            document.getElementById('greeting').innerHTML = "Good Evening!";
        }
        document.getElementById('timedigital').innerHTML = (h + ":" + m + ":" + s);
    }, 1000)
}


timeStuff();