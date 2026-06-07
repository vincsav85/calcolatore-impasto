import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

// Registriamo i moduli di Chart.js che useremo
// Chart.js funziona a moduli — importi solo quello che ti serve
ChartJS.register(ArcElement, Tooltip, Legend)

function GraficoTorta({ risultato }) {

  if (!risultato) return null

  const data = {
    labels: ['Farina', 'Acqua', 'Sale', 'Lievito'],
    datasets: [
      {
        data: [
          risultato.farina,
          risultato.acqua,
          risultato.sale,
          risultato.lievito
        ],
        backgroundColor: [
          '#f97316', // orange per farina
          '#3b82f6', // blue per acqua
          '#eab308', // yellow per sale
          '#22c55e', // green per lievito
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      }
    ]
  }

  const opzioni = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          // Personalizza il tooltip per mostrare i grammi
          label: (context) => {
            const valore = context.parsed
            const totale = risultato.pesoTotale
            const percentuale = ((valore / totale) * 100).toFixed(1)
            return ` ${context.label}: ${valore}g (${percentuale}%)`
          }
        }
      }
    }
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-bold text-gray-700 mb-4">
        🥧 Composizione Impasto
      </h2>
      <div className="max-w-xs mx-auto">
        <Pie data={data} options={opzioni} />
      </div>
    </div>
  )
}

export default GraficoTorta