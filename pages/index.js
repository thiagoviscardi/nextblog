import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <h2>Olá mundo</h2>
            <Link href="/about">
                About link
            </Link>
            <div>
                <a href="/about">About a</a>
            </div>
            
        </div>
    )
}

export default Index;