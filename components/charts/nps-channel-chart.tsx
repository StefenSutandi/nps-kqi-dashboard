export function NPSChannelChart() {
  const channels = [
    { name: 'Call Center', value: 45, color: '#3b82f6' },
    { name: 'USSD', value: 38, color: '#10b981' },
    { name: 'Mobile App', value: 42, color: '#f59e0b' },
    { name: 'Website', value: 35, color: '#ef4444' }
  ]

  return (
    <div className="h-64 flex items-center justify-center">
      <svg viewBox="0 0 300 200" className="w-full h-full">
        {channels.map((channel, index) => (
          <g key={channel.name}>
            <rect
              x={50 + index * 60}
              y={200 - (channel.value * 3)}
              width={40}
              height={channel.value * 3}
              fill={channel.color}
              rx="2"
            />
            <text
              x={70 + index * 60}
              y={195}
              className="text-xs fill-gray-600"
              textAnchor="middle"
            >
              {channel.name.split(' ')[0]}
            </text>
            <text
              x={70 + index * 60}
              y={200 - (channel.value * 3) - 5}
              className="text-xs fill-gray-900 font-medium"
              textAnchor="middle"
            >
              {channel.value}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
