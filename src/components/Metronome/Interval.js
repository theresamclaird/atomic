class Interval {
  static async externalTick(startMs, beatDurationMs) {
    return new Promise(resolve => {
      const currentMs = new Date().getTime();
      const beatCount = Math.floor((currentMs - startMs) / beatDurationMs);
      const elapsedMs = currentMs - startMs;
      const drift = elapsedMs - beatCount * beatDurationMs;

      setTimeout(() => {
        resolve();
      }, beatDurationMs - drift);
    });
  }

  #beatDurationMs;
  #active = false;
  #startMs = 0;

  constructor(beatsPerMinute = 60) {
    this.#beatDurationMs = 60000 / beatsPerMinute;
  }

  set beatsPerMinute(value) {
    this.#beatDurationMs = 60000 / value;
  }

  async #tick(callback) {
    if (!this.#active || !this.#startMs) {
      return;
    }

    await Interval.externalTick(this.#startMs, this.#beatDurationMs);
    callback();
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
