import './HeroSection.css';

export default function HeroSection({ image }) {
    return (
        <main>
            <p>Each game in the Legend of Zelda series tells an important part of the history of Hyrule. 
            Trace their paths through the various eras in this comprehensive timeline.</p>
            <img src={image} alt="An image from the Breath of the Wild game"></img>
        </main>
    )
}