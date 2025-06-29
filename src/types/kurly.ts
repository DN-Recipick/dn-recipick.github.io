export interface KurlyItem {
  no: number;
  name: string;
  imageUrl: string;
  price: number;
}
export interface KurlyItemResponse {
  result: KurlyItem[];
}
