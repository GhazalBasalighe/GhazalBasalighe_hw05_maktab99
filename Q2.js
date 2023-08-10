let stepCounter = {
  steps: 0,
  increase() {
    this.steps++;
    return this;
  },
  decrease() {
    if (this.steps > 0) {
      this.steps--;
    }
    return this;
  },
  reset() {
    this.steps = 0;
    return this;
  },
  read() {
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
