import Link from 'next/link';



function Firstpost() {
    return (
        <>
            <h1>
                First Post
            </h1>
            <h1>
                Read <Link href="/posts/first-post">this page</Link>
            </h1>

            <h2>
                <Link href="/">Bach To Home</Link>
            </h2>
        </>
    )

}


export default Firstpost;