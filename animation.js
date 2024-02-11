/**
 * @module animation
 *
 * @author Uwe Kiefer <uwe.kiefer.dev@gmail.com>
 */

 class Animation {
    constructor(el, obj = {}) {
        this.el = el
        this.options = obj
    }

    // static selectors
    static get SELECTOR_BODY() { return '.accordion__body' }
 
    initialize() {
        this.setupMarkUp()
        this.bindEvents()
        setTimeout(() => {
            const lastSpan = this.el.querySelector('.h1__line-3 span')
            lastSpan.addEventListener('transitionend', () => {
                this.el.classList.remove('do-anim')
                this.el.querySelectorAll('.h1__line').forEach((item) => {
                    item.remove()
                })
            }, {once: true})

            this.el.classList.add('do-anim')
        }, 1)
    }

    bindEvents() {
    }

    setupMarkUp() {
        const parent = this.el.parentElement
        const outerHtml = `<div class="h1__anim">${this.el.outerHTML}<div class="h1__line h1__line-1" aria-hidden="true"><span>${this.el.innerHTML}</span></div><div class="h1__line h1__line-2" aria-hidden="true"><span>${this.el.innerHTML}</span></div><div class="h1__line h1__line-3" aria-hidden="true"><span>${this.el.innerHTML}</span></div></div>`
        this.el.outerHTML = outerHtml
        this.el = parent.querySelector('.h1__anim')
    }
 }
 
 // Returns the constructor
 export default Animation
 