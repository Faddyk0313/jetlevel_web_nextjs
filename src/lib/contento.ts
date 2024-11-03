import { createContentoClient } from '@gocontento/client'
import { ContentoClient } from '@gocontento/client/lib/client'

export function createClient(isPreview: boolean = false): ContentoClient {

  return createContentoClient({
    apiURL: process.env.CONTENTO_API_URL ?? '',
    apiKey: process.env.CONTENTO_API_KEY ?? '',
    siteId: process.env.CONTENTO_SITE_ID ?? '',
    isPreview: isPreview,
  })
}



