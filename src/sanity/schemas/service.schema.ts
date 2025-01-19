import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Service Name' }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Service Image',
      options: { hotspot: true },
    }),
    defineField({ name: 'subServices', type: 'array', title: 'Sub-Services', of: [{ type: 'reference', to: [{ type: 'subService' }] }] }),
  ],
});
