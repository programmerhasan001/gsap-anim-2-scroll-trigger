gsap.from("#page1 #box", {
    rotate: 360,
    duration: 2,
    scale: 0
})

gsap.from("#page2 #box", {
    rotate: -360,
    duration: 2,
    scale: 0,
    delay: 0.5,
    scrollTrigger: "#page2 #box"
})