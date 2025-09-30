import { Card, CardContent, Typography } from '@mui/material';

function DummyDemo() {
  return (
    <div>
      <Typography variant="h1" sx={{ color: 'text.primary' }}>
        Hooked On React
      </Typography>
      <Typography variant="h2" sx={{ color: 'text.accent' }}>
        Heading 2 looks like this
      </Typography>
      <Typography variant="body1">
        This is body text. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </Typography>

      <Card sx={{ color: 'background.paper' }}>
        <CardContent>
          <Typography variant="h5">Card Title</Typography>
          <Typography variant="body2">
            Content inside a card. Shows background, shadow, and text styles.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default DummyDemo;
