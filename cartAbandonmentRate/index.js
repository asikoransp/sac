(function () {
  const fullScreenButton = `
    <button class="full-screen__btn" id="full-screen-mode-btn">
      <div id="expand-btn" class="expand-icon"></div>
      <div id="collapse-btn" class="collapse-icon none-display"></div>
    </button>
  `;

  let tmpl = document.createElement("template");
  tmpl.innerHTML = `
    <div class="widget__wrapper" style="display: none;">
      <div class="widget__header">
        <h2 class="widget__title">Cart Abandonment Rate</h2>
        ${fullScreenButton}
      </div>
      <div class="chart__wrapper">
        <canvas id="cart-abandonment-rate-chart"></canvas>
        <span class="chart__label--car">
          <span id="current-car"></span>
          <span>%</span>
        </span>
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
      this.addGlobalStyles();
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
      this.chart.data.datasets[0].data = data.existingCustomers;
      this.chart.data.datasets[1].data = data.newCustomers;
      // this.chart.data.labels = data.labels;
      this.chart.update();
      this.updateTargetLabel(data);
    }

    getData() {
      const dataSet = this.dataSet.data.sort((a, b) =>
        a.dimensions_0.id.localeCompare(b.dimensions_0.id)
      );

      const labels = [];
      const values = [];
      const change = [];

      dataSet.forEach((el) => {
        labels.push(el.dimensions_0.label.split("_").join(" "));
        values.push(el.measures_0.raw);
        values.push(el.measures_1.raw);
        change.push(el.measures_2.raw);
      });

      return {
        labels,
        values,
        change,
      };
    }

    renderChart() {
      const data = this.getData();

      const chartElement = this.template
        .querySelector("canvas")
        .getContext("2d");

      // const doughnutCenterLabel = {
      //   id: "doughnutCenterLabel",
      //   beforeDraw: (chart) => {
      //     const { ctx, data } = chart;
      //     const xCoor =
      //       chart.chartArea.left +
      //       (chart.chartArea.right - chart.chartArea.left) / 2;
      //     const yCoor =
      //       chart.chartArea.top +
      //       (chart.chartArea.bottom - chart.chartArea.top) / 2;
      //     // const value = chart.config.data.datasets[1].data;

      //     ctx.save();
      //     ctx.font = "bolder 20px";
      //     ctx.fillStyle = "red";
      //     ctx.textAlign = "center";
      //     ctx.textBaseline = "middle";
      //     ctx.fillText(`CAR: ${data.datasets[1].data[0]}`, xCoor, yCoor);
      //     ctx.restore();
      //   },
      // };

      console.log(data);

      this.chart = new Chart(chartElement, {
        type: "doughnut",
        data: {
          labels: ["Realized", "Abandoned"],
          datasets: [
            {
              label: "Data",
              data: data.values,
              borderColor: [
                this.currentColor.chart.secondary,
                this.currentColor.chart.primary,
              ],
              backgroundColor: [
                this.currentColor.chart.secondary,
                this.currentColor.chart.primary,
              ],
            },
            // {
            //   label: "CAR",
            //   data: data.change,
            //   hidden: true,
            // },
          ],
        },
        options: {
          layout: {
            padding: {
              right: 10,
              bottom: 30,
            },
          },
          responsive: true,
          // maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
            },
            legend: {
              position: "bottom",
            },
          },
        },
        // plugins: [doughnutCenterLabel],
      });

      this.fullScreenModeHandler();
      this.updateTargetLabel(data);
    }

    updateTargetLabel(data) {
      this.template.getElementById("current-car").innerText = Math.round(
        (data.values[0] / (data.values[0] + data.values[1]) - 1) * 100
      );
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
        const widget = document.querySelector("cart-abandonment-rate");
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
        const widget = document.querySelector("cart-abandonment-rate");
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

  customElements.define("cart-abandonment-rate", PerformanceHelp);
})();
