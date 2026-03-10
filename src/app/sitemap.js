export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.advancedfitness.co.ke'

  const facilitySlugs = [
    'ground-floor',
    'first-floor',
    'mezzanine',
    'second-floor',
    'third-floor',
    'fourth-floor',
    'fifth-floor',
    'sixth-floor'
  ]

  const facilityUrls = facilitySlugs.map((slug) => ({
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
    {
      url: `${baseUrl}/our-story`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...facilityUrls,
  ]
}
