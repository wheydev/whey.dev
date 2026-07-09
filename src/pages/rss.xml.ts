import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE } from '../consts'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const changelog = await getCollection('changelog')
  const writing = await getCollection('writing', ({ data }) => !data.draft)

  const items = [
    ...changelog.map(entry => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.description,
      link: `/changelog#${entry.slug}`,
    })),
    ...writing.map(entry => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      description: entry.data.description,
      link: `/writing/${entry.slug}`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf())

  return rss({
    title: 'WheyDev',
    description: SITE.description,
    site: context.site!,
    items,
  })
}
