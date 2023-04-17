import {Serie} from './serie.js';
import {series} from './data.js';

let serieTab: HTMLElement = document.getElementById('series');
let seasonAvg: HTMLElement = document.getElementById('avg');
seasonAvg.innerHTML = `Seasons average: ${calcSeasonAvg()}`;
genSeriesTable(series);

function genSeriesTable(series: Serie[]){
    series.forEach(serie => {
        let tRow = document.createElement('tr');
        tRow.innerHTML = `<td>${serie.id}</td>
                          <td>${serie.name}</td>
                          <td>${serie.channel}</td>
                          <td>${serie.seasons}</td>`; 
        serieTab.appendChild(tRow);
    });
}

function calcSeasonAvg () {
    let numSeasons = 0;
    series.forEach((serie) =>  numSeasons += serie.seasons);
    let prom = numSeasons/series.length;
    return prom;
}