import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardLocation() {
  const locations = [
    "Bali Nusra",
    "Central Java",
    "Central Sumatera",
    "East Java",
    "Jabodetabek",
    "Kalimantan",
    "North Sumatera",
    "PUMA",
    "South Sumatera",
    "Sulawesi",
    "West Java",
  ]

  return (
    <div className="space-y-6">
      {/* Location Selector */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Regional Performance Analysis</CardTitle>
        </CardHeader>
      </Card>

      {/* Location Performance Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SYN ACK Delay by Location */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>SYN ACK-ACK Delay by Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <svg viewBox="0 0 600 300" className="w-full h-full">
                {/* Grid */}
                <defs>
                  <pattern id="location-grid" width="60" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 30" fill="none" stroke="#f3f4f6" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#location-grid)" />

                {/* Y-axis */}
                <text x="20" y="50" className="text-xs fill-gray-500">
                  400
                </text>
                <text x="20" y="100" className="text-xs fill-gray-500">
                  300
                </text>
                <text x="20" y="150" className="text-xs fill-gray-500">
                  200
                </text>
                <text x="20" y="200" className="text-xs fill-gray-500">
                  100
                </text>
                <text x="20" y="250" className="text-xs fill-gray-500">
                  0
                </text>

                {/* Multiple location lines */}
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  points="50,180 100,170 150,160 200,150 250,140 300,130 350,125 400,120 450,115 500,110"
                />
                <polyline
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  points="50,200 100,190 150,185 200,180 250,175 300,170 350,165 400,160 450,155 500,150"
                />
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  points="50,160 100,155 150,150 200,145 250,140 300,135 350,130 400,125 450,120 500,115"
                />
                <polyline
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  points="50,140 100,135 150,130 200,125 250,120 300,115 350,110 400,105 450,100 500,95"
                />

                {/* Legend */}
                <g transform="translate(450, 50)">
                  <rect x="0" y="0" width="12" height="3" fill="#3b82f6" />
                  <text x="18" y="8" className="text-xs fill-gray-600">
                    Bali Nusra
                  </text>
                  <rect x="0" y="20" width="12" height="3" fill="#ef4444" />
                  <text x="18" y="28" className="text-xs fill-gray-600">
                    Central Java
                  </text>
                  <rect x="0" y="40" width="12" height="3" fill="#10b981" />
                  <text x="18" y="48" className="text-xs fill-gray-600">
                    Central Sumatera
                  </text>
                  <rect x="0" y="60" width="12" height="3" fill="#f59e0b" />
                  <text x="18" y="68" className="text-xs fill-gray-600">
                    East Java
                  </text>
                </g>
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Location Performance Spike */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Performance Anomaly Detection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <svg viewBox="0 0 600 300" className="w-full h-full">
                <rect width="100%" height="100%" fill="url(#location-grid)" />

                {/* Normal performance line */}
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  points="50,200 100,195 150,190 200,185 250,180 300,175"
                />

                {/* Spike anomaly */}
                <polyline fill="none" stroke="#ef4444" strokeWidth="3" points="300,175 350,50 400,175" />

                {/* Recovery */}
                <polyline fill="none" stroke="#10b981" strokeWidth="2" points="400,175 450,170 500,165 550,160" />

                {/* Anomaly highlight */}
                <circle cx="350" cy="50" r="6" fill="#ef4444" stroke="#fff" strokeWidth="2" />
                <text x="360" y="45" className="text-xs fill-red-600 font-bold">
                  Anomaly Detected
                </text>

                {/* Alert box */}
                <rect
                  x="320"
                  y="80"
                  width="120"
                  height="40"
                  fill="rgba(239, 68, 68, 0.1)"
                  stroke="#ef4444"
                  strokeWidth="1"
                  rx="4"
                />
                <text x="330" y="95" className="text-xs fill-red-800">
                  Critical Spike
                </text>
                <text x="330" y="110" className="text-xs fill-red-800">
                  750ms delay
                </text>
              </svg>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Location Comparison Table */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Location Performance Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Location</th>
                  <th className="text-center p-3 font-semibold">Avg SYN-ACK Delay</th>
                  <th className="text-center p-3 font-semibold">Peak Delay</th>
                  <th className="text-center p-3 font-semibold">Success Rate</th>
                  <th className="text-center p-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    location: "Bali Nusra",
                    avgDelay: "95ms",
                    peakDelay: "140ms",
                    successRate: "99.5%",
                    status: "Excellent",
                  },
                  {
                    location: "Central Java",
                    avgDelay: "120ms",
                    peakDelay: "180ms",
                    successRate: "99.2%",
                    status: "Good",
                  },
                  {
                    location: "Central Sumatera",
                    avgDelay: "145ms",
                    peakDelay: "220ms",
                    successRate: "98.8%",
                    status: "Good",
                  },
                  {
                    location: "East Java",
                    avgDelay: "85ms",
                    peakDelay: "120ms",
                    successRate: "99.7%",
                    status: "Excellent",
                  },
                  {
                    location: "Sulawesi",
                    avgDelay: "165ms",
                    peakDelay: "750ms",
                    successRate: "97.2%",
                    status: "Critical",
                  },
                ].map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{row.location}</td>
                    <td className="p-3 text-center">{row.avgDelay}</td>
                    <td className="p-3 text-center">{row.peakDelay}</td>
                    <td className="p-3 text-center">{row.successRate}</td>
                    <td className="p-3 text-center">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          row.status === "Excellent"
                            ? "bg-green-100 text-green-800"
                            : row.status === "Good"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
