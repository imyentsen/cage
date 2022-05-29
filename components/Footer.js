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
        !fullWidth ? 'max-w-2xl px-0' : 'px-4 md:px-24'
      }`}
    >
      <div className='py-2'>
        <Link href="/">
          <a aria-label={BLOG.title}>
            <Image src="favicon.svg" height={64} width={64} />
          </a>
        </Link>
        <p className="text-xl text-gray-900 font-title font-bold">
          Cage Open
        </p>
        <p className="text-base text-gray-900">
          A side-project by designer Ansin Lau <br/>
        </p>
      </div>
      <p className="text-base text-gray-900 py-2">
        <Link href="/about"><a className='underline hover:underline-offset-4'>About</a></Link>&nbsp;&nbsp;<Link href="/about-tw"><a className='underline hover:underline-offset-4'>關於</a></Link><br/>
        <a href="insta" className='underline hover:underline-offset-4'> Instagram</a>&nbsp;&nbsp;<a href="facebook" className='underline hover:underline-offset-4'>Facebook</a>
      </p>
      <p>
      © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
      </p>
    </div>
  )
}

export default Footer
