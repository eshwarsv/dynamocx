// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Modelling } = initSchema(schema);

export {
  Modelling
};