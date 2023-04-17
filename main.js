"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_js_1 = require("./data.js");
var serieTab = document.getElementById('series');
var seasonAvg = document.getElementById('avg');
seasonAvg.innerHTML = "Seasons average: ".concat(calcSeasonAvg());
genSeriesTable(data_js_1.series);
function genSeriesTable(series) {
    series.forEach(function (serie) {
        var tRow = document.createElement('tr');
        tRow.innerHTML = "<td>".concat(serie.id, "</td>\n                          <td>").concat(serie.name, "</td>\n                          <td>").concat(serie.channel, "</td>\n                          <td>").concat(serie.seasons, "</td>");
        serieTab.appendChild(tRow);
    });
}
function calcSeasonAvg() {
    var numSeasons = 0;
    data_js_1.series.forEach(function (serie) { return numSeasons += serie.seasons; });
    var prom = numSeasons / data_js_1.series.length;
    return prom;
}
