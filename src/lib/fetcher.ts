
export type FetcherOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: Record<string, string>;
    body?: Record<string, unknown> | string;
  };
  
  export type EmptyLegFlightResponse = {
    id: string;
    published_at: string;
    slug: string;
    name: string;
    uri: string;
    url: string;
    language: string;
    created_at: string;
    updated_at: string;
    author: {
      id: string;
      name: string;
      email: string;
      profile_photo_url: string;
    };
    content_type: {
      id: string;
      name: string;
      handle: string;
      object_type: string;
    };
    seo: {
      title: string | null;
      description: string | null;
      robots: string | null;
      canonical_url: string;
      open_graph: {
        title: string | null;
        description: string | null;
        image_secure_url: string | null;
        image_width: number | null;
        image_height: number | null;
        image_alt: string | null;
        url: string;
      };
    };
    fields: {
      title: {
        id: string;
        name: string;
        handle: string;
        help_text: string | null;
        type: string;
        text: string;
      };
      sub_heading: {
        id: string;
        name: string;
        handle: string;
        help_text: string | null;
        type: string;
        text: string;
      };
      body_section: {
        id: string;
        name: string;
        handle: string;
        help_text: string | null;
        type: string;
        text: string;
      };
      short_answer: {
        id: string;
        name: string;
        handle: string;
        help_text: string | null;
        type: string;
        text: string;
      };
      avinode_heading: {
        id: string;
        name: string;
        handle: string;
        help_text: string | null;
        type: string;
        text: string;
      };
      empty_leg_hero_picture: {
        id: string;
        name: string;
        handle: string;
        help_text: string | null;
        type: string;
        assets: { [key: string]: any }[]; // Specify asset structure if known
      };
      empty_leg_flights_city_name: {
        id: string;
        name: string;
        handle: string;
        help_text: string | null;
        type: string;
        text: string;
      };
    };
  };
  
  



  export async function fetcher<T>(
    url: string,
    options: FetcherOptions = {}
  ): Promise<T> {
    const { method = 'GET', headers = {}, body } = options;
  
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data as T;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  }
  