import * as yup from 'yup';

export const renamedcaseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  details: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
