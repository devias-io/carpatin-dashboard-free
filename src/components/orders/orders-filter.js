import PropTypes from 'prop-types';
import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { Adjustments as AdjustmentsIcon } from '../../icons/adjustments';
import { ViewGrid as ViewGridIcon } from '../../icons/view-grid';
import { ViewList as ViewListIcon } from '../../icons/view-list';
import { Query } from '../query';

export const OrdersFilter = (props) => {
  const { mode, onModeChange, onQueryChange, query } = props;

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'grid',
        gap: 2,
        gridTemplateColumns: {
          sm: '1fr auto',
          xs: 'auto'
        },
        justifyItems: 'flex-start',
        p: 3
      }}
    >
      <Query
        onChange={onQueryChange}
        sx={{
          order: {
            sm: 2,
            xs: 1
          }
        }}
        value={query}
      />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          order: 3
        }}
      >
        <ToggleButtonGroup
          exclusive
          onChange={onModeChange}
          size="small"
          sx={{
            border: (theme) => `1px solid ${theme.palette.divider}`,
            p: 0.5,
            mr: 2,
            '& .MuiToggleButton-root': {
              color: 'red',
              border: 0,
              '&:not(:first-of-type)': {
                borderRadius: 1
              },
              '&:first-of-type': {
                borderRadius: 1,
                mr: 0.5
              }
            }
          }}
          value={mode}
        >
          <ToggleButton value="table">
            <ViewListIcon
              fontSize="small"
              sx={{ color: 'rgba(35, 45, 55, 0.38)' }}
            />
          </ToggleButton>
          <ToggleButton value="dnd">
            <ViewGridIcon
              fontSize="small"
              sx={{ color: 'rgba(35, 45, 55, 0.38)' }}
            />
          </ToggleButton>
        </ToggleButtonGroup>
        <Button
          color="primary"
          startIcon={<AdjustmentsIcon />}
          size="large"
          sx={{ order: 3 }}
        >
          Filter
        </Button>
      </Box>
    </Box>
  );
};

OrdersFilter.defaultProps = {
  mode: 'table'
};

OrdersFilter.propTypes = {
  mode: PropTypes.oneOf(['table', 'dnd']),
  onModeChange: PropTypes.func,
  onQueryChange: PropTypes.func,
  query: PropTypes.string
};
