interface ProductModel {
 id?: number | undefined;
 category: string | undefined;
 laboratory: string | undefined;
 barcode?: string | undefined;
 product: string | undefined;
 features: string | undefined;
 summary: string | undefined;
 dosage: string | undefined;
 cost?: string | undefined;
 pvp?: string | undefined;
 photo?: File | undefined;
 idimage?: string | undefined;
}
export type { ProductModel };
