(function () {
  const svgButtons = `
    <button class="full-screen__btn" id="full-screen-mode-btn">
      <svg id="expand-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
      <svg id="collapse-btn" class="none-display" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
      </svg>
    </button>
  `;

  let tmpl = document.createElement("template");
  tmpl.innerHTML = `
    <div class="widget__wrapper" style="display: none;">
      <div class="widget__header">
        <h2 class="widget__title">Average Net Margin</h2>
        ${svgButtons}
      </div>
      <div style="display: flex; justify-content: center; align-items: center; gap: 1rem;">
        <div class="chart__wrapper" style="width: 50%">
          <canvas id="average-net-margin-bar-chart"></canvas>
        </div>
        <div class="chart__wrapper" style="width: 50%">
          <canvas id="average-net-margin-pie-chart"></canvas>
        </div>
      </div>
    </div>
  `;

  // grid opacity 0.5 for blending
  // background opacity 1 for filtering
  // chart opacity 0.8 for blending

  class PerformanceHelp extends HTMLElement {
    template = undefined;
    barChart = undefined;
    pieChart = undefined;
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
      this.addGlobalStyles();
    }

    onCustomWidgetAfterUpdate(changedProperties) {
      if (!this.dataSet || !this.dataSet.data) return;

      if (this.barChart && this.pieChart) {
        this.updateChartData();
        return;
      }

      this.renderChart();
    }

    updateChartData() {
      const data = this.getData();

      this.barChart.data.datasets[0].data = data.values;
      this.barChart.data.labels = data.labels;
      this.barChart.update();

      this.pieChart.data.datasets[0].data = data.values;
      this.pieChart.data.labels = data.labels;
      this.pieChart.update();
    }

    getData() {
      const dataSet = this.dataSet.data;

      const labels = dataSet.map((el) =>
        el.dimensions_0.label.split("_").join(" ")
      );

      let avgTarget = 0;
      let avgValue = 0;
      const values = dataSet.map((el) => {
        avgValue += el.measures_0.raw;
        return el.measures_0.raw;
      });
      const targets = dataSet.map((el) => {
        avgTarget += el.measures_1.raw;
        return el.measures_1.raw;
      });

      console.log(avgTarget, targets.length);

      return {
        labels,
        values,
        targets,
        average: {
          value: avgValue / values.length,
          target: avgTarget / targets.length,
        },
      };
    }

    renderChart() {
      const data = this.getData();

      const barChartElement = this.template
        .getElementById("average-net-margin-bar-chart")
        .getContext("2d");

      const pieChartElement = this.template
        .getElementById("average-net-margin-pie-chart")
        .getContext("2d");

      this.barChart = new Chart(barChartElement, {
        type: "bar",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Value",
              data: data.values,
              backgroundColor: this.currentColor.chart.primary,
              borderWidth: 0,
              borderColor: this.currentColor.chart.primary,
              borderRadius: 5,
            },
            // {
            //   label: "Target",
            //   data: data.targets,
            //   type: "line",
            //   tension: 0.4,
            //   backgroundColor: this.currentColor.chart.secondary,
            //   borderColor: this.currentColor.chart.secondary,
            // },
            {
              label: "Target",
              data: data.targets,
              backgroundColor: this.currentColor.chart.secondary,
              borderWidth: 0,
              borderColor: this.currentColor.chart.secondary,
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

      const colors = [
        this.currentColor.chart.primary.replace(/[\d.]+\)$/g, "0.6)"),
        this.currentColor.chart.primary,
        this.currentColor.chart.primary.replace(/[\d.]+\)$/g, "1)"),
      ];

      console.log([data.average.target / 45, (45 - data.average.target) / 45]);
      console.log(data.average.target);

      this.pieChart = new Chart(pieChartElement, {
        type: "doughnut",
        data: {
          labels: data.labels,
          datasets: [
            {
              data: [15, 15, 15],
              backgroundColor: colors,
            },
            {
              data: [data.average.target / 45, (45 - data.average.target) / 45],
              backgroundColor: ["#00c220", "#c20000"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          rotation: -90,
          circumference: 180,
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
            tooltip: {
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

    addGlobalStyles() {
      if (!this.template.querySelector("style"))
        try {
          const styles = document.querySelector('style[data-custom="true"]');
          const shadowStyleEl = document.createElement("style");
          shadowStyleEl.innerText = styles.innerText;
          this.template.appendChild(shadowStyleEl);
          this.template.querySelector(".widget__wrapper").style.display =
            "block";
        } catch (e) {}
    }

    fullScreenModeHandler() {
      const fullScreenModeBtn = this.template.getElementById(
        "full-screen-mode-btn"
      );

      document.addEventListener("fullscreenchange", () => {
        const widget = document.querySelector("average-net-margin");
        const widgetDOM = widget.shadowRoot;
        const chartWrapper = widgetDOM.querySelector(".chart__wrapper");
        const widgetWrapper = widgetDOM.querySelector(".widget__wrapper");
        const expandBtn = widgetDOM.getElementById("expand-btn");
        const collapseBtn = widgetDOM.getElementById("collapse-btn");

        chartWrapper.classList.toggle("chart__wrapper--full-screen");
        widgetWrapper.classList.toggle("widget__wrapper--full-screen");
        expandBtn.classList.toggle("none-display");
        collapseBtn.classList.toggle("none-display");
      });

      fullScreenModeBtn.addEventListener("click", () => {
        const widget = document.querySelector("average-net-margin");
        if (this.isNotFullScreenMode()) {
          widget.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      });
    }

    isNotFullScreenMode() {
      return (
        !document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement
      );
    }
  }

  customElements.define("average-net-margin", PerformanceHelp);
})();
