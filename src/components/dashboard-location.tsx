"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export function DashboardLocation() {
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

  const getFilteredLocations = () => {
    if (selectedArea === "all-areas") {
      return [
        {
          name: "Area 1 - SUMBAGUT",
          area: "area-1",
          region: "SUMBAGUT",
          avgDelay: "88ms",
          peakDelay: "120ms",
          successRate: "98.7%",
          status: "Good",
          color: "#3b82f6",
        },
        {
          name: "Area 2 - CENTRAL JABOTABEK",
          area: "area-2",
          region: "CENTRAL JABOTABEK",
          avgDelay: "78ms",
          peakDelay: "110ms",
          successRate: "99.1%",
          status: "Excellent",
          color: "#ef4444",
        },
        {
          name: "Area 3 - JATENG",
          area: "area-3",
          region: "JATENG",
          avgDelay: "92ms",
          peakDelay: "140ms",
          successRate: "98.5%",
          status: "Good",
          color: "#10b981",
        },
        {
          name: "Area 4 - KALIMANTAN",
          area: "area-4",
          region: "KALIMANTAN",
          avgDelay: "95ms",
          peakDelay: "160ms",
          successRate: "98.9%",
          status: "Good",
          color: "#f59e0b",
        },
        {
          name: "Area 4 - SULAWESI",
          area: "area-4",
          region: "SULAWESI",
          avgDelay: "165ms",
          peakDelay: "750ms",
          successRate: "97.2%",
          status: "Critical",
          color: "#8b5cf6",
        },
      ]
    }

    const allLocations = [
      {
        name: "Area 1 - SUMBAGUT",
        area: "area-1",
        region: "SUMBAGUT",
        avgDelay: "88ms",
        peakDelay: "120ms",
        successRate: "98.7%",
        status: "Good",
        color: "#3b82f6",
      },
      {
        name: "Area 1 - SUMBAGTENG",
        area: "area-1",
        region: "SUMBAGTENG",
        avgDelay: "92ms",
        peakDelay: "135ms",
        successRate: "98.4%",
        status: "Good",
        color: "#06b6d4",
      },
      {
        name: "Area 1 - SUMBAGSEL",
        area: "area-1",
        region: "SUMBAGSEL",
        avgDelay: "85ms",
        peakDelay: "125ms",
        successRate: "98.8%",
        status: "Good",
        color: "#0891b2",
      },
      {
        name: "Area 2 - JABAR",
        area: "area-2",
        region: "JABAR",
        avgDelay: "82ms",
        peakDelay: "115ms",
        successRate: "99.0%",
        status: "Excellent",
        color: "#ef4444",
      },
      {
        name: "Area 2 - EASTERN JABOTABEK",
        area: "area-2",
        region: "EASTERN JABOTABEK",
        avgDelay: "75ms",
        peakDelay: "105ms",
        successRate: "99.3%",
        status: "Excellent",
        color: "#dc2626",
      },
      {
        name: "Area 2 - CENTRAL JABOTABEK",
        area: "area-2",
        region: "CENTRAL JABOTABEK",
        avgDelay: "78ms",
        peakDelay: "110ms",
        successRate: "99.1%",
        status: "Excellent",
        color: "#b91c1c",
      },
      {
        name: "Area 2 - WESTERN JABOTABEK",
        area: "area-2",
        region: "WESTERN JABOTABEK",
        avgDelay: "80ms",
        peakDelay: "112ms",
        successRate: "99.0%",
        status: "Excellent",
        color: "#991b1b",
      },
      {
        name: "Area 3 - BALINUSRA",
        area: "area-3",
        region: "BALINUSRA",
        avgDelay: "95ms",
        peakDelay: "140ms",
        successRate: "98.5%",
        status: "Good",
        color: "#10b981",
      },
      {
        name: "Area 3 - JATIM",
        area: "area-3",
        region: "JATIM",
        avgDelay: "89ms",
        peakDelay: "130ms",
        successRate: "98.7%",
        status: "Good",
        color: "#059669",
      },
      {
        name: "Area 3 - JATENG",
        area: "area-3",
        region: "JATENG",
        avgDelay: "92ms",
        peakDelay: "140ms",
        successRate: "98.5%",
        status: "Good",
        color: "#047857",
      },
      {
        name: "Area 4 - KALIMANTAN",
        area: "area-4",
        region: "KALIMANTAN",
        avgDelay: "95ms",
        peakDelay: "160ms",
        successRate: "98.9%",
        status: "Good",
        color: "#f59e0b",
      },
      {
        name: "Area 4 - SULAWESI",
        area: "area-4",
        region: "SULAWESI",
        avgDelay: "165ms",
        peakDelay: "750ms",
        successRate: "97.2%",
        status: "Critical",
        color: "#8b5cf6",
      },
      {
        name: "Area 4 - PUMA",
        area: "area-4",
        region: "PUMA",
        avgDelay: "85ms",
        peakDelay: "120ms",
        successRate: "99.2%",
        status: "Excellent",
        color: "#7c3aed",
      },
    ]

    let filtered = allLocations

    if (selectedArea !== "all-areas") {
      filtered = filtered.filter((loc) => loc.area === selectedArea)
    }

    if (selectedRegion !== "all-regions") {
      const regionName = availableRegions.find((r) => r.toLowerCase().replace(/\s+/g, "-") === selectedRegion)
      if (regionName) {
        filtered = filtered.filter((loc) => loc.region === regionName)
      }
    }

    return filtered
  }

  const filteredLocations = getFilteredLocations()

  return (
    <div className="space-y-6">
      {/* Location Selector */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Regional Performance Analysis</CardTitle>
          <div className="flex gap-4 mt-4">
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

      {/* Location Performance Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SYN ACK Delay by Location */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>SYN ACK-ACK Delay by Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <svg viewBox="0 0 600 300" className="w-full h-full">
                {/* Grid */}
                <defs>
                  <pattern id="location-grid" width="60" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 30" fill="none" stroke="#f3f4f6" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#location-grid)" />

                {/* Y-axis */}
                <text x="20" y="50" className="text-xs fill-gray-500">
                  400
                </text>
                <text x="20" y="100" className="text-xs fill-gray-500">
                  300
                </text>
                <text x="20" y="150" className="text-xs fill-gray-500">
                  200
                </text>
                <text x="20" y="200" className="text-xs fill-gray-500">
                  100
                </text>
                <text x="20" y="250" className="text-xs fill-gray-500">
                  0
                </text>

                {/* Multiple location lines */}
                {filteredLocations.slice(0, 4).map((location, index) => {
                  const points = "50,180 100,170 150,160 200,150 250,140 300,130 350,125 400,120 450,115 500,110"
                  const adjustedPoints = points
                    .split(" ")
                    .map((point, i) => {
                      const [x, y] = point.split(",").map(Number)
                      return `${x},${y + index * 20}`
                    })
                    .join(" ")

                  return (
                    <polyline
                      key={location.name}
                      fill="none"
                      stroke={location.color}
                      strokeWidth="2"
                      points={adjustedPoints}
                    />
                  )
                })}

                {/* Legend */}
                <g transform="translate(450, 50)">
                  {filteredLocations.slice(0, 4).map((location, index) => (
                    <g key={location.name}>
                      <rect x="0" y={index * 20} width="12" height="3" fill={location.color} />
                      <text x="18" y={index * 20 + 8} className="text-xs fill-gray-600">
                        {location.name}
                      </text>
                    </g>
                  ))}
                </g>
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Performance Anomaly Detection */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Performance Anomaly Detection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center justify-center">
              <svg viewBox="0 0 600 300" className="w-full h-full">
                <rect width="100%" height="100%" fill="url(#location-grid)" />

                {/* Normal performance line */}
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  points="50,200 100,195 150,190 200,185 250,180 300,175"
                />

                {/* Spike anomaly */}
                <polyline fill="none" stroke="#ef4444" strokeWidth="3" points="300,175 350,50 400,175" />

                {/* Recovery */}
                <polyline fill="none" stroke="#10b981" strokeWidth="2" points="400,175 450,170 500,165 550,160" />

                {/* Anomaly highlight */}
                <circle cx="350" cy="50" r="6" fill="#ef4444" stroke="#fff" strokeWidth="2" />
                <text x="360" y="45" className="text-xs fill-red-600 font-bold">
                  Anomaly Detected
                </text>

                {/* Alert box */}
                <rect
                  x="320"
                  y="80"
                  width="120"
                  height="40"
                  fill="rgba(239, 68, 68, 0.1)"
                  stroke="#ef4444"
                  strokeWidth="1"
                  rx="4"
                />
                <text x="330" y="95" className="text-xs fill-red-800">
                  Critical Spike
                </text>
                <text x="330" y="110" className="text-xs fill-red-800">
                  750ms delay
                </text>
              </svg>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Location Comparison Table */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Location Performance Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Location</th>
                  <th className="text-center p-3 font-semibold">Avg SYN-ACK Delay</th>
                  <th className="text-center p-3 font-semibold">Peak Delay</th>
                  <th className="text-center p-3 font-semibold">Success Rate</th>
                  <th className="text-center p-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredLocations.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{row.name}</td>
                    <td className="p-3 text-center">{row.avgDelay}</td>
                    <td className="p-3 text-center">{row.peakDelay}</td>
                    <td className="p-3 text-center">{row.successRate}</td>
                    <td className="p-3 text-center">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          row.status === "Excellent"
                            ? "bg-green-100 text-green-800"
                            : row.status === "Good"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
