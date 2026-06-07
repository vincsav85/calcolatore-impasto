function FormImpasto({ valori, onChange }) {

  // Questa funzione gestisce il cambio di qualsiasi campo
  // 'campo' è il nome del campo (es. 'numeroPanetti')
  // 'valore' è il nuovo valore inserito dall'utente
  const gestisciCambio = (campo, valore) => {
    onChange({ ...valori, [campo]: Number(valore) })
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-bold text-gray-700 mb-4">
        ⚖️ Parametri Impasto
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {/* Numero panetti */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Numero panetti
          </label>
          <input
            type="number"
            min="1"
            max="100"
            value={valori.numeroPanetti}
            onChange={e => gestisciCambio('numeroPanetti', e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Peso panetto */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Peso panetto (g)
          </label>
          <input
            type="number"
            min="100"
            max="1000"
            value={valori.pesoPanetto}
            onChange={e => gestisciCambio('pesoPanetto', e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Idratazione */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Idratazione (%)
          </label>
          <input
            type="number"
            min="50"
            max="95"
            value={valori.idratazione}
            onChange={e => gestisciCambio('idratazione', e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Ore lievitazione */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Ore lievitazione
          </label>
          <input
            type="number"
            min="1"
            max="72"
            value={valori.ore}
            onChange={e => gestisciCambio('ore', e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Temperatura */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Temperatura ambiente (°C)
          </label>
          <input
            type="number"
            min="15"
            max="35"
            value={valori.temperatura}
            onChange={e => gestisciCambio('temperatura', e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

      </div>

      {/* Riepilogo peso totale */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg text-center">
        <p className="text-sm text-gray-500">Peso totale impasto</p>
        <p className="text-2xl font-bold text-orange-500">
          {valori.numeroPanetti * valori.pesoPanetto}g
        </p>
      </div>

    </div>
  )
}

export default FormImpasto