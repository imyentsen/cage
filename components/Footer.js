import BLOG from '@/blog.config'
import Image from 'next/image'
import Link from 'next/link'

const Footer = ({ fullWidth }) => {
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <div
      className={`my-16 mx-auto w-full text-gray-500 dark:text-gray-400 transition-all text-center ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <Link href="/">
        <a aria-label={BLOG.title}>
          <Image src="favicon.svg" height={64} width={64} />
        </a>
      </Link>
      <p className="text-xl text-gray-900">
        Cage Open
      </p>
      <p className="text-base text-gray-900">
        A side-project by designer Ansin Lau. <br/>Read more about <Link href="/about">the idea</Link>, or stay in tuned with <a href="insta"> Instagram</a> or <a href="facebook"> Facebook</a> 
      </p>
      <p>
      © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
      </p>
    </div>
  )
}

export default Footer
