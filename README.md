# algorave-video

the video can be fetched by 
```
GET https://raw.githubusercontent.com/ckmahoney/algorave-video/main/algorave-futures-lab.mp4
```

such as 

```
# in a Hydra buffer
s0.initVideo("https://raw.githubusercontent.com/ckmahoney/algorave-video/main/algorave-futures-lab.mp4")
src(s0)
  .blend(
    voronoi().color(0,1,0)
  )
.out()
```
