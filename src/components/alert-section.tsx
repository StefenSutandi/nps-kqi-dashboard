import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, TrendingDown, Clock } from "lucide-react"

export function AlertSection() {
  const alerts = [
    {
      type: "critical",
      icon: AlertTriangle,
      message: "HTTPS SR% WhatsApp di Sulawesi turun ke 97.8%",
      time: "15 menit lalu",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      type: "warning",
      icon: TrendingDown,
      message: "Traffic Facebook di PUMA drop -5.6% minggu ini",
      time: "1 jam lalu",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      type: "info",
      icon: Clock,
      message: "TikTok delay meningkat +49.5ms di Sulawesi",
      time: "2 jam lalu",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
  ]

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">🚨 Alert Section</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert, index) => {
            const IconComponent = alert.icon
            return (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${alert.bgColor} ${alert.borderColor}`}>
                <div className="flex items-start gap-3">
                  <IconComponent className={`h-5 w-5 ${alert.color} mt-0.5`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
