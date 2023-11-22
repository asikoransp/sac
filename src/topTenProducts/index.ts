// @ts-nocheck

import { chartJs } from "src/lib/chart";

(function () {
  chartJs();

  let tmpl = document.createElement("template");
  tmpl.innerHTML = `
    <style>
      .widget-wrapper {
        padding: 1rem;
        margin: 1rem;
        border: 1px solid #fff;
        border-radius: 15px;
        background: #fff;
      }

      .widget-wrapper h2 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .chart-wrapper {
        display: block !important;
        height: 370px !important;
      }

    </style>
    <div class="widget-wrapper">
      <h2>Top 10 Products by Revenue</h2>
      <div class="chart-wrapper">
        <canvas id="top-ten-products-chart"></canvas>
      </div>
    </div>
    `;

  class PerformanceHelp extends HTMLElement {
    template = null;
    chart = null;
    chartColor = "rgba(70, 49, 238, 0.8)";

    constructor() {
      super();
      this.init();
    }

    init() {
      let shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
      this.template = shadowRoot;
    }

    onCustomWidgetAfterUpdate() {
      this.renderChart();
    }

    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    renderChart() {
      if (this.chart) return;

      if (this.dataSet && this.dataSet.data) {
        const dataSet = this.dataSet.data.sort(
          (a, b) => b.measures_0.raw - a.measures_0.raw
        );

        const labels = [];
        const values = [];

        dataSet.forEach((el) => {
          labels.push(el.dimensions_0.label);
          values.push(el.measures_0.raw);
        });

        const chartElement = this.template
          .querySelector("canvas")
          .getContext("2d");

        this.chart = new Chart(chartElement, {
          type: "bar",
          data: {
            labels,
            datasets: [
              {
                label: "Value",
                data: values,
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
    }
  }

  customElements.define("top-ten-products", PerformanceHelp);
})();
