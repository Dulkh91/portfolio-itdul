import {createClient } from '@sanity/client'
export const sanity = createClient({
    projectId: 'dx5mu94s',
    dataset: 'production',
    useCdn: true
})