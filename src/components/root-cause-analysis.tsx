import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RootCauseAnalysis() {
  const rootCauses = [
    {
      issue: "Network Latency Spike",
      apps: ["TikTok", "WhatsApp"],
      areas: ["Area 4 - Sulawesi"],
      impact: 45,
      color: "bg-red-500",
    },
    {
      issue: "Server Response Delay",
      apps: ["Facebook", "Instagram"],
      areas: ["Area 2 - Central Java", "Area 1 - PUMA"],
      impact: 30,
      color: "bg-orange-500",
    },
    {
      issue: "CDN Performance Issues",
      apps: ["YouTube", "TikTok"],
      areas: ["Area 3 - Kalimantan", "Area 1 - Jabodetabek"],
      impact: 20,
      color: "bg-yellow-500",
    },
    {
      issue: "DNS Resolution Delay",
      apps: ["WhatsApp"],
      areas: ["Area 4 - Sulawesi"],
      impact: 5,
      color: "bg-blue-500",
    },
  ]

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">🔍 Root Cause Analysis</CardTitle>
        <p className="text-sm text-gray-600">Breakdown issues per area & app</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {rootCauses.map((cause, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{cause.issue}</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {cause.apps.map((app) => (
                      <span key={app} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {app}
                      </span>
                    ))}
                    {cause.areas.map((area) => (
                      <span key={area} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-sm font-bold text-gray-900">{cause.impact}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`${cause.color} h-3 rounded-full transition-all duration-500`}
                  style={{ width: `${cause.impact}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
