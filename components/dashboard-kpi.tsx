import { KPICards } from "./kpi-cards"
import { MatrixSummaryTable } from "./matrix-summary-table"
import { TrendChartPanel } from "./trend-chart-panel"
import { RootCauseAnalysis } from "./root-cause-analysis"
import { AlertSection } from "./alert-section"
import { InsightNarrative } from "./insight-narrative"

export function DashboardKPI() {
  return (
    <div className="space-y-6">
      {/* KPI Cards Row */}
      <KPICards />

      {/* Matrix Summary Table */}
      <MatrixSummaryTable />

      {/* Trend Chart Panel */}
      <TrendChartPanel />

      {/* Bottom Row: Root Cause, Alerts, Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RootCauseAnalysis />
        <AlertSection />
        <InsightNarrative />
      </div>
    </div>
  )
}
