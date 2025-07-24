import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb } from 'lucide-react'

export function InsightsSection() {
  const insights = [
    'NPS nasional turun 5 poin menjadi 43 pada Juni 2025',
    'Sumatera Utara menjadi region dengan NPS terendah (38)',
    'TikTok dan YouTube mengalami degradasi KQI signifikan',
    'Server RTT tinggi menjadi root cause utama (35% impact)',
    'Detractor rate naik 3% terutama dari mobile channel'
  ]

  const actions = [
    'Prioritas perbaikan infrastruktur di Sumatera Utara',
    'Optimalisasi server response time untuk TikTok & YouTube',
    'Review bandwidth allocation untuk video streaming apps',
    'Implementasi CDN tambahan di region critical',
    'Enhanced monitoring untuk early detection anomali'
  ]

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          Key Insights & Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Temuan Utama:</h4>
            <ul className="space-y-2">
              {insights.map((insight, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-sm text-gray-700">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Action Items:</h4>
            <ul className="space-y-2">
              {actions.map((action, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span className="text-sm text-gray-700">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Insight:</strong> NPS turun di region A, TikTok & WhatsApp KQI drop. 
            Root cause utama: Server RTT tinggi (35% impact). Rekomendasi prioritas: 
            optimalisasi infrastruktur Sumatera Utara dan server response time.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
