"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import type { DateRange } from "react-day-picker"
import { format } from "date-fns"

export function DashboardHeader() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2025, 4, 29), // 29 May 2025
    to: new Date(2025, 5, 16), // 16 June 2025
  })

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
    setSelectedRegion("all-regions") // Reset region selection
    if (area === "all-areas") {
      setAvailableRegions([])
    } else {
      setAvailableRegions(areaRegionMapping[area as keyof typeof areaRegionMapping] || [])
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Network Performance Intelligence Center</h1>
          <p className="text-gray-600">Real-time NPS & Service Quality Analytics</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {/* Custom Date Range Picker */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-64 bg-transparent justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "dd MMM")} - {format(date.to, "dd MMM yyyy")}
                  </>
                ) : (
                  format(date.from, "dd MMM yyyy")
                )
              ) : (
                <span>Pick a date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>

        {/* Area Filter */}
        <Select value={selectedArea} onValueChange={handleAreaChange}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-areas">All Areas</SelectItem>
            <SelectItem value="area-1">Area 1 (Sumatera)</SelectItem>
            <SelectItem value="area-2">Area 2 (Jabotabek)</SelectItem>
            <SelectItem value="area-3">Area 3 (Jawa-Bali)</SelectItem>
            <SelectItem value="area-4">Area 4 (Kalimantan-Sulawesi-PUMA)</SelectItem>
          </SelectContent>
        </Select>

        {/* Region Filter - Dynamic based on Area */}
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

        {/* Service Application Filter */}
        <Select defaultValue="all-apps">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Service Application" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-apps">All Apps</SelectItem>
            <SelectItem value="facebook">Facebook</SelectItem>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="tiktok">TikTok</SelectItem>
            <SelectItem value="whatsapp">WhatsApp</SelectItem>
            <SelectItem value="youtube">YouTube</SelectItem>
          </SelectContent>
        </Select>

        {/* Granularity Filter */}
        <Select defaultValue="daily">
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Granularity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hourly">Hourly</SelectItem>
            <SelectItem value="daily">Daily</SelectItem>
          </SelectContent>
        </Select>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Apply Filters</Button>
      </div>
    </div>
  )
}
