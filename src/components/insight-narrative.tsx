"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, AlertTriangle, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

export function InsightNarrative() {
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    // Set the time on client side to avoid hydration mismatch
    setCurrentTime(new Date().toLocaleString("id-ID"))
  }, [])

  const criticalIssues = [
    "TikTok di SULAWESI mengalami delay tertinggi (149.5ms)",
    "Traffic TikTok di SULAWESI turun -2.09%",
    "Traffic WhatsApp di SULAWESI turun -3.68%",
  ]

  const positiveFindings = ["Facebook di PUMA menunjukkan performa baik (85ms delay, traffic -3.85%)"]

  const recommendations = [
    "Prioritaskan optimalisasi infrastruktur di SULAWESI",
    "Review server response time untuk TikTok",
  ]

  const dateRange = "29 Mei - 16 Juni 2025"
  const sampleDataLength = 3

  const insight = `Period ${dateRange}: ${criticalIssues.length} critical issues detected. Primary concerns: TikTok delay spike (+49.5ms) and traffic drops in Sulawesi region. Immediate infrastructure optimization required.`

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
            <p className="text-sm text-blue-900 leading-relaxed">{insight}</p>
          </div>

          {/* Critical Issues */}
          {criticalIssues.length > 0 && (
            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <h4 className="font-semibold text-red-900">Critical Issues:</h4>
              </div>
              <ul className="space-y-1">
                {criticalIssues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 text-sm">•</span>
                    <span className="text-sm text-red-800">{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Positive Findings */}
          {positiveFindings.length > 0 && (
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <h4 className="font-semibold text-green-900">Positive Findings:</h4>
              </div>
              <ul className="space-y-1">
                {positiveFindings.map((finding, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 text-sm">•</span>
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
              {recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5 text-sm">•</span>
                  <span className="text-sm text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metadata */}
          <div className="pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Analysis generated on {currentTime || "Loading..."} | Based on {sampleDataLength} data points | Period:{" "}
              {dateRange}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
