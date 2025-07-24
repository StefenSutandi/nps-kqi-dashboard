export function RootCauseChart() {
  const causes = [
    { name: 'Server RTT Tinggi', percentage: 35, apps: ['TikTok', 'YouTube'] },
    { name: 'Page Load Delay', percentage: 28, apps: ['Instagram', 'Shopee'] },
    { name: 'Connection Timeout', percentage: 22, apps: ['WhatsApp', 'TikTok'] },
    { name: 'Bandwidth Throttling', percentage: 15, apps: ['YouTube', 'Instagram'] }
  ]

  return (
    <div className="space-y-4">
      {causes.map((cause, index) => (
        <div key={cause.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm font-medium text-gray-900">{cause.name}</span>
              <div className="flex gap-1 mt-1">
                {cause.apps.map((app) => (
                  <span key={app} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {app}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-sm font-bold text-gray-900">{cause.percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-red-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${cause.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
