import { DoughCalculator } from '@/components/DoughCalculator'
import { ThemeSelector } from '@/components/ThemeSelector/index'

function App() {
  return (
    <div className='min-h-screen bg-cyber-background-light dark:bg-cyber-background-dark transition-colors duration-200'>
      <div className='container mx-auto px-4 py-8'>
        <header className='flex justify-between items-center mb-8'>
          <h1 className='text-4xl font-cyber font-bold text-cyber-accent'>
            CyberDough
          </h1>
          <ThemeSelector />
        </header>

        <main>
          <DoughCalculator />
        </main>

        <footer className='mt-16 text-center text-sm text-cyber-text-light/60 dark:text-cyber-text-dark/60'>
          <p>Made with 🍕 in Night City</p>
        </footer>
      </div>
    </div>
  )
}

export default App
