// Percentuale sale fissa come concordato
const PERCENTUALE_SALE = 2.5

// FUNZIONE PRINCIPALE
// Riceve tutti i parametri e restituisce i grammi di ogni ingrediente
export function calcolaImpasto(numeroPanetti, pesoPanetto, idratazione, ore, temperatura) {

  // PASSO 1 — Peso totale dell'impasto
  const pesoTotale = numeroPanetti * pesoPanetto

  // PASSO 2 — Ricaviamo il peso della farina
  // Usiamo la formula inversa del baker's percentage:
  // pesoTotale = farina * (1 + idratazione/100 + sale/100)
  // quindi: farina = pesoTotale / (1 + idratazione/100 + sale/100)
  const farina = pesoTotale / (1 + idratazione / 100 + PERCENTUALE_SALE / 100)

  // PASSO 3 — Acqua
  const acqua = farina * (idratazione / 100)

  // PASSO 4 — Sale
  const sale = farina * (PERCENTUALE_SALE / 100)

  // PASSO 5 — Lievito con la tua formula
  // Lievito = (farina * 23) / (idratazione * ore * temperatura)
  const lievito = (farina * 23) / (idratazione * ore * temperatura)

  // Arrotondiamo tutto a 1 decimale per leggibilità
  return {
    pesoTotale: Math.round(pesoTotale),
    farina: Math.round(farina),
    acqua: Math.round(acqua),
    acquaCaraffa: Math.round(acqua * 0.75),
    acquaBiberon: Math.round(acqua * 0.25),
    sale: parseFloat(sale.toFixed(1)),
    lievito: parseFloat(lievito.toFixed(2)),
  }
}

// FUNZIONE DI VALIDAZIONE
// Controlla se l'idratazione supera il limite della farina scelta
export function verificaIdratazione(idratazione, farinaSelezionata) {
  if (!farinaSelezionata) return { valida: true }

  if (idratazione > farinaSelezionata.idratazione_max) {
    return {
      valida: false,
      messaggio: `⚠️ Attenzione! Hai impostato un'idratazione del ${idratazione}% ma la ${farinaSelezionata.marca} ${farinaSelezionata.nome} supporta un massimo del ${farinaSelezionata.idratazione_max}%. L'impasto potrebbe non riuscire.`
    }
  }

  return { valida: true }
}