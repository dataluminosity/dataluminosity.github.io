﻿/* :::::::::::::::::::::::::::::::::::::::::::::::::::
	
DINING MISC
	
:::::::::::::::::::::::::::::::::::::::::::::::::::*/

function ProcessUrl(u) {
    var parts = u.split("/");

    for (i = 0; i < parts.length; i++) {
        if (parts[i].length == 10 && parts[i].charAt(4) == '-' && parts[i].charAt(7) == '-') {
            var d = new Date(parts[i].substring(0, 4), parts[i].substring(5, 7) - 1, parts[i].substring(8, 10), 0, 0, 0, 0);
            var t = new Date();

            var g = (d - new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0)) / 86400000;

            if (g == 0) {
                parts[i] = 'Today';
            } else if (g == 1) {
                parts[i] = 'Tomorrow';
            } else if (g == -1) {
                parts[i] = 'Yesterday';
            } else if (g > 0) {
                parts[i] = 'Date+' + g.toString();
            } else {
                parts[i] = 'Date' + g.toString();
            }
        }
    }

    return parts.join("/");
}