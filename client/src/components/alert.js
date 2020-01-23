class Alert {

  constructor(container) {
    this.container = container
  }

  stopAlert() {
    clearTimeout(this.timeout)
    this.container.innerHTML = ''
  }

  render(msg, type, timeout) {
    const html = `
      <div class="notice ${type}">
      <h3>${msg}.</h3>
      </div>
        `
    this.container.innerHTML = html

    this.timeout = setTimeout(() => {
      this.container.innerHTML = ''
    }, timeout)
  }

}
