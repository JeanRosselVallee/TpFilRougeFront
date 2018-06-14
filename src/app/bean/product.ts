export class Product {
    public id:number;
    public title: string;
    public price: number;
    public url: string;
    public tva:number;
}

export const PRODUCT_MOCK: Array<Product> = [
    {
        id: 0,
        title: "Chaussettes",
        url: "https://goo.gl/VY2H3h",
        price: 3, 
        tva: 0.2
    },
    {
        id: 1,
        title: "Slip",
        url: "https://goo.gl/Lz7H1Q",
        price: 6, 
        tva: 0.2
    },
    {
        id: 2,
        title: "Soutien Gorge",
        url: "https://goo.gl/Ur5iSa",
        price: 20, 
        tva: 0.2
    },
    {
        id: 3,
        title: "Caleçon",
        url: "https://goo.gl/DGkt6b",
        price: 20, 
        tva: 0.2
    }
];
