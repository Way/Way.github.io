---
title: 'Agents sitzen mit am Tisch: Agentic Development'
language: de
description: 'AI-Agenten erledigen Aufgaben in Minuten, doch der neue Engpass ist die Kommunikation. Wie sieht ein Entwicklungsprozess aus, in dem Menschen und Agenten wirklich als Partner am gleichen Tisch sitzen?'
pubDate: '2026-02-01'
heroImage: '/blog-placeholder-2.jpg'
visualTheme: 'roundtable'
prompt: 'Wie verändert Agentic Coding die Rolle von Entwickler und die Kommunikation in Softwareteams? Welche neuen Prozesse und Tools brauchen wir, wenn Agenten als gleichberechtigte Akteure im Entwicklungsprozess auftreten?'
tags:
  [
    'AI',
    'Agentic Coding',
    'Softwareentwicklung',
    'Kommunikation',
    'Developer Experience',
  ]
---

Die letzten Monate fühlen sich für viele Entwickler gleich an:
AI-Agenten erledigen Aufgaben in Minuten, aber wir verbringen danach 10–20 Minuten damit, Tickets zu aktualisieren, Zusammenfassungen zu schreiben und dem Team zu erklären, was eigentlich passiert ist.

Wir haben die Ausführung beschleunigt – aber nicht die Kommunikation darüber.

Genau hier setzt der Wandel an:
Wir bewegen uns von klassischem „Builder-Work" hin zu einem Modus, in dem Entwickler zunehmend zu Übersetzer werden – zwischen Menschen, Systemen und jetzt auch Agenten.

In diesem Artikel möchte ich drei Dinge beleuchten:

1. Was Agentic Coding und agent-native Tools eigentlich sind
2. Warum Kommunikation und Informationsfluss der neue Engpass sind
3. Wie ein Entwicklungsprozess aussieht, in dem Menschen und Agenten wirklich „am gleichen Tisch sitzen"

---

## 1. Was ist Agentic Coding – und was ist anders als „nur" Code mit KI schreiben?

Die erste Welle von KI-Tools für Developer war relativ simpel:
Wir hatten Autocomplete, bessere Code-Vorschläge, vielleicht noch ein Chatfenster, das uns bei Bugs hilft.

Agentic Coding geht einen Schritt weiter:

- Ein Agent bekommt ein Ziel, nicht nur eine einzelne Frage
- Er plant eigenständig Teilschritte (Planung)
- Er führt diese Schritte aus (Ausführung)
- Er bewertet die Zwischenergebnisse und korrigiert sich (Reflexion)
- Er dokumentiert, was er getan hat (Erklärung)

Statt „Schreib mir eine Funktion in TypeScript" sagen wir plötzlich Dinge wie:

> „Baue ein Feature, mit dem Nutzer ihre Zahlungsmethode aktualisieren können, schreibe die Tests und öffne einen PR."

Der Agent entscheidet dann selbst:

- Welche Dateien geändert werden
- Welche Architektur sinnvoll ist
- Wie Tests aussehen
- Welche Commits notwendig sind

Damit verschiebt sich der Fokus:
Wir schreiben weniger Code im Detail und definieren mehr Ziele, Constraints und Qualitätskriterien.

---

## 2. Agent-native Tools: Mehr als nur KI-Add-ons

Viele aktuelle Tools hängen KI wie ein „Plugin" an bestehende Workflows:

- „Code mit KI" in der IDE
- „Schreib mir eine Zusammenfassung" in Jira
- „Erklär mir den PR" im Git-Diff

Agent-native Tools denken den Workflow von Anfang an mit Agenten im System:

- Aufgaben werden nicht nur Menschen, sondern auch Agenten zugewiesen
- Tickets, Events und Commits sind für beide „lesbar"
- Kontext (Code, Spezifikationen, Diskussionen) wird strukturiert für Agenten bereitgestellt
- Kommunikation ist nicht nachträglich, sondern integraler Teil des Prozesses

Entscheidend:
In agent-nativen Systemen ist der Agent **First-Class-Citizen**. Er ist kein „Zauber-Autocomplete", sondern ein gleichberechtigter Akteur im Projekt.

Das führt zur eigentlich spannenden Frage:

> Wenn Menschen und Agenten gleichberechtigt am Tisch sitzen – wie ändert sich dann unser Development-Prozess?

---

## 3. Kommunikation ist jetzt der Flaschenhals, nicht das Coding

Früher war der Engpass oft:
„Wie schnell bekommen wir dieses Feature gebaut?"

Mit Agenten, die Code generieren, Tests schreiben und PRs vorbereiten können, verlagert sich der Engpass:

- Anforderungen klar formulieren
- Entscheidungen nachvollziehbar halten
- Wissen im Team teilen
- Risiken und Nebenwirkungen verstehen

Ein typisches Muster, das viele gerade erleben:

1. Der Agent erledigt in 5 Minuten eine Aufgabe
2. Der/die Entwickler:in überprüft die Änderungen
3. Danach: Tickets aktualisieren, Slack-Updates schreiben, PR-Beschreibung überarbeiten, Auswirkungen erklären…

Die reine Umsetzung ist schnell.
Die Übersetzung in eine für das Team verständliche Form ist langsam.

Wir sind auf einmal:

- Übersetzer: Agent → Mensch
- Kurator: Was ist wichtig, was ist Rauschen?
- Projektmanager: Welche Agent-Tasks zahlen auf welches Ziel ein?

---

## 4. Mensch und Agent als Teammitglieder: Was bedeutet „am gleichen Tisch" konkret?

Wenn wir sagen „Menschen und Agenten sitzen am gleichen Tisch", meinen wir:

- Beide bekommen Aufgaben
- Beide produzieren Ergebnisse
- Beide beeinflussen Architektur und Codebase
- Beide müssen sich erklären können

Damit das funktioniert, braucht es drei Dinge:

### 4.1. Gemeinsame Sprache: Ziele, nicht nur Tickets

Klassische Tickets sind oft zu oberflächlich oder zu unstrukturiert für Agenten:

- „Fixe Bug im Checkout"
- „Refactor Auth-Service"

Für Menschen reicht das, weil wir uns den Kontext dazudenken.
Agenten brauchen dagegen viel explizitere Struktur:

- Kontext: Welche Module, welche Abhängigkeiten, relevante Dokumentation
- Ziel: Was soll sich konkret ändern? Aus Nutzersicht, aus Systemsicht
- Constraints: Sicherheitsanforderungen, Performance-Budget, Architektur-Guidelines
- Definition of Done: Welche Tests, welche Checks, welche Dokumentation

Agent-native Workflows erzwingen diese Klarheit – und das ist auch für Menschen ein Gewinn.

### 4.2. Gemeinsamer Kontext: Ein geteiltes Gedächtnis

In vielen Teams ist Wissen verteilt:

- Ein Teil steckt in Köpfen
- Ein Teil in Slack-Threads
- Ein Teil in alten Tickets
- Ein Teil in der Codebase

Agenten funktionieren nur gut, wenn sie **konsistenten, aktuellen Kontext** bekommen. Das zwingt uns, unser „Projektgedächtnis" aufzuräumen:

- Architekturentscheidungen dokumentieren (ADR, Architecture Decision Records)
- Wichtige Design-Entscheidungen zentral festhalten
- Features so beschreiben, dass sie referenzierbar sind
- Events und Änderungen strukturiert loggen

Das klingt trocken, ist aber der Kern:
Je besser unser gemeinsamer Kontext, desto weniger müssen wir manuell übersetzen.

### 4.3. Gemeinsame Verantwortung: Wer entscheidet was?

Wenn Agenten eigenständig arbeiten, verschiebt sich die Verantwortung:

- Agenten treffen Mikro-Entscheidungen (Implementierungsdetails)
- Menschen setzen Makro-Leitplanken (Architektur, Produktziele, Risiken)
- Die Verantwortung für das Gesamtverhalten bleibt beim Menschen

Das heißt für unseren Prozess:

- Wir brauchen klare Grenzen: Wo darf der Agent autonom handeln, wo nicht?
- Wir definieren explizit, was Review-Pflicht ist
- Wir etablieren Feedback-Loops: Der Agent lernt aus unseren Korrekturen

Menschen werden weniger „Code-Schreiber" und mehr „System-Designer" und „Risk Manager".

---

## 5. Kommunikation als First-Class-Citizen: Was muss sich konkret ändern?

Wenn wir Kommunikation und Informationsfluss ernst nehmen, reicht es nicht, nur „mehr zu dokumentieren". Stattdessen müssen wir Kommunikation **so gestalten, dass sie sowohl für Menschen als auch für Agenten funktioniert**.

Fünf konkrete Veränderungen:

### 5.1. Statusberichte werden strukturiert, nicht nur erzählt

Statt freier Text in Tickets/Slack:

- Klare Felder: „Was war das Ziel?", „Was wurde geändert?", „Welche Risiken gibt es?", „Was sind die nächsten Schritte?"
- Automatisch generierte Zusammenfassungen aus Code-Diffs, Tests und Logs
- Standardisierte Templates, die sowohl von Menschen als auch Agenten gelesen und geschrieben werden können

### 5.2. PR-Beschreibungen werden zur Schnittstelle

Pull Requests sind der Ort, an dem Entscheidungen konkret werden.

Agent-native PRs könnten beinhalten:

- Automatisch erzeugte, aber vom Menschen kuratierte Zusammenfassung
- Liste betroffener Komponenten und möglicher Side-Effects
- Verlinkung zu relevanten Tickets, Spezifikationen, ADRs
- „Rationale": Warum diese Lösung und nicht eine Alternative?

Das Ziel:
Review wird weniger Detektivarbeit und mehr Qualitätskontrolle.

### 5.3. Wissen ist nicht mehr „Doku", sondern API

Statt Wiki-Seiten, die niemand liest, denken wir Wissen als API:

- „Frag das System" statt „Frag die richtige Person"
- Architektur-Wissen, Produktentscheidungen und Business-Regeln sind so gespeichert, dass Agenten sie direkt nutzen können
- Entwickler interagieren über eine gemeinsame Schicht – Menschen und Agenten fragen dieselben „Knowledge-Endpunkte" an

Damit wird Wissenspflege nicht nur „nice to have", sondern produktivitätskritisch.

### 5.4. Kommunikation ist bidirektional

Heute reden Menschen über Agenten (z.B. „Was hat der Agent gemacht?").
In Zukunft reden Menschen **mit** Agenten – und Agenten miteinander.

Das bedeutet:

- Wir formulieren Aufgaben als Dialoge, nicht nur als Tickets
- Wir erwarten Erklärungen („Warum hast du X statt Y gemacht?")
- Wir korrigieren den Agenten im Gespräch – und diese Korrekturen fließen zurück ins System

### 5.5. Transparenz wird zur Voraussetzung

Wenn ein Agent großen Einfluss auf die Codebase hat, reicht es nicht, nur das Ergebnis zu sehen.

Wir brauchen:

- Einsicht in die Entscheidungswege: Welche Optionen wurden erwogen?
- Sichtbarkeit von Fehlversuchen, nicht nur vom finalen Code
- Nachvollziehbare Logs über Agent-Aktionen

Nicht, um „die KI zu kontrollieren", sondern um Vertrauen im Team aufzubauen.

---

## 6. Wie sieht ein agent-nativer Entwicklungsprozess aus?

Stark vereinfacht könnte ein solcher Prozess so aussehen:

1. **Ziele definieren**
   Produkt & Engineering definieren gemeinsam klar strukturierte Ziele (inkl. Constraints, Definition of Done).

2. **Aufgaben für Menschen und Agenten schneiden**
   Einige Tasks sind agent-geeignet (klar, repetitiv, gut beschreibbar), andere bleiben bewusst menschlich (Unsicherheit, Produktentscheidungen, UX-Trade-offs).

3. **Agenten orchestrieren, nicht nur auslösen**
   Entwickler planen, welche Agenten welche Teile übernehmen, wie sie zusammenspielen und wo menschliche Reviews eingebaut werden.

4. **Ausführung + automatische Dokumentation**
   Agenten führen Tasks aus, generieren automatisch technische und fachliche Zusammenfassungen, verlinken Kontext.

5. **Review als High-Leverage-Arbeit**
   Menschen prüfen, korrigieren, geben Feedback – nicht nur zum Code, sondern auch zur Qualität der Agentenentscheidungen.

6. **Lernschleifen**
   Das System lernt aus Korrekturen: Prompts, Policies und Wissensbasis werden verbessert.

7. **Transparente Kommunikation**
   Stakeholder sehen nicht nur „Done", sondern verstehen, was sich geändert hat, warum und mit welchen Nebenwirkungen – über eine Kommunikationsschicht, die Menschen und Agenten gemeinsam pflegen.

---

## 7. Was bedeutet das für die Rolle von Entwickler?

Die Rolle verschiebt sich von:

- „Ich schreibe Code, der Anforderungen umsetzt"

hin zu:

- „Ich definiere Systeme aus Menschen und Agenten, die zuverlässig Wert liefern"

Konkret entstehen neue Schwerpunkte:

- **Agent Orchestration:** Welche Agenten wofür, wie kombinieren, welche Grenzen setzen?
- **Context Engineering:** Wie bereite ich Kontext so auf, dass Agenten gute Entscheidungen treffen können?
- **Risk & Quality Management:** Wo sind die kritischsten Stellen? Wie stelle ich sicher, dass Agenten dort nicht unkontrolliert agieren?
- **Kommunikationsdesign:** Wie müssen Tickets, PRs, Doku und Event-Streams aussehen, damit Menschen und Agenten effizient zusammenarbeiten?

Die gute Nachricht:
Alles, was wir in den letzten Jahren über gute Architektur, sauberes API-Design und sinnvolle Doku gelernt haben, bleibt relevant – wird aber noch wichtiger.

---

## 8. Fazit: Agenten sind da – jetzt müssen wir unsere Kommunikationsschicht neu denken

Agentic Coding verändert nicht nur, **wie** Code geschrieben wird, sondern **wer** als Akteur im System auftritt.

Wenn Agenten mit uns am gleichen Tisch sitzen, reicht es nicht, sie als „schnelleren Junior-Entwickler" zu sehen. Wir brauchen:

- Agent-native Tools, in denen sie First-Class-Citizens sind
- Entwicklungsprozesse, die Kommunikation und Kontext als zentrales Element behandeln
- Eine Entwickler-Rolle, die weniger Tipparbeit und mehr Systemdenken ist

AI-Agenten shippen in Minuten.
Der neue Engpass ist, zu erklären, **was** passiert ist und **warum** – gegenüber Team, Stakeholdern und bald auch anderen Agenten.

Die Teams, die diesen Übersetzungs-Layer nicht nur manuell ausfüllen, sondern **systematisch und teilweise automatisiert** bauen, werden den größten Hebel aus Agentic Coding ziehen.

Denn am Ende geht es nicht darum, „mehr Code" zu produzieren, sondern schneller und sicherer Wert zu liefern – in einem Team, in dem Menschen und Agenten wirklich als Partner arbeiten.
