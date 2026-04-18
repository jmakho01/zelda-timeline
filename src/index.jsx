/* eslint-disable react-refresh/only-export-components */
import { createRoot } from "react-dom/client"
import Header from "./components/Header.jsx"
import HeroSection from "./components/HeroSection.jsx"
import TimelineSection from "./components/TimelineSection.jsx"
import TimelineBranch from "./components/TimelineBranch.jsx"
import GameCard from "./components/GameCard.jsx"
import Footer from "./components/Footer.jsx"
import './index.css';

const root = createRoot(document.getElementById("root"))

function Page() {
    return (
        <>
            <Header />
            <HeroSection 
                image="/images/Wild.png"
            />
            <TimelineSection 
                title="The Legend of the Goddesses and the Hero"
            >
                <GameCard 
                    title="Skyward Sword"
                    description="Armed with the Goddess Sword, Link leaves his home on the floating island 
                    of Skyloft to rescue his childhood friend, Zelda, who has been kidnapped."
                    image="https://zelda.nintendo.com/assets/img/timeline/skyward-sword/thumbnail_2x.jpg"
                    textColor="#ffcc00"
                />
                <GameCard 
                    title="The Minish Cap"
                    description="Link must shrink to the size of a bug to restore the Picori Sword 
                    and save Hyrule from the evil Vaati."
                    image="https://zelda.nintendo.com/assets/img/timeline/the-minish-cap/thumbnail_2x.jpg"
                    textColor="#ffcc00"
                />
                <GameCard 
                    title="Four Swords"
                    description="The evil sorcerer Vaati has risen again. Now Link must use the Four Sword 
                    to split into four heroes to defeat him and save Princess Zelda."
                    image="https://zelda.nintendo.com/assets/img/timeline/four-swords/thumbnail_2x.jpg"
                    textColor="#ffcc00"
                />

                <GameCard 
                    title="Ocarina of Time"
                    description="Ganondorf has claimed the Triforce and taken over Hyrule. Link must now 
                    summon the seven sages to imprison the villain and save the kingdom."
                    image="https://zelda.nintendo.com/assets/img/timeline/ocarina-of-time/thumbnail_2x.jpg"
                    textColor="#ffcc00"
                />

                <div className="timeline-split">

                    <TimelineBranch title="The Twilight Realm and the Legacy of the Hero">
                        <GameCard 
                            title="Majora's Mask"
                            description="Link must travel through time to stop the moon from wiping out the entire planet."
                            image="https://zelda.nintendo.com/assets/img/timeline/majoras-mask/thumbnail_2x.jpg"
                            textColor="#00ff33"
                        />
                        <GameCard 
                            title="Twilight Princess"
                            description="A humble ranch hand named Link is thrust into battle to save the Kingdom from being engulfed in darkness."
                            image="https://zelda.nintendo.com/assets/img/timeline/twilight-princess/thumbnail_2x.jpg"
                            textColor="#00ff33"
                        />
                        <GameCard 
                            title="Four Swords Adventures"
                            description="Four versions of Link must work together to defeat the mysterious Shadow Link."
                            image="https://zelda.nintendo.com/assets/img/timeline/four-swords-adventures/thumbnail_2x.jpg"
                            textColor="#00ff33"
                        />
                    </TimelineBranch>

                    <TimelineBranch title="The Hero of the Winds and a New World">
                        <GameCard 
                            title="The Wind Waker"
                            description="A young boy named Link must travel the seas to 
                            rescue his sister, Aryll, who’s been kidnapped by a giant bird."
                            image="https://zelda.nintendo.com/assets/img/timeline/the-wind-waker/thumbnail_2x.jpg"
                            textColor="#9900ff"
                        />
                        <GameCard 
                            title="Phantom Hourglass"
                            description="Link must find the necessary items to forge the 
                            Phantom Sword to defeat a life-eating monster named Bellum."
                            image="https://zelda.nintendo.com/assets/img/timeline/phantom-hourglass/thumbnail_2x.jpg"
                            textColor="#9900ff"
                        />
                        <GameCard 
                            title="Spirit Tracks"
                            description="Link and Princess Zelda set out on a train-bound 
                            adventure to uncover the mysterious disappearance of the Spirit Tracks."
                            image="https://zelda.nintendo.com/assets/img/timeline/spirit-tracks/thumbnail_2x.jpg"
                            textColor="#9900ff"
                        />
                    </TimelineBranch>

                    <TimelineBranch title="The Decline of Hyrule and the Last Hero">
                        <GameCard 
                            title="A Link to the Past"
                            description="Young Link is awakened by a telepathic message from Princess Zelda, who 
                            has been locked in the depths of Hyrule Castle by Agahnim, an evil wizard."
                            image="https://zelda.nintendo.com/assets/img/timeline/a-link-to-the-past/thumbnail_2x.jpg"
                            textColor="#ff7b00"
                        />
                        <GameCard 
                            title="Link's Awakening"
                            description="Stranded on Koholint Island, Link searches for eight musical instruments that 
                            will help him escape."
                            image="https://zelda.nintendo.com/assets/img/timeline/links-awakening/thumbnail_2x.jpg"
                            textColor="#ff7b00"
                        />
                        <GameCard 
                            title="Cracle of Ages and Oracle of Seasons"
                            description="Link is summoned to Hyrule Castle by the Triforce itself, beginning a parallel 
                            set of thrilling adventures."
                            image="https://zelda.nintendo.com/assets/img/timeline/oracle-of-ages-and-oracle-of-seasons/thumbnail_2x.jpg"
                            textColor="#ff7b00"
                        />
                        <GameCard 
                            title="A Link Between Worlds"
                            description="Link leaps into a 2D world to stop a mysterious villain named Yuga, who is 
                            turning people into paintings."
                            image="https://zelda.nintendo.com/assets/img/timeline/link-between-worlds/thumbnail_2x.jpg"
                            textColor="#ff7b00"
                        />
                        <GameCard 
                            title="Tri-Force Heroes"
                            description="Three heroes must unite to take on a witch known as The Lady, who has cast a 
                            curse on the princess of Hytopia."
                            image="https://zelda.nintendo.com/assets/img/timeline/triforce/thumbnail_2x.jpg"
                            textColor="#ff7b00"
                        />
                        <GameCard 
                            title="Echoes of Wisdom"
                            description="The people of Hyrule are being swallowed up by strange rifts, with Link and 
                            the King of Hyrule among the missing. Left alone, it's up to Princess Zelda to save her kingdom."
                            image="https://zelda.nintendo.com/assets/img/timeline/echoes-of-wisdom/thumbnail-2x.jpg"
                            textColor="#ff7b00"
                        />
                        <GameCard 
                            title="The Legend of Zelda"
                            description="A young boy named Link must travel to Death Mountain and defeat the pig-like monster, 
                            Ganon, to restore peace to the kingdom of Hyrule."
                            image="https://zelda.nintendo.com/assets/img/timeline/the-legend-of-zelda/thumbnail_2x.jpg"
                            textColor="#ff7b00"
                        />
                        <GameCard 
                            title="The Adventures of Link"
                            description="A teenage Link embarks on a journey to awaken the sleeping maiden, Zelda, and 
                            learn the origin of the Triforce."
                            image="https://zelda.nintendo.com/assets/img/timeline/the-adventure-of-link/thumbnail_2x.jpg"
                            textColor="#ff7b00"
                        />
                    </TimelineBranch>

                </div>
            </TimelineSection>
            <Footer />
        </>
    )
}

root.render(
    <Page />
)