import ContentPage from '@/components/ContentPage'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import img1_1 from '@/assets/content-images/1-1.jpg'
import img1_2 from '@/assets/content-images/1-2.jpg'
import img1_3 from '@/assets/content-images/1-3.jpg'
import img1_4 from '@/assets/content-images/1-4.jpg'

const subtemes = [
  {
    title: "Què és la IA generativa?",
    image: img1_1,
    content: (
      <>
        <p>La intel·ligència artificial generativa és un tipus d'IA capaç de crear contingut nou a partir de dades existents. A diferència d'altres sistemes que només analitzen informació, la IA generativa pot produir textos, imatges, música, codi o vídeos.</p>
        <p>Aquestes eines generen contingut que sembla creat per persones, però en realitat es basa en patrons apresos durant el seu entrenament. No copien informació concreta, sinó que construeixen respostes combinant el que han après de grans volums de dades.</p>
      </>
    )
  },
  {
    title: "Com funciona la IA generativa?",
    image: img1_2,
    content: (
      <>
        <p>La IA generativa funciona mitjançant models entrenats amb enormes quantitats de dades, que aprenen com s'estructura el llenguatge, les imatges o altres tipus de contingut.</p>
        <p>Quan una persona escriu un prompt, la IA prediu quina és la resposta més probable segons el context i les instruccions rebudes. No entén el significat del que diu com ho faria un humà, sinó que fa càlculs basats en probabilitats.</p>
        <p>Per això, petits canvis en el prompt poden generar resultats molt diferents, i la manera de formular la petició és clau.</p>
      </>
    )
  },
  {
    title: "Breu història de la IA generativa",
    image: img1_3,
    content: (
      <>
        <p>Els orígens de la IA es remunten a mitjan segle XX, però la IA generativa moderna ha experimentat un gran impuls en els darrers anys gràcies a l'augment de la potència de càlcul i la disponibilitat de dades.</p>
        <p>Inicialment, aquests sistemes tenien capacitats limitades, però amb l'arribada dels models de llenguatge i generació d'imatges s'ha aconseguit crear contingut cada cop més realista i complex.</p>
        <p>Avui dia, eines com ChatGPT, Gemini o DALL·E formen part del dia a dia de molts usuaris, consolidant la IA generativa com una tecnologia clau en l'àmbit educatiu, creatiu i professional.</p>
      </>
    )
  },
  {
    title: "Riscos i limitacions",
    image: img1_4,
    content: (
      <>
        <p>Tot i els seus avantatges, la IA generativa presenta riscos i limitacions. Pot generar informació incorrecta, inventar dades o reproduir biaixos presents en les dades d'entrenament.</p>
        <p>A més, el contingut generat pot semblar fiable encara que no ho sigui, fet que pot portar a errors si no es revisa críticament. La IA tampoc té criteri ètic propi ni capacitat de verificar la veracitat del que produeix.</p>
        <p>Per aquest motiu, és fonamental utilitzar-la de manera conscient, crítica i responsable, entenent-la com una eina de suport i no com una font absoluta de veritat.</p>
      </>
    )
  }
]

function HistoriaIAPage({ onComplete }) {
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
      if (onComplete) onComplete('historia-ia')
      navigate('/')
    } else {
      setCurrentSubtema(currentSubtema + 1)
    }
  }

  const subtema = subtemes[currentSubtema]

  return (
    <ContentPage
      categoryTitle="Què és la IA generativa?"
      progress={progress}
      mainTitle={subtema.title}
      subtitle=""
      content={<div className="subtema-content">{subtema.content}</div>}
      image={subtema.image}
      imageAlt="IA Generativa"
      onPrevious={handlePrevious}
      onNext={handleNext}
      showPrevious={true}
      showNext={true}
      nextLabel={currentSubtema === totalSubtemes - 1 ? "Finalitzar" : "Següent"}
    />
  )
}

export default HistoriaIAPage
