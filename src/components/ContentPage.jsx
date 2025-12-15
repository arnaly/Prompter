import './ContentPage.css'

function ContentPage({ 
  categoryTitle,
  progress = 0,
  mainTitle,
  subtitle,
  content,
  image,
  imageAlt,
  onPrevious,
  onNext,
  showPrevious = true,
  showNext = true,
  nextLabel = "Següent"
}) {
  return (
    <div className="content-page">
      {/* Barra de progreso */}
      <div className="progress-section">
        <div className="progress-header">
          <span className="progress-title">{categoryTitle}</span>
          <span className="progress-percentage">{progress}%</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="content-section">
        <h1 className="main-title">{mainTitle}</h1>
        
        <div className="content-body">
          <div className="text-content">
            {subtitle && <h2 className="subtitle">{subtitle}</h2>}
            {typeof content === 'string' ? (
              <p className="content-text">{content}</p>
            ) : (
              content
            )}
          </div>
          
          {image && (
            <div className="image-content">
              <img src={image} alt={imageAlt} className="content-image" />
            </div>
          )}
        </div>

        {/* Navegación */}
        <div className="navigation">
          {showPrevious && (
            <button onClick={onPrevious} className="nav-button prev-button">
              <span className="arrow">←</span> Anterior
            </button>
          )}
          {showNext && (
            <button onClick={onNext} className="nav-button next-button">
              {nextLabel} <span className="arrow">→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContentPage
