import sanityClient from '@sanity/client';
import  imageUrlBuilder  from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'yhapd57z',
    dataset: 'production',
    apiVersion: '2022-06-17', // use current UTC date - see "specifying API version"!
    token: process.env.SANITY_TOKEN, // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
})

const imageUrl = imageUrlBuilder(client);
export const urlFor = (source) => imageUrl.image(source)

