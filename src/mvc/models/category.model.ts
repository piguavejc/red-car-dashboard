interface CategoryModel {
 idcategory?: number | undefined;
 category: string | undefined;
 photo?: File | undefined;
 idphoto?: string | undefined | null;
}
interface CategoryDto {
 idcategory?: number | undefined;
 category: string | undefined;
 photo?: string | undefined | null;
 idphoto?: string | undefined | null;
}
export type { CategoryModel, CategoryDto };
