gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    apAnimationInit()
})

function apAnimationInit() {
    //анимация первого экрана сразу после загрузки
    const mainTitle = document.querySelector("[data-anim-name='mainTitle']");
    const mainScreenText = document.querySelector("[data-anim-name='mainScreenText']");
    const header = document.querySelector("[data-anim-name='header']");
    const animContainer = document.querySelector("[data-anim-name='animContainer']");
    const sections = document.querySelectorAll("[data-anim-section]");
    const allHeight = [...sections].reduce(function(acc, section) {
        acc += section.querySelector("[data-anim-content]").offsetHeight;
        return acc
      }, 0);

    console.log(sections)

    let startTL = gsap.timeline();

    startTL.from(mainTitle, {
        opacity:0,
        yPercent: 50,
        duration:1.8,
        delay: 0.5
    }).from(mainScreenText, {
        opacity:0,
        duration:1
    }).from(header, {
        yPercent:-101,
        duration:1
    })

    //анимация первого экрана при скролле
    /*let mainScreenScroll = gsap.to(mainScreenText,{opacity: 0})

    ScrollTrigger.create( {
        animation: mainScreenScroll,
        trigger: mainScreenText,
        start: 'center center',
        end:'bottom center',
        scrub: true,
        markers: true,
    })

    gsap.utils.toArray("[data-anim-section]").forEach((section, i, arr) => {
        let toPosition = "-" + window.innerHeight + "px";
        let anim = gsap.fromTo(section, {y: "0px"}, {y: toPosition})

        let contentTrigger = ScrollTrigger.create({
            animation: anim,
            trigger: section,
            start: 'bottom bottom',
            endTrigger: arr[i + 1],
            end: 'top top',
            scrub: 2,
            pin: true,
            pinSpacer: false
        })

        console.log(contentTrigger)
    })

    /*gsap.utils.toArray("[data-anim-section]").forEach((section, i) => {
        let content = section.querySelector('[data-anim-content]');
        let toPosition = "-" + getScrollHeight(content) + "px";
        let anim = gsap.fromTo(content, {y: "0px"}, {y: toPosition})

        let contentTrigger = ScrollTrigger.create({
            animation: anim,
            trigger: section,
            start: 'top top',
            endTrigger: content,
            end: 'bottom bottom',
            scrub: 2,
            pin: true,
        })

        console.log(contentTrigger)
    })*/



    /*const s1 = document.querySelector('[data-anim-id="0"]'),
    s2 = document.querySelector('[data-anim-id="1"]'),
    s3 = document.querySelector('[data-anim-id="2"]'),
    s4 = document.querySelector('[data-anim-id="3"]'),
    s5 = document.querySelector('[data-anim-id="4"]'),
    s6 = document.querySelector('[data-anim-id="5"]'),
    s7 = document.querySelector('[data-anim-id="6"]'),
    s8 = document.querySelector('[data-anim-id="7"]'),
    s9 = document.querySelector('[data-anim-id="8"]'),
    c1 = s1.querySelector('[data-anim-content]'),
    c2 = s2.querySelector('[data-anim-content]'),
    c3 = s3.querySelector('[data-anim-content]'),
    c4 = s4.querySelector('[data-anim-content]'),
    c5 = s5.querySelector('[data-anim-content]'),
    c6 = s6.querySelector('[data-anim-content]'),
    c7 = s7.querySelector('[data-anim-content]'),
    c8 = s8.querySelector('[data-anim-content]'),
    c9 = s9.querySelector('[data-anim-content]')

    let sectionsTL = gsap.timeline();

    let mainTrigger = ScrollTrigger.create({
        animation: sectionsTL,
        trigger: animContainer,
        start: "top top",
        end: allHeight,
        scrub: true,
        pin: true,
    })

    sectionsTL.fromTo(s2, {y: '300%'}, {y: '-300%'})
    sectionsTL.fromTo(s3, {y: '200%'}, {y: '-200%'}, "<+0.1")
    sectionsTL.fromTo(s2, {y: '-300%'}, {y: '-400%'})
    sectionsTL.fromTo(s4, {y: '100%'}, {y: '-100%'}, "<+0.1")
    sectionsTL.fromTo(s3, {y: '-200%'}, {y: '-300%'})
    sectionsTL.fromTo(s5, {y: '400%'}, {y: '-400%'})
    sectionsTL.fromTo(s6, {y: '500%'}, {y: '-500%'})
    sectionsTL.fromTo(s7, {y: '600%'}, {y: '-600%'})
    sectionsTL.fromTo(s8, {y: '700%'}, {y: '-700%'})
    sectionsTL.fromTo(s9, {y: '800%'}, {y: '-800%'})

    console.log(mainTrigger)*/

}

function getScrollHeight(contentBlock) {
 return contentBlock.offsetHeight - window.innerHeight       
}