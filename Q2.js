let stepCounter = {
  steps: 0,
  increase: function increase() {
    this.steps++;
    return this;
  },
  decrease: function decrease() {
    this.steps--;
    return this;
  },
  reset: function reset() {
    this.steps = 0;
    return this;
  },
  read: function read() {
    console.log(`steps: ${this.steps}`);
    return this;
  },
};
stepCounter
  .increase()
  .read()
  .decrease()
  .read()
  .increase()
  .increase()
  .read()
  .reset()
  .read();
