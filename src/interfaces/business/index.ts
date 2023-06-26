import { CategoryInterface } from 'interfaces/category';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  name: string;
  address: string;
  phone: string;
  category_id?: string;
  created_at?: any;
  updated_at?: any;

  category?: CategoryInterface;
  _count?: {};
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  phone?: string;
  category_id?: string;
}
