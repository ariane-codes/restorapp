import type { GeoPoint } from "firebase/firestore";

export interface Restaurant {
    id: string;
    name: string;
    address?: string;
    city?: string;
    phone?: string;
    geopoint?: GeoPoint;
    price?: number;
    imageUrl?: string;
    categories?: string[];
    rating?: number;
    tags?: string[];
    reviewCount?: number;
}