import Chart from 'react-apexcharts';
import { Box, Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const stats = [
  {
    content: '€4,800.00',
    label: 'Revenue'
  },
  {
    content: '€4,900,24',
    label: 'NET'
  },
  {
    content: '€1,600.50',
    label: 'Pending orders'
  },
  {
    content: '€6,900.10',
    label: 'Due'
  },
  {
    content: '€6,500.80',
    label: 'Overdue'
  }
];

const data = {
  categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  series: [
    {
      data: [0, 20, 40, 30, 30, 44, 90],
      name: 'Revenue'
    }
  ]
};

export const PerformanceIndicators = (props) => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    legend: {
      show: true
    },
    colors: ['rgba(49, 129, 237, 1)'],
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient'
    },
    grid: {
      borderColor: theme.palette.divider,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    stroke: {
      curve: 'straight'
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true
      },
      categories: data.categories,
      labels: {
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      labels: {
        offsetX: -12,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };

  return (
    <Card
      variant="outlined"
      {...props}
    >
      <CardHeader title="Key Performance Indicators" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            gap: 3,
            display: 'grid',
            gridTemplateColumns: {
              md: 'repeat(5, 1fr)',
              sm: 'repeat(2, 1fr)',
              xs: 'repeat(1, 1fr)'
            }
          }}
        >
          {stats.map((item) => (
            <Card
              elevation={0}
              key={item.label}
              sx={{
                alignItems: 'center',
                backgroundColor: '#F3F4F7',
                borderRadius: 1,
                p: 2
              }}
            >
              <Typography
                color="textSecondary"
                variant="overline"
              >
                {item.label}
              </Typography>
              <Typography
                color="textPrimary"
                variant="h6"
              >
                {item.content}
              </Typography>
            </Card>
          ))}
        </Box>
        <Chart
          height="350"
          options={chartOptions}
          series={data.series}
          type="area"
        />
      </CardContent>
    </Card>
  );
};
