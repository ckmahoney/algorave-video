# algorave-video

This is the final result

[view on youtube](https://www.youtube.com/watch?v=Y1dRVEfgdiY)



This repo contains some tools used to created it.

1. Create automix video from photo collection
2. Publish to github (or other public endopint)
3. Load video in Hydra ([https://hydra.ojack.xyz/](https://hydra.ojack.xyz/))
4. Screen record mixed hydra+video
5. Create HTML file with metadata (title and qr code for discord) + background video
6. Ask ChatGPT to write animations for the html
7. Use screen recording as background video; open in new tab
8. Screen record the webpage playing the video with animated content
9. Publish to youtube
10. Write github README.md 


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
