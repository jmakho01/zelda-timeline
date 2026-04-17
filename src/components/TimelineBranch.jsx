export default function TimelineBranch({ title, children }) {
    return (
        <div className="timeline-branch">
            <h3>{title}</h3>
            <div className="branch-content">
                {children}
            </div>
        </div>
    )
}