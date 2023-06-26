import { BusinessInterface } from 'interfaces/business';
import { DirectoryInterface } from 'interfaces/directory';
import { GetQueryInterface } from 'interfaces';

export interface CategoryInterface {
  id?: string;
  name: string;
  directory_id?: string;
  created_at?: any;
  updated_at?: any;
  business?: BusinessInterface[];
  directory?: DirectoryInterface;
  _count?: {
    business?: number;
  };
}

export interface CategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  directory_id?: string;
}
