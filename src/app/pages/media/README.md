                
#                 Custom video Player  

**Significance :** . A react component supports multiple video formats such as mp4/webm/ogv/mp3/hls/  dash/youtube/facebook/etc.

    note: avi vedo doesn't support.
    
1.  **Dependency :**
       - react-player & version : 2.11.0.
       - node version : v16.17.0
       - react version: 18.2.0
       - npm install react-player.
       - npm install @mui/material @emotion/react @emotion/styled

2.  **Utility file or folder :** <br> 
       - VideoPlayer.js = /src/pages/media/VideoPlayer.js.
       - VideoProps.js = /src/pages/media/VideoProps.js
       - VideoPlayerStyle.css = /src/pages/media/videoPlayerStyle.css.

3.  **VideoPlayer accepts props:**<br> 
    - By default props are = Video link, width and height.
    - If we pass the props that will override default props.
    - Pass object as props(customPlayerSize) that contains width and height.
    -  Pass props(url) as a premitive object or state that contain video link.

4.  React configuration:
    







