import 'current-device';

function handleTooltip(evt) {
    const infoItems = document.querySelectorAll('[data-info-flat]');

    return function(evt) {
        infoItems.forEach(el => {
            el.textContent  = evt.target.dataset[el.dataset.infoFlat]
        })
    }

}

const tooltip = handleTooltip();


document.querySelectorAll('svg [data-id]').forEach(el => {
  el.addEventListener('mouseenter',function(evt){
    tooltip(evt);
  });
})



document.body.addEventListener('mousemove',function(evt){
    console.log(evt.target);
});