s0.initVideo("https://raw.githubusercontent.com/ckmahoney/algorave-video/main/algorave-futures-lab.mp4")

noise(0.01).color(0,0,1).add(osc(300).color($=>Math.abs(Math.sin(time/5)),$=>Math.abs(Math.sin(time/13)),0).diff(src(s2)).contrast().brightness(0.01)).out(o1)
voronoi(70).posterize(32).color(0,$=>Math.abs(Math.sin(time/10))/2,$=>Math.abs(Math.sin(time/3))).out(o2)
noise(0.01).color($=>Math.abs(Math.sin(time/10))/2,0,$=>Math.abs(Math.sin(time/5))/3).out(o3)


let stage = (phase, slower=100) => (_) => Math.abs(Math.sin(Math.PI*phase*time/slower))

solid()
  .blend(src(o1),stage(Math.PI*1/3))
  .blend(src(o2),stage(Math.PI*2/3))
  .blend(src(o3),stage(Math.PI*3/3))
  .diff(src(s0).rotate($=>Math.sin(time/1000) * 2/3)).out()
