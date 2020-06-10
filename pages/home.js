import Link from 'next/link';
import useSWR from 'swr';
import React from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json())

function Home() {
    const { data, error } = useSWR('/api/homeData', fetcher)
    if (data) console.log(data)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            <h1>{data.title}</h1>
            <Link href="/about"><button>About</button></Link>
        </div>
    )
}
// Home.getInitialProps = async (ctx) => {
    
// }
export default Home;