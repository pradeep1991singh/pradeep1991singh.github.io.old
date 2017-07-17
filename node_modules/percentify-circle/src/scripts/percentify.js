import { COUNTER, TARGET_ELEMENT, ACTIVE_CLASS_NAME } from './common-constants';

function percentageCounter({ counter, element, activeClass }) {
  counter = counter || COUNTER;
  let target = document.getElementById(element || TARGET_ELEMENT);
  let intervalId = setInterval(() => {
    if (counter <= 100) {
      var newCounter = counter++;
      target.firstElementChild.textContent = newCounter + '%';
      target.classList.remove('p' + (newCounter - 1));
      target.classList.add('p' + newCounter);
    } else {
      target.classList.add(activeClass || ACTIVE_CLASS_NAME);
      clearInterval(intervalId);
    }
  }, 1000);
}

export default percentageCounter;
