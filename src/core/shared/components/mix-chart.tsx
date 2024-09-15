'use client'

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
  type ChartData
} from 'chart.js'

import { cn } from '@/lib/utils'
import { Bar } from 'react-chartjs-2'

interface MixChartProps extends React.ComponentProps<'div'> {}

export default function MixChart({ className, ...props }: MixChartProps) {
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
  )

  const data: ChartData<'bar', number[], string> = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        type: 'bar',
        label: 'Bar Dataset',
        data: [10, 20, 30, 40],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Mixed Chart Example'
      }
    }
  }
  return (
    <div
      className={cn(
        'flex w-full justify-center rounded-md border border-primary bg-black p-4',
        className
      )}
      {...props}
    >
      <Bar data={data} options={options} />
    </div>
  )
}
