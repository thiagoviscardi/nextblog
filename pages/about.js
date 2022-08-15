import Link from 'next/link'

const About = () => {
    return (
        <div>
            <h2>Olá mundo</h2>
            <Link href="/">
                HOME WITHOUT RELOAD PAGE
            </Link>
            <div>
                <a href="/">HOME RELOADING PAGE</a>
            </div>
        </div>
    )
}

export default About;