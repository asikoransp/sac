(function () {
  let template = document.createElement("template");
  template.innerHTML = `
    <style>
      .styling-panel__legend--color-mode {
        margin-bottom: 0.5rem;
        color: #979797;
        font-size: 0.9rem;
      }

      .styling-panel__legend--title {
        margin-bottom: 0.2rem;
        color: #979797;
        font-size: 0.9rem;
      }

      .styling-panel__color-mode {
        display: flex;
        align-items: center;
        margin-left: 0.5rem;
      }

      .styling-panel__color-mode legend {
        color: #979797;
        font-size: 0.9rem;
        width: 5rem;
      }

      .styling-panel__color-mode input {
        border: none;
        background: none;
        width: 1.7rem;
        height: 1.7rem;
      }

      .styling-panel__color-mode input { 
        width: 95%;
        padding: 0.3rem 0.5rem;
        border: 1px solid #c2c2c2;
        color: #2c2c2c
      }
    </style>

    <legend class="styling-panel__legend--color-mode">Chart chart color</legend>

    <div class="styling-panel__color-mode">
      <legend>Light mode</legend>
      <input class="styling-panel__color-picker" id="light-mode-chart-color" type="color">
    </div>

    <div class="styling-panel__color-mode">
      <legend>Dark mode</legend>
      <input class="styling-panel__color-picker" id="dark-mode-chart-color" type="color">
    </div>

    </br>

    <legend class="styling-panel__legend--title">Chart title</legend>
    <input id="chart-title" type="text">
	`;

  class BoxSps extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      this._shadowRoot
        .querySelectorAll(".styling-panel__color-picker")
        .forEach((property) => {
          property.addEventListener("change", this._submit.bind(this));
        });
    }

    convertHexToRGBA(hexColor) {
      if (hexColor.startsWith("#")) {
        hexColor = hexColor.slice(1);
      }

      const red = parseInt(hexColor.substring(0, 2), 16);
      const green = parseInt(hexColor.substring(2, 4), 16);
      const blue = parseInt(hexColor.substring(4, 6), 16);

      return `rgba(${red}, ${green}, ${blue}, 0.8)`;
    }

    convertRGBAToHex(rgbaColor) {
      const rgbaValues = rgbaColor.match(/\d+/g);
      const red = parseInt(rgbaValues[0]);
      const green = parseInt(rgbaValues[1]);
      const blue = parseInt(rgbaValues[2]);

      return `#${red.toString(16).padStart(2, "0")}${green
        .toString(16)
        .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
    }

    _submit(e) {
      e.preventDefault();
      this.dispatchEvent(
        new CustomEvent("propertiesChanged", {
          detail: {
            properties: {
              lightModeChartColor: this.convertHexToRGBA(
                this.lightModeChartColor
              ),
              darkModeChartColor: this.convertHexToRGBA(
                this.darkModeChartColor
              ),
              chartTitle: this.chartTitle,
            },
          },
        })
      );
    }

    set lightModeChartColor(newLightModeChartColor) {
      this._shadowRoot.getElementById("light-mode-chart-color").value =
        this.convertRGBAToHex(newLightModeChartColor);
    }

    get lightModeChartColor() {
      return this._shadowRoot.getElementById("light-mode-chart-color").value;
    }

    set darkModeChartColor(newDarkModeChartColor) {
      this._shadowRoot.getElementById("dark-mode-chart-color").value =
        this.convertRGBAToHex(newDarkModeChartColor);
    }

    get darkModeChartColor() {
      return this._shadowRoot.getElementById("dark-mode-chart-color").value;
    }

    set chartTitle(newChartTitle) {
      this._shadowRoot.getElementById("chart-title").value = newChartTitle;
    }

    get chartTitle() {
      return this._shadowRoot.getElementById("chart-title").value;
    }
  }

  customElements.define("top-ten-products-sps", BoxSps);
})();
