import { type } from "os"

export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

export type OrderLacationdata = {
    latitude: number;
    longitude: number;
    address: string;
}