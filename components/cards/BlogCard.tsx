'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

type BlogCardProps = {
  slug: string
  title: string
  excerpt: string
  category: string
  coverImage?: string
  readTime?: number
  publishedAt: string
  className?: string
}

export function BlogCard({
  slug,
  title,
  excerpt,
  category,
  coverImage,
  readTime,
  publishedAt,
  className,
}: BlogCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn('group flex flex-col rounded-xl overflow-hidden glass border border-white/8', className)}
    >
      <Link href={`/blog/${slug}`} className="flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl">
        {coverImage && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}

        <div className="flex flex-col gap-3 p-6 flex-1">
          <div className="flex items-center gap-3">
            <Badge variant="emerald">{category}</Badge>
            {readTime && (
              <span className="text-xs text-white/40">{readTime} min read</span>
            )}
          </div>

          <h3 className="text-lg font-semibold text-white leading-snug line-clamp-2 group-hover:text-emerald-400 transition-colors duration-200">
            {title}
          </h3>

          <p className="body-sm text-white/60 leading-relaxed line-clamp-3 flex-1">{excerpt}</p>

          <time dateTime={publishedAt} className="text-xs text-white/40 mt-auto">
            {formattedDate}
          </time>
        </div>
      </Link>
    </motion.article>
  )
}
