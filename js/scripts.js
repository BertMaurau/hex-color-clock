getTime();

/**
 * -----------------------------------------------------------
 * LPAD the string
 * -----------------------------------------------------------
 * @param {*} pad string
 * @param {integer} length the pad
 * @return {string} padded string
 */
String.prototype.lpad = function(padString, length) {
    var str = this;
    while (str.length < length)
        str = padString + str;
    return str;
}

/**
 * -----------------------------------------------------------
 * Get the hours, minutes, seconds and create a hex string
 * -----------------------------------------------------------
 */
function getTime() {

    var date, year, month, day, hours, minutes, seconds;

    date = new Date();

    year = date.getFullYear();
    month = ("00" + (date.getMonth() + 1)).slice(-2);
    day = ("00" + date.getDate()).slice(-2);

    hours = ("00" + date.getHours()).slice(-2)
    minutes = ("00" + date.getMinutes()).slice(-2)
    seconds = ("00" + date.getSeconds()).slice(-2)

    var hex = '#' + hours + minutes + seconds;

    updateTime(hours, minutes, seconds);
    updateDate(year + '-' + month + '-' + day);
    updateCode(hex);
    updateBackground(hex);


    // Start the interval
    setTimeout(getTime, 1000);
}

/**
 * -----------------------------------------------------------
 * Update the Time fields
 * -----------------------------------------------------------
 * @param {string} hours 
 * @param {string} minutes 
 * @param {string} seconds 
 */
function updateTime(hours, minutes, seconds) {

    document.getElementById("time-hours").innerHTML = hours;
    document.getElementById("time-minutes").innerHTML = minutes;
    document.getElementById("time-seconds").innerHTML = seconds;

}

/**
 * -----------------------------------------------------------
 * Update the Date field
 * -----------------------------------------------------------
 * @param {string} dateString
 */
function updateDate(dateString) {
    // Set the background color
    document.getElementById("date").innerHTML = dateString;
}

/**
 * -----------------------------------------------------------
 * Update the background color
 * -----------------------------------------------------------
 * @param {string} hexColor
 */
function updateBackground(hexColor) {
    // Set the background color
    document.body.style.background = hexColor;
}

/**
 * -----------------------------------------------------------
 * Update the Code display
 * -----------------------------------------------------------
 * @param {string} hexColor
 */
function updateCode(hexColor) {

    document.getElementById("code-hex").innerHTML = hexColor;

    document.getElementById("code-rgba").innerHTML = hexToRgbA(hexColor);
}

/**
 * -----------------------------------------------------------
 * Convert a Hex Colorstring to RGBA values
 * -----------------------------------------------------------
 * @param {string} hex 
 * @return {string} rgba
 */
function hexToRgbA(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length == 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)';
    }
    throw new Error('Bad Hex');
}