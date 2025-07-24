import { Card, CardContent } from '@/components/ui/card'
import { TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react'

export function MetricsCards() {
  const metrics = [
    {
      title: 'NPS Overall',
      value: '43',
      change: '-5',
      trend: 'down',
      color: 'text-red-600'
    },
    {
      title: 'KQI Average',
      value: '88%',
      change: '-7%',
      trend: 'down',
      color: 'text-red-600'
    },
    {
      title: 'Detractor Rate',
      value: '27%',
      change: '+3%',
      trend: 'up',
      color: 'text-red-600'
    },
    {
      title: 'Critical Alerts',
      value: '3',
      change: '',
      trend: 'alert',
      color: 'text-red-600'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
              <div className="flex items-center gap-1">
                {metric.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-500" />}
                {metric.trend === 'up' && <TrendingUp className="h-4 w-4 text-red-500" />}
                {metric.trend === 'alert' && <AlertTriangle className="h-4 w-4 text-red-500" />}
                {metric.change && (
                  <span className={`text-sm font-medium ${metric.color}`}>
                    {metric.change}
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
