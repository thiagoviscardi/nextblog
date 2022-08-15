import Link from 'next/link'

const About = () => {
    return (
        <div>
            <h2>Olá mundo</h2>
            <Link href="/">
                HOME WITHOUT RELOAD PAGE
            </Link>
            <div>
                <a href="/">HOME RELOADING PAaGE</a>
            </div>
        </div>
    )
}

export default About;