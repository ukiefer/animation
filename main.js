import Animation from './animation.js'

// Detect reduced motion
window._isMotionReduced = !!(window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true)
console.log('is reduced?', window._isMotionReduced)

// get all animation
if (!window._isMotionReduced) {
    for (const $animation of [].concat(...document.querySelectorAll('H1'))) {
        const a = new Animation($animation)
        a.initialize()
    }
}