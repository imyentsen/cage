import Link from 'next/link'

const TagItem = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`}>
    <a>
      <p className="font-mono mx-2 rounded-full px-2 py-1 border leading-none bg-post hover:bg-white border border-post text-sm border-gray-600 transition duration-100">
        {tag}
      </p>
    </a>
  </Link>
)

export default TagItem
