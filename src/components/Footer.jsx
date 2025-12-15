import './Footer.css'

function Footer({ progress = 0 }) {
  return (
    <footer className="footer">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        <span className="progress-text">{progress}%</span>
      </div>
    </footer>
  )
}

export default Footer
