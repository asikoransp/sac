(function () {
  let tmpl = document.createElement("template");
  tmpl.innerHTML = `
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <h1>TEST</h1>
    </br>
    <button type="button" id="myBtn">Helper Button</button>
    </br>
    <canvas id="myChart" width="500" height="400"></canvas>
    `;

  class PerformanceHelp extends HTMLElement {
    constructor() {
      super();
      this.init();
    }

    init() {
      let shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
      console.log(shadowRoot);
      this.addEventListener("click", (event) => {
        var event = new Event("onClick");
        this.fireChanged();
        this.dispatchEvent(event);
      });

      let labels1 = ["YES", "YES BUT IN GREEN"];
      let data1 = [69, 31];
      let colors1 = ["#49A9EA", "#36CAAB"];

      let myDoughnutChart = shadowRoot.querySelector("canvas").getContext("2d");

      let chart1 = new Chart(myDoughnutChart, {
        type: "doughnut",
        data: {
          labels: ["YES", "YES BUT IN GREEN"],
          datasets: [
            {
              data: [69, 31],
              backgroundColor: ["#49A9EA", "#36CAAB"],
            },
          ],
        },
        options: {
          title: {
            text: "Do you like doughnuts?",
            display: true,
          },
        },
      });
    }

    fireChanged() {
      console.log("OnClick Triggered");
    }
  }

  customElements.define("custom-widget", PerformanceHelp);
})();
