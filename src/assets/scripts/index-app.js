

function handleTooltip(evt, action) {
    const toolip = document.querySelector('[data-genplan-tooltip]');
    const selfWidth = toolip.getBoundingClientRect().width;
    const text = toolip.querySelector('[data-genplan-tooltip-text]');

    return function(evt, action) {
      action === 'off' ? 
      toolip.classList.remove('active') : 
      toolip.classList.add('active')
      ;
      const { y  } = evt.target.getBBox();
      const { left  } = evt.target.getBoundingClientRect();
      toolip.style.transform = `translate(${left- selfWidth}px, ${y}px)`;
      text.textContent = evt.target.dataset.floor;
    }

}

const tooltip = handleTooltip();


document.querySelectorAll('svg [data-floor]').forEach(el => {
  el.addEventListener('mouseenter',function(evt){
    tooltip(evt, 'on');
  });
})

document.querySelectorAll('svg [data-floor]').forEach(el => {
  el.addEventListener('mouseleave',function(evt){
    tooltip(evt, 'off');
  
  });
})