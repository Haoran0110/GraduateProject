Apex.grid = {
    padding: {
        right: 0,
        left: 0
    }
}, Apex.dataLabels = {
    enabled: !1
};
var randomizeArray = function (e) {
    for (var t, r, a = e.slice(), s = a.length; 0 !== s;) r = Math.floor(Math.random() * s), t = a[s -= 1], a[s] = a[r], a[r] = t;
    return a
};
$(document).ready(function () {
    "use strict";
    for (var e = [47, 45, 54, 38, 56], t = [], r = 1; r <= 24; r++) t.push("2018-09-" + r);
    var a = {
        chart: {
            type: "area",
            height: 200,
            sparkline: {
                enabled: !0
            }
        },
        stroke: {
            width: 2,
            curve: "straight"
        },
        fill: {
            opacity: .2
        },
        series: [{
            name: "Hyper Sales ",
            data: randomizeArray(e)
        }],
        xaxis: {
            categories:["63°丁苯","63°再生","70°丁苯","丁苯再生","90°丁苯"]
        },
        yaxis: {
            min: 0
        },
        colors: ["#008FFB"],
        labels: t,
        title: {
            text: "$424,652",
            offsetX: 20,
            offsetY: 20,
            style: {
                fontSize: "24px"
            }
        },
        subtitle: {
            text: "Sales",
            offsetX: 20,
            offsetY: 55,
            style: {
                fontSize: "14px"
            }
        }
    };
    new ApexCharts(document.querySelector("#sales-spark"), a).render();


    var s = {
        chart: {
            type: "bar",
            height: 172,
            sparkline: {
                enabled: !0
            }
        },
        stroke: {
            width: 0,
            curve: "straight"
        },
        fill: {
            opacity: .5
        },
        series: [{
            name: "Net Profits ",
            data: randomizeArray(e)
        }],
        xaxis: {
            crosshairs: {
                width: 1
            }
        },
        yaxis: {
            min: 0
        },
        colors: ["#0acf97"],
        title: {
            text: "$135,965",
            offsetX: 20,
            offsetY: 20,
            style: {
                fontSize: "24px"
            }
        },
        subtitle: {
            text: "Profits",
            offsetX: 20,
            offsetY: 55,
            style: {
                fontSize: "14px"
            }
        }
    };
    new ApexCharts(document.querySelector("#profit-spark"), s).render();
    new ApexCharts(document.querySelector("#spark1"), {
        chart: {
            type: "line",
            height: 100,
            sparkline: {
                enabled: !0
            }
        },
        series: [{
            data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
        }],
        stroke: {
            width: 4,
            curve: "smooth"
        },
        markers: {
            size: 0
        },
        colors: ["#734CEA"]
    }).render(), new ApexCharts(document.querySelector("#spark2"), {
        chart: {
            type: "bar",
            height: 100,
            sparkline: {
                enabled: !0
            }
        },
        series: [{
            data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
        }],
        stroke: {
            width: 3,
            curve: "smooth"
        },
        markers: {
            size: 0
        },
        colors: ["#34bfa3"]
    }).render(), new ApexCharts(document.querySelector("#spark3"), {
        chart: {
            type: "line",
            height: 100,
            sparkline: {
                enabled: !0
            }
        },
        series: [{
            data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
        }],
        stroke: {
            width: 4,
            curve: "smooth"
        },
        markers: {
            size: 0
        },
        colors: ["#f4516c"]
    }).render(), new ApexCharts(document.querySelector("#spark4"), {
        chart: {
            type: "bar",
            height: 100,
            sparkline: {
                enabled: !0
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                endingShape: "rounded",
                columnWidth: "55%"
            }
        },
        series: [{
            data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
        }],
        stroke: {
            width: 3,
            curve: "smooth"
        },
        markers: {
            size: 0
        },
        colors: ["#00c5dc"]
    }).render()
});
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
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
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
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
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
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
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