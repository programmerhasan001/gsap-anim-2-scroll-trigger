// NEEDED ONE
// gsap.to("#page1 #box", {
//     transform: "rotateX(180deg) rotateY(350deg) rotateZ(-880deg)",
//     duration: 4,
//     opacity: 1,
//     scrollTrigger: {
//         trigger: "#page1 #box",
//         scroller: "body",
//         markers: true,
//         scrub: 1.2,
//         start: "top 80%",
//         end: "top 10%"
//     }
// })

// gsap.from("#page2 #box", {
//     rotate: -360,
//     duration: 2,
//     scale: 0,
//     delay: 0.5,
//     scrollTrigger: "#page2 #box"
// })

// let tl = gsap.timeline();

// tl.from("#page3 .container span", {
//     opacity: 0,
//     duration: 1.5,
//     delay: 0.5,
//     scrollTrigger: "#page3 .container span"
// })

gsap.to("#page2 h1", {
    transform: "translateX(-150%)",
    color: "red",
    duration: 3,
    scrollTrigger: {
        trigger: "#page2",
        markers: true,
        start: "top 0",
        end: "top -100%",
        scrub: 1.2,
        pin: true
    }
})

gsap.from("#page3 .container", {
    height: 0,
    overflow: "hidden",
    color: "red",
    duration: 3,
    scrollTrigger: {
        trigger: "#page3 .container h2",
        scroller: "body",
        start: "top 70%",
        scrub: 1.2,
        markers: true
    }
})

