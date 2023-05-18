export interface Card {
  _id?: string;
  name?: string;
  country?: string;
  city?: string;
  street?: string;
  description: string;
  phone: string;
  logo: string;
  imgUrl?: string;
  imgAlt?: string;
  web?:string;
  cardNumber?: number;
  user_id?: string;
  isFavorite: boolean;
}
