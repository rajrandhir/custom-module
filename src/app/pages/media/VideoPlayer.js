import { Card, CardContent, Container } from '@mui/material';
import VideoInput from './VideoInput';

const VideoPlayer = () => {
  return (
    <Container max-width="xl">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card style={{ width: "50%", height: "20%" }}>
          <CardContent>
            < VideoInput width={400} />
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}

export default VideoPlayer

