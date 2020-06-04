import Link from 'next/link';
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

function Home() {
    const { data, error } = useSWR('/api/homeData', fetcher)
    if (data) console.log(data)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <h1>Home</h1>
            <Link href="/about"><button>About</button></Link>
        </div>
    )
}

export default Home;