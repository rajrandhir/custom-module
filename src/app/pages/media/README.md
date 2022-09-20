                
#                 Custom video Player  

    Significance : A react component supports multiple video formats such as mp4/webm/ogv/mp3/hls/  dash/youtube/facebook/etc.

    note: avi vedo doesn't support.
    
1.  Dependency : 
        react-player & version : 2.11.0.
        node version : v16.17.0
        react version: 18.2.0
        npm install react-player.
        npm install @mui/material @emotion/react @emotion/styled

2.  Utility file or folder :
        VideoPlayer.js = /src/pages/media/VideoPlayer.js.
        VideoProps.js = /src/pages/media/VideoProps.js
        VideoPlayerStyle.css = /src/pages/media/videoPlayerStyle.css.

3.  VideoPlayer accepts props:
        (i)     By default props are = Video link, width and height.
        (ii)    If we pass the props that will override default props.
        (iii)   Pass object as props(customPlayerSize) that contains width and height.
        (iv)    Pass props(url) as a premitive object or state that contain video link.

4.  React configuration:
    







