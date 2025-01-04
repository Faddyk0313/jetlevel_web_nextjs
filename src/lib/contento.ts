import { createContentoClient } from '@gocontento/client'
import { ContentoClient } from '@gocontento/client/lib/client'

export function createClient(isPreview: boolean = false): ContentoClient {

  return createContentoClient({
    apiURL: process.env.CONTENTO_API_URL ?? 'https://app.contento.io/api/v1',
    apiKey: process.env.CONTENTO_API_KEY ?? '0IH1nNoitk9HWNDvj5esoDJRDQlg8IHCVuOxHTpb1792712e',
    siteId: process.env.CONTENTO_SITE_ID ?? 's_01JA0hQj1BcayHdvz8pvEM0GH0',
    isPreview: isPreview,
  })
}



