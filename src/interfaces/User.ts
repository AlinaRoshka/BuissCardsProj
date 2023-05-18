export interface User {
  email: string;
  password: string;
  country?: string;
  city?: string;
  street?: string;
  id?: string;
  name?: string;
  imgUrl?: string;
  imgAlt?: string;
  biz?: boolean;
  favCards?: [];
  phone?: string;
  houseNumber?: string;
}
