import { Card, CardContent } from "@/components/ui/card"
import { TrendingDown, AlertTriangle, Clock, TrendingUp } from "lucide-react"

export function KPICards() {
  const kpis = [
    {
      title: "NPS Last Month",
      value: "43",
      insight: "vs Previous Month",
      change: "-5",
      trend: "down",
      icon: TrendingDown,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Worst Performing",
      value: "Area 4",
      insight: "SULAWESI Region",
      change: "TikTok +49.5ms",
      trend: "alert",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Best Performance",
      value: "Area 2",
      insight: "CENTRAL JABOTABEK",
      change: "78ms avg",
      trend: "good",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Critical Threshold",
      value: "2 Apps",
      insight: "Above 100ms delay",
      change: "TikTok, WhatsApp",
      trend: "alert",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi, index) => {
        const IconComponent = kpi.icon
        return (
          <Card key={index} className="bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">{kpi.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</p>
                  <p className="text-xs text-gray-500">{kpi.insight}</p>
                </div>
                <div className={`p-2 rounded-lg ${kpi.bgColor}`}>
                  <IconComponent className={`h-5 w-5 ${kpi.color}`} />
                </div>
              </div>
              <div className="mt-3 flex items-center">
                <span className={`text-sm font-medium ${kpi.color}`}>{kpi.change}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
