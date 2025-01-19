import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Patient Name' }),
    defineField({ name: 'feedback', type: 'text', title: 'Feedback' }),
    defineField({ name: 'service', type: 'reference', to: [{ type: 'service' }] }),
    defineField({ name: 'date', type: 'datetime', title: 'Date' }),
  ],
});
