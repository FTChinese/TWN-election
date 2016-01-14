$(function () {
    $('#chart1').highcharts({
       title: {
            text: '近年关键选举国民两党得票率'
        },
       credits: {
            text: '来源：台湾中央选举委员会',
            href: 'http://www.ftchinese.com'
        },
        chart: {
            backgroundColor: '#fff1e0',
            type: 'line',
           
        },
        xAxis: {
                
            categories:['1995 立委','98’ 立委','2000 总统','01’ 立委','04’ 总统','04’ 立委','08’ 立委','08’ 总统','12’ 立委','12’ 总统'],
              plotBands: [{ // Light air
                from: 2,
                to: 7,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: '民进党'+'<br>'+'执政',
                    style: {
                        color: '#666'
                    }
                }
            }] 
        },
        yAxis: {
        title: {
                text: '%',
                 rotation:0
            }
        },
        legend: {
            layout: 'vertical',
            backgroundColor: '#fff1e0',
            align: 'right',
            verticalAlign: 'top',
            x: 10,
            y: 30,
            floating: true
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + '得票率: ' + this.y+ '％' ;
            }
        },
        plotOptions: {
        series: {
                marker: {
                     enabled: false
                }
            }
        },
        series: [
        {       color: '#1d3f72',
                lineWidth: 2.7,
                name: '国民党',
            data: [46.10,46.43,36.80,31.30,49.89,32.83,52.40,58.45,44.55,51.60]
        },
        {       color: '#4996a2',
                 lineWidth: 2.7,
                name: '民进党',
            data: [33.20,29.56,39.30,36.60,50.11,35.72,37.50,41.55,34.62,45.63]
        }
         
        ]
    });
});


$(function () {
    $('#chart2').highcharts({
       title: {
            text: '近20年台湾民众政党偏好分布'
        },
         credits: {
            text: '来源：台湾政治大学选举研究中心',
            href: 'http://esc.nccu.edu.tw'
        },
        chart: {
            backgroundColor: '#fff1e0',
            type: 'line',
           
        },
        xAxis: {
                
            categories:['1996','97’','98’','99’','2000','01’','02’','03’','04’','05’','06’','07’','08’','09’','10’','11’','12’','13’','14’','15’'],
              plotBands: [{ // Light air
                from: 4,
                to: 12,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: '民进党'+'<br>'+'执政',
                    style: {
                        color: '#666'
                    }
                }
            }] 
        },
        yAxis: {
        title: {
                text: '％',
                rotation:0
            }
        },
        legend: {
            layout: 'vertical',
            backgroundColor: '#fff1e0',
            align: 'right',
            verticalAlign: 'top',
            x: 10,
            y: 30,
            floating: true
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + '年: ' + this.y+ '％' ;
            }
        },
        plotOptions: {
        series: {
                marker: {
                     enabled: false
                }
            }
        },
        series: [
        {       color: '#1d3f72',
                lineWidth: 2.7,
                name: '国民党',
            data: [32.1,24.9,29.2,33.6,21.1,14.8,15.9,21.9,21.2,31.2,35.5,34.0,35.5,33.9,33.6,39.5,32.7,26.7,22.9,21.0 ]
        },
        {       color: '#4996a2',
                lineWidth: 2.7,
                name: '民进党',
            data: [12.8,16.5,21.0,22.0,26.0,25.0,25.5,24.5,24.7,21.6,18.7,20.1,21.2,19.5,24.6,24.9,25.7,25.7,26.7,29.7 ]
        },
         {  
                color: '#a8a8a8',
                lineWidth: 2.7,
                name: '中立或无反应',
            data: [44.9,51.3,45.2,40.2,41.3,42.6,42.1,39.1,41.1,39.3,40.5,42.9,38.3,43.3,38.2,30.4,35.1,41.8,45.0,43.4 ]
        }
        ]
    });
});

