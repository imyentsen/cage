import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'

const BlogPost = ({ post }) => {
  return (
        <article key={post.id} className="mb-10 md:mb-12 px-4 py-8 md:p-12">
          <header className="flex flex-col justify-between cursor-pointer text-black text-center">
            <time className="text-2xl mb-2 font-mono">
              {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
            </time>
          </header>
          <main>
            <div className='p-4 my-4 flex justify-center align-center bg-white'>
              <iframe
                src={post.image}
                width="100%"
                height={550}
              />
            </div>
            <h2 className="text-2xl mb-2 text-center">
              {post.title}
            </h2>
            <p className="leading-8 text-gray-700 dark:text-gray-300">
              {post.summary}
            </p>
            <Link href={`${BLOG.path}/${post.slug}`}>
              <a>
                <p className="mt-2 leading-8 text-gray-700 dark:text-gray-300 underline text-center">
                  More Info
                </p>
              </a>
            </Link>
          </main>
        </article>
  )
}

export default BlogPost
