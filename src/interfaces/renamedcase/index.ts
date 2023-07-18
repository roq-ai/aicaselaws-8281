import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface RenamedcaseInterface {
  id?: string;
  name: string;
  details: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface RenamedcaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  details?: string;
  organization_id?: string;
}
