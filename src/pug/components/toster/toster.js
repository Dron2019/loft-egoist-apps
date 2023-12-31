import gsap from 'gsap';
import BezierEasing from 'bezier-easing';

export default class MyToster {
  constructor(setting) {
    this.$wrap = setting.$wrap;
    this.$item = setting.$item;
    this.ease_0 = BezierEasing(0.34, 0.98, 0.43, 0.95);

    this.$body = document.querySelector('body');

    this.init();
  }

  /*  */
  createItem({ type, title, text }) {
    return `
      <div class="toast" data-toast-item="" data-toast-status="${type}">
        <div class="toast-logo-block">
          <div class="toast__logo">
            <svg width="34" height="62" viewBox="0 0 34 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3272 36.3227C33.1464 32.1005 32.062 27.5189 30.345 22.8475C30.0739 23.7458 29.8028 24.734 29.5317 25.812C28.628 29.1359 27.5436 32.9988 25.1036 36.9516C23.8384 39.0178 22.754 41.1738 21.9407 43.24C24.8325 42.8807 26.5495 41.3535 28.2665 39.8263C29.622 38.4788 31.1583 37.1312 33.3272 36.3227ZM19.2296 54.5593C29.4413 53.2117 33.4175 46.4741 33.3272 37.6703C31.5198 38.3889 30.2546 39.5568 28.9895 40.6348C27.0014 42.4315 25.0132 44.2282 21.3081 44.4079C21.037 45.2164 20.7659 46.0249 20.5852 46.8334C19.7718 49.798 19.4104 52.4032 19.2296 54.5593ZM16.7897 61.7461C16.4282 61.1172 16.1571 60.4884 15.886 59.7697C15.3438 58.2425 14.8919 56.4458 14.8919 55.0084L17.4223 54.9186C17.5126 56.1763 17.7837 57.7933 18.3259 59.1409C18.7778 60.3087 19.32 61.3867 19.8622 61.8359H16.7897V61.7461ZM-0.741867 38.2093C-0.651498 46.3843 3.14399 52.7626 12.3616 54.3796C10.5542 51.415 9.37944 48.0911 8.47575 44.5876C8.29501 44.5876 8.20464 44.5876 8.0239 44.5876C6.48763 44.4977 4.68026 43.779 3.05362 42.4315C1.69809 41.4433 0.342559 40.006 -0.741867 38.2093ZM1.42698 25.4527C0.342556 28.9562 -0.380393 32.4598 -0.6515 35.6939C-0.561131 35.9634 -0.380392 36.2329 -0.290023 36.4126C0.884771 38.5686 2.33067 40.2755 3.77657 41.4433C5.22247 42.6112 6.75874 43.24 8.11427 43.3299H8.20464C7.93354 42.4315 7.7528 41.5332 7.57206 40.6348C6.12616 35.065 4.861 29.4953 1.42698 25.4527ZM8.56612 9.91119C6.03579 14.0436 3.86694 18.5354 2.2403 22.9373C4.13805 24.8238 5.49358 27.0697 6.48764 29.4953C8.38538 25.9917 9.10833 21.6796 9.10833 17.5472C9.1987 14.942 9.01796 12.3367 8.56612 9.91119ZM15.163 0.837837C13.1749 3.17355 11.2772 5.68894 9.56017 8.38399C10.1024 11.1689 10.4639 14.4029 10.4639 17.637C10.3735 22.3084 9.4698 27.1595 7.12022 31.1123C8.20464 33.987 8.92759 37.0414 9.74091 40.1856C10.9157 45.0367 12.0905 49.8878 14.7112 53.8406C13.0846 44.0486 13.8979 33.7175 14.7112 23.656C15.2534 15.5708 15.886 7.75515 15.163 0.837837ZM24.0192 9.91119C22.0311 6.67712 19.7718 3.62273 17.4223 0.837837C18.0548 7.93482 17.5126 15.6606 16.88 23.656C16.6089 27.0697 16.3378 30.5733 16.1571 34.0769C20.7659 30.4834 21.5792 24.5543 22.2118 18.8049C22.6637 15.6606 23.0251 12.6062 24.0192 9.91119ZM29.0798 19.7032C27.905 16.8285 26.4591 14.0436 24.9229 11.3486C24.1999 13.6843 23.9288 16.2895 23.5673 18.9845C22.754 25.3628 21.9407 31.9208 16.1571 35.6939C15.886 41.8925 15.9764 48.0013 17.0608 53.8406C17.2415 51.6845 17.6934 48.9895 18.5067 46.2046C19.5007 42.8807 20.9466 39.1975 23.2059 35.6939C25.4651 32.0106 26.4591 28.3274 27.3628 25.1832C27.8147 23.117 28.3569 21.2304 29.0798 19.7032Z" fill="#7A9049"/>
            </svg>
          </div>
        </div>
        <div class="toast-content-block">
          <h5 class="toast__title">${title}</h5>
          <p class="toast__text">${text}</p>
        </div>
        <button class="toast__colose-btn" data-toast-colose-btn="" type="button">
          <svg class="icon--close" role="presentation">
            <use xlink:href="#icon-close"></use>
          </svg>
        </button>
      </div>
    `;
  }

  removeItem(item) {
    gsap.fromTo(
      item,
      0.25,
      { xPercent: 0, ease: this.ease_0 },
      {
        xPercent: 100,
        onComplete: () => {
          item.remove();
        },
      },
    );
  }

  addToast(settingObj) {
    const markup = this.createItem(settingObj);
    this.$wrap.insertAdjacentHTML('beforeend', markup);
    /*  */
    const items = this.$wrap.querySelectorAll('[data-toast-item]');
    const item = items[items.length - 1];
    /*  */
    gsap.fromTo(
      item,
      0.75,
      { xPercent: 100, skewX: -10 },
      { xPercent: 0, skewX: 0, ease: this.ease_0 },
    );

    setTimeout(() => {
      this.removeItem(item);
    }, 3000);
  }

  listeners() {
    const self = this;
    if (!this.$wrap) return;
    this.$wrap.addEventListener('click', ({ target }) => {
      if (target.closest('[data-toast-colose-btn]') !== null) {
        const item = target.closest('[data-toast-item]');
        self.removeItem(item);
      }
    });
  }

  init() {
    this.listeners();
  }
}
