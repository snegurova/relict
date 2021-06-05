const events = tippy('.tippy-item', {
  content(reference) {
    const id = reference.getAttribute('data-template');
    const template = document.getElementById(id);
    return template.innerHTML;
  },
  trigger: 'mouseenter click',
  interactive:'true',
  placement: 'left-start',
  offset: [0, 18],
  delay: [null, 100],
  allowHTML: true,
  theme: 'light',
  animation: 'scale-subtle',
  arrow: false,
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 670) {
    events.forEach((it) => {
      it.setProps({
        arrow: '<svg width="36" height="10" viewBox="0 0 36 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 9.5C0 9.5 7.5 9.5 18 0C29 9.49997 36 9.5 36 9.5H0Z" fill="white" /></svg>',
        placement: 'bottom',
      });
    });
  } else {
    events.forEach((it) => {
      it.setProps({
        arrow: false,
        placement: 'left-start',
      });
    });
  }
});

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 670) {
    events.forEach((it) => {
      it.setProps({
        arrow: '<svg width="36" height="10" viewBox="0 0 36 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 9.5C0 9.5 7.5 9.5 18 0C29 9.49997 36 9.5 36 9.5H0Z" fill="white" /></svg>',
        placement: 'bottom',
      });
    });
  } else {
    events.forEach((it) => {
      it.setProps({
        arrow: false,
        placement: 'left-start',
      });
    });
  }
});

