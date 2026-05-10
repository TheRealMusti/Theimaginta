import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
 return [
 {
 url: 'https://imaginta.com',
 lastModified: new Date(),
 },
 ];
}
