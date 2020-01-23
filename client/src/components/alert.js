class Alert {

  constructor(container){
    this.container = container
  }

  
  }

  render(msg, type){
    const html = `
    <div class="notice ${type}">
    <p>${msg}.</p>
    </div>
    `
    
  }
}
