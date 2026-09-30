import { defineType, defineField } from 'sanity'

export const iconLink = defineType({
    name: 'iconLink',
    title: 'Icon Link',
    type: 'object',
    fields: [
        defineField({
            name: 'href',
            title: 'Link URL',
            type: 'url'
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'string',
            options: {
                list: [
                    { title: 'GitHub', value: 'github' },
                    { title: 'LinkedIn', value: 'linkedin' },
                    { title: 'Discord', value: 'discord' },
                    { title: 'Twitter / X', value: 'twitter' },
                    { title: 'Facebook', value: 'facebook' },
                    { title: 'Instagram', value: 'instagram' },
                    { title: 'YouTube', value: 'youtube' },
                    { title: 'TikTok', value: 'tiktok' },
                    { title: 'Telegram', value: 'telegram' },
                    { title: 'Email', value: 'email' },
                    { title: 'Other', value: 'other' },
                ]
            }
        })
    ]
})