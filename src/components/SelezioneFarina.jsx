import { farine } from '../data/farine'

function SelezioneFarina({ farinaSelezionata, onCambioFarina }) {

  // Raggruppiamo le farine per marca, così nel menu
  // appaiono raggruppate e non in lista unica
  const marche = [...new Set(farine.map(f => f.marca))]

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-bold text-gray-700 mb-4">
        🌾 Selezione Farina
      </h2>

      <select
        className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={farinaSelezionata?.id || ''}
        onChange={e => {
          const id = parseInt(e.target.value)
          const farina = farine.find(f => f.id === id)
          onCambioFarina(farina)
        }}
      >
        <option value="">-- Scegli una farina --</option>
        {marche.map(marca => (
          <optgroup key={marca} label={marca}>
            {farine
              .filter(f => f.marca === marca)
              .map(f => (
                <option key={f.id} value={f.id}>
                  {f.nome} — Tipo {f.tipo} — W {f.W_min}
                  {f.W_min !== f.W_max ? `/${f.W_max}` : ''}
                </option>
              ))}
          </optgroup>
        ))}
      </select>

      {farinaSelezionata && (
        <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Tipo:</span> {farinaSelezionata.tipo}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Forza W:</span> {farinaSelezionata.W_min}
            {farinaSelezionata.W_min !== farinaSelezionata.W_max
              ? `–${farinaSelezionata.W_max}`
              : ''}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Idratazione max:</span>{' '}
            {farinaSelezionata.idratazione_max}%
          </p>
          <p className="text-sm text-gray-500 mt-2 italic">
            {farinaSelezionata.note}
          </p>
        </div>
      )}
    </div>
  )
}

export default SelezioneFarina