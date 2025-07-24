import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { NPSTrendChart } from './charts/nps-trend-chart'
import { NPSChannelChart } from './charts/nps-channel-chart'
import { KQIPerformanceChart } from './charts/kqi-performance-chart'
import { NPSRegionChart } from './charts/nps-region-chart'
import { RootCauseChart } from './charts/root-cause-chart'
import { KQIMetricsDetail } from './charts/kqi-metrics-detail'

export function ChartsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Row 1 */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📈 NPS Trend
          </CardTitle>
          <p className="text-sm text-gray-600">Tren NPS 6 bulan terakhir per region</p>
        </CardHeader>
        <CardContent>
          <NPSTrendChart />
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📊 NPS per Channel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <NPSChannelChart />
        </CardContent>
      </Card>

      {/* Row 2 */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📱 KQI Performance - Top 5 Apps
          </CardTitle>
          <p className="text-sm text-gray-600">Success rate dan quality index aplikasi utama</p>
        </CardHeader>
        <CardContent>
          <KQIPerformanceChart />
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🗺️ NPS per Region
          </CardTitle>
          <p className="text-sm text-gray-600">Performa NPS dan breakdown customer sentiment</p>
        </CardHeader>
        <CardContent>
          <NPSRegionChart />
        </CardContent>
      </Card>

      {/* Row 3 */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            ⚠️ Root Cause Analysis - NPS Detractor
          </CardTitle>
          <p className="text-sm text-gray-600">Faktor utama penyebab penurunan NPS Juni 2025</p>
        </CardHeader>
        <CardContent>
          <RootCauseChart />
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📡 KQI Metrics Detail
          </CardTitle>
        </CardHeader>
        <CardContent>
          <KQIMetricsDetail />
        </CardContent>
      </Card>
    </div>
  )
}
