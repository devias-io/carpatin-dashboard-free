import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { format } from 'date-fns';
import {
  Box,
  Chip,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from './scrollbar';

const statusVariants = [
  {
    label: 'Placed',
    value: 'placed'
  },
  {
    label: 'Processed',
    value: 'processed'
  },
  {
    label: 'Delivered',
    value: 'delivered'
  },
  {
    label: 'Complete',
    value: 'complete'
  }
];

export const OrdersTable = (props) => {
  const { orders } = props;

  return (
    <div>
      <Scrollbar>
        <Table sx={{ minWidth: 1000 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                Order
              </TableCell>
              <TableCell>
                Date
              </TableCell>
              <TableCell>
                Customer
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => {
              const statusVariant = statusVariants.find(
                (variant) => variant.value === order.status
              );

              return (
                <TableRow key={order.id}>
                  <TableCell>
                    <Link
                      color="inherit"
                      component={RouterLink}
                      to="#"
                      underline="none"
                      variant="subtitle2"
                    >
                      {`#${order.id}`}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography
                        color="inherit"
                        variant="inherit"
                      >
                        {format(new Date(order.createdAt), 'dd MMM yyyy')}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="inherit"
                      >
                        {format(new Date(order.createdAt), 'HH:mm')}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {`${order.customer.firstName} ${order.customer.lastName}`}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={statusVariant.label}
                      variant="outlined"
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar>
    </div>
  );
};

OrdersTable.propTypes = {
  orders: PropTypes.array.isRequired
};
