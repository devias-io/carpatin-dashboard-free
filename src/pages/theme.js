import { Helmet } from 'react-helmet';
import { Box, Card, Container, Grid, Link, Typography } from '@mui/material';

export const Theme = () => (
  <>
    <Helmet>
      <title>Theme | Carpatin Dashboard</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        pb: 3,
        pt: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          color="textPrimary"
          sx={{ mb: 3 }}
          variant="h4"
        >
          Typography
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            md={4}
            xs={12}
          >
            <Typography
              color="textPrimary"
              sx={{ mb: 1 }}
              variant="h6"
            >
              Headings
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              We use
              {' '}
              <Link
                color="primary"
                href="https://fonts.google.com/specimen/Inter"
                target="_blank"
                variant="inherit"
              >
                Inter
              </Link>
              {' '}
              as our main font name for all our components.
              <br />
              <br />
              The sizes have been reconfigured to match the needs of a clean
              and SEO friendly dashboard.
            </Typography>
          </Grid>
          <Grid
            item
            md={8}
            xs={12}
          >
            <Card
              sx={{
                display: 'grid',
                gap: 3,
                gridAutoFlow: 'row',
                p: 3
              }}
              variant="outlined"
            >
              {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((variant) => (
                <Typography
                  color="textPrimary"
                  key={variant}
                  variant={variant}
                >
                  Heading
                </Typography>
              ))}
            </Card>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
          >
            <Typography
              color="textPrimary"
              sx={{ mb: 1 }}
              variant="h6"
            >
              Body
            </Typography>
          </Grid>
          <Grid
            item
            md={8}
            xs={12}
          >
            <Card
              sx={{
                display: 'grid',
                gap: 3,
                gridAutoFlow: 'row',
                p: 3
              }}
              variant="outlined"
            >
              {['body1', 'body2', 'subtitle1', 'subtitle2', 'overline', 'caption'].map((variant) => (
                <Typography
                  color="textPrimary"
                  key={variant}
                  sx={{ textTransform: variant !== 'overline' && 'capitalize' }}
                  variant={variant}
                >
                  {variant}
                </Typography>
              ))}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
