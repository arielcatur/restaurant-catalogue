class ErrorMessage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="error-message">
            <h2 tabindex="0">Page Failed To Load, Check Your Internet Connection.</h2>
          </div>
        `;
  }
}
customElements.define('error-message', ErrorMessage);
