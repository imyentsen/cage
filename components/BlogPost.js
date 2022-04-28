import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'
import Image from 'next/image'

const BlogPost = ({ post }) => {
  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <a>
        <article key={post.id} className="mb-10 md:mb-12 p-2 md:p-12 bg-gray-100 border border-gray-700">
          <header className="flex flex-col justify-between cursor-pointer text-black text-center">
            <time className="text-2xl mb-2">
              {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
            </time>
            <h2 className="text-2xl mb-2">
              {post.title}
            </h2>
          </header>
          <main>
            <div className='p-4 my-4 flex justify-center bg-white'>
              <Image
                src={post.image}
                alt="infograph of the day"
                width={500}
                height={500}
              />
            </div>
            <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
              {post.summary}
            </p>
          </main>
        </article>
      </a>
    </Link>
  )
}

export default BlogPost
