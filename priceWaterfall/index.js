(function () {
  const svgButtons = `
    <button class="full-screen__btn" id="full-screen-mode-btn">
      <svg id="expand-btn" style="display: block;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
      <svg id="collapse-btn" style="display: none;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
      </svg>
    </button>
  `;

  let tmpl = document.createElement("template");
  tmpl.innerHTML = `
    <style>
      .widget__wrapper {
        padding: 0 1rem 1rem 1rem;
        margin: 1rem;
        border-radius: 1rem;
        background: #fff;
      }

      .widget__title {
        font-size: 1.5rem;
        margin-left: 1rem;
      }

      .widget__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 4rem;
      }

      .full-screen__btn {
        all: unset;
        margin: 0.5rem 1rem 0 0;
        width: 1.5rem;
        height: 1.5rem;
        transition: transform .5s;
      }

      .full-screen__btn:hover {
        transform: scale(1.2);
      }

      .chart__wrapper {
        display: block !important;
        height: 370px !important;
      }
    </style>

    <div class="widget__wrapper">
      <div class="widget__header">
        <h2 class="widget__title">Price Waterfall</h2>
        ${svgButtons}
      </div>
      <div class="chart__wrapper">
        <canvas id="price-waterfall-chart"></canvas>
      </div>
    </div>
  `;

  // grid opacity 0.5 for blending
  // background opacity 1 for filtering
  // chart opacity 0.8 for blending

  class PerformanceHelp extends HTMLElement {
    template = undefined;
    chart = undefined;
    currentColor = undefined;
    colors = {
      lightMode: {
        background: "rgba(230, 230, 230, 1)",
        text: "rgba(70, 70, 70, 1)",
        grid: "rgba(130, 130, 130, 0.5)",
        chart: {
          primary: "rgba(70, 49, 238, 0.8)",
          secondary: "rgba(255, 70, 118, 0.8)",
        },
      },
      darkMode: {
        background: "rgba(70, 70, 70, 1)",
        text: "rgba(220, 220, 220, 1)",
        grid: "rgba(210, 210, 210, 0.5)",
        chart: {
          primary: "rgba(210, 210, 210, 0.8)",
          secondary: "rgba(255, 70, 118, 0.8)",
        },
      },
    };

    constructor() {
      super();
      this.init();
    }

    init() {
      let shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
      this.template = shadowRoot;
    }

    onCustomWidgetBeforeUpdate(changedProperties) {
      if (changedProperties) {
        if (changedProperties.lightModeChartPrimaryColor)
          this.colors.lightMode.chart.primary =
            changedProperties.lightModeChartPrimaryColor;

        if (changedProperties.darkModeChartPrimaryColor)
          this.colors.darkMode.chart.primary =
            changedProperties.darkModeChartPrimaryColor;

        if (changedProperties.lightModeChartSecondaryColor)
          this.colors.lightMode.chart.secondary =
            changedProperties.lightModeChartSecondaryColor;

        if (changedProperties.darkModeChartSecondaryColor)
          this.colors.darkMode.chart.secondary =
            changedProperties.darkModeChartSecondaryColor;

        if (changedProperties.chartTitle)
          this.template.querySelector(".widget__title").innerText =
            changedProperties.chartTitle;
      }

      const element = document.querySelector(
        ".sap-user-defined-dark-mode-theme"
      );

      this.currentColor = element
        ? this.colors.darkMode
        : this.colors.lightMode;

      this.adjustStyles();
    }

    onCustomWidgetAfterUpdate(changedProperties) {
      if (!this.dataSet || !this.dataSet.data) return;

      if (this.chart) {
        this.updateChartData();
        return;
      }

      this.renderChart();
    }

    updateChartData() {
      const data = this.aggregateData();
      this.chart.data.datasets[0].data = data.waterfall;
      this.chart.data.datasets[0].backgroundColor = data.colors;
      this.chart.data.datasets[0].borderColor = data.colors;
      this.chart.data.labels = data.labels;
      this.chart.update();
    }

    getData() {
      const dataSet = this.dataSet.data;

      const profit = dataSet.map((el) => el.measures_0.raw)[0];
      const employee_cost = dataSet.map((el) => el.measures_1.raw)[0];
      const tax_cost = dataSet.map((el) => el.measures_2.raw)[0];
      const production_cost = dataSet.map((el) => el.measures_3.raw)[0];
      const company_cost = dataSet.map((el) => el.measures_4.raw)[0];
      const price = dataSet.map((el) => el.measures_5.raw)[0];
      const material_cost = dataSet.map((el) => el.measures_6.raw)[0];

      return {
        profit,
        costs: {
          employee_cost,
          material_cost,
          tax_cost,
          production_cost,
          company_cost,
        },
        price,
      };
    }

    aggregateData() {
      const data = this.getData();

      const labels = [
        "Total Price",
        "Tax",
        "Employee Cost",
        "Material Cost",
        "Production Cost",
        "Company Cost",
        "Profit",
      ];

      const { profit, costs, price } = data;
      const chartData = this.aggregateChartData(profit, costs, price);

      return {
        labels,
        waterfall: chartData.costs,
        colors: chartData.colors,
      };
    }

    renderChart() {
      const data = this.aggregateData();

      const chartElement = this.template
        .querySelector("canvas")
        .getContext("2d");

      this.chart = new Chart(chartElement, {
        type: "bar",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Value",
              data: data.waterfall,
              backgroundColor: data.colors,
              borderWidth: 0,
              borderColor: data.colors,
              borderRadius: 5,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: "x",
          scales: {
            x: {
              grid: {
                color: this.currentColor.grid,
              },
              ticks: {
                color: this.currentColor.text,
              },
            },
            y: {
              grid: {
                color: this.currentColor.grid,
              },
              ticks: {
                color: this.currentColor.text,
              },
            },
          },
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

      this.fullScreenModeHandler();
    }

    aggregateChartData(profit, costs, price) {
      let total = profit;
      let costs = [profit];
      let colors = [];

      const additionalCosts = [
        costs.company_cost,
        costs.production_cost,
        costs.material_cost,
        costs.employee_cost,
        costs.tax_cost,
      ];

      additionalCosts.forEach((cost) => {
        costs.push([total, total + cost]);
        total += cost;
        colors.push(this.currentColor.chart.secondary);
      });

      colors.push(this.currentColor.chart.primary);
      colors.unshift(this.currentColor.chart.primary);

      costs.push(price);
      costs.reverse();

      return {
        costs,
        colors,
      };
    }

    adjustStyles() {
      this.template.querySelector(".widget__wrapper").style.background =
        this.currentColor.background;
      this.template.querySelector(".widget__title").style.color =
        this.currentColor.text;
      this.template.querySelector(".full-screen__btn").style.color =
        this.currentColor.text;
    }

    fullScreenModeHandler() {
      const fullScreenModeBtn = this.template.getElementById(
        "full-screen-mode-btn"
      );

      document.addEventListener("fullscreenchange", () => {
        const widget = document.querySelector("price-waterfall");
        const chartWrapper = widget.shadowRoot.querySelector(".chart__wrapper");
        const widgetWrapper =
          widget.shadowRoot.querySelector(".widget__wrapper");
        const expandBtn = widget.shadowRoot.getElementById("expand-btn");
        const collapseBtn = widget.shadowRoot.getElementById("collapse-btn");

        if (
          !document.fullscreenElement &&
          !document.mozFullScreenElement &&
          !document.webkitFullscreenElement &&
          !document.msFullscreenElement
        ) {
          chartWrapper.setAttribute("style", "height: 370px !important;");
          widgetWrapper.setAttribute(
            "style",
            "position: initial; width: auto;"
          );
          expandBtn.setAttribute("style", "display: block;");
          collapseBtn.setAttribute("style", "display: none;");
        } else {
          chartWrapper.setAttribute("style", "height: 800px !important;");
          widgetWrapper.setAttribute(
            "style",
            "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90%;"
          );
          collapseBtn.setAttribute("style", "display: block;");
          expandBtn.setAttribute("style", "display: none;");
        }

        this.adjustStyles();
      });

      fullScreenModeBtn.addEventListener("click", () => {
        const widget = document.querySelector("price-waterfall");
        if (
          !document.fullscreenElement &&
          !document.mozFullScreenElement &&
          !document.webkitFullscreenElement &&
          !document.msFullscreenElement
        ) {
          widget.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      });
    }
  }

  customElements.define("price-waterfall", PerformanceHelp);
})();
