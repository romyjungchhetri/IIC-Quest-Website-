import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description, keywords, ogImage }) => {
  const location = useLocation()
  const baseUrl = window.location.origin
  const currentUrl = `${baseUrl}${location.pathname}`
  
  const defaultTitle = 'IIC Quest 2.0 - Innovation Hackathon'
  const defaultDescription = 'Join IIC Quest 2.0, a 36-hour hackathon where innovation meets technology. Register your team now and compete for exciting prizes!'
  const defaultKeywords = 'hackathon, IIC Quest, innovation, technology, coding competition, student hackathon'
  const defaultOgImage = '/og-image.jpg'

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={`${baseUrl}${ogImage || defaultOgImage}`} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage || defaultOgImage}`} />
    </Helmet>
  )
}

export default SEO
