import PropTypes from 'prop-types';
import { Avatar, Box, Card, Typography } from '@mui/material';

export const SummaryItem = (props) => {
  const { content, icon: Icon, label, ...other } = props;

  return (
    <Card
      sx={{ height: '100%' }}
      variant="outlined"
      {...other}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          p: 2
        }}
      >
        {Icon && (
          <Box
            sx={{
              display: 'flex',
              mr: 2
            }}
          >
            <Avatar
              sx={{
                backgroundColor: 'primary.main',
                height: 56,
                width: 56
              }}
            >
              <Icon sx={{ color: 'primary.contrastText' }} />
            </Avatar>
          </Box>
        )}
        <div>
          <Typography
            color="textSecondary"
            variant="overline"
          >
            {label}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h6"
          >
            {content}
          </Typography>
        </div>
      </Box>
    </Card>
  );
};

SummaryItem.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  label: PropTypes.string.isRequired
};
