import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'
import Image from 'next/image'

const BlogPost = ({ post }) => {
  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <a>
        <article key={post.id} className="mb-6 md:mb-8">
          <header className="flex flex-col justify-between md:flex-row md:items-baseline">
            <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
              {post.title}
            </h2>
            <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
              {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
            </time>
          </header>
          <main>
            <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
              {post.summary}
            </p>
            <p>{post.image.getSignedFileUrls}</p>
            <Image
              src={post.image.getSignedFileUrls}
              alt="Picture of the author"
              // width={500} automatically provided
              // height={500} automatically provided
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </main>
        </article>
      </a>
    </Link>
  )
}

export default BlogPost
