import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle } from 'lucide-react'

export function AlertsSection() {
  const alerts = [
    {
      message: 'TikTok KQI turun 9% di Sumut',
      time: '2 jam lalu',
      severity: 'high'
    },
    {
      message: 'YouTube page load >3s di Jabar',
      time: '4 jam lalu',
      severity: 'medium'
    },
    {
      message: 'WhatsApp syn rate normal kembali',
      time: '6 jam lalu',
      severity: 'low'
    }
  ]

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-orange-500" />
          Real-time Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  alert.severity === 'high' ? 'bg-red-500' : 
                  alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                }`} />
                <span className="text-sm text-gray-900">{alert.message}</span>
              </div>
              <span className="text-xs text-gray-500">{alert.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
