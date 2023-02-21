export interface ListingResponse {
    success: boolean;
    message: string;
    listings: Listing[];
  }
  
  export interface Listing {
    id: number;
    position: string;
    Requirements: string | null;
    benefits: string | null;
    tasks: string | null;
    name: string | null;
    logo: string | null;
    salary: number | null;
    created_at: string;
    updated_at: string;
  }