(function () {
  let template = document.createElement("template");
  template.innerHTML = `
    <legend style="margin-bottom: 0.5rem;">Chart chart color</legend>
    <div style="display: flex; align-items: center; margin-left: 0.5rem;">
      <legend style="font-size: 0.8rem; width: 5rem;">Light mode</legend>
      <input id="light-mode-chart-color" type="color" style="border: none; background: none; width: 1.7rem; height: 1.7rem;">
    </div>
    <div style="display: flex; align-items: center; margin-left: 0.5rem;">
      <legend style="font-size: 0.8rem; width: 5rem;">Dark mode</legend>
      <input id="dark-mode-chart-color" type="color" style="border: none; background: none; width: 1.7rem; height: 1.7rem;">
    </div>
	`;

  class BoxSps extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      this._shadowRoot
        .getElementById("light-mode-chart-color")
        .addEventListener("change", this._submit.bind(this));

      this._shadowRoot
        .getElementById("dark-mode-chart-color")
        .addEventListener("change", this._submit.bind(this));
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
  }

  customElements.define("top-ten-products-sps", BoxSps);
})();
