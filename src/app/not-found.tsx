import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2 className='text-xl font-bold'>Not Found</h2>
      <p>Could not find the requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}