import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Location Name' }),
    defineField({ name: 'address', type: 'string', title: 'Address' }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'servicesOffered',
      type: 'array',
      title: 'Services Offered',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
  ],
});
