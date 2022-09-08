import { Card, CardContent, Container } from '@mui/material';
import VideoInput from './VideoInput';
import "../media/MediaStyle.css"

const VideoPlayer = () => {
  return (
    <Container max-width="xl">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card className='card_bx'>
          <CardContent>
            < VideoInput width={400} />
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}

export default VideoPlayer

