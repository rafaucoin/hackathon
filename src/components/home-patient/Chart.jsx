import { Line } from 'react-chartjs-2';
import { GrAdd } from 'react-icons/gr';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Button, Heading, HStack } from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'My Balance',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#db86b2',
      borderColor: '#B57295',
      borderCapStyle: 'butt',
      borderDashOffset: 0.0,
      borderJoinStyle: '#B57295',
      pointBorderColor: '#B57295',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#B57295',
      pointHoverBorderColor: '#B57295',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [500, 300, 400, 800, 650, 700, 690, 1200, 1050, 1300],
    },
  ],
};

const options = {
  maintainAspectRatio: true,
  scales: {
    x: {
      grid: {
        display: true,
      },
    },
    y: {
      grid: {
        borderDash: [3, 3],
      },
      // beginAtZero: true, // this works
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Chart = () => {
  return (
    <>
      <HStack width="100%" justifyContent="space-between">
        <Heading size="lg">Temperature</Heading>
        <Button
          display="flex"
          align="center"
          variant="unstyled"
          rightIcon={<GrAdd />}
          p={2}
        >
          Add Info
        </Button>
      </HStack>
      <Line data={data} options={options} />
    </>
  );
};

export default Chart;
