import BLOG from '@/blog.config'
import Vercel from '@/components/Vercel'
const Mas = ({ fullWidth }) => {
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 transition-all max-w-2xl px-4`}
    >
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
            <h1 className="text-2xl text-center">The Cage Revisited</h1>
            <h1 className="text-2xl text-center">An inforgraph a day opens your mind on key issues </h1>
        </div>
      </div>
      <hr className="border-gray-200 dark:border-gray-600" />
    </div>
  )
}

export default Mas
