import * as yup from 'yup';

export const performanceValidationSchema = yup.object().shape({
  accuracy: yup.number().integer().required(),
  ai_model_id: yup.string().nullable().required(),
});
