import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Mas from '@/components/Mas'
import Link from 'next/link'
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const postsToShow = posts.slice(0, 1)
  const totalPosts = posts.length
  const showNext = totalPosts > 1
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext
    },
    revalidate: 1
  }
}

const blog = ({ postsToShow, page, showNext }) => {
  console.log(postsToShow[0])
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <Mas title="The Cage Revisited" slogan="An inforgraph a day opens your mind on key issues"/>
      {postsToShow.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
      <Link href="/allpost">
        <button class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-full">
          See Previous Dates
        </button>
      </Link>
    </Container>
  )
}

export default blog
