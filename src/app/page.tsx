"use client"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardKPI } from "@/components/dashboard-kpi"
import { DashboardLocation } from "@/components/dashboard-location"
import { SynAckMonitoring } from "@/components/syn-ack-monitoring"
import { DetailedCharts } from "@/components/detailed-charts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExecutiveDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header dengan Filter */}
        <DashboardHeader />

        {/* Tab Navigation */}
        <Tabs defaultValue="dashboard-kpi" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white">
            <TabsTrigger value="dashboard-kpi">Dashboard KPI</TabsTrigger>
            <TabsTrigger value="dashboard-location">Dashboard Location</TabsTrigger>
            <TabsTrigger value="syn-ack-monitoring">TCP Connection Analytics</TabsTrigger>
            <TabsTrigger value="detailed-charts">Detailed Charts</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard-kpi" className="space-y-6">
            <DashboardKPI />
          </TabsContent>

          <TabsContent value="dashboard-location" className="space-y-6">
            <DashboardLocation />
          </TabsContent>

          <TabsContent value="syn-ack-monitoring" className="space-y-6">
            <SynAckMonitoring />
          </TabsContent>

          <TabsContent value="detailed-charts" className="space-y-6">
            <DetailedCharts />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
