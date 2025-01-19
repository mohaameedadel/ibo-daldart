import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'subService',
  title: 'Sub-Service',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Sub-Service Name' }),
    defineField({ name: 'description', type: 'text', title: 'Detailed Description' }),
    defineField({
      name: 'relatedServices',
      type: 'array',
      title: 'Related Services',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
  ],
});
