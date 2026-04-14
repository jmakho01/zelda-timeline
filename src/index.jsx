/* eslint-disable react-refresh/only-export-components */
import { createRoot } from "react-dom/client"
import { Header } from "./components/Header.jsx"
import { HeroSection } from "./components/HeroSection.jsx"
import { TimelineSection } from "./components/TimelineSection.jsx"
import { GameCard } from "./components/GameCard.jsx"
import { Footer } from "./components/Footer.jsx"

const root = createRoot(document.getElementById("root"))

function Page() {
    return (
        <>
            <Header />
            <HeroSection />
            <TimelineSection />
            <GameCard />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)