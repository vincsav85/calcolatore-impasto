import { useState } from 'react'
import { calcolaImpasto, verificaIdratazione } from './data/calcoli'
import SelezioneFarina from './components/SelezioneFarina'
import FormImpasto from './components/FormImpasto'
import RisultatiImpasto from './components/RisultatiImpasto'
import GraficoTorta from './components/GraficoTorta'

function App() {

  // useState è il sistema di React per memorizzare dati
  // che cambiano nel tempo. Ogni volta che uno stato cambia,
  // React aggiorna automaticamente l'interfaccia.

  // Farina selezionata dall'utente (inizialmente nessuna)
  const [farinaSelezionata, setFarinaSelezionata] = useState(null)

  // Valori del form con i dati di default
  const [valori, setValori] = useState({
    numeroPanetti: 6,
    pesoPanetto: 280,
    idratazione: 65,
    ore: 8,
    temperatura: 22
  })

  // Risultati del calcolo (inizialmente nulli)
  const [risultato, setRisultato] = useState(null)
  const [validazione, setValidazione] = useState({ valida: true })

  // Questa funzione viene chiamata quando l'utente preme Calcola
  const gestisciCalcolo = () => {
    const nuovaValidazione = verificaIdratazione(
      valori.idratazione,
      farinaSelezionata
    )
    setValidazione(nuovaValidazione)

    const nuovoRisultato = calcolaImpasto(
      valori.numeroPanetti,
      valori.pesoPanetto,
      valori.idratazione,
      valori.ore,
      valori.temperatura
    )
    setRisultato(nuovoRisultato)
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-orange-500 text-white py-6 px-4 shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">🍕 Calcolatore Impasto</h1>
          <p className="text-orange-100 mt-1 text-sm">
            Pizza e Pane — Lievito fresco con formula professionale
          </p>
        </div>
      </header>

      {/* Contenuto principale */}
      <main className="max-w-4xl mx-auto p-4 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* Colonna sinistra */}
        <div className="flex flex-col gap-6">
          <SelezioneFarina
            farinaSelezionata={farinaSelezionata}
            onCambioFarina={setFarinaSelezionata}
          />
          <FormImpasto
            valori={valori}
            onChange={setValori}
          />

          {/* Bottone Calcola */}
          <button
            onClick={gestisciCalcolo}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow transition-colors duration-200 text-lg"
          >
            Calcola Impasto
          </button>
        </div>

        {/* Colonna destra */}
        <div className="flex flex-col gap-6">
          <RisultatiImpasto
            risultato={risultato}
            validazione={validazione}
          />
          <GraficoTorta risultato={risultato} />
        </div>

      </main>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-xs py-8 mt-6">
        Calcolatore Impasto — Sale fisso 2.5% — Lievito fresco
      </footer>

    </div>
  )
}

export default App