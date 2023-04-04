export interface Restaurant {
    id: string;
    name: string;
    address?: string;
    city?: string;
    phone?: string;
    lat?: number;
    lng?: number;
    price?: number;
    imageUrl?: string;
    categories?: string[];
    rating?: number;
    tags?: string[];
}