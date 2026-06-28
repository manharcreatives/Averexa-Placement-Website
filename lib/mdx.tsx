import Link from 'next/link'
import type { MDXComponents } from 'mdx/types'

/**
 * Styled element map for MDX article bodies. Keeps long-form content on-brand
 * without per-article styling. Consumed by `<MDXRemote components={...} />`.
 */
export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-12 mb-4 text-2xl font-semibold text-white scroll-mt-28" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-white scroll-mt-28" {...props} />
  ),
  p: (props) => <p className="mb-5 leading-relaxed text-white/70" {...props} />,
  ul: (props) => (
    <ul className="mb-5 ml-5 list-disc space-y-2 text-white/70 marker:text-emerald-500" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-5 ml-5 list-decimal space-y-2 text-white/70 marker:text-emerald-500" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  strong: (props) => <strong className="font-semibold text-white" {...props} />,
  em: (props) => <em className="italic text-white/80" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-emerald-500 pl-5 text-white/80 italic"
      {...props}
    />
  ),
  code: (props) => (
    <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm font-mono text-mint-200" {...props} />
  ),
  a: ({ href = '#', ...props }) => (
    <Link
      href={href}
      className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-white/10" />,
}
