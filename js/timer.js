const targetDate = new Date('2025-03-01T23:59:59').getTime();

const updateTimer = (prefix) => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    document.querySelector(`.${prefix}-days`).textContent = '00';
    document.querySelector(`.${prefix}-hours`).textContent = '00';
    document.querySelector(`.${prefix}-minutes`).textContent = '00';
    document.querySelector(`.${prefix}-seconds`).textContent = '00';
    return;
  }

  document.querySelector(`.${prefix}-days`).textContent = String(
    Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  ).padStart(2, '0');
  document.querySelector(`.${prefix}-hours`).textContent = String(
    Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, '0');
  document.querySelector(`.${prefix}-minutes`).textContent = String(
    Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, '0');
  document.querySelector(`.${prefix}-seconds`).textContent = String(
    Math.floor((timeLeft % (1000 * 60)) / 1000)
  ).padStart(2, '0');
};

const countdown = setInterval(() => {
  updateTimer('main');
  updateTimer('modal');
  updateTimer('tablet');
}, 1000);

updateTimer('main');
updateTimer('modal');
updateTimer('tablet');
