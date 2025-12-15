import ContentPage from '@/components/ContentPage'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import img2_1 from '@/assets/content-images/2-1.jpg'
import img2_2 from '@/assets/content-images/2-2.jpg'
import img2_3 from '@/assets/content-images/2-3.jpg'

const subtemes = [
  {
    title: "Què és un prompt?",
    image: img2_1,
    content: (
      <>
        <p>Un prompt és la instrucció, pregunta o indicació que una persona dona a una eina d’intel·ligència artificial generativa perquè generi una resposta. Pot ser una frase curta, una pregunta concreta o un text més llarg amb diversos detalls.</p>
        <p>El prompt és el punt de partida de tota interacció amb la IA. Si la instrucció és ambigua o poc clara, la resposta també ho serà. En canvi, un prompt ben formulat ajuda la IA a entendre millor què esperem d’ella.</p>
        <p>En resum, el prompt actua com un pont de comunicació entre la persona i la IA, i és clau per obtenir resultats útils i coherents.</p>
      </>
    )
  },
  {
    title: "Què és el disseny de prompts?",
    image: img2_2,
    content: (
      <>
        <p>El disseny de prompts és el procés de pensar i estructurar com formulem una instrucció perquè la IA respongui de la manera més adequada possible. No es tracta només de què demanem, sinó de com ho demanem.</p>
        <p>Dissenyar un bon prompt implica definir l’objectiu, aportar context, indicar el format desitjat i, si cal, establir restriccions. Aquesta pràctica ajuda a reduir errors, millorar la precisió i fer que les respostes siguin més rellevants.</p>
        <p>Per això, el disseny de prompts s’ha convertit en una habilitat bàsica per utilitzar la IA de manera eficient i conscient.</p>
      </>
    )
  },
  {
    title: "Consells bàsics per escriure bons prompts",
    image: img2_3,
    content: (
      <>
        <p>Encara que no existeixi un prompt perfecte, hi ha algunes bones pràctiques bàsiques que poden millorar molt els resultats:</p>
        <ul>
          <li>Escriu amb claredat i evita frases ambigües</li>
          <li>Indica quin és l’objectiu de la resposta</li>
          <li>Afegeix context quan sigui necessari</li>
          <li>Especifica el format que vols (llista, resum, text curt, etc.)</li>
          <li>Revisa i ajusta el prompt si el resultat no és l’esperat</li>
        </ul>
        <p>Entendre el prompting com un procés iteratiu —provar, revisar i millorar— ajuda a obtenir respostes cada vegada més ajustades al que necessitem.</p>
      </>
    )
  }
]

function ComDissenyarPromptsPage({ onComplete }) {
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
      if (onComplete) onComplete('com-dissenyar-prompts')
      navigate('/')
    } else {
      setCurrentSubtema(currentSubtema + 1)
    }
  }

  const subtema = subtemes[currentSubtema]

  return (
    <ContentPage
      categoryTitle="Com dissenyar prompts"
      progress={progress}
      mainTitle={subtema.title}
      subtitle=""
      content={<div className="subtema-content">{subtema.content}</div>}
      image={subtema.image}
      imageAlt="Dissenyar Prompts"
      onPrevious={handlePrevious}
      onNext={handleNext}
      showPrevious={true}
      showNext={true}
      nextLabel={currentSubtema === totalSubtemes - 1 ? "Finalitzar" : "Següent"}
    />
  )
}

export default ComDissenyarPromptsPage
