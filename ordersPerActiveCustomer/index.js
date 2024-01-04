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
        <h2 class="widget__title">Orders per active Customer</h2>
        ${svgButtons}
      </div>
      <div class="chart__wrapper">
        <canvas id="orders-per-active-customer-chart"></canvas>
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
        if (changedProperties.lightModeChartColor)
          this.colors.lightMode.chart.primary =
            changedProperties.lightModeChartColor;

        if (changedProperties.darkModeChartColor)
          this.colors.darkMode.chart.primary =
            changedProperties.darkModeChartColor;

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
      const data = this.getData();
      this.chart.data.datasets[0].data = data.values;
      this.chart.data.labels = data.labels;
      this.chart.update();
    }

    getData() {
      const dataSet = this.dataSet.data;

      console.log(dataSet);

      const labels = dataSet.map((el) => el.dimensions_0.label);
      const values = dataSet.map((el) => el.measures_0.raw);

      return {
        labels,
        values,
      };
    }

    renderChart() {
      const data = this.getData();

      console.log(data);

      const chartElement = this.template
        .querySelector("canvas")
        .getContext("2d");

      this.chart = new Chart(chartElement, {
        type: "line",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Orders",
              backgroundColor: this.currentColor.chart.primary,
              borderColor: this.currentColor.chart.primary,
              data: data.values,
              fill: true,
              tension: 0.4,
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
        const widget = document.querySelector("orders-per-active-customer");
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
        const widget = document.querySelector("orders-per-active-customer");
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

  customElements.define("orders-per-active-customer", PerformanceHelp);
})();