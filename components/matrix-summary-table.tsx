import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MatrixSummaryTable() {
  const matrixData = [
    {
      area: "Area 4",
      location: "SULAWESI",
      app: "TikTok",
      httpsSuccess: { value: "97.8%", delta: "-0.2%", trend: "down" },
      webPageDelay: { value: "149.5ms", delta: "+49.5ms", trend: "up" },
      rtt: { value: "45ms", delta: "+5ms", trend: "up" },
      traffic: { value: "1.2M", delta: "-2.09%", trend: "down" },
    },
    {
      area: "Area 4",
      location: "SULAWESI",
      app: "WhatsApp",
      httpsSuccess: { value: "98.1%", delta: "+0.1%", trend: "up" },
      webPageDelay: { value: "118.36ms", delta: "+18.36ms", trend: "up" },
      rtt: { value: "42ms", delta: "+2ms", trend: "up" },
      traffic: { value: "2.1M", delta: "-3.68%", trend: "down" },
    },
    {
      area: "Area 4",
      location: "KALIMANTAN",
      app: "TikTok",
      httpsSuccess: { value: "98.9%", delta: "+0.09%", trend: "up" },
      webPageDelay: { value: "95ms", delta: "-5ms", trend: "down" },
      rtt: { value: "38ms", delta: "-2ms", trend: "down" },
      traffic: { value: "980K", delta: "+1.2%", trend: "up" },
    },
    {
      area: "Area 4",
      location: "PUMA",
      app: "Facebook",
      httpsSuccess: { value: "99.2%", delta: "+0.3%", trend: "up" },
      webPageDelay: { value: "85ms", delta: "-10ms", trend: "down" },
      rtt: { value: "35ms", delta: "-3ms", trend: "down" },
      traffic: { value: "3.2M", delta: "-3.85%", trend: "down" },
    },
    {
      area: "Area 3",
      location: "JATENG",
      app: "Instagram",
      httpsSuccess: { value: "98.5%", delta: "+0.2%", trend: "up" },
      webPageDelay: { value: "92ms", delta: "+8ms", trend: "up" },
      rtt: { value: "40ms", delta: "+1ms", trend: "up" },
      traffic: { value: "1.8M", delta: "+0.5%", trend: "up" },
    },
    {
      area: "Area 2",
      location: "CENTRAL JABOTABEK",
      app: "YouTube",
      httpsSuccess: { value: "99.1%", delta: "+0.1%", trend: "up" },
      webPageDelay: { value: "78ms", delta: "-5ms", trend: "down" },
      rtt: { value: "32ms", delta: "-2ms", trend: "down" },
      traffic: { value: "4.1M", delta: "+2.1%", trend: "up" },
    },
    {
      area: "Area 1",
      location: "SUMBAGUT",
      app: "WhatsApp",
      httpsSuccess: { value: "98.7%", delta: "+0.4%", trend: "up" },
      webPageDelay: { value: "88ms", delta: "+3ms", trend: "up" },
      rtt: { value: "41ms", delta: "+1ms", trend: "up" },
      traffic: { value: "1.5M", delta: "+1.8%", trend: "up" },
    },
  ]

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-red-600 bg-red-50"
      case "down":
        return "text-green-600 bg-green-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const getMetricColor = (metric: any, type: string) => {
    if (type === "httpsSuccess" && Number.parseFloat(metric.value) < 98) return "text-red-600"
    if (type === "webPageDelay" && Number.parseFloat(metric.value) > 100) return "text-red-600"
    if (type === "rtt" && Number.parseFloat(metric.value) > 50) return "text-red-600"
    return "text-gray-900"
  }

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Matrix Summary Table (Delta/Growth)</CardTitle>
        <p className="text-sm text-gray-600">Conditional formatting: Red (degradation), Green (improvement)</p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-semibold">Area</th>
                <th className="text-left p-3 font-semibold">Region</th>
                <th className="text-left p-3 font-semibold">Service Apps</th>
                <th className="text-center p-3 font-semibold">HTTPS SR%</th>
                <th className="text-center p-3 font-semibold">Web Page Delay</th>
                <th className="text-center p-3 font-semibold">RTT</th>
                <th className="text-center p-3 font-semibold">Traffic</th>
              </tr>
            </thead>
            <tbody>
              {matrixData.map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{row.area}</td>
                  <td className="p-3">{row.location}</td>
                  <td className="p-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">{row.app}</span>
                  </td>
                  <td className="p-3 text-center">
                    <div className={getMetricColor(row.httpsSuccess, "httpsSuccess")}>
                      <div className="font-medium">{row.httpsSuccess.value}</div>
                      <div className={`text-xs px-2 py-1 rounded ${getTrendColor(row.httpsSuccess.trend)}`}>
                        {row.httpsSuccess.delta}
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <div className={getMetricColor(row.webPageDelay, "webPageDelay")}>
                      <div className="font-medium">{row.webPageDelay.value}</div>
                      <div className={`text-xs px-2 py-1 rounded ${getTrendColor(row.webPageDelay.trend)}`}>
                        {row.webPageDelay.delta}
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <div className={getMetricColor(row.rtt, "rtt")}>
                      <div className="font-medium">{row.rtt.value}</div>
                      <div className={`text-xs px-2 py-1 rounded ${getTrendColor(row.rtt.trend)}`}>{row.rtt.delta}</div>
                    </div>
                  </td>
                  <td className="p-3 text-center">
                    <div>
                      <div className="font-medium">{row.traffic.value}</div>
                      <div className={`text-xs px-2 py-1 rounded ${getTrendColor(row.traffic.trend)}`}>
                        {row.traffic.delta}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
