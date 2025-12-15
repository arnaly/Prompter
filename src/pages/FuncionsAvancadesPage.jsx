import ContentPage from '@/components/ContentPage'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import img3_1 from '@/assets/content-images/3-1.jpg'
import img3_2 from '@/assets/content-images/3-2.jpg'
import img3_3 from '@/assets/content-images/3-3.jpg'

const subtemes = [
  {
    title: "Afegir arxius als prompts",
    image: img3_1,
    content: (
      <>
        <p>Algunes eines permeten afegir arxius (com documents, imatges o PDFs) perquè la IA els pugui analitzar i utilitzar com a context.</p>
        <p>Això permet, per exemple:</p>
        <ul>
          <li>Resumir documents llargs</li>
          <li>Analitzar textos propis</li>
          <li>Extreure informació concreta d’un arxiu</li>
        </ul>
        <p>En aquests casos, el prompt no només és el text que escrius, sinó també el contingut de l’arxiu, que es converteix en part del context de la IA.</p>
      </>
    )
  },
  {
    title: "Mode agent o tasques guiades",
    image: img3_2,
    content: (
      <>
        <p>El mode agent permet que la IA executi una tasca seguint diversos passos, en lloc de donar una resposta única. L’usuari defineix un objectiu i la IA treballa de manera progressiva per assolir-lo.</p>
        <p>Aquesta funció s’utilitza per:</p>
        <ul>
          <li>Dividir problemes complexos en passos</li>
          <li>Planificar tasques o projectes</li>
          <li>Simular processos de treball</li>
        </ul>
        <p>Tot i això, és important supervisar el procés, ja que la IA pot prendre decisions incorrectes si no se li dona prou context.</p>
      </>
    )
  },
  {
    title: "Memòria i context prolongat",
    image: img3_3,
    content: (
      <>
        <p>Algunes eines poden recordar informació dins d’una conversa o projecte, mantenint el context al llarg del temps. Això permet interaccions més coherents i continuades.</p>
        <p>Gràcies a aquesta funció, la IA pot:</p>
        <ul>
          <li>Mantenir el fil d’una conversa llarga</li>
          <li>Adaptar-se a preferències indicades prèviament</li>
          <li>Treballar amb informació acumulada</li>
        </ul>
        <p>Aquesta memòria millora l’experiència, però també fa necessari controlar quina informació es comparteix.</p>
      </>
    )
  }
]

function FuncionsAvancadesPage({ onComplete }) {
  const navigate = useNavigate()
  const [currentSubtema, setCurrentSubtema] = useState(0)
  
  const totalSubtemes = subtemes.length
  const progress = Math.round((currentSubtema / totalSubtemes) * 100)
  
  const handlePrevious = () => {
    if (currentSubtema === 0) {
      navigate('/')
    } else {
      setCurrentSubtema(currentSubtema - 1)
    }
  }
  
  const handleNext = () => {
    if (currentSubtema === totalSubtemes - 1) {
      if (onComplete) onComplete('funcions-avancades')
      navigate('/')
    } else {
      setCurrentSubtema(currentSubtema + 1)
    }
  }

  const subtema = subtemes[currentSubtema]

  return (
    <ContentPage
      categoryTitle="Funcions avançades de la IA"
      progress={progress}
      mainTitle={subtema.title}
      subtitle=""
      content={<div className="subtema-content">{subtema.content}</div>}
      image={subtema.image}
      imageAlt="Funcions Avançades"
      onPrevious={handlePrevious}
      onNext={handleNext}
      showPrevious={true}
      showNext={true}
      nextLabel={currentSubtema === totalSubtemes - 1 ? "Finalitzar" : "Següent"}
    />
  )
}

export default FuncionsAvancadesPage
