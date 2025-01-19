import { type SchemaTypeDefinition } from 'sanity'
import doctor from '../schemas/doctor.schema'
import packages from '../schemas/healthcare-packages.schema'
import location from '../schemas/location.schema'
import service from '../schemas/service.schema'
import subservice from '../schemas/subservice.schema'
import testmonial from '../schemas/testmonial.schema'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [doctor, packages, location, service, subservice, testmonial],
}
