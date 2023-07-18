import { AiModelInterface } from 'interfaces/ai-model';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceInterface {
  id?: string;
  accuracy: number;
  ai_model_id: string;
  created_at?: any;
  updated_at?: any;

  ai_model?: AiModelInterface;
  _count?: {};
}

export interface PerformanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  ai_model_id?: string;
}
