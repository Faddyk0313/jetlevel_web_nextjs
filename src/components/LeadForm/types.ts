type AirportData = {
    codeIcaoAirport: string;
    iata_code: string;
    iso_region: string;
    keywords: string;
    latitudeAirport: number;
    longitudeAirport: number;
    loc: {
      lon: number;
      lat: number;
    };
    local_code: string;
    municipality: string;
    nameAirport: string;
    type: string;
    _id: string;
  };
  
  export interface AirportResponse  {
    search: AirportData[];
  };