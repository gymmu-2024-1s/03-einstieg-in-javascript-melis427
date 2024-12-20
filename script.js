import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]
    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
      //auch E ignorieren
    } else {
      result.push(currentElement)
    }

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const uppercaseletter = currentElement.toUpperCase() //Dadurch werden alle Buchstaben zu Grossbuchstaben
    result.push(uppercaseletter) //Fügt den Text in Grossbuchstaben zum Array hinzu
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []

  let count = 0 //Setzt "count" auf 0, um später "e" oder "E" zu zählen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      count = count + 1 //Erhöht den Wert von "count" um 1, wenn ein e gefunden wird
    } else if (currentElement === "E") {
      count++ //Erhöht den Zähler um 1, wenn ein grosses E gefunden wird
    }
  }
  return count //Gibt den Wert von "count" zurück
}

linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 65 && ascii <= 90) {
      // Wenn es zwischen 65 und 90 ist, ist es ein Grossbuchstabe.
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      // Wenn es zwischen 97 und 122 ist, ist es ein Kleinbuchstabe.
      result.push(currentElement)
    } else if (ascii === 32) {
      // Leerzeichen
      result.push(currentElement)
    }
  }

  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]
    if (currentElement === " " && nextElement === " ") {
      // Es sind 2 Leerzeichen hintereinander, wir ignoreren das Erste
    } else {
      result2.push(currentElement)
    }
  }
  // Nun können wir die Leerzeichen zählen
  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count++
    }
  }
  // Da es ein Wort mehr gibt, wie Leerzeichen, geben wir Leerzeichen zurück
  return count + 1
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  return /[A-Z]/.test(args) //Prüft, ob es mindestens einen Grossbuchstaben hat (in args). Es soll true oder false zurückgeben.
  //üperfrüfe ob mindestens ein Großbuchstabe vorhanden ist
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []
  let hasSonderzeichen = false //Setzt "hasSonderzeichen" auf false, um später nach Sonderzeichen in der Eingabe zu suchen
  // Schreibe eine Funktion, die testet ob ein Sonderzeichen vorkommt

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 33 && ascii <= 47) {
      //Überprüft, ob der ASCII-Code zwischen 33 und 47 liegt
      hasSonderzeichen = true //Wenn es ein Sonderzeichen hat, dann setzt man "hasSonderzeichen" auf true
    }
  }
  return hasSonderzeichen //Gibt an, ob es in der Eingabe Sonderzeichen gibt
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []
  //Sollte das Wort 'und' erkennen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "u") {
      //Überprüft, ob "u" dem currentElement entspricht
      if (input[i + 1] === "n") {
        //Prüft, ob das nächste Zeichen  nach dem currentElement ein "n" ist
        if (input[i + 2] === "d") {
          //Prüft, ob das nächste Zeichen ein d ist, um das "und" zu vervollständigen
          return true //Gibt true zurück, wenn "und" gefunden wurde
        }
      }
    }
  }
  return false //gibt false zurück, wenn "und" nicht gefunden wurde
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const result = []
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      result.push("3") // Ersetz jedes "e" durch "3" in der Eingabe
    } else {
      result.push(currentElement) // Behalte alle anderen Zeichen bei
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    count = count + 1 //Erhöht jeden Wert von "count" um 1
  }
  let has6 = false //Setzt die has6 auf false, um u überprüfen, ob die Länge der Eingabe 6 ist

  if (count === 6) {
    //Prüft, ob die Länge der Eingabe 6 ist
    has6 = true //Setzt "has6" auf true, wenn die Länge der Eingabe 6 ist
  }

  return has6 //Gibt true zurück, wenn es 6 Eingaben sind, false, wenn es keine 6 sind
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    //Teste, ob die Eingabe ein korrekter RGB Hexcode ist.
    if (input[i] === "#") {
      //Prüft, ob ein # in der Eingabe vorkommt
      return true //Gibt true zurück, wenn ein # in der Eingabe vorkommt
    } else {
      return false //Gibt false zurück, wenn ein # in der Eingabe nicht vorkommt
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args

  //Erstelle eine Variable um den ASCII-Code zu speichern.
  let asciiCode = 0 //Setzt asciiCode auf 0

  //Speichere den ASCII-Code vom ersten Zeichen
  asciiCode = input.charCodeAt(0) // Speichert den ASCII/Unicode-Wert des ersten Zeichens von 'input' in 'asciiCode'
  //Sollte 'null' zurückgeben wenn mehr wie ein Zeichen gegeben sind.
  if (input.length > 1) {
    //Prüft, ob die Eingabe mehr als ein Zeichen hat
    return null //Gibt null zurück, wenn die Eingabe mehr als ein Zeichen hat

    //Gibt den ASCII-Wert des ersten Zeichens zurück oder 'null', wenn die Eingabe leer ist.
  } else if (input.length === 0) {
    return null // Gibt null zurück, wenn die Eingabe leer ist
  }
  return asciiCode
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)
export function aufgabe12(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      return i //Gibt die Position des ersten "e" zurueck
    }
  }
  return -1 // or null
}

linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  let lastIndex = -1 //lasIndex wird auf -1 gesetzt, um zu kennzeichnen, dass kein "e" gefunden wurde

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      //Prüft, ob das Zeichen e ist
      lastIndex = i //Speichert die Position vom "e"
    }
  }
  return lastIndex //Gibt die Position des letzten "e" zurück.
}

linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  let count = 0 //Setzt count auf 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "e") {
      count++
      if (count === 3) {
        return i
      }
    }
  }
  return -1
}

linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []
  //Lese nur bis zum Leerzeichen ein
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      //Prüft, ob das currentElement ein Leerzeichen ist
      break //Bricht die Schleife ab, wenn es ein Leerzeichen hat
    }
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result = []
  //Lese die Eingabe bis zum Zeichen '$' als ersten Teil einer Liste ein, und den Rest als den zweiten Teil.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "$") {
      //Prüft, ob currentElement ein "$" ist
      break //Bricht ab, wenn es ein "$" ist
    }
    result.push(currentElement) //Fügt das currentElement der Liste hinzu
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totallist = []
  const currentlist = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Wenn man auf ein Leerzeichen trifft, dann schreibt man alles was man bisher gemacht hat in die Liste
    // in die totallist

    if (currentElement === " ") {
      totallist.push(currentlist.join("")) // 'currentlist.length = 0' leert das 'currentlist', um mit dem nächsten Wort zu beginnen.
      // Dies stellt sicher, dass 'currentlist' bei jedem neuen Wort von vorne beginnt.
      currentlist.length = 0
    } else {
      //Wenn das Zeichen kein Leerzeichen ist, dann wird es in "currendlist" hinzugefügt
      //das macht man, um die Zeichen des currentElemtents zu sammeln
      currentlist.push(currentElement)
    }
  }
  //Alles in die Liste schreiben was man bis am ende gelesen hat.
  totallist.push(currentlist.join(""))
  return totallist
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args

  // Wir können die Aufgabe 17 verwenden um eine Liste zu bekommen.
  const nameAndAge = aufgabe17(input)

  // Wir generieren unsere Ausgabeliste
  const result = []

  // Hier schreiben wir ganze Worte in die Liste, auch das ist möglich
  result.push(" Ich heisse ")

  // Wir setzen die Liste dann so zusammen, dass der Name und das Alter an der
  // richtigen Stelle eingefügt werden.
  result.push(nameAndAge[0])
  result.push(" und bin ")
  result.push(nameAndAge[1])
  result.push(" Jahre alt.")

  // Das Resultat immer als Text zurückgeben
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe18] ", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []
  //Jedes Zeichen in der Eingabe soll verdoppelt werden
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement) // Verdopple das Zeichen
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []

  let allGood = true //Setzt die allGood auf true, um anzunehmen, ob die Eingabe richtig ist

  //Prüfe ob nach jeden "."ein Leerschlag kommt
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      //Wenn das currentElement ein "." ist, wird das nächste Zeichen geprüft
      //Prüfe ob das nächste Zeichen ein Leerzeichen ist
      if (input[i + 1] === " ") {
        //do nothing
      } else {
        allGood = false //Wenn das nächste Zeichen kein Leerzeichen ist, dann wird allGood auf false gesetzt
      }
    }
  }
  return allGood //Gibt den Wert von allGood zurück
}

linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []
  //Kehre die Eingabe um
  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    result.push(currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []

  for (const currentElement of args) {
    if (currentElement === "") {
      result.push("_") // Ersetze jedes Zeichen durch "_"
    } else if (currentElement === "") {
      // do nothing
    } else {
      result.push(currentElement) //Behalte alle anderen Eingaben bei
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = [] //Leere Liste, in der wir das Resultat anhängen
  const firstelement = input[0] //Speichert das erste Zeichen von "input". Es wird später am Anfang und Ende des Ergebnisses eingefügt.

  // Hänge firstelement an die Liste an
  result.push(firstelement)

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }

  result.push(firstelement) //Schreibe das erste Zeichen am Ende

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  // Vertausche das erste und das letzte Zeichen
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      //Prüft, ob der Wert von i gleich 0 ist
      result.push(input[input.length - 1])
    } else if (i === input.length - 1) {
      //Prüft, ob der Wert von i gleich input.length - 1 ist
      result.push(input[0])
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []
  //Lösche die mittleren Zeichen in der Eingabe
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === Math.floor(input.length / 2)) {
      //rundet eine Zahl auf die nächste ganze Zahl
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(args) {
  const input = args
  const result = []
  //Vertausche die beiden ersten Eingaben und sortiere sie alphanumerisch
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(input[1]) //Fügt das zweite Element der Liste hinzu
    } else if (i === 1) {
      //Prüft, ob der Index gleich 1 ist
      result.push(input[0]) //Fügt das erste Element des Arrays der Liste hinzu
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args
  const result = []
  //Teste, ob eine Eingabe eine Zahl ist
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (isNaN(currentElement)) {
      //Prüft, ob der Wert von currentElement keine gültige Zahl ist. Wenn es keine gültige Zahl ist, dann gibt es true zurück. Wenn es aber eine gültige Zahl ist, dann gibt es false zurück
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(args) {
  const input = args
  const result = []
  //Teste, ob 2 Zahlen von einem Leerzeichen getrennt sind
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      result.push(currentElement)
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)

export function aufgabe29(args) {
  //Ersetze alle Leerzeichen durch ein "%" und alle Vokale durch ein "#"
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      result.push("%")
    } else if (currentElement === "a") {
      result.push("#")
    } else if (currentElement === "e") {
      result.push("#")
    } else if (currentElement === "i") {
      result.push("#")
    } else if (currentElement === "o") {
      result.push("#")
    } else if (currentElement === "u") {
      result.push("#")
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe29]", aufgabe29)

export function Bubblesort(args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1] // Speichert den Wert aus der Liste an der Position i+1 in der Variablen tmp
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")

  return result
}

linkupExerciseHandler("[data-click=Bubblesort]", Bubblesort)

export function Selectionsort(args) {
  const input = args.split("")
  const result = []

  let n = input.length
  for (let i = 0; i < n - 1; i++) {
    // Assume the current position holds
    // the minimum element
    let min_idx = i

    // Iterate through the unsorted portion
    // to find the actual minimum
    for (let j = i + 1; j < n; j++) {
      if (input[j] < input[min_idx]) {
        // Update min_idx if a smaller element is found
        min_idx = j
      }
    }

    // Move minimum element to its
    // correct position
    let temp = input[i] //Der Wert an der Stelle i wird in der Variablen temp gespeichert, damit wir ihn nicht verlieren.
    input[i] = input[min_idx] //Der Wert von der Stelle min_idx wird an die Stelle i gesetzt.
    input[min_idx] = temp //Der Wert von der Variablen temp wird an der Stelle min_idx gesetzt.
  }

  return input
}
linkupExerciseHandler("[data-click=Selectionsort]", Selectionsort)

export function aufgabe30(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "s") {
      return i //Gibt die Position des ersten "s" zurueck
    }
  }
  return -1 //Falls kein "t" gefunden wurde, dann gibt es -1 zurück
}

linkupExerciseHandler("[data-click=aufgabe30]", aufgabe30)

export function aufgabe31(args) {
  let summe = 0
  let currentZahl = ""
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (
      currentElement.charCodeAt(0) >= 48 &&
      currentElement.charCodeAt(0) <= 57
    ) {
      currentZahl += currentElement
    } else if (currentZahl !== "") {
      summe += parseInt(currentZahl)
      currentZahl = ""
    }
  }

  if (currentZahl !== "") {
    summe += parseInt(currentZahl)
  }

  return summe
}
linkupExerciseHandler("[data-click=aufgabe31]", aufgabe31)

export function Bucketsort(args) {
  const text = args
  const list = text.split("") // Wandelt den Text in eine Liste um

  // 256 Buckets für alle ASCII-Zeichen (von 0 bis 255)
  let buckets = new Array(256).fill().map(() => [])

  // Elemente in die Buckets verteilen
  for (let i = 0; i < list.length; i++) {
    let index = list[i].charCodeAt(0) // Die ASCII-Werte der Zeichen
    buckets[index].push(list[i])
  }

  // Eimer sortieren und zusammenführen
  return buckets
    .map((bucket) => bucket.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))) // Sortiere jedes Bucket
    .flat() // Alle sortierten Buckets werden flach zusammengeführt
    .join("") // Als String zusammenfügen
}

linkupExerciseHandler("[data-click=Bucketsort]", Bucketsort)
