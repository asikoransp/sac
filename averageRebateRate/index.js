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
        <h2 class="widget__title">Average Rebate Rate</h2>
        <div class="widget__filters">
          <button class="widget__filter-btn" data-percentage="1">1%</button>
          <button class="widget__filter-btn" data-percentage="5">5%</button>
          <button class="widget__filter-btn" data-percentage="10">10%</button>
        </div>
        ${fullScreenButton}
      </div>
      <div class="chart__wrapper">
        <canvas id="average-rebate-rate-chart"></canvas>
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
    aggregation = 5;
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

    addEventListeners() {
      const buttons = this.template.querySelectorAll(".widget__filter-btn");
      buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
          this.aggregation = event.target.dataset.percentage * 1;
          this.setFilterAsActive();
          this.updateChartData();
        });
      });
    }

    getData() {
      const data = this.dataSet.data;
      const aggregation = this.aggregation;
      const intervals = [];

      for (let i = 0; i < 100; i += aggregation) {
        intervals.push({ start: i, end: i + aggregation - 1, sum: 0 });
      }

      data.forEach((obj) => {
        const rawValue = obj.measures_0.raw;
        const rawDim = parseInt(obj.dimensions_0.id * 100);

        const interval = intervals.find((interval) => {
          return rawDim >= interval.start && rawDim <= interval.end;
        });

        if (interval) {
          interval.sum += rawValue;
        }
      });

      const filteredIntervals = intervals.filter(
        (interval) => interval.sum > 0
      );

      const values = filteredIntervals.map((interval) => interval.sum);
      const labels = filteredIntervals.map((interval) =>
        this.aggregation === 1
          ? `${interval.end}%`
          : `${interval.start}-${interval.end}%`
      );

      return {
        labels,
        values,
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
              label: "Average rebate",
              data: data.values,
              backgroundColor: this.currentColor.chart.primary,
              borderWidth: 0,
              borderColor: this.currentColor.chart.primary,
              borderRadius: 5,
              borderSkipped: false,
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

      this.setFilterAsActive();
      this.addEventListeners();
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
        const widget = document.querySelector("average-rebate-rate");
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
        const widget = document.querySelector("average-rebate-rate");
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

    setFilterAsActive() {
      this.template.querySelectorAll("[data-percentage]").forEach((el) => {
        el.style.backgroundColor = "rgb(122, 122, 122)";
      });

      this.template.querySelector(
        `[data-percentage='${this.aggregation}']`
      ).style.backgroundColor = this.currentColor.chart.primary;
    }
  }

  customElements.define("average-rebate-rate", PerformanceHelp);
})();
