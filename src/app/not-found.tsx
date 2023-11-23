import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2 className='text-xl font-bold'>Not Found</h2>
      <p>Could not find the requested resource</p>
      <Link href="/" className='inline-block mt-4 text-blue-700 hover:underline'>Return Home</Link>
    </div>
  )
}