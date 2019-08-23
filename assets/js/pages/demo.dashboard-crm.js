var options1 = {
    chart: {
        type: "bar",
        height: 60,
        sparkline: {
            enabled: !0
        }
    },
    plotOptions: {
        bar: {
            columnWidth: "60%"
        }
    },
    colors: ["#727cf5"],
    series: [{
        data: [585, 665, 12799, 19541, 2486, 11095, 3827, 4649, 9256, 6722, 11404, 3090]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    xaxis: {
        crosshairs: {
            width: 1
        }
    },
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function (e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
};
new ApexCharts(document.querySelector("#campaign-sent-chart"), options1).render();

var options2 = {
    chart: {
        type: "line",
        height: 60,
        sparkline: {
            enabled: !0
        }
    },
    series: [{
        data: [45612, 15094, 198332, 198704, 21766, 138009, 91986, 145603, 108289, 68541, 151897]
    }],
    stroke: {
        width: 2,
        curve: "smooth"
    },
    markers: {
        size: 0
    },
    colors: ["#727cf5"],
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function (e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
};
new ApexCharts(document.querySelector("#new-leads-chart"), options2).render();
var options3 = {
    chart: {
        type: "bar",
        height: 60,
        sparkline: {
            enabled: !0
        }
    },
    plotOptions: {
        bar: {
            columnWidth: "60%"
        }
    },
    colors: ["#727cf5"],
    series: [{
        data: [45078, 37098, 33421, 28907, 25730, 20901,18562,17903,16483]
    }],
    labels: [1, 2, 3, 4, 5, 6,7,8,9],
    xaxis: {
        crosshairs: {
            width: 1
        }
    },
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function (e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
};
new ApexCharts(document.querySelector("#deals-chart"), options3).render();



var options4 = {
    chart: {
        type: "bar",
        height: 60,
        sparkline: {
            enabled: !0
        }
    },
    plotOptions: {
        bar: {
            columnWidth: "60%"
        }
    },
    colors: ["#727cf5"],
    series: [{
        data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        }
    },
    tooltip: {
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function (e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
};
new ApexCharts(document.querySelector("#booked-revenue-chart"), options4).render();

/*近三年订单数量变化模块*/
var options = {
    chart: {
        height: 320,
        type: "radialBar"
    },
    colors: ["#ffbc00", "#727cf5", "#0acf97"],
    series: [74, 64, 62],
    labels: ["2016", "2017", "2018"],
    plotOptions: {
        radialBar: {
            track: {
                margin: 8
            }
        }
    }
};
(chart = new ApexCharts(document.querySelector("#dash-campaigns-chart"), options)).render();


var chart;
options = {
    chart: {
        height: 336,
        type: "line",
        toolbar: {
            show: !1
        }
    },
    stroke: {
        curve: "smooth",
        width: 2
    },
    series: [{
        name: "Total Revenue",
        type: "area",
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33, 43]
    }, {
        name: "Total Pipeline",
        type: "line",
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43, 56]
    }],
    fill: {
        type: "solid",
        opacity: [.35, 1]
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    markers: {
        size: 0
    },
    colors: ["#0acf97", "#fa5c7c"],
    yaxis: [{
        title: {
            text: "Revenue (USD)"
        },
        min: 0
    }],
    tooltip: {
        shared: !0,
        intersect: !1,
        y: {
            formatter: function (e) {
                return void 0 !== e ? e.toFixed(0) + "k" : e
            }
        }
    },
    grid: {
        borderColor: "#f1f3fa"
    },
    legend: {
        fontSize: "14px",
        fontFamily: "14px",
        offsetY: -10
    },
    responsive: [{
        breakpoint: 600,
        options: {
            yaxis: {
                show: !1
            },
            legend: {
                show: !1
            }
        }
    }]
};
(chart = new ApexCharts(document.querySelector("#dash-revenue-chart"), options)).render();