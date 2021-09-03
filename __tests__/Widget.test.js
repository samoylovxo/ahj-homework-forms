/**
 * @jest-environment jsdom
 */

import { Widget } from '../src/js/components/Widget';

describe('Widget', () => {
  let widgetElement = null;
  let popoverElement = null;

  document.body.innerHTML = `
    <div class="widget">
      <h1 class="widget__title"></h1>
      <button class="widget__btn"></button>
    </div>
    <div class="popover">
      <div class="popover__content">
        <h2 class="popover__title"></h2>
        <p class="popover__text"></p>
      </div>
    </div>`;

  beforeEach(() => {
    widgetElement = document.querySelector('.widget');
    popoverElement = document.querySelector('.popover');
  });

  it('test 1', () => {
    const widget = new Widget(widgetElement, popoverElement);
    const btn = widgetElement.querySelector('.widget__btn');

    widget.createPopover(btn, 'Ты тут?', 'Что нового?');

    expect(
      document.querySelector('.popover').classList.contains('hidden')
    ).toBeTruthy();
  });
});
