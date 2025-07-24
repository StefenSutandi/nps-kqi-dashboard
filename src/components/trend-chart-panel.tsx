import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TrendChartPanel() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Trend Analysis (Time Series)</CardTitle>
            <p className="text-sm text-gray-600">Performance metrics over time by location and top 5 apps</p>
          </div>
          <Select defaultValue="web-delay">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web-delay">Web Page Delay</SelectItem>
              <SelectItem value="https-sr">HTTPS Success Rate</SelectItem>
              <SelectItem value="rtt">Round Trip Time</SelectItem>
              <SelectItem value="traffic">Traffic Volume</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80 flex items-center justify-center">
          <svg viewBox="0 0 800 300" className="w-full h-full">
            {/* Grid */}
            <defs>
              <pattern id="trend-grid" width="80" height="30" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 30" fill="none" stroke="#f3f4f6" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#trend-grid)" />

            {/* Y-axis labels */}
            <text x="30" y="50" className="text-xs fill-gray-500">
              150ms
            </text>
            <text x="30" y="100" className="text-xs fill-gray-500">
              120ms
            </text>
            <text x="30" y="150" className="text-xs fill-gray-500">
              90ms
            </text>
            <text x="30" y="200" className="text-xs fill-gray-500">
              60ms
            </text>
            <text x="30" y="250" className="text-xs fill-gray-500">
              30ms
            </text>

            {/* X-axis labels */}
            <text x="100" y="285" className="text-xs fill-gray-500">
              29 May
            </text>
            <text x="200" y="285" className="text-xs fill-gray-500">
              3 Jun
            </text>
            <text x="300" y="285" className="text-xs fill-gray-500">
              7 Jun
            </text>
            <text x="400" y="285" className="text-xs fill-gray-500">
              11 Jun
            </text>
            <text x="500" y="285" className="text-xs fill-gray-500">
              14 Jun
            </text>
            <text x="600" y="285" className="text-xs fill-gray-500">
              16 Jun
            </text>

            {/* Trend lines for different apps/areas */}
            <polyline
              fill="none"
              stroke="#ef4444"
              strokeWidth="3"
              points="100,180 200,170 300,160 400,140 500,120 600,100"
            />
            <polyline
              fill="none"
              stroke="#f97316"
              strokeWidth="2"
              points="100,200 200,190 300,185 400,175 500,165 600,150"
            />
            <polyline
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              points="100,160 200,155 300,150 400,145 500,140 600,135"
            />
            <polyline
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              points="100,140 200,135 300,130 400,125 500,120 600,115"
            />

            {/* Data points with highlights for outliers */}
            <circle cx="600" cy="100" r="4" fill="#ef4444" stroke="#fff" strokeWidth="2" />
            <circle cx="500" cy="120" r="3" fill="#ef4444" />

            {/* Legend */}
            <g transform="translate(650, 50)">
              <rect x="0" y="0" width="12" height="3" fill="#ef4444" />
              <text x="18" y="8" className="text-xs fill-gray-600">
                Area 4 - Sulawesi
              </text>
              <rect x="0" y="20" width="12" height="3" fill="#f97316" />
              <text x="18" y="28" className="text-xs fill-gray-600">
                Area 3 - Kalimantan
              </text>
              <rect x="0" y="40" width="12" height="3" fill="#10b981" />
              <text x="18" y="48" className="text-xs fill-gray-600">
                Area 1 - PUMA
              </text>
              <rect x="0" y="60" width="12" height="3" fill="#3b82f6" />
              <text x="18" y="68" className="text-xs fill-gray-600">
                Area 2 - Central Java
              </text>
            </g>

            {/* Highlight critical period */}
            <rect x="450" y="40" width="100" height="220" fill="rgba(239, 68, 68, 0.1)" />
            <text x="500" y="35" className="text-xs fill-red-600 font-medium">
              Critical Period
            </text>
          </svg>
        </div>
      </CardContent>
    </Card>
  )
}
