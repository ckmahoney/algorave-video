s0.initVideo("https://raw.githubusercontent.com/ckmahoney/algorave-video/main/algorave-futures-lab.mp4")

osc().color(1,0,0).out(o1)
voronoi().color(0,1,0).out(o2)
noise().color(0,0,1).out(o3)

let stage = (r) => (_) => Math.abs(Math.sin(Math.PI*r*time/100))


solid()
  .blend(src(o1),stage(0))
  .blend(src(o2),stage(Math.PI*2/3))
  .blend(src(o3),stage(Math.PI*4/3))
  .diff(src(s0)).out()
