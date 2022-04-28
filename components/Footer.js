import BLOG from '@/blog.config'
import Image from 'next/image'
import { useLocale } from '@/lib/locale'
import Link from 'next/link'

const FooterBar = () => {
  const locale = useLocale()
  const links = [
    { id: 0, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout },
    { id: 1, name: locale.NAV.SEARCH, to: '/search', show: true }
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-col">
        {links.map(
          link =>
            link.show && (
              <li
                key={link.id}
                className="block text-black dark:text-gray-50 nav"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}

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
      <p className="text-xl text-gray-900 header-name">
        The Cage Revisited
      </p>
      <FooterBar />
      <p>
      © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
      </p>
    </div>
  )
}

export default Footer
