function RisultatiImpasto({ risultato, validazione }) {

  // Se non ci sono risultati ancora, non mostriamo nulla
  if (!risultato) return null

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-bold text-gray-700 mb-4">
        📋 Risultati
      </h2>

      {/* Avviso idratazione superata */}
      {!validazione.valida && (
        <div className="mb-4 p-4 bg-red-50 border border-red-300 rounded-lg">
          <p className="text-red-600 text-sm font-medium">
            {validazione.messaggio}
          </p>
        </div>
      )}

      {/* Griglia risultati */}
      <div className="grid grid-cols-2 gap-3">

        <div className="bg-orange-50 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Farina
          </p>
          <p className="text-3xl font-bold text-orange-500">
            {risultato.farina}
          </p>
          <p className="text-sm text-gray-400">grammi</p>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            💧 Caraffa
          </p>
          <p className="text-xs text-blue-400 mb-1">75% acqua totale</p>
          <p className="text-3xl font-bold text-blue-500">
            {risultato.acquaCaraffa}
          </p>
          <p className="text-sm text-gray-400">grammi</p>
        </div>

        <div className="bg-blue-100 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            🍼 Biberon
          </p>
          <p className="text-xs text-blue-400 mb-1">25% acqua totale</p>
          <p className="text-3xl font-bold text-blue-600">
            {risultato.acquaBiberon}
          </p>
          <p className="text-sm text-gray-400">grammi</p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Sale
          </p>
          <p className="text-3xl font-bold text-yellow-500">
            {risultato.sale}
          </p>
          <p className="text-sm text-gray-400">grammi</p>
        </div>

        <div className="bg-green-50 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Lievito fresco
          </p>
          <p className="text-3xl font-bold text-green-500">
            {risultato.lievito}
          </p>
          <p className="text-sm text-gray-400">grammi</p>
        </div>

      </div>

      {/* Peso totale */}
      <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center border-t border-gray-200">
        <p className="text-sm text-gray-500">Peso totale impasto</p>
        <p className="text-3xl font-bold text-gray-700">
          {risultato.pesoTotale}g
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {risultato.pesoTotale >= 1000
            ? `(${(risultato.pesoTotale / 1000).toFixed(2)} kg)`
            : ''}
        </p>
      </div>

      {/* Nota sul sale fisso */}
      <p className="text-xs text-gray-400 mt-3 text-center italic">
        * Sale fisso al 2.5% — Lievito fresco calcolato sulla tua formula
      </p>

    </div>
  )
}

export default RisultatiImpasto