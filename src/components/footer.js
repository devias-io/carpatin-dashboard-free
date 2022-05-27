import { Box, Container, Link, Typography } from '@mui/material';

export const Footer = () => (
  <Box component="footer">
    <Container maxWidth="lg">
      <Box
        sx={{
          backgroundColor: '#F5F5F5',
          display: 'flex',
          flexDirection: {
            md: 'row',
            xs: 'column'
          },
          marginBottom: 6,
          p: 3,
          '& a': {
            mt: {
              md: 0,
              xs: 2
            }
          }
        }}
      >
        <Typography
          color="textSecondary"
          variant="body2"
        >
          © 2021 Devias
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Link
          color="textSecondary"
          href="https://material-ui.com/store/items/carpatin-dashboard"
          sx={{ px: 1 }}
          target="_blank"
          variant="body2"
        >
          Upgrade to Pro
        </Link>
        <Link
          color="textSecondary"
          href="https://devias.io"
          sx={{ px: 1 }}
          target="_blank"
          underline="hover"
          variant="body2"
        >
          About Us
        </Link>
      </Box>
    </Container>
  </Box>
);
