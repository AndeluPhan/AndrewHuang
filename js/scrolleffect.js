gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#resume',
        start: "top top",
        end:"+=1200 top",
        pinSpacing:true,
        pin: true,
        scrub: true
    }
});

tl.to('.portfolioWork',{
    delay:0.12,
    duration:0.01,
    zIndex:0
},0).from('.darkcover',{
    delay:0.1,
    x:"-100vw"
},0).from('.lightIn',{
    delay:0.3,
    opacity:0
},0).from('.glass1', {
    delay: 0.2,
    scale:0,
    x: "-40vw"
},0).from('.glass2',{
    delay: 0.2,
    x: "-40vw",
    scale: 0
},0).from('.glass3',{
    delay: 0.2,
    x: "-40vw",
    scale: 0
},0).to('.rocket',{
    delay: 0.2,
    x:"25vw"
},0).to('.darkcover',{
    duration: 0.01,
    overflow:"hidden"
},1)


