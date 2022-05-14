import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'

const BlogPost = ({ post }) => {
  return (
        <article key={post.id} className="mb-10 md:mb-12 px-4 py-8 md:p-12 border border-gray-300">
          <header className="flex flex-col justify-between cursor-pointer text-black text-center">
            <time className="text-xl mb-2 font-mono">
              {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
            </time>
          </header>
          <main>
            <h2 className="text-2xl mb-2 text-center leading-6">
              {post.title}
            </h2>
            <div className='p-4 my-4 flex justify-center align-center bg-white'>
              <iframe
                src={post.image}
                width="100%"
                height={550}
              />
            </div>
            <p className="leading-8 text-gray-700 dark:text-gray-300">
              {post.summary}
              <Link href={`${BLOG.path}/${post.slug}`}>
                <a className='underline'>
                    ...More
                </a>
              </Link>
            </p>
          </main>
        </article>
  )
}

export default BlogPost
