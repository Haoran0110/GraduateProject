var options = {
    chart: {
        height: 400,
        type: "bar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !0
        }
    },
    dataLabels: {
        enabled: !1
    },
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    colors: ["#39afd1"],
    xaxis: {
        categories: ["K型橡胶", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"]
    },
    states: {
        hover: {
            filter: "none"
        }
    },
    grid: {
        borderColor: "#f1f3fa"
    }
};
(chart = new ApexCharts(document.querySelector("#basic-bar"), options)).render();
options = {
    chart: {
        height: 380,
        type: "bar",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !0,
            dataLabels: {
                position: "top"
            }
        }
    },
    dataLabels: {
        enabled: !0,
        offsetX: -6,
        style: {
            fontSize: "12px",
            colors: ["#fff"]
        }
    },
    colors: ["#fa5c7c", "#6c757d"],
    stroke: {
        show: !0,
        width: 1,
        colors: ["#fff"]
    },
    series: [{
        name: "Series 1",
        data: [44, 55, 41, 64, 22, 43, 21]
    }, {
        name: "Series 2",
        data: [53, 32, 33, 52, 13, 44, 32]
    }],
    xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
    },
    legend: {
        offsetY: -10
    },
    states: {
        hover: {
            filter: "none"
        }
    },
    grid: {
        borderColor: "#f1f3fa"
    }
};
(chart = new ApexCharts(document.querySelector("#grouped-bar"), options)).render();




options = {
    chart: {
        height: 380,
        type: "bar",
        stacked: !0,
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !0
        }
    },
    stroke: {
        show: !1
    },
    series: [{
        name: "Jan",
        data: [27, 28, 26, 25, 24, 24, 21]
    }, {
        name: "Feb",
        data: [28, 26, 21, 27, 26, 25, 23]
    }, {
        name: "Mar",
        data: [26, 22, 23, 21, 20, 22, 20]
    }, {
        name: "Apr",
        data: [27, 27, 25, 24, 16, 20, 21]
    }, {
        name: "May",
        data: [29, 25, 19, 23, 25, 21, 19]
    }, {
		name: "Jun",
		data: [24, 24, 21, 17, 20, 20, 22]
	}, {
		name: "Jul",
		data: [25, 23, 22, 20, 18, 19, 20]
	}, {
		name: "Aug",
		data: [28, 29, 26, 25, 24, 20, 24]
	}, {
		name: "Sep",
		data: [24, 22, 21, 22, 24, 21, 19]
	}, {
		name: "Oct",
		data: [28, 20, 19, 21, 22, 20, 18]
	}, {
		name: "Nov",
		data: [23, 21, 20, 19, 20, 22, 23]
	}, {
		name: "Dec",
		data: [25, 25, 24, 22, 18, 20, 19]
	}],
    xaxis: {
        categories: ["张月英", "张国珍", "刘海鲜", "蔚江军", "张素青"],
        title:{text:"出勤天数（天）"

},
	},
    yaxis: {
        title: {
            text: void 0
        }
    },
    colors: ["#727cf5", "#0acf97", "#fa5c7c", "#6c757d", "#39afd1","#FFD700","#EE6AA7","#D2691E","#7AC5CD","#EE7AE9","#1E90FF","#7EC0EE"],
    tooltip: {
        y: {
            formatter: function (e) {
                return e + "天"
            }
        }
    },
    fill: {
        opacity: 1
    },
    states: {
        hover: {
            filter: "none"
        }
    },
    legend: {
        position: "top",
        horizontalAlign: "center"
    },
    grid: {
        borderColor: "#f1f3fa"
    }
};
(chart = new ApexCharts(document.querySelector("#stacked-bar"), options)).render();



options = {
    chart: {
        height: 380,
        type: "bar",
        stacked: !0,
        stackType: "100%",
        toolbar: {
            show: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !0
        }
    },
    stroke: {
        width: 1,
        colors: ["#fff"]
    },
    series: [{
        name: "Marine Sprite",
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: "Striking Calf",
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: "Tank Picture",
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: "Bucket Slope",
        data: [9, 7, 5, 8, 6, 9, 4]
    }, {
        name: "Reborn Kid",
        data: [25, 12, 19, 32, 25, 24, 10]
    }],
    xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
    },
    colors: ["#ffbc00", "#39afd1", "#6c757d", "#e3eaef", "#727cf5"],
    tooltip: {
        y: {
            formatter: function (e) {
                return e + "K"
            }
        }
    },
    fill: {
        opacity: 1
    },
    states: {
        hover: {
            filter: "none"
        }
    },
    legend: {
        position: "top",
        horizontalAlign: "center"
    },
    grid: {
        borderColor: "#f1f3fa"
    }
};
(chart = new ApexCharts(document.querySelector("#full-stacked-bar"), options)).render();
options = {
    chart: {
        height: 380,
        type: "bar",
        stacked: !0,
        toolbar: {
            show: !1
        }
    },
    colors: ["#fa5c7c", "#0acf97"],
    plotOptions: {
        bar: {
            horizontal: !0,
            barHeight: "80%"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        width: 1,
        colors: ["#fff"]
    },
    series: [{
        name: "Males",
        data: [.4, .65, .76, .88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5, 3.9, 3.5, 3]
    }, {
        name: "Females",
        data: [-.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8]
    }],
    grid: {
        xaxis: {
            showLines: !1
        }
    },
    yaxis: {
        min: -5,
        max: 5,
        title: {}
    },
    tooltip: {
        shared: !1,
        x: {
            formatter: function (e) {
                return e
            }
        },
        y: {
            formatter: function (e) {
                return Math.abs(e) + "%"
            }
        }
    },
    xaxis: {
        categories: ["85+", "80-84", "75-79", "70-74", "65-69", "60-64", "55-59", "50-54", "45-49", "40-44", "35-39", "30-34", "25-29", "20-24", "15-19", "10-14", "5-9", "0-4"],
        title: {
            text: "Percent"
        },
        labels: {
            formatter: function (e) {
                return Math.abs(Math.round(e)) + "%"
            }
        }
    },
    legend: {
        offsetY: -10
    },
    grid: {
        borderColor: "#f1f3fa"
    }
};
(chart = new ApexCharts(document.querySelector("#negative-bar"), options)).render();

options = {
    chart: {
        height: 400,
        type: "bar",
        stacked: !0,
        toolbar: {
            show: !1
        },
        shadow: {
            enabled: !0,
            blur: 1,
            opacity: .5
        }
    },
    plotOptions: {
        bar: {
            horizontal: !0,
            barHeight: "60%"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        width: 2
    },
    series: [{
        name: "2016年",
        data: [2.5, 2, 1.3, 0.9, 0.5, 1.1, 1]
    }, {
        name: "2017年",
        data: [1.2, 0.9, 1.4, 1.9, 1.5, 0.8, 1.1]
    }, {
        name: "2018年",
        data: [1.6, 1.7, 1.1, 0.9, 1.5, 1.1, 0.6]
    }],
    xaxis: {
        categories: ["法兰垫", "橡胶板", "皮碗", "O型圈", "PVC胶圈", "矩形垫"],
        min:0,
        max:5
    },
    yaxis: {
        title: {
            text: void 0
        }
    },
    tooltip: {
        shared: !1,
        y: {
            formatter: function (e) {
                return e + "万元"
            }
        }
    },
    colors: ["#727cf5", "#0acf97", "#fa5c7c", "#39afd1"],
    fill: {
        type: "pattern",
        opacity: 1,
        pattern: {
            style: ["circles", "slantedLines", "verticalLines", "horizontalLines"]
        }
    },
    states: {
        hover: {
            filter: "none"
        }
    },
    legend: {
        position: "right"
    },
    grid: {
        borderColor: "#f1f3fa"
    },
    responsive: [{
        breakpoint: 600,
        options: {
            legend: {
                show: !1
            }
        }
    }]
};
(chart = new ApexCharts(document.querySelector("#pattern-bar"), options)).render();


var labels = Array.apply(null, {
    length: 39
}).map(function (e, t) {
    return t + 1
});
options = {
    chart: {
        height: 450,
        type: "bar",
        toolbar: {
            show: !1
        },
        animations: {
            enabled: !1
        }
    },
    plotOptions: {
        bar: {
            horizontal: !0,
            barHeight: "100%"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        colors: ["#fff"],
        width: .2
    },
    series: [{
        name: "coins",
        data: [2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7, 8, 8, 10, 9, 9, 12, 12, 11, 12, 13, 14, 16, 14, 15, 17, 19, 21]
    }],
    labels: labels,
    yaxis: {
        axisBorder: {
            show: !1
        },
        axisTicks: {
            show: !1
        },
        labels: {
            show: !1
        },
        title: {
            text: "Weight"
        }
    },
    grid: {
        position: "back",
        borderColor: "#f1f3fa"
    },
    fill: {
        type: "image",
        opacity: .87,
        image: {
            src: ["assets/images/small/small-4.jpg"],
            width: 466,
            height: 406
        }
    }
};
(chart = new ApexCharts(document.querySelector("#image-fill-bar"), options)).render();
var chart;
options = {
    chart: {
        height: 480,
        type: "bar"
    },
    plotOptions: {
        bar: {
            barHeight: "100%",
            distributed: !0,
            horizontal: !0,
            dataLabels: {
                position: "bottom"
            }
        }
    },
    colors: ["#727cf5", "#0acf97", "#fa5c7c", "#6c757d", "#39afd1", "#2b908f"],
    dataLabels: {
        enabled: !0,
        textAnchor: "start",
        style: {
            colors: ["#fff"]
        },
        formatter: function (e, t) {
            return t.w.globals.labels[t.dataPointIndex] + ":  " + e
        },
        offsetX: 0,
        dropShadow: {
            enabled: !1
        }
    },
    series: [{
        data: [45078, 37098, 33421, 28907, 25730, 20901]
    }],
    stroke: {
        width: 0,
        colors: ["#fff"]
    },
    xaxis: {
        categories: ["法兰垫类", "PVC胶圈", "O型圈", "K型胶圈", "橡胶板", "皮碗"]
    },
    yaxis: {
        labels: {
            show: !1
        }
    },
    grid: {
        borderColor: "#f1f3fa"
    },
    tooltip: {
        theme: "dark",
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function () {
                    return ""
                }
            }
        }
    }
};
(chart = new ApexCharts(document.querySelector("#datalables-bar"), options)).render();