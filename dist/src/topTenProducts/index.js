"use strict";
// @ts-nocheck
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var chart_1 = require("src/lib/chart");
(function () {
    (0, chart_1.chartJs)();
    var tmpl = document.createElement("template");
    tmpl.innerHTML = "\n    <style>\n      .widget-wrapper {\n        padding: 1rem;\n        margin: 1rem;\n        border: 1px solid #fff;\n        border-radius: 15px;\n        background: #fff;\n      }\n\n      .widget-wrapper h2 {\n        margin: 0 0 1rem 0;\n        font-size: 1.5rem;\n      }\n\n      .chart-wrapper {\n        display: block !important;\n        height: 370px !important;\n      }\n\n    </style>\n    <div class=\"widget-wrapper\">\n      <h2>Top 10 Products by Revenue</h2>\n      <div class=\"chart-wrapper\">\n        <canvas id=\"top-ten-products-chart\"></canvas>\n      </div>\n    </div>\n    ";
    var PerformanceHelp = /** @class */ (function (_super) {
        __extends(PerformanceHelp, _super);
        function PerformanceHelp() {
            var _this = _super.call(this) || this;
            _this.template = null;
            _this.chart = null;
            _this.chartColor = "rgba(70, 49, 238, 0.8)";
            _this.init();
            return _this;
        }
        PerformanceHelp.prototype.init = function () {
            var shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.template = shadowRoot;
        };
        PerformanceHelp.prototype.onCustomWidgetAfterUpdate = function () {
            this.renderChart();
        };
        PerformanceHelp.prototype.randomIntFromInterval = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        PerformanceHelp.prototype.renderChart = function () {
            if (this.chart)
                return;
            if (this.dataSet && this.dataSet.data) {
                var dataSet = this.dataSet.data.sort(function (a, b) { return b.measures_0.raw - a.measures_0.raw; });
                var labels_1 = [];
                var values_1 = [];
                dataSet.forEach(function (el) {
                    labels_1.push(el.dimensions_0.label);
                    values_1.push(el.measures_0.raw);
                });
                var chartElement = this.template
                    .querySelector("canvas")
                    .getContext("2d");
                this.chart = new Chart(chartElement, {
                    type: "bar",
                    data: {
                        labels: labels_1,
                        datasets: [
                            {
                                label: "Value",
                                data: values_1,
                                backgroundColor: this.chartColor,
                                borderWidth: 0,
                                borderColor: this.chartColor,
                                borderRadius: 5,
                                borderSkipped: false,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        indexAxis: "x",
                        plugins: {
                            title: {
                                display: false,
                            },
                            legend: {
                                display: false,
                            },
                        },
                    },
                });
            }
        };
        return PerformanceHelp;
    }(HTMLElement));
    customElements.define("top-ten-products", PerformanceHelp);
})();
