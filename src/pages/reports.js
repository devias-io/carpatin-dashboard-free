import { Helmet } from 'react-helmet';
import { Box, Card, CardHeader, Container, Divider, Grid, Typography } from '@mui/material';
import { SummaryItem } from '../components/reports/summary-item';
import { PerformanceIndicators } from '../components/reports/performance-indicators';
import { OrdersTable } from '../components/orders-table';
import { Cube as CubeIcon } from '../icons/cube';
import { ShoppingCart as ShoppingCartIcon } from '../icons/shopping-cart';
import { Cash as CashIcon } from '../icons/cash';
import { latestOrders } from '../__mocks__/reports';

const stats = [
  {
    content: '3450',
    icon: ShoppingCartIcon,
    label: 'Orders'
  },
  {
    content: '3456',
    icon: CubeIcon,
    label: 'Products'
  },
  {
    content: '3456',
    icon: CashIcon,
    label: 'Transactions'
  }
];

export const Reports = () => (
  <>
    <Helmet>
      <title>Reports | Carpatin Dashboard</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        pb: 3,
        pt: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            <Typography
              color="textPrimary"
              variant="h4"
            >
              Reports
            </Typography>
          </Grid>
          {stats.map((item) => (
            <Grid
              item
              key={item.label}
              md={4}
              xs={12}
            >
              <SummaryItem
                content={item.content}
                icon={item.icon}
                label={item.label}
              />
            </Grid>
          ))}
          <Grid
            item
            xs={12}
          >
            <PerformanceIndicators />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Card variant="outlined">
              <CardHeader title="Latest Orders" />
              <Divider />
              <OrdersTable orders={latestOrders} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
