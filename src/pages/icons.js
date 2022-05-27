import { Helmet } from 'react-helmet';
import { Box, Card, Container, Grid, Link, Typography } from '@mui/material';
import { Cog as CogIcon } from '../icons/cog';
import { DocumentText as DocumentTextIcon } from '../icons/document-text';
import { Home as HomeIcon } from '../icons/home';
import { ShoppingCart as ShoppingCartIcon } from '../icons/shopping-cart';
import { Star as StarIcon } from '../icons/star';

const icons = [HomeIcon, ShoppingCartIcon, CogIcon, DocumentTextIcon, StarIcon];

export const Icons = () => (
  <>
    <Helmet>
      <title>Icons | Carpatin Dashboard</title>
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
          Icons
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
              Hero Icons
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              We use
              {' '}
              <Link
                color="primary"
                href="https://heroicons.com"
                target="_blank"
                variant="inherit"
              >
                Hero Icons
              </Link>
              {' '}
              for displaying icons as we think it reflects the clean
              and light style of the Carpatin Design System.
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
                gap: 2,
                gridAutoFlow: 'column',
                p: 3
              }}
              variant="outlined"
            >
              <Grid
                container
                spacing={2}
                wrap="wrap"
              >
                {icons.map((Icon, index) => (
                  <Grid
                    item
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    sx={{ display: 'flex' }}
                  >
                    <Icon sx={{ color: 'text.secondary' }} />
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
