export function KQIPerformanceChart() {
  return (
    <div className="h-64 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full h-full">
        {/* Grid */}
        <defs>
          <pattern id="kqi-grid" width="40" height="20" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#kqi-grid)" />
        
        {/* Y-axis */}
        <text x="15" y="25" className="text-xs fill-gray-500">100</text>
        <text x="15" y="65" className="text-xs fill-gray-500">96</text>
        <text x="15" y="105" className="text-xs fill-gray-500">89</text>
        <text x="15" y="145" className="text-xs fill-gray-500">82</text>
        <text x="15" y="185" className="text-xs fill-gray-500">75</text>
        
        {/* X-axis */}
        <text x="60" y="195" className="text-xs fill-gray-500">Jan</text>
        <text x="120" y="195" className="text-xs fill-gray-500">Feb</text>
        <text x="180" y="195" className="text-xs fill-gray-500">Mar</text>
        <text x="240" y="195" className="text-xs fill-gray-500">Apr</text>
        <text x="300" y="195" className="text-xs fill-gray-500">May</text>
        <text x="360" y="195" className="text-xs fill-gray-500">Jun</text>
        
        {/* Multiple lines for different apps */}
        <polyline fill="none" stroke="#ef4444" strokeWidth="2" points="60,35 120,45 180,55 240,65 300,75 360,85" />
        <polyline fill="none" stroke="#3b82f6" strokeWidth="2" points="60,25 120,35 180,45 240,55 300,65 360,75" />
        <polyline fill="none" stroke="#10b981" strokeWidth="2" points="60,45 120,55 180,65 240,75 300,85 360,95" />
        
        {/* Legend */}
        <g transform="translate(280, 30)">
          <rect x="0" y="0" width="10" height="2" fill="#ef4444" />
          <text x="15" y="5" className="text-xs fill-gray-600">TikTok</text>
          <rect x="0" y="15" width="10" height="2" fill="#3b82f6" />
          <text x="15" y="20" className="text-xs fill-gray-600">YouTube</text>
          <rect x="0" y="30" width="10" height="2" fill="#10b981" />
          <text x="15" y="35" className="text-xs fill-gray-600">WhatsApp</text>
        </g>
      </svg>
    </div>
  )
}
