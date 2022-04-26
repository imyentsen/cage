const Masthead = ({ fullWidth }) => {
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
    <div className="my-4 text-sm leading-6">
      <div className="flex align-baseline justify-between flex-wrap text-2xl">
        <p>
        The Cage Revisited
        </p>

        <p>
        An inforgraph a day opens your mind on key issues 
        </p>
      </div>
    </div>
      <hr className="border-gray-200 dark:border-gray-600" />
    </div>
  )
}

export default Masthead
