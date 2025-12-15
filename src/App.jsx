import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from '@/components/Header.jsx'
import CategoryCard from '@/components/CategoryCard.jsx'
import Footer from '@/components/Footer.jsx'
import HistoriaIAPage from '@/pages/HistoriaIAPage.jsx'
import ComDissenyarPromptsPage from '@/pages/ComDissenyarPromptsPage.jsx'
import FuncionsAvancadesPage from '@/pages/FuncionsAvancadesPage.jsx'

function App() {
  const [completedCategories, setCompletedCategories] = useState(() => {
    const saved = localStorage.getItem('completedCategories')
    return saved ? JSON.parse(saved) : {
      'historia-ia': false,
      'com-dissenyar-prompts': false,
      'funcions-avancades': false
    }
  })

  const handleCategoryComplete = (categoryId) => {
    setCompletedCategories(prev => {
      const newState = {
        ...prev,
        [categoryId]: true
      }
      localStorage.setItem('completedCategories', JSON.stringify(newState))
      return newState
    })
  }

  const completedCount = Object.values(completedCategories).filter(Boolean).length
  const totalCategories = 3
  const globalProgress = Math.round((completedCount / totalCategories) * 100)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <div className='title-section'>
              <h1 className='title'>Coneix la IA generativa</h1>
              <h2 className='description'>Descobreix amb Prompter què és la intel·ligència artificial i per a què serveix. Aprèn a dissenyar bons prompts per obtenir els millors resultats i descobreix les funcions avançades de la IA per als més curiosos.</h2>
            </div>
            <div className='card-section'>
              <CategoryCard title={'Què és la IA generativa?'} link="/historia-ia" completed={completedCategories['historia-ia']} />
              <CategoryCard title={'Com dissenyar prompts'} link="/com-dissenyar-prompts" completed={completedCategories['com-dissenyar-prompts']} />
              <CategoryCard title={'Funcions avançades de la IA'} link="/funcions-avancades" completed={completedCategories['funcions-avancades']} />
            </div>
            <Footer progress={globalProgress} />
          </>
        } />
        <Route path="/historia-ia" element={<HistoriaIAPage onComplete={handleCategoryComplete} />} />
        <Route path="/com-dissenyar-prompts" element={<ComDissenyarPromptsPage onComplete={handleCategoryComplete} />} />
        <Route path="/funcions-avancades" element={<FuncionsAvancadesPage onComplete={handleCategoryComplete} />} />
      </Routes>
    </Router>
  )
}

export default App
