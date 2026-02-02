---
title: 'Agentic Development: Agents sitzen mit am Tisch'
language: de
description: 'AI-Agenten erledigen Aufgaben in Minuten, doch der neue Engpass ist die Kommunikation. Wie sieht ein Entwicklungsprozess aus, in dem Menschen und Agenten als Partner am gleichen Tisch sitzen – und Agenten gleichzeitig als Integration Layer über Code, Logs, Infra und Tickets agieren?'
pubDate: '2026-02-01'
visualTheme: 'roundtable'
prompt: 'Wie verändert Agentic Coding die Rolle von Entwickler und die Kommunikation in Softwareteams – gerade jetzt, wo LLMs nicht nur Code schreiben, sondern den gesamten Entwicklungszyklus vertikal integrieren? Welche neuen Prozesse und Tools brauchen wir, wenn Agenten als gleichberechtigte Akteure im Entwicklungsprozess auftreten und als Integration Layer über Logs, Code, Infra und Tickets hinweg agieren?'
tags:
  [
    'AI',
    'Agentic Coding',
    'Vertical Integration',
    'Softwareentwicklung',
    'Kommunikation',
    'Developer Experience',
    'MCP',
  ]
---

Die letzten Monate fühlen sich für viele Entwickler ähnlich an:
AI-Agenten erledigen Aufgaben in Minuten – aber wir verbringen danach 10–20 Minuten damit, Tickets zu aktualisieren, Zusammenfassungen zu schreiben und dem Team zu erklären, was eigentlich passiert ist.

Wir haben die Ausführung beschleunigt – aber nicht die Kommunikation darüber.

Parallel dazu passiert noch etwas Zweites:
Tools wie Claude Code, Cursor & Co. verbinden sich direkt mit Logs, Kubernetes, Git-History, APIs und mehreren Repositories. Nicht mehr wir halten diese Systeme manuell zusammen – diese Rolle übernimmt zunehmend ein Agent. Adam Ever-Hadani beschreibt das als **„Vertical Integration of Development"**: Das LLM wird zur zentralen Orchestrierungs- und Integrationsschicht des gesamten Entwicklungsprozesses, nicht nur zum besseren Autocomplete. (Quelle: [The Vertical Integration of Development](https://adamhadani.github.io/software-development/ai/llm/2026/01/27/vertical-integration-of-development.html))

Beides zusammen erzeugt den eigentlichen Bruch:
Wir bewegen uns von klassischem „Builder-Work" hin zu einem Modus, in dem Entwickler zu Übersetzer, Orchestrator und System-Designer werden – zwischen Menschen, Systemen und Agenten, die tief in unsere Toolchain integriert sind.

In diesem Artikel möchte ich vier Dinge beleuchten:

1. Was Agentic Coding und agent-native Tools sind – im Kontext der „Vertical Integration of Development"
2. Warum Kommunikation und Informationsfluss der neue Engpass sind, obwohl die Ausführung vertikal integriert ist
3. Wie ein Entwicklungsprozess aussieht, in dem Menschen und Agenten wirklich „am gleichen Tisch sitzen" – von Zielen bis zu Logs
4. Was das konkret für die Rolle von Entwickler bedeutet

---

## 1. Was ist Agentic Coding – und was ist anders als „nur" Code mit KI schreiben?

Die erste Welle von KI-Tools für Developer war relativ simpel:
Autocomplete, bessere Code-Vorschläge, ein Chatfenster für Bugs.

Agentic Coding geht einen Schritt weiter:

- Ein Agent bekommt ein Ziel, nicht nur eine einzelne Frage.
- Er plant eigenständig Teilschritte (Planung).
- Er führt diese Schritte aus (Ausführung).
- Er bewertet Zwischenergebnisse und korrigiert sich (Reflexion).
- Er dokumentiert, was er getan hat (Erklärung).

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

## 2. Von Agentic Coding zur „Vertical Integration of Development"

Agentic Coding lässt Agenten Aufgaben autonom ausführen. Die aktuelle Generation von LLM-Tools geht aber noch weiter: Sie integriert den gesamten Entwicklungs-Stack vertikal.

Traditionell war Softwareentwicklung „horizontal" organisiert:

- IDE für Code
- Grafana/Datadog für Logs und Metriken
- Browser für Doku
- Slack für Kommunikation
- CI/CD-UI für Deployments

Jedes Tool war ein Silo – und **wir waren die Integrationsschicht**:
Copy-Paste von Logs in Chat, manuelles Durchklicken von Dashboards, Kontext im Kopf zusammenhalten.

Mit vertikal integrierten LLM-Setups verschiebt sich das:

- Das LLM kann direkt Logs aus Grafana abfragen.
- Es sieht Kubernetes-Cluster-Status.
- Es liest mehrere Codebasen gleichzeitig.
- Es schlägt in der Git-History nach.
- Es callt Live-APIs.
- Es verbindet das alles zu einer konsistenten Diagnose oder Lösung.

Der Agent ist nicht mehr nur „jemand, der Code schreibt", sondern ein System, das **über die gesamte Toolchain hinweg operiert**. Das ist Agentic Coding plus Integration.

Konkret ermöglichen das u.a.:

- Protokolle wie **Model Context Protocol (MCP)**, die standardisieren, wie LLMs auf externe Tools (Logs, Monitoring, DBs, Tickets) zugreifen.
- **Skills/Plugins**, die organisationseigene Abläufe und Domänenwissen als wiederverwendbare Bausteine kodieren.
- **Rules/Memory (z.B. CLAUDE.md)**, die Konventionen, Architektur-Guidelines und Coding-Standards persistent machen und für Agenten abfragbar halten.

Aus Sicht dieses Artikels heißt das:
Agenten sind nicht nur zusätzliche Akteure am Tisch – sie sitzen **in der Mitte des Tisches**, an der Stelle, an der früher unser mentaler „Integration Layer" war.

---

## 3. Agent-native Tools: Mehr als nur KI-Add-ons

Viele aktuelle Tools hängen KI wie ein „Plugin" an bestehende Workflows:

- „Code mit KI" in der IDE
- „Schreib mir eine Zusammenfassung" in Jira
- „Erklär mir den PR" im Git-Diff

Agent-native Tools denken den Workflow von Anfang an mit Agenten im System:

- Aufgaben werden nicht nur Menschen, sondern auch Agenten zugewiesen.
- Tickets, Events und Commits sind für beide „lesbar".
- Kontext (Code, Spezifikationen, Diskussionen, Logs) wird strukturiert für Agenten bereitgestellt.
- Kommunikation ist nicht nachträglich, sondern integraler Teil des Prozesses.
- Integrationen (MCP, Skills, Memory) erlauben Agenten, direkt mit Monitoring, CI/CD, Wissensbasis und Repos zu sprechen.

Entscheidend:
In agent-nativen, vertikal integrierten Systemen ist der Agent **First-Class-Citizen** – nicht nur in der Code-Erzeugung, sondern auch in Debugging, Observability und Tooling.

Das führt zur eigentlichen Frage:

> Wenn Menschen und Agenten gleichberechtigt am Tisch sitzen – und Agenten gleichzeitig der Integrationshub unserer Toolchain werden – wie ändert sich dann unser Development-Prozess?

---

## 4. Kommunikation ist der Flaschenhals, nicht mehr das Coding

Früher war der Engpass oft:
„Wie schnell bekommen wir dieses Feature gebaut?"

Heute, mit Agenten, die Code generieren, Tests schreiben, PRs öffnen und Logs lesen können, verlagert sich der Engpass:

- Anforderungen klar formulieren
- Entscheidungen nachvollziehbar halten
- Wissen im Team teilen
- Risiken und Nebenwirkungen verstehen
- Vertikal integrierte Agenten so steuern, dass sie das Richtige tun

Ein typisches Muster:

1. Der Agent erledigt in 5 Minuten eine Aufgabe (inkl. Log-Analyse und PR).
2. Der/die Entwickler:in überprüft die Änderungen.
3. Danach: Tickets aktualisieren, Slack-Updates schreiben, PR-Beschreibung überarbeiten, Auswirkungen erklären, Agent-Prompts anpassen…

Die reine Umsetzung ist schnell.
Die Übersetzung in eine für Team, Stakeholder und andere Agenten verständliche Form ist langsam.

Wir sind plötzlich:

- Übersetzer: Agent → Mensch und Agent → andere Agenten
- Kurator: Was ist wichtig, was ist Rauschen?
- Projektmanager: Welche Agent-Tasks zahlen auf welches Ziel ein?
- **Integrations-Designer:** Wie soll unser vertikal integrierter Stack orchestriert werden?

---

## 5. Mensch und Agent als Teammitglieder: „Am gleichen Tisch" konkret

Wenn wir sagen „Menschen und Agenten sitzen am gleichen Tisch", meinen wir:

- Beide bekommen Aufgaben.
- Beide produzieren Ergebnisse.
- Beide beeinflussen Architektur, Codebase und Tooling.
- Beide müssen sich erklären können – gegenüber Menschen _und_ anderen Agenten.
- Beide greifen auf denselben vertikal integrierten Kontext zu (Logs, Repos, Tickets, Metriken).

Damit das funktioniert, braucht es drei Dinge:

### 5.1. Gemeinsame Sprache: Ziele, nicht nur Tickets

Klassische Tickets sind oft zu oberflächlich für Agenten:

- „Fixe Bug im Checkout"
- „Refactor Auth-Service"

Für Menschen reicht das, weil wir uns Kontext dazudenken.
Agenten – insbesondere, wenn sie über mehrere Systeme hinweg agieren – brauchen explizite Struktur:

- Kontext: Welche Module, Services, Repos, relevanten Logs, Dashboards, Dokumentationen?
- Ziel: Was soll sich konkret ändern? Aus Nutzersicht, Systemsicht, Business-Sicht.
- Constraints: Sicherheitsanforderungen, Performance-Budgets, Architektur-Guidelines, Compliance.
- Definition of Done: Welche Tests, Checks, Deployments, Observability-Anpassungen, ggf. Migrationspfade?

Agent-native Workflows erzwingen diese Klarheit – und das ist auch für Menschen ein Gewinn. Gleichzeitig bildet diese Struktur die Grundlage dafür, dass Agenten sinnvoll mit Tools wie Grafana, Kubernetes, CI, Secrets-Management etc. interagieren können.

### 5.2. Gemeinsamer Kontext: Ein geteiltes Gedächtnis

In vielen Teams ist Wissen verteilt:

- Ein Teil steckt in Köpfen.
- Ein Teil in Slack-Threads.
- Ein Teil in alten Tickets.
- Ein Teil in der Codebase.
- Ein Teil in Observability-Setups.

Agenten funktionieren nur gut, wenn sie **konsistenten, aktuellen Kontext** bekommen. Die vertikale Integration verstärkt diesen Anspruch:

- Architekturentscheidungen dokumentieren (ADR).
- Wichtige Design-Entscheidungen zentral festhalten.
- Features so beschreiben, dass sie referenzierbar sind.
- Events und Änderungen strukturiert loggen.
- Organisationale Konventionen, Patterns und Best Practices in Dateien wie `CLAUDE.md` oder einer zentralen Wissensbasis verankern, die als „Knowledge-API" dient.

Je besser unser gemeinsamer Kontext und je besser er über die Toolchain hinweg integrierbar ist, desto weniger manuellen Übersetzungsaufwand haben wir – und desto wirksamer können Agenten arbeiten.

### 5.3. Gemeinsame Verantwortung: Wer entscheidet was?

Wenn Agenten eigenständig arbeiten und tief in Logs, Cluster-States und Pipelines greifen, verschiebt sich Verantwortung:

- Agenten treffen Mikro-Entscheidungen (Implementierungsdetails, Log-Filter, Query-Strategien, Tests).
- Menschen setzen Makro-Leitplanken (Architektur, Produktziele, Risiken, Compliance).
- Die Verantwortung für das Gesamtverhalten bleibt beim Menschen.

Das heißt für unseren Prozess:

- Klare Grenzen: Wo darf der Agent autonom handeln (z.B. in Dev), wo nur vorschlagen (z.B. in Prod)?
- Explizite Review-Pflichten – nicht nur auf Code, sondern auch auf Konfiguration, Tooling und „Agent Skills".
- Feedback-Loops: Agenten lernen aus unseren Korrekturen; wir schärfen Regeln, Skills und Wissensbasis.
- Bewusste Entscheidungen darüber, _welche_ Systeme wir für Agenten zugänglich machen (least privilege, Auditing).

Menschen werden weniger „Code-Schreiber" und mehr „System-Designer", „Risk Manager" und „Agent-Orchestrator".

---

## 6. Kommunikation als First-Class-Citizen im vertikal integrierten Stack

Wenn wir Kommunikation und Informationsfluss ernst nehmen, reicht es nicht, nur „mehr zu dokumentieren". Wir müssen Kommunikation so gestalten, dass sie sowohl für Menschen als auch für Agenten funktioniert – **und** die vertikale Integration tatsächlich nutzt.

Fünf konkrete Veränderungen:

### 6.1. Statusberichte werden strukturiert – und maschinenlesbar

Statt freier Text in Tickets/Slack:

- Klare Felder: „Ziel?", „Änderungen?", „Risiken?", „Nächste Schritte?"
- Automatisch generierte Status-Updates aus Code-Diffs, Tests, Logs _und_ Observability-Events.
- Standardisierte Templates, die sowohl von Menschen als auch Agenten gelesen und geschrieben werden können – z.B. JSON/YAML-Strukturen, die in Tickets eingebettet sind.

So können andere Agenten diese Informationen wiederverwenden, z.B. um Impact-Analysen zu fahren oder Monitoring-Anpassungen vorzuschlagen.

### 6.2. PR-Beschreibungen als Schnittstelle und API

Pull Requests sind der Ort, an dem Entscheidungen konkret werden.

Agent-native PRs könnten beinhalten:

- Automatisch erzeugte, vom Menschen kuratierte Zusammenfassungen.
- Liste betroffener Komponenten, Services und potenzieller Side-Effects (inkl. Links zu Dashboards).
- Verlinkung zu relevanten Tickets, Spezifikationen, ADRs.
- „Rationale": Warum diese Lösung und nicht eine Alternative?
- Maschinell verwertbare Hinweise für andere Agenten („Wenn dieses Feature live geht, aktualisiere XYZ-Monitoring-Rule").

Review wird weniger Detektivarbeit und mehr High-Leverage-Qualitätskontrolle – sowohl für Menschen als auch für nachgelagerte Agenten.

### 6.3. Wissen ist nicht mehr „Doku", sondern API

Statt Wiki-Seiten, die niemand liest, denken wir Wissen als API:

- „Frag das System" statt „Frag die richtige Person".
- Architektur-Wissen, Produktentscheidungen und Business-Regeln sind so gespeichert, dass Agenten sie direkt nutzen können.
- Entwickler und Agenten interagieren über eine gemeinsame Schicht – Menschen und Agenten fragen dieselben „Knowledge-Endpunkte" an (Files, Vektorspeicher, MCP-Server, Skills).

Pflege dieser Wissens-API wird nicht mehr „nice to have", sondern produktivitätskritisch.

### 6.4. Kommunikation ist bidirektional – und über die Toolchain hinweg

Heute reden Menschen über Agenten.
In Zukunft reden Menschen **mit** Agenten – und Agenten miteinander.

Das bedeutet:

- Wir formulieren Aufgaben als Dialoge, nicht nur als Tickets („Schau dir Logs X/Y an, vergleiche sie mit Release Z, prüfe Service A, schlage Hypothesen vor").
- Wir stellen Nachfragen („Warum hast du X statt Y gemacht?") und erwarten Argumente, die auf Code, Logs, Metriken basieren.
- Wir korrigieren Agenten im Gespräch – und diese Korrekturen fließen zurück in Regeln, Skills, Memory.
- Agenten können andere Agenten informieren („Neuer PR mit potenziellen Auswirkungen auf Latency – Monitoring-Agent, passe Thresholds an").

### 6.5. Transparenz als Voraussetzung für Vertrauen

Wenn Agenten großen Einfluss auf Codebase und Infrastruktur haben, reicht es nicht, nur das Endergebnis zu sehen.

Wir brauchen:

- Einsicht in Entscheidungswege: Welche Optionen wurden erwogen? Welche Logs, Queries, Dateien wurden genutzt?
- Sichtbarkeit von Fehlversuchen, nicht nur vom finalen Code.
- Nachvollziehbare Logs über Agent-Aktionen, inkl. Zugriff auf externe Systeme.
- Mechanismen, um auf dieser Basis Policies zu schärfen („In Prod darf der Agent nur lesen, nicht schreiben").

Transparenz ist hier nicht primär „KI-Kontrolle", sondern Grundlage für Vertrauen im Team und für bessere Agenten.

---

## 7. Wie sieht ein agent-nativer, vertikal integrierter Entwicklungsprozess aus?

Stark vereinfacht könnte ein solcher Prozess so aussehen:

1. **Ziele definieren**
   Produkt & Engineering definieren gemeinsam klar strukturierte Ziele (inkl. Constraints, Definition of Done, SLOs). Diese Ziele sind so formuliert, dass sie sowohl von Menschen als auch Agenten verstanden und an Tools „durchgereicht" werden können.

2. **Aufgaben für Menschen und Agenten schneiden**
   Einige Tasks sind agent-geeignet (klar, repetitiv, gut beschreibbar, über Integrationen ausführbar), andere bleiben bewusst menschlich (Unsicherheit, Produktentscheidungen, UX-Trade-offs, heikle Produktionsänderungen).

3. **Agenten orchestrieren, nicht nur auslösen**
   Entwickler planen, welche Agenten welche Teile übernehmen, wie sie zusammenspielen und wo menschliche Reviews eingebaut werden. Sie definieren, welche externen Systeme Agenten nutzen dürfen (MCP, Skills, APIs).

4. **Ausführung + automatische Dokumentation**
   Agenten führen Tasks aus, lesen Logs, prüfen Metriken, generieren automatisch technische und fachliche Zusammenfassungen und verlinken Kontext (Tickets, ADRs, Dashboards).

5. **Review als High-Leverage-Arbeit**
   Menschen prüfen, korrigieren, geben Feedback – zum Code ebenso wie zur Qualität der Agentenentscheidungen, zur Nutzung von Logs und zur Konsistenz mit Architektur und Produktzielen.

6. **Lernschleifen**
   Das System lernt aus Korrekturen: Prompts, Policies, Skills und Wissensbasis werden verbessert. Regeln werden angepasst („In Zukunft immer X prüfen, bevor Y geändert wird").

7. **Transparente Kommunikation**
   Stakeholder sehen nicht nur „Done", sondern verstehen, was sich geändert hat, warum, mit welchen Nebenwirkungen – über eine Kommunikationsschicht (Dashboards, PRs, Status-Feeds), die Menschen und Agenten gemeinsam pflegen und konsumieren.

---

## 8. Offene Herausforderungen: Wo es noch weh tut

Auch in einem vertikal integrierten, agent-nativen Setup bleiben Herausforderungen:

- **Kontext-Management:** Wie wählen wir aus, welche Teile von Code, Logs, Metrics, Tickets und Knowledge-Base ein Agent wirklich braucht? Zu viel Kontext verlangsamt, zu wenig macht Agenten blind.
- **Cross-Repo-/Cross-Service-Kohärenz:** Wie halten wir das Bild konsistent, wenn Dutzende Repos und Services beteiligt sind? Wie stellen wir sicher, dass Regeln (z.B. in `CLAUDE.md`) aktuell bleiben?
- **Verifikationsaufwand:** Wie vermeiden wir, dass wir zwar Code schneller generieren, aber mehr Zeit im Review versenken? Tests, Monitoring und automatisierte Checks werden noch wichtiger.
- **Governance & Compliance:** Wie loggen und auditieren wir Agent-Aktionen? Wie stellen wir sicher, dass Zugriffsrechte, Datenschutz und regulatorische Vorgaben eingehalten werden?
- **Team-Skills:** Wie bringen wir Teams dahin, Agenten sinnvoll zu orchestrieren, statt sie nur als „schlaues Autocomplete" zu behandeln?

Diese Fragen sind kein Argument gegen Agentic Coding – sie definieren die nächste Evolutionsstufe von Engineering-Kultur.

---

## 9. Was bedeutet das für die Rolle von Entwickler?

Die Rolle verschiebt sich von:

- „Ich schreibe Code, der Anforderungen umsetzt"

hin zu:

- „Ich definiere Systeme aus Menschen und Agenten, die zuverlässig Wert liefern – über den gesamten Stack hinweg."

Konkret entstehen neue Schwerpunkte:

- **Agent Orchestration:** Welche Agenten wofür, wie kombinieren, welche Grenzen setzen?
- **Context Engineering:** Wie bereite ich Kontext (Code, Logs, Tickets, Regeln, Architektur-Wissen) so auf, dass Agenten gute Entscheidungen treffen können?
- **Risk & Quality Management:** Wo sind die kritischsten Stellen? Wie stelle ich sicher, dass Agenten dort nicht unkontrolliert agieren – gerade, wenn sie Zugriff auf Produktion, Observability und Deployments haben?
- **Kommunikationsdesign:** Wie müssen Tickets, PRs, Doku, Log-Streams und Status-Updates aussehen, damit Menschen und Agenten effizient zusammenarbeiten?
- **Stack-Integration:** Wie verbinde ich Tools (MCP-Server, Skills, CI/CD, Monitoring, Knowledge-Base), sodass Agenten wirklich über den gesamten Entwicklungszyklus hinweg wirksam werden?

Die gute Nachricht:
Alles, was wir in den letzten Jahren über gute Architektur, sauberes API-Design, sinnvolle Doku, Observability und Developer Experience gelernt haben, bleibt relevant – und wird durch Agenten und vertikale Integration sogar noch wichtiger.

---

## 10. Fazit: Agenten sind da – jetzt müssen wir unsere Kommunikations- und Integrationsschicht neu denken

Agentic Coding verändert nicht nur, **wie** Code geschrieben wird, sondern **wer** als Akteur im System auftritt – und **wo** im Stack diese Akteure wirken.

Wenn Agenten mit uns am gleichen Tisch sitzen _und_ als Integration Layer über Code, Logs, Infrastruktur und Tickets agieren, reicht es nicht, sie als „schnelleren Junior-Entwickler" zu sehen. Wir brauchen:

- Agent-native Tools, in denen Agenten First-Class-Citizens sind – im Code, in der Observability und im Tooling.
- Entwicklungsprozesse, die Kommunikation, Kontext und vertikale Integration als zentrales Element behandeln.
- Eine Entwickler-Rolle, die weniger Tipparbeit und mehr Systemdenken, Orchestrierung und Qualitätsmanagement ist.

AI-Agenten shippen in Minuten und können inzwischen große Teile des Stacks selbst durchdringen.
Der neue Engpass ist, zu erklären, **was** passiert ist und **warum** – gegenüber Team, Stakeholdern und anderen Agenten – und diese Erklärungen so zu strukturieren, dass sie wieder als Input für die nächste Runde dienen.

Die Teams, die diesen Übersetzungs- und Integrations-Layer nicht nur manuell ausfüllen, sondern **systematisch und teilweise automatisiert** bauen, werden den größten Hebel aus Agentic Coding und der Vertical Integration of Development ziehen.

Denn am Ende geht es nicht darum, „mehr Code" zu produzieren, sondern schneller, sicherer und nachvollziehbarer Wert zu liefern – in einem Team, in dem Menschen und Agenten wirklich als Partner arbeiten und die Toolchain gemeinsam nutzen.
