// Hicharts Theme
Highcharts.theme = {
 colors: ['#25aae1', '#1a7692', '#f19c1d', '#44a9a8', '#f20000', '#b3d88c'],
 chart: {
  backgroundColor: 'transparent',
  shadow: false,
  style: {
   fontFamily: "'proxima-nova','HelveticaNeue-Light', 'Helvetica Neue Light','Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif"
 },
 plotBorderColor: '#25aae1'
},
title: {
  style: {
   color: '#25aae1',
   textTransform: 'uppercase',
   fontSize: '20px'
 }
},
subtitle: {
  style: {
   color: '#25aae1',
   textTransform: 'uppercase'
 }
},
xAxis: {
  gridLineColor: '#25aae1',
  labels: {
   style: {
    color: '#25aae1'
  }
},
lineColor: '#25aae1',
minorGridLineColor: '#25aae1',
tickColor: '#25aae1',
title: {
 style: {
  color: '#25aae1'
    }
  }
},
yAxis: {
  gridLineColor: '#25aae1',
  labels: {
   style: {
    color: '#25aae1'
  }
},
lineColor: '#25aae1',
minorGridLineColor: '#25aae1',
tickColor: '#25aae1',
tickWidth: 1,
title: {
 style: {
  color: '#25aae1'
}
}
},
tooltip: {
  backgroundColor: 'rgba(50,50,50, 0.85)',
  style: {
   color: '#F0F0F0',
 }
},
plotOptions: {
  series: {
   dataLabels: {
    color: '#333'
  },
  marker: {
    lineColor: '#333'
  }
},
boxplot: {
 fillColor: '#505053'
},
candlestick: {
 lineColor: 'white'
},
errorbar: {
 color: 'white'
}
},
legend: {
  itemStyle: {
   color: '#25aae1'
 },
 itemHoverStyle: {
   color: '#FFF'
 },
 itemHiddenStyle: {
   color: '#606063'
 }
},
credits: {
  style: {
   color: '#25aae1'
 }
},
labels: {
  style: {
   color: '#25aae1'
 }
},

drilldown: {
  activeAxisLabelStyle: {
   color: '#F0F0F3'
 },
 activeDataLabelStyle: {
   color: '#F0F0F3'
 }
},

navigation: {
  buttonOptions: {
   symbolStroke: '#DDDDDD',
   theme: {
    fill: '#505053'
  }
}
},

   // scroll charts
   rangeSelector: {
    buttonTheme: {
     fill: '#505053',
     stroke: '#000000',
     style: {
      color: '#CCC'
    },
    states: {
      hover: {
       fill: '#707073',
       stroke: '#000000',
       style: {
        color: 'white'
      }
    },
    select: {
     fill: '#000003',
     stroke: '#000000',
     style: {
      color: 'white'
    }
  }
}
},
inputBoxBorderColor: '#505053',
inputStyle: {
 backgroundColor: '#333',
 color: 'silver'
},
labelStyle: {
 color: 'silver'
}
},

navigator: {
  handles: {
   backgroundColor: '#666',
   borderColor: '#AAA'
 },
 outlineColor: '#CCC',
 maskFill: 'rgba(255,255,255,0.1)',
 series: {
   color: '#7798BF',
   lineColor: '#A6C7ED'
 },
 xAxis: {
   gridLineColor: '#505053'
 }
},

scrollbar: {
  barBackgroundColor: '#808083',
  barBorderColor: '#808083',
  buttonArrowColor: '#CCC',
  buttonBackgroundColor: '#606063',
  buttonBorderColor: '#606063',
  rifleColor: '#FFF',
  trackBackgroundColor: '#404043',
  trackBorderColor: '#404043'
},

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
 };
// Apply the theme
Highcharts.setOptions(Highcharts.theme);
Highcharts.setOptions({
  lang: {
    numericSymbols: ['Th', 'M', 'B', 'T']
  }
});


// CHARTS BEGIN HERE-- THEME HAS BEEN APPLIED

$('#westports').highcharts({
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    shadow: false
  },
  title: {
    text: 'Number of Container Ship Calls by Region, 2013'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.y:.0f}</b>'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
      style: {
        textShadow: false,
        }
      }
    }
  },
  series: [{
    type: 'pie',
    name: 'Trade Flows',
    data: [
    ['East Coast',      9997],
    ['Gulf Coast',      3117],
    ['West Coast',      5735],
    ['Caribbean',        490],
    ['Alaska-Pacific',   572],
    ]
  }]
});

// // // // // // // // // // // 

$('#avgcontainers').highcharts({
  chart: {
    type: 'column'
  },
  title: {
    text: 'Avgerage Number of Containers Per Ship'
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  colors: ['#25aae1'],
  xAxis: {
    categories: ['East Coast', 'Gulf Coast', 'West Coast', 'Caribbean', 'Alaska-Pacific' ]
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Average Number of Containers Per Container Ship'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}:</td>' +
    '<td style="padding:0"><b>&nbsp;{point.y}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Balance',
    data: [4109.23, 1720.05, 5046.39, 1777.32, 2536.59]
  }]
});

// // // // // // // // // // // 

$('#changeinvalue').highcharts({
  chart: {
    type: 'scatter',
    zoomType: 'xy'
  },
  title: {
    text: 'Growth in Annual Trade by Port, 2003-2013 (in thousands)'
  },
  credits: {
    enabled: false
  },
  yAxis: {
    title: {
      text: 'Growth in Thousands of Dollars'
    }
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 5,
        states: {
          hover: {
            enabled: true,
            lineColor: 'rgb(100,100,100)'
          }
        }
      },
      states: {
        hover: {
          marker: {
            enabled: false
          }
        }
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '${point.y}'
      }
    }
  },
  series: [{
    name: 'East Coast',
    color: '#25aae1',
    data: [[26634305],[5917979],[25623949],[102184834],[34008549],[25407556],[2874191],[5961143],[63445201],[-16060],[7167115] ]
  }, {
    name: 'Alaska Pacific',
    color: '#1a7692',
    data: [[1928161],[3328327] ]
  }, {
    name: 'Great Lakes',
    color: '#f19c1d',
    data: [[356119],[206388],[1067237],[739033],[79495],[36615],[488576],[584363],[337] ]
  }, {
    name: 'West Coast',
    color: '#44a9a8',
    data: [[8448384],[184670398],[2433883],[43106923],[38786940] ]
  }, {
    name: 'Gulf Coast',
    color: '#b3d88c',
    data: [[154751528],[409591],[23273496],[17535433],[91249116],[35902189],[-19478],[17112710] ]
  }, {
    name: 'Caribbean',
    color: 'red',
    data: [[7905820],[-3683117]]
  }]
});

// // // // // // // // // // // 

$('#dailytradevalue').highcharts({
  chart: {
    type: 'column'
  },
  title: {
    text: 'Average Daily Value of Trade'
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  colors: ['#25aae1'],
  xAxis: {
    categories: [  

    'Columbia-Snake',
    'Los Angeles, CA',
    'San Diego, CA',
    'San Francisco, CA',
    'Seattle, WA',
     ]
  },

  yAxis: {
    min: 0,
    title: {
      text: 'Total Daily Value of Trade in Thousands'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}:</td>' +
    '<td style="padding:0"><b>&nbsp;${point.y}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    data: [63944, 1121956, 19236, 198109, 246971]
  }]
});
