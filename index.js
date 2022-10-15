function initAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 2,
        }
    })
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: 'body',
            start: 'center center',
            end: 'bottom bottom',
            scrub: 2,
        }
    })

    tl1
        .to('.pill--wrapper', {
            scale: 4,
        })
        .to('.pill--img', {
            scale: 4,
        }, '<')
        .to('.pill--wrapper', {
            opacity: 0,
        })
        .to('.pill--img', {
            scale: 3,
        }, '<');

    tl2
        .from('.bottle--down', 1, {
            y: '50vh',
            top: '100%',
        })
        .from('.bottle--up', 1, {
            y: '-50vh',
            top: '0',
        }, 0);

}

document.addEventListener("DOMContentLoaded", initAnimation);


