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
        <h2 class="widget__title">Company Sales Revenue</h2>
        ${fullScreenButton}
      </div>
      <div class="chart__wrapper">
        <canvas id="company-sales-revenue-chart"></canvas>
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
      this.chart.data.datasets[0].data = data.values;
      this.chart.data.labels = data.labels;
      this.chart.update();
    }

    getData() {
      const dataSet = this.dataSet.data.sort((a, b) =>
        a.dimensions_0.id.localeCompare(b.dimensions_0.id)
      );
      let labels = [],
        values = [],
        values1 = [],
        change = [],
        currentYear = new Date().getFullYear();

      dataSet.forEach((el) => {
        labels.push(el.dimensions_0.label.split("_").join(" "));
        if (el.dimensions_0.id.indexOf(currentYear) != -1) {
          values1.push(el.measures_0.raw);
        } else {
          values.push(el.measures_0.raw);
        }
      });

      labels = [...new Set(labels)];
      if (labels.length == 2) {
        labels = [labels[0] + "/" + labels[1]];
      }

      if (values.length >= values1.length) {
        for (let index = 0; index < values.length; ++index) {
          let incrase =
            values1.length >= index
              ? values1[index]
                ? values1[index] - values[index]
                : -1
              : -1;
          let test = values1[index] ? values[index] : 1;
          change.push((incrase / test) * 100);
        }
      } else {
        for (let index = 0; index < values1.length; ++index) {
          let incrase =
            values.length >= index
              ? values[index]
                ? values1[index] - values[index]
                : 1
              : 1;
          let test = values[index] ? values[index] : 1;
          change.push((incrase / test) * 100);
        }
      }

      return {
        labels,
        values,
        values1,
        change,
        currentYear,
      };
    }

    renderChart() {
      const data = this.getData();

      const chartElement = this.template
        .querySelector("canvas")
        .getContext("2d");

      this.chart = new Chart(chartElement, {
        type: "bar",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: data.currentYear - 1,
              data: data.values,
              borderColor: this.currentColor.chart.primary,
              backgroundColor: this.currentColor.chart.primary,
              order: 1,
              borderRadius: 6,
            },
            {
              label: data.currentYear,
              data: data.values1,
              borderColor: this.currentColor.chart.secondary,
              backgroundColor: this.currentColor.chart.secondary,
              order: 1,
              borderRadius: 6,
            },
            {
              label: "Change",
              data: data.change,
              borderColor: this.currentColor.chart.secondary,
              backgroundColor: this.currentColor.chart.secondary,
              type: "line",
              order: 0,
              tension: 0.4,
              yAxisID: "y2",
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
          scales: {
            y: {},
            y2: {
              position: "right",
              suggestedMin: -100,
              suggestedMax: 100,
              grid: {
                display: false,
              },
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
        const widget = document.querySelector("company-sales-revenue");
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
        const widget = document.querySelector("company-sales-revenue");
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

  customElements.define("company-sales-revenue", PerformanceHelp);
})();
