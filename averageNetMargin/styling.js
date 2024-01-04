(function () {
  let template = document.createElement("template");
  template.innerHTML = `
    <style>
      .styling-property {
        margin-bottom: 0.5rem;
        color: #979797;
        font-size: 0.9rem;
      }

      .styling-property input[type="color"] {
        border: none;
        background: none;
        width: 1.7rem;
        height: 1.7rem;
      }

      .styling-property input[type="text"] {
        width: 95%;
        padding: 0.3rem 0.5rem;
        border: 1px solid #c2c2c2;
        color: #2c2c2c
      }

      .styling-property legend { 
        margin-bottom: 0.3rem;
        color: #979797;
        font-size: 0.9rem;
      }

      .mode-group {
        display: flex;
        gap: 4rem;
      }
    </style>

    <div class="mode-group">
      <div class="styling-property">
        <legend>Light mode primary</legend>
        <input id="light-mode-chart-primary-color" type="color">
      </div>

      <div class="styling-property">
        <legend>Light mode secondary</legend>
        <input id="light-mode-chart-secondary-color" type="color">
      </div>
    </div>
    
    <div class="mode-group">
      <div class="styling-property">
        <legend>Dark mode primary</legend>
        <input id="dark-mode-chart-primary-color" type="color">
      </div>

      <div class="styling-property">
        <legend>Dark mode secondary</legend>
        <input id="dark-mode-chart-secondary-color" type="color">
      </div>
    </div>

    <div class="styling-property">
      <legend>Chart title</legend>
      <input id="chart-title" type="text">
    </div>
	`;

  class BoxSps extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      this._shadowRoot.querySelectorAll("input").forEach((property) => {
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
              lightModeChartPrimaryColor: this.convertHexToRGBA(
                this.lightModeChartPrimaryColor
              ),
              darkModeChartPrimaryColor: this.convertHexToRGBA(
                this.darkModeChartPrimaryColor
              ),
              lightModeChartSecondaryColor: this.convertHexToRGBA(
                this.lightModeChartSecondaryColor
              ),
              darkModeChartSecondaryColor: this.convertHexToRGBA(
                this.darkModeChartSecondaryColor
              ),
              chartTitle: this.chartTitle,
            },
          },
        })
      );
    }

    set lightModeChartPrimaryColor(newLightModeChartPrimaryColor) {
      this._shadowRoot.getElementById("light-mode-chart-primary-color").value =
        this.convertRGBAToHex(newLightModeChartPrimaryColor);
    }

    get lightModeChartPrimaryColor() {
      return this._shadowRoot.getElementById("light-mode-chart-primary-color")
        .value;
    }

    set darkModeChartPrimaryColor(newDarkModeChartPrimaryColor) {
      this._shadowRoot.getElementById("dark-mode-chart-primary-color").value =
        this.convertRGBAToHex(newDarkModeChartPrimaryColor);
    }

    get darkModeChartPrimaryColor() {
      return this._shadowRoot.getElementById("dark-mode-chart-primary-color")
        .value;
    }

    set lightModeChartSecondaryColor(newLightModeChartSecondaryColor) {
      this._shadowRoot.getElementById(
        "light-mode-chart-secondary-color"
      ).value = this.convertRGBAToHex(newLightModeChartSecondaryColor);
    }

    get lightModeChartSecondaryColor() {
      return this._shadowRoot.getElementById("light-mode-chart-secondary-color")
        .value;
    }

    set darkModeChartSecondaryColor(newDarkModeChartSecondaryColor) {
      this._shadowRoot.getElementById("dark-mode-chart-secondary-color").value =
        this.convertRGBAToHex(newDarkModeChartSecondaryColor);
    }

    get darkModeChartSecondaryColor() {
      return this._shadowRoot.getElementById("dark-mode-chart-secondary-color")
        .value;
    }

    set chartTitle(newChartTitle) {
      this._shadowRoot.getElementById("chart-title").value = newChartTitle;
    }

    get chartTitle() {
      return this._shadowRoot.getElementById("chart-title").value;
    }
  }

  customElements.define("average-net-margin-sps", BoxSps);
})();
