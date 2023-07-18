import { PerformanceInterface } from 'interfaces/performance';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface AiModelInterface {
  id?: string;
  name: string;
  details: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  performance?: PerformanceInterface[];
  organization?: OrganizationInterface;
  _count?: {
    performance?: number;
  };
}

export interface AiModelGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  details?: string;
  organization_id?: string;
}
