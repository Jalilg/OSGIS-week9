var zipcodeData;
var zipcodePopData;

zipcodeURL = ''
zipcodePopURL = ''

var updateBarChart = function(vaccData){
    updateBarChart.data.datasets[0] = vaccData.partialy_vaccinated
    
}

$.when.($.ajax) {

zipcodeData = JSON.parse(zipcodeRes[0])
zipcodePopData = JSON.parse(zipcodePopRes[0])

L.geoJSON(zipcodeData, {


})

}