"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export function DetailedCharts() {
  const areaRegionMapping = {
    "area-1": ["SUMBAGUT", "SUMBAGTENG", "SUMBAGSEL"],
    "area-2": ["JABAR", "EASTERN JABOTABEK", "CENTRAL JABOTABEK", "WESTERN JABOTABEK"],
    "area-3": ["BALINUSRA", "JATIM", "JATENG"],
    "area-4": ["KALIMANTAN", "SULAWESI", "PUMA"],
  }

  const [selectedArea, setSelectedArea] = useState<string>("all-areas")
  const [availableRegions, setAvailableRegions] = useState<string[]>([])
  const [selectedRegion, setSelectedRegion] = useState<string>("all-regions")

  const handleAreaChange = (area: string) => {
    setSelectedArea(area)
    setSelectedRegion("all-regions")
    if (area === "all-areas") {
      setAvailableRegions([])
    } else {
      setAvailableRegions(areaRegionMapping[area as keyof typeof areaRegionMapping] || [])
    }
  }

  return (
    <div className="space-y-6">
      {/* Charts Control Panel */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Advanced Network Analytics</CardTitle>
          <div className="flex gap-4 mt-4">
            <Select defaultValue="hourly">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hourly">Hourly</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
              </SelectContent>
            </Select>

            {/* Area Filter */}
            <Select value={selectedArea} onValueChange={handleAreaChange}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-areas">All Areas</SelectItem>
                <SelectItem value="area-1">Area 1 (Sumatera)</SelectItem>
                <SelectItem value="area-2">Area 2 (Jabotabek)</SelectItem>
                <SelectItem value="area-3">Area 3 (Jawa-Bali)</SelectItem>
                <SelectItem value="area-4">Area 4 (Kalimantan-Sulawesi-PUMA)</SelectItem>
              </SelectContent>
            </Select>

            {/* Region Filter */}
            <Select value={selectedRegion} onValueChange={setSelectedRegion} disabled={selectedArea === "all-areas"}>
              <SelectTrigger className={`w-48 ${selectedArea === "all-areas" ? "bg-gray-100 text-gray-400" : ""}`}>
                <SelectValue
                  placeholder={
                    selectedArea === "all-areas"
                      ? "Select Area First"
                      : availableRegions.length > 0
                        ? "Select Region"
                        : "All Regions"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-regions">All Regions</SelectItem>
                {availableRegions.map((region) => (
                  <SelectItem
                    key={region.toLowerCase().replace(/\s+/g, "-")}
                    value={region.toLowerCase().replace(/\s+/g, "-")}
                  >
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
      </Card>

      {/* 4-Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Server Response Time Analysis */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Server Response Time Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <svg viewBox="0 0 600 300" className="w-full h-full">
                <defs>
                  <pattern id="detailed-grid" width="60" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 30" fill="none" stroke="#f3f4f6" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#detailed-grid)" />

                {/* Y-axis */}
                <text x="20" y="50" className="text-xs fill-gray-500">
                  40
                </text>
                <text x="20" y="100" className="text-xs fill-gray-500">
                  30
                </text>
                <text x="20" y="150" className="text-xs fill-gray-500">
                  20
                </text>
                <text x="20" y="200" className="text-xs fill-gray-500">
                  10
                </text>
                <text x="20" y="250" className="text-xs fill-gray-500">
                  0
                </text>

                {/* Time series lines */}
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  points="80,180 130,175 180,170 230,165 280,160 330,155 380,150 430,145 480,140 530,135"
                />
                <polyline
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  points="80,200 130,195 180,190 230,185 280,180 330,175 380,170 430,165 480,160 530,155"
                />
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  points="80,160 130,155 180,150 230,145 280,140 330,135 380,130 430,125 480,120 530,115"
                />
                <polyline
                  fill="none"
                  stroke="#eab308"
                  strokeWidth="2"
                  points="80,140 130,135 180,130 230,125 280,120 330,115 380,110 430,105 480,100 530,95"
                />
                <polyline
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  points="80,220 130,215 180,210 230,205 280,200 330,195 380,190 430,185 480,180 530,175"
                />
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* HTTPS Success Rate Monitoring */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>HTTPS Success Rate Monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <svg viewBox="0 0 600 300" className="w-full h-full">
                <rect width="100%" height="100%" fill="url(#detailed-grid)" />

                {/* Y-axis - High percentage scale */}
                <text x="20" y="50" className="text-xs fill-gray-500">
                  100
                </text>
                <text x="20" y="100" className="text-xs fill-gray-500">
                  95
                </text>
                <text x="20" y="150" className="text-xs fill-gray-500">
                  90
                </text>
                <text x="20" y="200" className="text-xs fill-gray-500">
                  85
                </text>
                <text x="20" y="250" className="text-xs fill-gray-500">
                  80
                </text>

                {/* High performance lines (near 100%) */}
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  points="80,80 130,75 180,70 230,65 280,60 330,55 380,50 430,55 480,60 530,65"
                />
                <polyline
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  points="80,85 130,80 180,75 230,70 280,65 330,60 380,55 430,60 480,65 530,70"
                />
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  points="80,75 130,70 180,65 230,60 280,55 330,50 380,45 430,50 480,55 530,60"
                />
                <polyline
                  fill="none"
                  stroke="#eab308"
                  strokeWidth="2"
                  points="80,90 130,85 180,80 230,75 280,70 330,65 380,60 430,65 480,70 530,75"
                />
                <polyline
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  points="80,95 130,90 180,85 230,80 280,75 330,70 380,65 430,70 480,75 530,80"
                />
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Web Page Load Performance */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Web Page Load Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <svg viewBox="0 0 600 300" className="w-full h-full">
                <rect width="100%" height="100%" fill="url(#detailed-grid)" />

                {/* Y-axis */}
                <text x="20" y="50" className="text-xs fill-gray-500">
                  1200
                </text>
                <text x="20" y="100" className="text-xs fill-gray-500">
                  1000
                </text>
                <text x="20" y="150" className="text-xs fill-gray-500">
                  800
                </text>
                <text x="20" y="200" className="text-xs fill-gray-500">
                  600
                </text>
                <text x="20" y="250" className="text-xs fill-gray-500">
                  400
                </text>

                {/* Variable performance with some spikes */}
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  points="80,200 130,195 180,190 230,185 280,180 330,175 380,170 430,165 480,160 530,155"
                />
                <polyline
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  points="80,220 130,215 180,210 230,205 280,200 330,195 380,190 430,185 480,180 530,175"
                />
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  points="80,180 130,175 180,170 230,165 280,160 330,155 380,150 430,145 480,140 530,135"
                />
                <polyline
                  fill="none"
                  stroke="#eab308"
                  strokeWidth="2"
                  points="80,160 130,155 180,150 230,145 280,140 330,135 380,130 430,125 480,120 530,115"
                />
                <polyline
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  points="80,240 130,235 180,230 230,225 280,220 330,215 380,210 430,205 480,200 530,195"
                />
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Network Traffic Volume */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Network Traffic Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <svg viewBox="0 0 600 300" className="w-full h-full">
                <rect width="100%" height="100%" fill="url(#detailed-grid)" />

                {/* Y-axis - Large scale */}
                <text x="10" y="50" className="text-xs fill-gray-500">
                  60,000,000
                </text>
                <text x="10" y="100" className="text-xs fill-gray-500">
                  50,000,000
                </text>
                <text x="10" y="150" className="text-xs fill-gray-500">
                  40,000,000
                </text>
                <text x="10" y="200" className="text-xs fill-gray-500">
                  30,000,000
                </text>
                <text x="10" y="250" className="text-xs fill-gray-500">
                  20,000,000
                </text>

                {/* Traffic patterns with peaks and valleys */}
                <polyline
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  points="80,120 130,100 180,80 230,90 280,110 330,130 380,120 430,100 480,80 530,90"
                />
                <polyline
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  points="80,140 130,120 180,100 230,110 280,130 330,150 380,140 430,120 480,100 530,110"
                />
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  points="80,100 130,80 180,60 230,70 280,90 330,110 380,100 430,80 480,60 530,70"
                />
                <polyline
                  fill="none"
                  stroke="#eab308"
                  strokeWidth="2"
                  points="80,160 130,140 180,120 230,130 280,150 330,170 380,160 430,140 480,120 530,130"
                />
                <polyline
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  points="80,180 130,160 180,140 230,150 280,170 330,190 380,180 430,160 480,140 530,150"
                />
              </svg>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart Legend */}
      <Card className="bg-white">
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-blue-500"></div>
              <span className="text-sm text-gray-600">Area 1 - Sumatera</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-orange-500"></div>
              <span className="text-sm text-gray-600">Area 2 - Jabotabek</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-green-500"></div>
              <span className="text-sm text-gray-600">Area 3 - Jawa-Bali</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-yellow-500"></div>
              <span className="text-sm text-gray-600">Area 4 - Kalimantan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-purple-500"></div>
              <span className="text-sm text-gray-600">Area 4 - Sulawesi</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
