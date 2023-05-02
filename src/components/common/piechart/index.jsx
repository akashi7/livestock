import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts'

const PieChartComponent = ({ typesReport }) => {
  // const data = [
  //   { name: 'Tea', value: 400 },
  //   { name: 'Coffee', value: 300 },
  //   { name: 'Cola', value: 300 },
  //   { name: 'Water', value: 200 },
  // ]

  console.log({ typesReport })

  const data = typesReport.data.map((type) => {
    return {
      name: type.type,
      value: parseInt(type.treatments),
    }
  })

  console.log({ data })

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div className='w-[100%] '>
      <h1>Types</h1>
      <div className=''>
        <ResponsiveContainer width={400} height={400} className='text-center'>
          <PieChart width={500} height={500}>
            <Legend layout='horizontal' verticalAlign='top' align='top' />
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill='#8884d8'
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
export default PieChartComponent
