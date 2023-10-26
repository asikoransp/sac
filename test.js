(function () {
  let template = document.createElement("template");
  template.innerHTML = `
      <style>
        .name {
            font-family: Arial, sans-serif;
            color:green;
        }
        </style>
        <h1 class="name">Welcome to test</h1>
      `;
  class testWidget extends HTMLElement {
    constructor() {
      super();
      this.init();
    }

    async init() {}
  }
  customElements.define("test-widget", testWidget);
})();
