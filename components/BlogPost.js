import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'

const BlogPost = ({ post }) => {
  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <a>
        <article key={post.id} className="mb-10 md:mb-12 px-4 py-8 md:p-12">
          <header className="flex flex-col justify-between cursor-pointer text-black text-center">
            <time className="text-2xl mb-2">
              {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
            </time>
          </header>
          <main>
            <div className='p-4 my-4 flex justify-center align-center bg-white'>
              <iframe
                src={post.image}
                width="100%"
                height={400}
              />
            </div>
            <h2 className="text-2xl mb-2">
              {post.title}
            </h2>
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
