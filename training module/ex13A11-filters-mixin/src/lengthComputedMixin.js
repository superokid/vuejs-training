export const lengthComputedMixin = {
    computed: {
        lengthComputed() {
            return `${this.secondText} + (${this.secondText.length})`
        }
    }
}