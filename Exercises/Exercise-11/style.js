let size = 68;
let columns = Array.from(document.getElementsByClassName('column'));
let class_list = ['visible', 'near', 'far', 'far', 'distant', 'distant'];
let is_24_hour_clock = true;

function getClock() {
  let d = new Date();
  let hour = is_24_hour_clock ? d.getHours() : d.getHours() % 12 || 12;
  hour = hour < 10 ? '0' + hour : hour;
  let minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
  let second = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
  return hour + '' + minute + '' + second;
}

function getClass(currentNum, targetNum) {
  let diff = Math.abs(currentNum - targetNum);
  if (diff > 5) {
    diff = 10 - diff;
  }
  return class_list[diff] || '';
}

window.onload = function () {
  setInterval(() => {
    let c = getClock();
    columns.forEach(function (ele, i) {
      let n = parseInt(c[i]);

      let offset = -n * size;

      ele.style.transform = 'translateY(calc(50vh + ' + offset + 'px + ' + (size / 2) + 'px))';

      Array.from(ele.children).forEach(function (ele2, i2) {
        ele2.className = 'num ' + getClass(n, i2);
      });
    });
  }, 1000);
};
