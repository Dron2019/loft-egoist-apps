const { default: createFloorSvg } = require("./modules/createFloorSvg");
import * as flats from './testData/flats.json';
import * as mockFloor from './testData/mockFloor.json';
import { useState } from './modules/helpers/helpers';

const flats1 = flats.default;
const floorInfo = mockFloor.default;


const [ floorData, setFloorData, usefloorDataEffect ] = useState({});


usefloorDataEffect(({ floor }) => {
    const a = createFloorSvg(false, './assets/images/genplan-img.jpg', flats1, floorInfo.size, 471, floorInfo.flatsIds);
    document.querySelector('[data-floor-container]').innerHTML = a;
    
    document.querySelectorAll('[data-current-floor]').forEach(el => el.textContent = floor);
    document.querySelectorAll('[data-floor_direction]').forEach(el => {
        if (el.dataset.floor_direction === 'prev') {
            el.dataset.floor_value = +floor - 1;
            if ((+floor - 1) <= 0) {
                el.setAttribute('disabled', true);
            } else {
                el.removeAttribute('disabled');

            }
        }
        if (el.dataset.floor_direction === 'next') {
            el.dataset.floor_value = +floor + 1
        }
    });

});


const params = new URLSearchParams(window.location.search);

setFloorData({
    ...floorData,
    floor: 1
})

document.body.addEventListener('click', (evt) => {
    const target = evt.target.closest('[data-floor_btn]');
    if (!target) return;
    setFloorData({
        ...floorData(),
        floor: target.dataset.floor_value
    })
})



function handleTooltip() {
    const toolip = document.querySelector('.floor-tooltip');
    const selfWidth = toolip.getBoundingClientRect().width;
    const infoItems = document.querySelectorAll('[data-info-flat]');
    let state = 'off';
        

    return function(target, action) {
        if (action === 'off' && state === 'off') return;

        console.log(target);
      action === 'off' ? 
      toolip.classList.remove('active') : 
      toolip.classList.add('active');

      if (action === 'off') {
          state = action;
            return;
      }
      const { y  } = target.getBBox();
      const { left, top  } = target.getBoundingClientRect();
      toolip.style.transform = `translate(${left - selfWidth / 2}px, ${top}px)`;

        infoItems.forEach(el => {
            el.textContent  = target.dataset[el.dataset.infoFlat]
        })

        state = action;
    }

}

const tooltip = handleTooltip();


document.body.addEventListener('mousemove', (evt) => {
    if (!evt.target.closest('.js-s3d-flat__polygon')) {
        tooltip(evt.target.closest('.js-s3d-flat__polygon'), 'off');
        return;
    }
    tooltip(evt.target.closest('.js-s3d-flat__polygon'), 'on');

})
