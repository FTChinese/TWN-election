$(function () {
    $('#chart1').highcharts({
       title: {
            text: '历次关键选举国、民两党得票率'
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
                
            categories:['1995 立委选举','98 立委选举','2000 总统大选','01 立委选举','04 总统大选','04 立委选举','08 立委选举','08 总统大选','12 立委选举','12 总统大选'],
              plotBands: [{ // Light air
                from: 2,
                to: 6,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: '民进党执政',
                    style: {
                        color: '#666'
                    }
                }
            }] 
        },
        yAxis: {
        title: {
                text: '%'
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
            text: '台湾民众重要政治态度分布趋势'
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
                
            categories:['1992','93','94','95','96','97','98','99','2000','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15'],
              plotBands: [{ // Light air
                from: 8,
                to: 16,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: '民进党执政',
                    style: {
                        color: '#666'
                    }
                }
            }] 
        },
        yAxis: {
        title: {
                text: '%'
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
            data: [34.4,29.0,30.8,32.1,24.9,29.2,33.6,21.1,14.8,15.9,21.9,21.2,31.2,35.5,34.0,35.5,33.9,33.6,39.5,32.7,26.7,22.9,21.0 ]
        },
        {       color: '#4996a2',
                lineWidth: 2.7,
                name: '民进党',
            data: [3.3, ,12.1,12.8,12.8,16.5,21.0,22.0,26.0,25.0,25.5,24.5,24.7,21.6,18.7,20.1,21.2,19.5,24.6,24.9,25.7,25.7,26.7,29.7 ]
        },
         {  
                color: '#a8a8a8',
                lineWidth: 2.7,
                name: '中立或无反应',
            data: [62.3, ,53.3,48.0,44.9,51.3,45.2,40.2,41.3,42.6,42.1,39.1,41.1,39.3,40.5,42.9,38.3,43.3,38.2,30.4,35.1,41.8,45.0,43.4 ]
        }
        ]
    });
});

