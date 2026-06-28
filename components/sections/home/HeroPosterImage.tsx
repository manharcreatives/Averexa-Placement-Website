import Image from 'next/image'

export function HeroPosterImage() {
  return (
    <Image
      src="/assets/hero/first.png"
      alt=""
      fill
      priority
      className="object-cover object-center"
      sizes="100vw"
    />
  )
}
