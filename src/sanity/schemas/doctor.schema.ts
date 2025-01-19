import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'doctor',
  title: 'Medical Professionals',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Full Name',
    }),
    defineField({
      name: 'nameArabic',
      type: 'string',
      title: 'Name in Arabic',
    }),
    defineField({
      name: 'specialty',
      type: 'string',
      title: 'Medical Specialty',
    }),
    defineField({
      name: 'specialtyArabic',
      type: 'string',
      title: 'Specialty in Arabic',
    }),
    defineField({
      name: 'profileImage',
      type: 'image',
      title: 'Profile Picture',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'qualifications',
      type: 'array',
      title: 'Qualifications',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'bio',
      type: 'text',
      title: 'Professional Biography',
    }),
    defineField({
      name: 'bioArabic',
      type: 'text',
      title: 'Biography in Arabic',
    }),
    defineField({
      name: 'videoIntro',
      type: 'url',
      title: 'Personal Introduction Video',
    }),
  ],
});
