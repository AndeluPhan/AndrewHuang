gsap.registerPlugin(ScrollTrigger);


var t0 = gsap.timeline({
    scrollTrigger: {
      trigger: '#contact',
      start: 'top bottom',
      toggleActions:"restart complete reverse reset"
    }
  });
t0.from('.connecto', { x:"-50vw", duration: 1.2},0)
t0.from('.connecto', { color:"lightgray", duration: 0.2},1)

t0.from('.letso', { x:"50vw", duration: 1.2},0)
t0.from('.letso', { color:"lightgray", duration: 0.2},1)
