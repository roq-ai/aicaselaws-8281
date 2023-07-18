import { AiModelInterface } from 'interfaces/ai-model';
import { RenamedcaseInterface } from 'interfaces/renamedcase';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  ai_model?: AiModelInterface[];
  Renamedcase?: RenamedcaseInterface[];
  user?: UserInterface;
  _count?: {
    ai_model?: number;
    Renamedcase?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
