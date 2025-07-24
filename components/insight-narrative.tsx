import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, AlertTriangle, TrendingUp } from "lucide-react"
import { generateAutomatedInsight, type MetricData } from "./automated-insight-generator"

export function InsightNarrative() {
  // Sample data - in real app, this would come from props or context
  const sampleData: MetricData[] = [
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
      location: "PUMA",
      app: "Facebook",
      httpsSuccess: { value: "99.2%", delta: "+0.3%", trend: "up" },
      webPageDelay: { value: "85ms", delta: "-10ms", trend: "down" },
      rtt: { value: "35ms", delta: "-3ms", trend: "down" },
      traffic: { value: "3.2M", delta: "-3.85%", trend: "down" },
    },
  ]

  const dateRange = "29 Mei - 16 Juni 2025"
  const analysis = generateAutomatedInsight(sampleData, dateRange)

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          Automated Insight
        </CardTitle>
        <p className="text-xs text-gray-500">Auto-generated based on current data analysis</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Main Insight */}
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <p className="text-sm text-blue-900 leading-relaxed">{analysis.insight}</p>
          </div>

          {/* Critical Issues */}
          {analysis.criticalIssues.length > 0 && (
            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <h4 className="font-semibold text-red-900">Critical Issues:</h4>
              </div>
              <ul className="space-y-1">
                {analysis.criticalIssues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-sm text-red-800">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Positive Findings */}
          {analysis.positiveFindings.length > 0 && (
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <h4 className="font-semibold text-green-900">Positive Findings:</h4>
              </div>
              <ul className="space-y-1">
                {analysis.positiveFindings.map((finding, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span className="text-sm text-green-800">{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommendations */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Automated Recommendations:</h4>
            <ul className="space-y-1">
              {analysis.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-sm text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metadata */}
          <div className="pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Analysis generated on {new Date().toLocaleString("id-ID")} | Based on {sampleData.length} data points |
              Period: {dateRange}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
