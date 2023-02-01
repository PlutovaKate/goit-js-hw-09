import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  const dataInfo = { position, delay };
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(dataInfo);
      } else {
        reject(dataInfo);
      }
    }, delay);
  });
}

function handleSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  let delay = Number(formElements.delay.value);
  const amount = Number(formElements.amount.value);
  const step = Number(formElements.step.value);

  for (let position = 2; position <= amount; position++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
  formEl.reset();
}

formEl.addEventListener('submit', handleSubmit);
