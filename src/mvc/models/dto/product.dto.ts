interface ProductDto {
 id_product: number;
 category: string;
 laboratory: string;
 barcode?: string;
 product: string;
 features: string;
 summary: string;
 dosage: string;
 cost?: string;
 pvp?: number;
 photo?: string;
 id_image?: string;
}
export type { ProductDto };
