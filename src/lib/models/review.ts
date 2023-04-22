export interface Review {
    id: string;
    restaurantId: string;
    rating: number;
    title: string;
    body: string;
    createdOn: string;
    user: {
        id: string;
        name: string;
    }
}