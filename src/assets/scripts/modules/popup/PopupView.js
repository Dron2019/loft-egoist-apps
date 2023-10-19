export default class Popup {
    constructor(href) {
      this.href = href;
      this.containerClassName = 'vr-popup';
    }
  
    render() {
      const layout = `
        <div class="${this.containerClassName}">
          <div class="${this.containerClassName}__content">
            <img src="${this.href}"></img>
          </div>
          <div class="vr-popup__close">
            <span>Закрити</span>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="white"/>
                <path d="M37.826 37.826L22.1738 22.1738M22.1738 37.826L37.826 22.1738L22.1738 37.826Z" stroke="#555568"/>
            </svg>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', layout);
      document.querySelector(`.${this.containerClassName} .${this.containerClassName}__close`)
        .addEventListener('click', () => {
          document.querySelector(`.${this.containerClassName}`).remove();
        }, { once: true });
    }
}