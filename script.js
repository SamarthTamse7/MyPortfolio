const lenis = new Lenis(
);

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

document.addEventListener("mousemove", (e) => {
    gsap.to("#aboutDiv #mypic", {
        rotationY: (e.clientX - window.innerWidth / 2) * 0.025,
        rotationX: -(e.clientY - window.innerHeight / 2) * 0.025,
        duration: 0.5,
    });
});


let mainTimeLine = gsap.timeline(
    {
        scrollTrigger: {
            scroller: "body",
            trigger: "#main",
            markers: true,
            start: "top 0%",
            end: "top -60%",
            pin: true,
            scrub: .1,
        }
    }
)

mainTimeLine.to("#sec", {
    bottom: "0%",
    ease: "none",
})

let programmerTimeline = gsap.timeline(
    {
        scrollTrigger: {
            scroller: "body",
            trigger: "#programmerScroll",
            markers: true,
            start: "top 0%",
            end: "top -400%",
            pin: true,
            scrub: 2,
        }
    }
)

programmerTimeline.to("#innerDiv", {
    height: "100%",
    width: "100%",
    ease: "none",
}, "st")

programmerTimeline.to("#textScroll", {
    transform: "translateX(-105%)",
    ease: "none",
}, "st")

programmerTimeline.to("#projectDiv b", {
    bottom: "0%",
    ease: "none"
}, "start")

.to(".box", {
    bottom: "0%",
    ease: "none",
}, "start")

programmerTimeline.to(".proCon", {
    rotationY: 30,
    ease: "none",
}, "start")

programmerTimeline.to(".proCon", {
    rotationY: 360,
    ease: "none",
}, )

programmerTimeline.to(".proCon", {
    scale: 0.7,
    rotationY: 500,
    rotationX: 20,
    ease: "none",
})