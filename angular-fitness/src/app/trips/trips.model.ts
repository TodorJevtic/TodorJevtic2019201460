export interface Trips{
    id: number;
    destination: string;
    type_of_travel: 'plane' | 'train' | 'bus';
    distance: number;
    price: number;
    date: Date;
    description?: string;
    rating: number;
    comment?: string;
    status?: 'done' | 'next' | 'cancelled';
    imageUrl: string;
}