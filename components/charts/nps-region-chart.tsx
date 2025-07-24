export function NPSRegionChart() {
  const regions = [
    { name: 'Jabodetabek', nps: 46, promoter: 46, passive: 30, detractor: 24 },
    { name: 'Jawa Timur', nps: 45, promoter: 45, passive: 30, detractor: 25 },
    { name: 'Jawa Barat', nps: 44, promoter: 44, passive: 30, detractor: 26 },
    { name: 'Jawa Tengah', nps: 42, promoter: 42, passive: 30, detractor: 28 },
    { name: 'Sumatera Utara', nps: 38, promoter: 38, passive: 30, detractor: 32 }
  ]

  return (
    <div className="space-y-4">
      {regions.map((region, index) => (
        <div key={region.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-900">{region.name}</span>
            <span className="text-sm font-bold text-gray-900">{region.nps}</span>
          </div>
          <div className="flex h-6 rounded-full overflow-hidden bg-gray-200">
            <div 
              className="bg-green-500 flex items-center justify-center"
              style={{ width: `${region.promoter}%` }}
            >
              {region.promoter > 20 && (
                <span className="text-xs text-white font-medium">Promoter: {region.promoter}%</span>
              )}
            </div>
            <div 
              className="bg-yellow-400 flex items-center justify-center"
              style={{ width: `${region.passive}%` }}
            >
              {region.passive > 20 && (
                <span className="text-xs text-gray-800 font-medium">Passive: {region.passive}%</span>
              )}
            </div>
            <div 
              className="bg-red-500 flex items-center justify-center"
              style={{ width: `${region.detractor}%` }}
            >
              {region.detractor > 20 && (
                <span className="text-xs text-white font-medium">Detractor: {region.detractor}%</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
