(function () {
  let template = document.createElement("template");
  template.innerHTML = `
    <div style="display: flex;">
      <legend>Chart bar color</legend>
      <input id="bar-color" type="color">
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

    _submit(e) {
      e.preventDefault();
      this.dispatchEvent(
        new CustomEvent("propertiesChanged", {
          detail: {
            properties: {
              color: this.color,
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
