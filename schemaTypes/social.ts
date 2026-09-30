import { defineType, defineField } from 'sanity'

export const social = defineType({
    name: 'socail',
    title: 'Socail',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'socialLink',
            title: 'Social Link',
            type: 'array',
            of: [{type: 'iconLink'}]
        })
    ]
})