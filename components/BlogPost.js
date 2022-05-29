import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'

const BlogPost = ({ post }) => {
  return (
        <article key={post.id} className="mb-0 md:mb-8 px-0 pb-4 border-b border-white md:border md:border-post md:border-4 md:outline md:outline-1 md:outline-offset-0 md:outline-gray-400 bg-post">
          <header className="px-4 py-2 flex flex-row justify-between border-b border-white text-white">
            <time className="text-base font-mono uppercase">
              {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
            </time>
            <div className="text-base font-mono uppercase">
              {post.tags}
            </div>
          </header>
          <main>
            <div className='p-6 md:p-8'>
              <h2 className="text-lg md:text-2xl font-bold text-gray-900 font-title text-center leading-normal">
                {post.title}
              </h2>
            </div>
            <div className='px-4 flex justify-center align-center bg-white'>
              <iframe
                src={post.image}
                width="100%"
                height={500}
              />
            </div>
            <div className='p-4 flex flex-col md:flex-row justify-between '>
              <p className="py-1 md:p-2 leading-normal text-lg text-gray-900 md:flex-grow dark:text-gray-300">
                {post.summary}
              </p>
              <p className="py-1 md:p-2 leading-relaxed text-gray-900 md:flex-none md:w-56 dark:text-gray-300">
                {post.summarytw}
              </p>
            </div>
            <div className='py-2 h-14 flex'>
              <p className="text-center self-center">
                <Link href={`${BLOG.path}/${post.slug}`}>
                  <button className='border border-white hover:border-2 font-title font-strong text-white py-2 px-4'>
                      More
                  </button>
                </Link>
              </p>
            </div>
          </main>
        </article>
  )
}

export default BlogPost
