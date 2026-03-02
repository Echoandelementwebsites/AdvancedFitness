import fs from 'fs'
import path from 'path'

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.advancedfitness.co.ke'

  // Fetch facilities
  const facilitiesDir = path.join(process.cwd(), 'public/images/facilities')
  let facilities = []

  if (fs.existsSync(facilitiesDir)) {
    facilities = fs.readdirSync(facilitiesDir).filter(file => {
      return fs.statSync(path.join(facilitiesDir, file)).isDirectory()
    })
  }

  const facilityUrls = facilities.map((slug) => ({
    url: `${baseUrl}/facilities/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...facilityUrls,
  ]
}
