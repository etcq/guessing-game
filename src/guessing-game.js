class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.answer = Math.round((this.min + this.max)/2)
        return this.answer
    }

    lower() {
        return this.max = this.answer
    }

    greater() {
        return this.min = this.answer
    }
}

module.exports = GuessingGame;
