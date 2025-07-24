export function NPSTrendChart() {
  return (
    <div className="h-64 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full h-full">
        {/* Grid lines */}
        <defs>
          <pattern id="grid" width="40" height="20" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Y-axis labels */}
        <text x="15" y="25" className="text-xs fill-gray-500">55</text>
        <text x="15" y="65" className="text-xs fill-gray-500">51</text>
        <text x="15" y="105" className="text-xs fill-gray-500">44</text>
        <text x="15" y="145" className="text-xs fill-gray-500">37</text>
        <text x="15" y="185" className="text-xs fill-gray-500">30</text>
        
        {/* X-axis labels */}
        <text x="60" y="195" className="text-xs fill-gray-500">Jan</text>
        <text x="120" y="195" className="text-xs fill-gray-500">Feb</text>
        <text x="180" y="195" className="text-xs fill-gray-500">Mar</text>
        <text x="240" y="195" className="text-xs fill-gray-500">Apr</text>
        <text x="300" y="195" className="text-xs fill-gray-500">May</text>
        <text x="360" y="195" className="text-xs fill-gray-500">Jun</text>
        
        {/* NPS trend line */}
        <polyline
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          points="60,45 120,35 180,55 240,65 300,75 360,95"
        />
        
        {/* Data points */}
        <circle cx="60" cy="45" r="3" fill="#3b82f6" />
        <circle cx="120" cy="35" r="3" fill="#3b82f6" />
        <circle cx="180" cy="55" r="3" fill="#3b82f6" />
        <circle cx="240" cy="65" r="3" fill="#3b82f6" />
        <circle cx="300" cy="75" r="3" fill="#3b82f6" />
        <circle cx="360" cy="95" r="3" fill="#ef4444" />
      </svg>
    </div>
  )
}
