import { chartJs } from "./chart";

(function () {
  chartJs();

  let tmpl = document.createElement("template");
  tmpl.innerHTML = `
    <style>
      .chart-wrapper {
        padding: 1rem;
        margin: 1rem;
        border: 1px solid #fff;
        border-radius: 15px;
        background: #fff;
      }
    </style>
    
    <div class="chart-wrapper" style="display: block;">
      <canvas id="myChart" style="width: 900px !important; height: 400px !important;"></canvas>
    </div>
    `;

  class PerformanceHelp extends HTMLElement {
    temp = null;
    chart = null;

    constructor() {
      super();
      this.init();
    }

    init() {
      let shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
      this.addEventListener("click", (event) => {
        var event = new Event("onClick");
        this.dispatchEvent(event);
      });

      this.temp = shadowRoot;
      this.fireChanged();
    }

    onCustomWidgetAfterUpdate() {
      this.fireChanged();
    }

    fireChanged() {
      if (this.myDataBinding && this.myDataBinding.data) {
        const data = this.myDataBinding.data;

        const labels = data.map((el) => {
          return el.dimensions_0.label;
        });

        const value = data.map((el) => {
          return el.measures_0.raw;
        });

        if (this.chart) return;

        let element = this.temp.querySelector("canvas").getContext("2d");

        this.chart = new Chart(element, {
          type: "bar",
          data: {
            labels,
            datasets: [
              {
                label: "Value",
                data: value,
                backgroundColor: "#4631EE",
                borderRadius: 10,
              },
            ],
          },
          options: {
            indexAxis: "y",
            responsive: true,
            title: {
              text: "Średni poziom rabatowania produktów",
              display: true,
            },
          },
        });
      }
    }
  }

  customElements.define("custom-widget", PerformanceHelp);
})();
