/* eslint-disable import/prefer-default-export */
export class Widget {
  constructor(element, popover) {
    this.element = element;
    this.popover = popover;

    this.showPopover = this.showPopover.bind(this);
    this.createPopover = this.createPopover.bind(this);

    this.element.addEventListener('click', this.showPopover);
  }

  createPopover(element, title, text) {
    const coordinates = element.getBoundingClientRect();

    const popTitle = this.popover.querySelector('.popover__title');
    const popText = this.popover.querySelector('.popover__text');

    popTitle.innerText = title;
    popText.innerText = text;

    this.popover.classList.toggle('hidden');

    this.popover.style.top = `${coordinates.top - 100 + window.scrollY}px`;
    this.popover.style.left = `${
      coordinates.left - this.popover.offsetWidth / 4 + window.scrollX
    }px`;
  }

  showPopover() {
    const btn = this.element.querySelector('.widget__btn');
    this.createPopover(btn, 'Привет, друг!', 'Я Popover');
  }
}
