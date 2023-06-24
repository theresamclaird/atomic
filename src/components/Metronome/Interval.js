class Interval {
  #beatDurationMs;
  #active = false;
  #startMs = 0;

  constructor(beatsPerMinute = 60) {
    this.#beatDurationMs = 60000 / beatsPerMinute;
  }

  set beatsPerMinute(value) {
    this.#beatDurationMs = 60000 / value;
  }

  #tick(callback) {
    if (!this.#active || !this.#startMs) {
      return;
    }

    const currentMs = new Date().getTime();
    const beatCount = Math.floor((currentMs - this.#startMs) / this.#beatDurationMs);
    const elapsedMs = currentMs - this.#startMs;
    const drift = elapsedMs - beatCount * this.#beatDurationMs;

    setTimeout(() => {
      this.#tick(callback);
      callback();
    }, this.#beatDurationMs - drift);
  }

  start(callback) {
    this.#active = true;
    this.#startMs = new Date().getTime();
    this.#tick(callback);
  }

  stop() {
    this.#active = false;
  }
}

export { Interval, Interval as default };
