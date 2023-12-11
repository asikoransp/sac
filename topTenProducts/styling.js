(function () {
  let template = document.createElement("template");
  template.innerHTML = `
    <div style="display: flex; align-items: center;">
      <legend>Chart bar color</legend>
      <input id="bar-color" type="color" style="border: none; background: none; width: 1rem; height: 1rem;">
    </div>
	`;

  class BoxSps extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      this._shadowRoot
        .getElementById("bar-color")
        .addEventListener("change", this._submit.bind(this));
    }

    convertHexToRGBA(hexColor) {
      // Remove the '#' symbol if present
      if (hexColor.startsWith("#")) {
        hexColor = hexColor.slice(1);
      }

      // Convert the hex color to RGB values
      const red = parseInt(hexColor.substring(0, 2), 16);
      const green = parseInt(hexColor.substring(2, 4), 16);
      const blue = parseInt(hexColor.substring(4, 6), 16);

      // Create the RGBA string with opacity 0.8
      const rgbaColor = `rgba(${red}, ${green}, ${blue}, 0.8)`;

      return rgbaColor;
    }

    _submit(e) {
      e.preventDefault();
      this.dispatchEvent(
        new CustomEvent("propertiesChanged", {
          detail: {
            properties: {
              color: this.convertHexToRGBA(this.color),
            },
          },
        })
      );
    }

    set color(newColor) {
      this._shadowRoot.getElementById("bar-color").value = newColor;
    }

    get color() {
      return this._shadowRoot.getElementById("bar-color").value;
    }
  }

  customElements.define("top-ten-products-sps", BoxSps);
})();
