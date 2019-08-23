/*成本核算--乙丙类*/
var options = {
    chart: {
        height: 200,
        type: "line",
        toolbar: {
            show: !1
        }
    },
    series: [{
        name: "原材料成本",
        type: "column",
        data: [440, 505, 414]
    }, {
        name: "生产总成本",
        type: "line",
        data: [480, 545, 454]
    }],
    stroke: {
        width: [0, 4]
    },
    xaxis: {
        categories:["乙丙","加硬乙丙","68°乙丙"]
    },
    colors: ["#727cf5", "#0acf97"],
    yaxis: [{
        title: {
            text: "成本费用"
        }
    }],
    legend: {
        offsetY: -10
    },
    grid: {
        borderColor: "#f1f3fa"
    }
};
(chart = new ApexCharts(document.querySelector("#line-column-mixed"), options)).render();
/*成本核算--丁苯类*/
var options = {
	chart: {
		height: 200,
		type: "line",
		toolbar: {
			show: !1
		}
	},
	series: [{
		name: "原材料成本",
		type: "column",
		data: [290, 320, 270,120,150]
	}, {
		name: "生产总成本",
		type: "line",
		data: [310, 340, 290,140,170]
	}],
	stroke: {
		width: [0, 4]
	},
	xaxis: {
		categories:["63°丁苯","63°再生","70°丁苯","丁苯再生","90°丁苯"]
	},
	colors: ["#39afd1", "#fa5c7c"],
	yaxis: [{
		title: {
			text: "成本费用"
		}
	}],
	legend: {
		offsetY: -10
	},
	grid: {
		borderColor: "#f1f3fa"
	}
};
(chart = new ApexCharts(document.querySelector("#line-column-dingben"), options)).render();
/*成本核算--天然类*/
var options = {
	chart: {
		height:200,
		type: "line",
		toolbar: {
			show: !1
		}
	},
	series: [{
		name: "原材料成本",
		type: "column",
		data: [190, 220, 310,140,170,90]
	}, {
		name: "生产总成本",
		type: "line",
		data: [220, 250, 340,170,200,120]
	}],
	stroke: {
		width: [0, 4]
	},
	xaxis: {
		categories:["50°白色天然","50°天然","50°再生","60°天然","65°天然"]
	},
	colors: ["#008FFB", "#734CEA"],
	yaxis: [{
		title: {
			text: "成本费用"
		}
	}],
	legend: {
		offsetY: -10
	},
	grid: {
		borderColor: "#f1f3fa"
	}
};
(chart = new ApexCharts(document.querySelector("#line-column-tianran"), options)).render();




options = {
    chart: {
        height: 380,
        type: "line",
        stacked: !1,
        toolbar: {
            show: !1
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        width: [0, 0, 3]
    },
    series: [{
        name: "使用量",
        type: "column",
        data: [18, 28, 11, 3.5, 2.5, 2.8, 3.8, 4.6,11,12,12,0.5,2,3,4,8,2.5,4.5,6.6,2,3,18]
    }, {
		name: "使用金额",
		type: "column",
		data: [292, 312, 131, 104,41,49,65,85,103,90,89,109,84,90,105,90,67,290,180,220,300,260]
	}, ],
	colors: ["#fa5c7c", "#39afd1"],
    xaxis: {
        categories: ["乙丙胶", "氯丁胶", "天然胶","再生胶","ZNO", "S", "半补强", "轻钙", "促M", "促D","促CZ","促TT","促NA-22","防4010","二丁酯","二丁酯","苯甲胶","DCP","SA","高CB","吉马隆","石蜡"]
    },
    yaxis: [{
        axisTicks: {
            show: !0
        },
        axisBorder: {
            show: !0,
            color: "#fa5c7c"
        },
        labels: {
            style: {
                color: "#fa5c7c"
            }
        },
        title: {
            text: "使用量 (公斤)"
        }
    },  {
        opposite: !0,
        axisTicks: {
            show: !0
        },
        axisBorder: {
            show: !0,
            color: "#39afd1"
        },
        labels: {
            style: {
                color: "#39afd1"
            }
        },
        title: {
            text: "使用金额 (元)"
        }
    }],
    tooltip: {
        followCursor: !0,
        y: {
            formatter: function (e) {
                return void 0 !== e ? e + " " : e
            }
        }
    },
    grid: {
        borderColor: "#f1f3fa"
    },
    legend: {
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
(chart = new ApexCharts(document.querySelector("#multiple-yaxis-mixed"), options)).render();




options = {
    chart: {
        height: 380,
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
        name: "工资",
        type: "area",
        data: [5243, 5908, 6000, 6023, 6687, 5098, 6231, 5098, 6721, 5121, 5219, 5001]
    }, {
        name: "出勤天数",
        type: "line",
        data: [23, 26, 27, 26, 28, 21, 29, 22, 30, 23, 24, 20]
    }],
    fill: {
        type: "solid",
        opacity: [.35, 1]
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep ", "Oct", "Nov", "Dec"],
    markers: {
        size: 0
    },
    legend: {
        offsetY: -10
    },
    colors: ["#0acf97", "#fa5c7c"],
    yaxis: [{
        title: {
            text: "工资（元）"
        }
    }, {
        opposite: !0,
        title: {
            text: "出勤天数（天）"
        }
    }],
    tooltip: {
        shared: !0,
        intersect: !1,
        y: {
            formatter: function (e) {
                return void 0 !== e ? e.toFixed(0) + " " : e
            }
        }
    },
    grid: {
        borderColor: "#f1f3fa"
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
(chart = new ApexCharts(document.querySelector("#line-area-mixed1"), options)).render();





options = {
	chart: {
		height: 380,
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
		name: "工资",
		type: "area",
		data: [5243, 5908, 6000, 6023, 6687, 5098, 6231, 5098, 6721, 5121, 5219, 5001]
	}, {
		name: "出勤天数",
		type: "line",
		data: [23, 26, 27, 26, 28, 21, 29, 22, 30, 23, 24, 20]
	}],
	fill: {
		type: "solid",
		opacity: [.35, 1]
	},
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep ", "Oct", "Nov", "Dec"],
	markers: {
		size: 0
	},
	legend: {
		offsetY: -10
	},
	colors: ["#563dad", "#fa5c7c"],
	yaxis: [{
		title: {
			text: "工资（元）"
		}
	}, {
		opposite: !0,
		title: {
			text: "出勤天数（天）"
		}
	}],
	tooltip: {
		shared: !0,
		intersect: !1,
		y: {
			formatter: function (e) {
				return void 0 !== e ? e.toFixed(0) + " " : e
			}
		}
	},
	grid: {
		borderColor: "#f1f3fa"
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
(chart = new ApexCharts(document.querySelector("#line-area-mixed2"), options)).render();









var chart;
options = {
    chart: {
        height: 300,
        type: "line",
        stacked: !1,
        toolbar: {
            show: !1
        }
    },
    stroke: {
        width: [0, 2, 4],
        curve: "smooth"
    },
    plotOptions: {
        bar: {
            columnWidth: "50%"
        }
    },
    colors: ["#727cf5", "#fa5c7c"],
    series: [{
        name: "原材料成本",
        type: "column",
        data: [231, 121, 122, 227, 123]
    }, {
        name: "生产总成本",
        type: "line",
        data: [251, 141, 142, 247, 143]
    }],
    fill: {
        opacity: [.85, .25, 1],
        gradient: {
            inverseColors: !1,
            shade: "light",
            type: "vertical",
            opacityFrom: .85,
            opacityTo: .55,
            stops: [0, 100, 100, 100]
        }
    },
    markers: {
        size: 0
    },
    legend: {
        offsetY: -10
    },
    xaxis: {
        categories:["红胶块","海绵","胶条","普耐油","PU胶料"]
    },
    yaxis: {
        title: {
            text: "原材料成本"
        },
        min:0,
        max:300
    },
    tooltip: {
        shared: !0,
        intersect: !1,
        y: {
            formatter: function (e) {
                return void 0 !== e ? e.toFixed(0) + " 元" : e
            }
        }
    },
    grid: {
        borderColor: "#f1f3fa"
    }
};
(chart = new ApexCharts(document.querySelector("#all-mixed"), options)).render();