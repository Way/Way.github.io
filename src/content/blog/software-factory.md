---
draft: true
title: 'Die Software-Fabrik'
language: de
description: 'Anthropic, OpenAI, Stripe und StrongDM bauen unabhängig voneinander dasselbe: Fabriken, in denen Agents Software produzieren, prüfen und ausliefern. Was das für Engineering bedeutet.'
pubDate: '2026-04-05'
visualTheme: 'towers'
prompt: 'Was bedeutet es, wenn Software nicht mehr von Teams, sondern von Agenten-Fabriken gebaut wird?'
tags: ['software-engineering', 'ai', 'agents']
---

Anfang 2026 veröffentlichen Anthropic und OpenAI fast gleichzeitig Artikel über "Harness Engineering". Stripe merged über 1000 Pull Requests pro Woche, die kein Mensch geschrieben hat. StrongDM baut Digital Twins von SaaS-Produkten, damit Agents gegen realistische Umgebungen testen können. Vier Firmen, vier völlig verschiedene Geschäftsmodelle. Und trotzdem bauen sie alle an derselben Sache.

Keiner dieser Akteure redet noch über "AI-assistiertes Coding". Sie alle bauen dasselbe: Fabriken. Fertigungsstraßen für Software, in denen Agents produzieren, prüfen und ausliefern. Unabhängig voneinander, mit unterschiedlichen Architekturen, aber mit derselben Grundidee. Die Parallelen zur industriellen Revolution sind kein Zufall. Und die zentrale Frage ist nicht, ob Software industriell produziert wird, sondern wie die Qualitätskontrolle funktioniert, wenn niemand mehr den Code selbst geschrieben hat.

## Was eine Software-Fabrik ist

Die Fabrik-Metapher klingt erstmal übertrieben. Ist sie nicht. Eine Fabrik hat Fertigungsstraßen, Werkzeugmaschinen und Qualitätskontrolle. Genau das bauen diese Firmen.

**Fertigungsstraßen.** Anthropic beschreibt eine [Multi-Agent-Architektur](https://www.anthropic.com/engineering/harness-design-long-running-apps), die an GANs erinnert: Ein Generator-Agent baut Features, ein Evaluator-Agent prüft sie. Nicht oberflächlich, sondern indem er die laufende App via Playwright bedient und gegen definierte Akzeptanzkriterien testet. "Sprint Contracts" definieren, was "fertig" heißt. Die Parallele zum Fließband mit Qualitätskontrolle an jeder Station ist kein rhetorischer Trick. Es ist buchstäblich dasselbe Prinzip.

**Werkzeugmaschinen.** Sowohl [OpenAI](https://openai.com/index/harness-engineering/) als auch Anthropic beschreiben das Harness als das zentrale Engineering-Artefakt. Nicht der Code, den Agents produzieren, ist das Produkt. Sondern die Maschine, die diesen Code produziert. OpenAI nennt es "Harness Engineering": das Entwerfen, Testen und Verbessern der Umgebungen, in denen Agents arbeiten. Die Maschine baut die Maschine.

**Qualitätssicherung ohne menschliche Inspektion.** StrongDM hat ein [Digital Twin Universe](https://www.strongdm.com/blog/the-strongdm-software-factory-building-software-with-ai) gebaut: funktionale Klone von Okta, Slack und Jira, gegen die Agents End-to-End-Tests fahren. Stripe gibt jedem Agent [isolierte Devboxes](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) mit eigenem Toolshed-MCP-Server. Anthropics Evaluator-Agents arbeiten adversarial, also bewusst als Gegenspieler des Generators. Drei Firmen, drei Architekturen, dasselbe Ziel: Qualität sichern, ohne dass ein Mensch jede Zeile liest.

## Die Verifikationsfrage

Und genau hier liegt der Kern. Wer prüft Code, den niemand geschrieben hat? Die Antwort fällt je nach Firma unterschiedlich aus.

**Adversariale Agents.** Anthropic setzt auf das Generator-Evaluator-Muster mit harten Schwellenwerten. Der Evaluator liest nicht einfach den Code. Er startet die App, klickt sich durch Flows, prüft Zustände via Playwright. Wenn ein Kriterium nicht erfüllt ist, geht der Task zurück an den Generator. Kein Mensch entscheidet, ob der Output "gut genug" ist. Der Schwellenwert entscheidet. Diese Sessions laufen sechs Stunden und produzieren komplette Full-Stack-Applikationen.

**Digital Twins.** StrongDM geht einen anderen Weg. Keine Unit Tests, weil Agents die theoretisch faken könnten. Ein Agent, der seinen eigenen Test schreibt, testet im Zweifel nur, ob er tut, was er denkt. Stattdessen End-to-End-Szenarien gegen das Digital Twin Universe, geschrieben als "Holdout Sets" in einer separaten Codebasis, die der generierende Agent nie sieht. Die Idee stammt aus dem Machine Learning: Trainings- und Testdaten strikt trennen.

**Verification Upstream.** [Swyx und Jain](https://www.latent.space/p/reviews-dead) argumentieren, dass Reviews tot sind und die Verifikation nach vorne wandern muss. Menschen definieren Akzeptanzkriterien vorab, bevor eine Zeile Code existiert. Agents generieren und verifizieren dann gegeneinander. "Shift Left" in seiner radikalsten Form.

**Human Review als letzte Instanz.** Stripe behält trotz 1000+ Agent-PRs pro Woche menschliches Review bei. Aber die Agents sind so gebaut, dass sie lokales Linting in unter fünf Sekunden schaffen und maximal zwei CI-Zyklen pro Run brauchen. Der Mensch prüft also nicht Syntax, sondern Intention.

Vier Ansätze, dasselbe Problem. Und keiner davon setzt primär auf menschliches Code-Review. Das ist der eigentliche Bruch. Jahrzehntelang war der Pull Request die letzte Verteidigungslinie. Jetzt experimentieren die fortschrittlichsten Engineering-Teams der Welt mit Alternativen, weil das Volumen menschliches Review unmöglich macht.

Was alle vier Ansätze gemeinsam haben: Die zentrale Frage im Software Engineering verschiebt sich. "Wie bauen wir das?" wird abgelöst von "Wie verifizieren wir, dass das Richtige gebaut wurde?"

## Was das Harness über die Zukunft verrät

Ein Satz aus dem Anthropic-Artikel hat mich nicht mehr losgelassen:

> "Every component in a harness encodes an assumption about what the model can't do on its own, and those assumptions are worth stress testing, because they can quickly go stale as models improve."

Das heißt: Die Fabrik ist nie fertig. Jede Modellverbesserung macht Teile der Orchestrierung überflüssig. Anthropic beschreibt, wie sie mit Claude Opus 4.6 ganze Komponenten entfernen konnten, die vorher nötig waren: Context Resets, bestimmte Sprint Constructs, Guardrails gegen Schleifen. Was gestern eine unverzichtbare Sicherheitsschicht war, ist heute toter Code.

Die Arbeit verschiebt sich also weiter. Erst von "Code schreiben" zu "Agents orchestrieren". Dann von "Agents orchestrieren" zu "die Fabrik selbst warten und vereinfachen". Wer heute ein aufwendiges Multi-Agent-System mit fünf Phasen und drei Fallback-Strategien baut, sollte damit rechnen, dass das nächste Modell-Update die Hälfte davon überflüssig macht.

Das Harness ist kein statisches Produkt. Es ist eine Hypothese darüber, was Modelle noch nicht können. Und diese Hypothese hat ein Verfallsdatum. Die besten Engineering-Teams werden nicht die sein, die die komplexesten Fabriken bauen. Sondern die, die am schnellsten erkennen, welche Teile ihrer Fabrik sie wieder abreißen können.

## Der blinde Fleck

Die Fabrik-Metapher hat eine Schwäche, über die keiner der Artikel spricht. Fabriken produzieren Massenware. Autos, Schrauben, Platinen. Identische Teile in hoher Stückzahl. Aber Software ist keine Massenware. Jedes Feature löst ein spezifisches Problem für spezifische Menschen. Ein Checkout-Flow für einen Marktplatz ist fundamental anders als einer für ein SaaS-Abo. Die Firmen, die das vergessen, werden Fabriken bauen, die beeindruckende Mengen Code produzieren, aber wenig Wert.

1000 PRs pro Woche sind kein Erfolg. 1000 gelöste Nutzerprobleme pro Woche wären einer. Und diese Unterscheidung erfordert etwas, das kein Agent leisten kann: ein Verständnis dafür, warum etwas für wen wichtig ist.

Der Mensch bleibt an zwei Stellen unverzichtbar: bei der Frage, was gebaut werden soll, und bei der Verantwortung für das, was rauskommt. Dazwischen kann die Fabrik stehen. Aber ohne diese beiden Enden ist sie nur eine sehr teure, sehr schnelle Maschine, die in die falsche Richtung läuft.

## Quellen & Recherche

- [Simon Willison: Software Factory](https://simonwillison.net/2026/Feb/7/software-factory/)
- [StrongDM: The Software Factory — Building Software with AI](https://www.strongdm.com/blog/the-strongdm-software-factory-building-software-with-ai)
- [Latent Space: Reviews are Dead](https://www.latent.space/p/reviews-dead)
- [Stripe: Minions — One-Shot End-to-End Coding Agents](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents)
- [gstack (Garry Tan)](https://github.com/garrytan/gstack?tab=readme-ov-file)
- [Anthropic: Harness Design for Long-Running Application Development](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- [OpenAI: Harness Engineering — Leveraging Codex in an Agent-First World](https://openai.com/index/harness-engineering/)
