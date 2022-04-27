import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Mas from '@/components/Mas'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const postsToShow = posts.slice(0, BLOG.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > BLOG.postsPerPage
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
      <div className='text-3xl my-8'>
        <p>{formatDate(postsToShow[0].date?.start_date || postsToShow[0].createdTime, BLOG.lang)}</p>
        <p>{postsToShow[0].title}</p>
        <p className="md:block leading-8 text-gray-700">{postsToShow[0].summary}</p>
      </div>
      {postsToShow.slice(1).map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
      {showNext && <Pagination page={page} showNext={showNext} />}
    </Container>
  )
}

export default blog
