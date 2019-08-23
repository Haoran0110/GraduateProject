function generateData(a, e) {
    for (var t = 0, n = []; t < a;) {
        var r = (t + 1).toString(),
            m = Math.floor(Math.random() * (e.max - e.min + 1)) + e.min;
        n.push({
            x: r,
            y: m
        }), t++
    }
    return n
}
var options = {
    chart: {
        height: 380,
        type: "heatmap"
    },
    dataLabels: {
        enabled: !1
    },
    colors: ["#727cf5"],
    series: [{
        name: "Metric 1",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric 2",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric 3",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric 4",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric 5",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric  6",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric 7",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric 8",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric 9",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }],
    xaxis: {
        type: "category"
    }
};

function generateData(a, e) {
    for (var t = 0, n = []; t < a;) {
        var r = (t + 1).toString(),
            m = Math.floor(Math.random() * (e.max - e.min + 1)) + e.min;
        n.push({
            x: r,
            y: m
        }), t++
    }
    return n
}(chart = new ApexCharts(document.querySelector("#basic-heatmap"), options)).render();
options = {
    chart: {
        height: 380,
        type: "heatmap"
    },
    dataLabels: {
        enabled: !1
    },
    colors: ["#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", "#A9D794", "#46AF78"],
    series: [{
        name: "Metric 1",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric 2",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric 3",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric 4",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric 5",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric 6",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric 7",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric 8",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric 9",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }],
    xaxis: {
        type: "category"
    }
};

function generateData(a, e) {
    for (var t = 0, n = []; t < a;) {
        var r = (t + 1).toString(),
            m = Math.floor(Math.random() * (e.max - e.min + 1)) + e.min;
        n.push({
            x: r,
            y: m
        }), t++
    }
    return n
}(chart = new ApexCharts(document.querySelector("#multiple-series-heatmap"), options)).render();
options = {
    chart: {
        height: 380,
        type: "heatmap"
    },
    plotOptions: {
        heatmap: {
            shadeIntensity: .5,
            colorScale: {
                ranges: [{
                    from: -30,
                    to: 5,
                    name: "Low",
                    color: "#0acf97"
                }, {
                    from: 6,
                    to: 20,
                    name: "Medium",
                    color: "#39afd1"
                }, {
                    from: 21,
                    to: 45,
                    name: "High",
                    color: "#ffbc00"
                }, {
                    from: 46,
                    to: 55,
                    name: "Extreme",
                    color: "#fa5c7c"
                }]
            }
        }
    },
    dataLabels: {
        enabled: !1
    },
    series: [{
        name: "Jan",
        data: generateData(20, {
            min: -30,
            max: 55
        })
    }, {
        name: "Feb",
        data: generateData(20, {
            min: -30,
            max: 55
        })
    }, {
        name: "Mar",
        data: generateData(20, {
            min: -30,
            max: 55
        })
    }, {
        name: "Apr",
        data: generateData(20, {
            min: -30,
            max: 55
        })
    }, {
        name: "May",
        data: generateData(20, {
            min: -30,
            max: 55
        })
    }, {
        name: "Jun",
        data: generateData(20, {
            min: -30,
            max: 55
        })
    }, {
        name: "Jul",
        data: generateData(20, {
            min: -30,
            max: 55
        })
    }, {
        name: "Aug",
        data: generateData(20, {
            min: -30,
            max: 55
        })
    }, {
        name: "Sep",
        data: generateData(20, {
            min: -30,
            max: 55
        })
    }]
};

function generateData(a, e) {
    for (var t = 0, n = []; t < a;) {
        var r = (t + 1).toString(),
            m = Math.floor(Math.random() * (e.max - e.min + 1)) + e.min;
        n.push({
            x: r,
            y: m
        }), t++
    }
    return n
}(chart = new ApexCharts(document.querySelector("#color-range-heatmap"), options)).render();
var chart;
options = {
    chart: {
        height: 380,
        type: "heatmap"
    },
    stroke: {
        width: 0
    },
    plotOptions: {
        heatmap: {
            radius: 30,
            enableShades: !1,
            colorScale: {
                ranges: [{
                    from: 0,
                    to: 50,
                    color: "#39afd1"
                }, {
                    from: 51,
                    to: 100,
                    color: "#0acf97"
                }]
            }
        }
    },
    dataLabels: {
        enabled: !0,
        style: {
            colors: ["#fff"]
        }
    },
    series: [{
        name: "Metric1",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric2",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric3",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric4",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric5",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric6",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric7",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric8",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }, {
        name: "Metric8",
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }],
    xaxis: {
        type: "category"
    },
    grid: {
        borderColor: "#f1f3fa"
    }
};
(chart = new ApexCharts(document.querySelector("#rounded-heatmap"), options)).render();