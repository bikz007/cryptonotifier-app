const chart=document.getElementById("lineChart")
var line = new Chart(chart, {
    type: 'line',
    data:{
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            fill:false,
            lineTension:0.1,

            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },
    options: {
        
    }
});