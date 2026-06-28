import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { Icon } from '@/components/ui/Icon'
import { TextLinkButton } from '@/components/ui/TextLinkButton'
import type { BlogPost } from '@/types/blog'

type BlogArticleHeaderProps = {
  post: BlogPost
}

export function BlogArticleHeader({ post }: BlogArticleHeaderProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header className="flex flex-col gap-6">
      <div>
        <TextLinkButton label="← Back to all articles" href="/blog" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Badge variant="emerald">{post.category}</Badge>
          <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
            <Icon name="Clock" size="xs" aria-hidden="true" />
            {post.readingTime} min read
          </span>
        </div>

        <h1 className="text-balance">{post.title}</h1>

        <p className="body-lg text-white/60 max-w-2xl">{post.description}</p>

        <div className="flex items-center gap-3 pt-2 text-sm text-white/50">
          <span className="font-medium text-white/70">{post.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.publishedAt}>{formattedDate}</time>
        </div>
      </div>

      {post.coverImage && (
        <div className="relative mt-2 h-64 overflow-hidden rounded-2xl border border-white/8 sm:h-96">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt ?? post.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      )}
    </header>
  )
}
