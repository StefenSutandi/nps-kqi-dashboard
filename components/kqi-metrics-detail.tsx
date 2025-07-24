export function KQIMetricsDetail() {
  const metrics = [
    { name: 'Success Rate (Syn/Ack)', value: '94.2%', color: 'bg-green-500' },
    { name: 'Page Load Time', value: '2.8s', color: 'bg-yellow-500' },
    { name: 'Round Trip Time (RTT)', value: '145ms', color: 'bg-red-500' },
    { name: 'Throughput', value: '85.4%', color: 'bg-green-500' },
    { name: 'Availability', value: '99.1%', color: 'bg-green-500' }
  ]

  return (
    <div className="space-y-4">
      {metrics.map((metric, index) => (
        <div key={metric.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-900">{metric.name}</span>
            <span className="text-sm font-bold text-gray-900">{metric.value}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`${metric.color} h-2 rounded-full transition-all duration-300`}
              style={{ width: `${Math.random() * 40 + 60}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
