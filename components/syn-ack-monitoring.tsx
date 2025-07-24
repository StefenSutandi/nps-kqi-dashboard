import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SynAckMonitoring() {
  return (
    <div className="space-y-6">
      {/* SYN-ACK Monitoring Header */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>TCP Connection Performance Analytics</CardTitle>
          <p className="text-sm text-gray-600">Real-time connection establishment monitoring</p>
        </CardHeader>
      </Card>

      {/* SYN-ACK Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SYN ACK-ACK Delay */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>TCP Connection Handshake Latency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <svg viewBox="0 0 600 300" className="w-full h-full">
                <defs>
                  <pattern id="syn-grid" width="60" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 30" fill="none" stroke="#f3f4f6" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#syn-grid)" />

                {/* Y-axis labels */}
                <text x="20" y="50" className="text-xs fill-gray-500">
                  400
                </text>
                <text x="20" y="100" className="text-xs fill-gray-500">
                  350
                </text>
                <text x="20" y="150" className="text-xs fill-gray-500">
                  300
                </text>
                <text x="20" y="200" className="text-xs fill-gray-500">
                  250
                </text>
                <text x="20" y="250" className="text-xs fill-gray-500">
                  200
                </text>

                {/* X-axis dates */}
                <text x="80" y="285" className="text-xs fill-gray-500">
                  5/31
                </text>
                <text x="180" y="285" className="text-xs fill-gray-500">
                  6/6
                </text>
                <text x="280" y="285" className="text-xs fill-gray-500">
                  6/12
                </text>
                <text x="380" y="285" className="text-xs fill-gray-500">
                  6/18
                </text>
                <text x="480" y="285" className="text-xs fill-gray-500">
                  6/24
                </text>

                {/* App performance lines */}
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  points="80,180 130,175 180,170 230,165 280,160 330,155 380,150 430,145 480,140 530,135"
                />
                <polyline
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  points="80,200 130,195 180,190 230,185 280,180 330,175 380,170 430,165 480,160 530,155"
                />
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  points="80,160 130,155 180,150 230,145 280,140 330,135 380,130 430,125 480,120 530,115"
                />
                <polyline
                  fill="none"
                  stroke="#eab308"
                  strokeWidth="2"
                  points="80,140 130,135 180,130 230,125 280,120 330,115 380,110 430,105 480,100 530,95"
                />
                <polyline
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  points="80,220 130,215 180,210 230,205 280,200 330,195 380,190 430,185 480,180 530,175"
                />

                {/* Legend */}
                <g transform="translate(450, 50)">
                  <rect x="0" y="0" width="12" height="3" fill="#3b82f6" />
                  <text x="18" y="8" className="text-xs fill-gray-600">
                    Facebook
                  </text>
                  <rect x="0" y="20" width="12" height="3" fill="#f97316" />
                  <text x="18" y="28" className="text-xs fill-gray-600">
                    Instagram
                  </text>
                  <rect x="0" y="40" width="12" height="3" fill="#10b981" />
                  <text x="18" y="48" className="text-xs fill-gray-600">
                    TikTok
                  </text>
                  <rect x="0" y="60" width="12" height="3" fill="#eab308" />
                  <text x="18" y="68" className="text-xs fill-gray-600">
                    WhatsApp
                  </text>
                  <rect x="0" y="80" width="12" height="3" fill="#8b5cf6" />
                  <text x="18" y="88" className="text-xs fill-gray-600">
                    YouTube
                  </text>
                </g>
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* SYN-SYN ACK Delay */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Server Response Time Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <svg viewBox="0 0 600 300" className="w-full h-full">
                <rect width="100%" height="100%" fill="url(#syn-grid)" />

                {/* Y-axis labels */}
                <text x="20" y="50" className="text-xs fill-gray-500">
                  16
                </text>
                <text x="20" y="100" className="text-xs fill-gray-500">
                  14
                </text>
                <text x="20" y="150" className="text-xs fill-gray-500">
                  12
                </text>
                <text x="20" y="200" className="text-xs fill-gray-500">
                  10
                </text>
                <text x="20" y="250" className="text-xs fill-gray-500">
                  8
                </text>

                {/* Lower scale performance lines */}
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  points="80,200 130,195 180,190 230,185 280,180 330,175 380,170 430,165 480,160 530,155"
                />
                <polyline
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  points="80,180 130,175 180,170 230,165 280,160 330,155 380,150 430,145 480,140 530,135"
                />
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  points="80,160 130,155 180,150 230,145 280,140 330,135 380,130 430,125 480,120 530,115"
                />
                <polyline
                  fill="none"
                  stroke="#eab308"
                  strokeWidth="2"
                  points="80,220 130,215 180,210 230,205 280,200 330,195 380,190 430,185 480,180 530,175"
                />
                <polyline
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  points="80,240 130,235 180,230 230,225 280,220 330,215 380,210 430,205 480,200 530,195"
                />
              </svg>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SYN-ACK Performance Summary */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>SYN-ACK Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { app: "Facebook", synAck: "12.5ms", ackAck: "245ms", status: "Good" },
              { app: "Instagram", synAck: "11.8ms", ackAck: "220ms", status: "Good" },
              { app: "TikTok", synAck: "10.2ms", ackAck: "180ms", status: "Excellent" },
              { app: "WhatsApp", synAck: "9.8ms", ackAck: "165ms", status: "Excellent" },
              { app: "YouTube", synAck: "13.1ms", ackAck: "280ms", status: "Warning" },
            ].map((app, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">{app.app}</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">SYN-ACK:</span>
                    <span className="font-medium">{app.synAck}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ACK-ACK:</span>
                    <span className="font-medium">{app.ackAck}</span>
                  </div>
                  <div className="pt-2">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        app.status === "Excellent"
                          ? "bg-green-100 text-green-800"
                          : app.status === "Good"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
