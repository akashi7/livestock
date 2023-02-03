import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChart({ titles, datas }) {
  const Data = {
    labels: [
      'Medication',
      'Mites',
      'Parasite Treatment',
      'Surgical Procedure',
      'Tagging',
      'Tatto',
      'Vaccination',
    ],
    datasets: [
      {
        data: [12, 19, 20, 3, 44, 55, 89],
        backgroundColor: [
          'gray',
          '#31B0D5',
          'darkgreen',
          'yellow',
          'brown',
          'blue',
          'orange',
        ],
        borderColor: [
          'gray',
          '#31B0D5',
          'darkgreen',
          'yellow',
          'brown',
          'blue',
          'orange',
        ],
        borderWidth: 0.3,
      },
    ],
  }

  return (
    <Pie
      data={Data}
      options={{ responsive: true, maintainAspectRatio: true }}
    />
  )
}
