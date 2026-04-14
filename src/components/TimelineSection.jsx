export default function TimelineSection({title, text, children}) {
    return (
        <section className="section">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="section-content">
                {children}
            </div>
        </section>
    )
}