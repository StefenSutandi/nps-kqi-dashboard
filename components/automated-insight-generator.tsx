export interface MetricData {
  area: string
  location: string
  app: string
  httpsSuccess: { value: string; delta: string; trend: string }
  webPageDelay: { value: string; delta: string; trend: string }
  rtt: { value: string; delta: string; trend: string }
  traffic: { value: string; delta: string; trend: string }
}

export function generateAutomatedInsight(
  data: MetricData[],
  dateRange: string,
): {
  insight: string
  recommendations: string[]
  criticalIssues: string[]
  positiveFindings: string[]
} {
  // Analyze critical issues
  const criticalIssues: string[] = []
  const positiveFindings: string[] = []
  const recommendations: string[] = []

  // Find worst performing areas/apps
  const worstDelay = data.reduce((prev, current) =>
    Number.parseFloat(current.webPageDelay.value) > Number.parseFloat(prev.webPageDelay.value) ? current : prev,
  )

  const worstTrafficDrop = data.filter(
    (item) => item.traffic.trend === "down" && Number.parseFloat(item.traffic.delta.replace("%", "")) < -2,
  )

  const bestPerformers = data.filter(
    (item) => Number.parseFloat(item.webPageDelay.value.replace("ms", "")) < 90 && item.traffic.trend === "up",
  )

  // Generate critical issues
  if (Number.parseFloat(worstDelay.webPageDelay.value.replace("ms", "")) > 120) {
    criticalIssues.push(
      `${worstDelay.app} di ${worstDelay.location} mengalami delay tertinggi (${worstDelay.webPageDelay.value})`,
    )
  }

  worstTrafficDrop.forEach((item) => {
    criticalIssues.push(`Traffic ${item.app} di ${item.location} turun ${item.traffic.delta}`)
  })

  // Generate positive findings
  bestPerformers.forEach((item) => {
    positiveFindings.push(
      `${item.app} di ${item.location} menunjukkan performa baik (${item.webPageDelay.value} delay, traffic ${item.traffic.delta})`,
    )
  })

  // Generate recommendations
  const problemAreas = [
    ...new Set(
      data
        .filter(
          (item) => Number.parseFloat(item.webPageDelay.value.replace("ms", "")) > 100 || item.traffic.trend === "down",
        )
        .map((item) => item.location),
    ),
  ]

  problemAreas.forEach((area) => {
    recommendations.push(`Prioritaskan optimalisasi infrastruktur di ${area}`)
  })

  const problemApps = [
    ...new Set(
      data.filter((item) => Number.parseFloat(item.webPageDelay.value.replace("ms", "")) > 120).map((item) => item.app),
    ),
  ]

  problemApps.forEach((app) => {
    recommendations.push(`Review server response time untuk ${app}`)
  })

  // Generate main insight narrative
  const insight = `Pada periode ${dateRange}, analisis menunjukkan ${criticalIssues.length} isu kritis yang memerlukan perhatian segera. 
  
${criticalIssues.length > 0 ? `Masalah utama: ${criticalIssues.join(", ")}.` : ""}

${positiveFindings.length > 0 ? `Sisi positif: ${positiveFindings.join(", ")}.` : ""}

${worstTrafficDrop.length > 0 ? `Penurunan traffic ini dapat berdampak pada kepuasan pengguna (NPS) jika tidak segera ditindaklanjuti.` : "Secara keseluruhan, performa jaringan dalam kondisi stabil."}`

  return {
    insight: insight.trim(),
    recommendations,
    criticalIssues,
    positiveFindings,
  }
}
