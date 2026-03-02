export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.advancedfitness.co.ke'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/legacy/', '/private/'], // Add generic disallows if necessary, though we just want a clean root currently
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
