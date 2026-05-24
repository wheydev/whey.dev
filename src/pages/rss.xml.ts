import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE } from '../consts'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const entries = await getCollection('changelog')
  const sorted = entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

  return rss({
    title: 'WheyDev Changelog',
    description: SITE.description,
    site: context.site!,
    items: sorted.map(entry => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.description,
      link: `/changelog#${entry.slug}`,
    })),
  })
}
