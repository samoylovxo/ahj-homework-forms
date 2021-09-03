import { Widget } from './components/Widget';

const widget = new Widget(
  document.querySelector('.widget'),
  document.querySelector('.popover')
);
window.widget = widget;
