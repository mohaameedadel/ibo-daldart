import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'healthcarePackage',
  title: 'Healthcare Package',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Package Name' }),
    defineField({ name: 'description', type: 'text', title: 'Package Description' }),
    defineField({
      name: 'servicesIncluded',
      type: 'array',
      title: 'Services Included',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    defineField({ name: 'price', type: 'number', title: 'Price' }),
  ],
});
