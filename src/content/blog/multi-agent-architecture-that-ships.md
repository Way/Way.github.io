---
title: 'Multi-Agent Architecture, die wirklich liefert'
language: de
description: 'Agents haben kein gemeinsames Gedächtnis. Verbunden sind sie nur durch das, was irgendwo aufgeschrieben steht. Wo das liegt und wer es lesen kann, entscheidet, ob du die Arbeit von Agents prüfen kannst oder sie hinterher mühsam zusammensuchst. Fünf Ansätze von Archon bis Linear und sechs Regeln, die du sofort anwenden kannst.'
pubDate: '2026-10-09'
ressort: 'agenten-engineering'
kicker: 'Agent Harness'
glance:
  - 'Agents teilen kein Gedächtnis. Verbunden sind sie nur durch das, was aufgeschrieben ist.'
  - 'Fünf Ansätze, fünf Antworten: Workflow-Datei, Fenster, Orchestrator, Ticket, Board.'
  - 'Sechs Regeln für jedes Setup, dazu ein Test, den du heute machen kannst.'
visualTheme: 'swarm'
prompt: 'Warum entscheidet der Ort, an dem der Zustand eines Multi-Agent-Setups liegt, darüber, ob es liefert, wie lösen Archon, Linear, Symphony und andere das, und welche Regeln folgen daraus?'
tags:
  [
    'AI',
    'Agents',
    'Harness Engineering',
    'Orchestrierung',
    'Harmony',
  ]
---

Ich weise einem Agent eine Card zu. Er plant, baut und öffnet einen PR. Ein unabhängiger Review prüft ihn, und sind die Tests grün, wird gemergt, ohne dass ich eingreife. So läuft es bei mir, wenn der Daemon auf Auto-Merge steht.

Damit das nicht schiefgeht, muss eine Frage geklärt sein, die mit dem Modell wenig zu tun hat. **Wo liegt der Stand, und wer kann ihn lesen?**

## Warum der Ort des Zustands entscheidet

Ein Agent hat kein Gedächtnis über die Sitzung hinaus. Endet sie, ist ihr Kontext weg. Zwei Agents, die am selben Produkt arbeiten, sehen die Chats des jeweils anderen nicht. **Verbunden sind sie nur durch das, was irgendwo aufgeschrieben steht**: der Auftrag, der Zwischenstand, getroffene Entscheidungen, das Ergebnis und die Zweifel. Das ist der Zustand.

Ein Agent hat in einer Card in meinem Board einen Satz dazu geschrieben, als er an einem Plan arbeitete: „Ein Plan ist das durable Was und Warum, und die Kriterien sind seine Substanz. […] Ein Plan, der nicht wachsen kann, ist ein Plan, den man beim ersten Nachtrag umgeht.“ Das gilt für den ganzen Stand. Lässt er sich nicht fortschreiben, schreibt irgendwer daneben weiter, im Chat, im Kopf, in einer Notiz, die keiner findet.

Daraus folgen zwei Dinge.

Erstens entscheidet der Ort, ob ein Lauf auf dem vorherigen aufbauen kann. Liegt der Zustand im Chat, beginnt jeder Lauf bei null, und du erklärst dem Setup immer wieder, was gestern passiert ist.

Zweitens entscheidet, wer den Zustand lesen kann, ob du noch urteilen kannst. Ein Review heißt, eine Änderung zu beurteilen. Dafür musst du wissen, was beabsichtigt war, was der Agent ausgeführt hat und was er übersprungen hat. Steht das nirgends, suchst du es dir aus Diff und Chatverlauf zusammen, und die Arbeit, die der Agent dir abnehmen sollte, liegt wieder bei dir. Ich habe in [Die Orchestration Tax](/blog/orchestration-tax) beschrieben, dass jede Änderung am Ende über den Menschen läuft. Der Zustand entscheidet, wie teuer dieser Schritt ist.

Fast jedes Tool beantwortet die Frage „Wo liegt der Zustand und wer liest ihn?“ anders.

### Die Workflow-Datei

[Archon](https://github.com/coleam00/archon) legt den Ablauf in YAML fest: planen, bauen, prüfen, PR öffnen. Es will AI-Coding „deterministic and repeatable“ machen. Du bekommst wiederholbare Läufe. Eine Aufgabenverwaltung beschreibt die README nicht.

### Das Fenster

[T3 Code](https://github.com/pingdotgg/t3code) nennt sich „agent harness control surface“. Es steuert Agents auf deinem Rechner aus einer Web-, Desktop- oder Mobile-App und unterstützt unter anderem Codex, Claude Code und Cursor. Von einem gemeinsamen Stand ist in der README nicht die Rede.

### Der Orchestrator

Das gängige Muster, etwa im [Überblick von ElevenLabs](https://elevenlabs.io/blog/multi-agent-systems) (ein Produkttext): Ein Koordinator zerlegt die Aufgabe, und die Agents „share a common knowledge base, which the orchestrator controls“. Der Zustand gehört damit dem Orchestrator. Ob ein Mensch ihn lesen kann, hängt davon ab, ob jemand eine Ansicht dafür baut.

### Das Ticket

Bei Linear und [Symphony](https://github.com/openai/symphony) wird das Ticket zur Steuerzentrale. Linear setzt den Agent laut [Entwicklerdoku](https://linear.app/developers/agents) als „delegate“, nicht als „assignee“. Der Mensch behält die Verantwortung. Symphony nennt sich selbst „a low-key engineering preview for testing in trusted environments“.

### Das Board mit Agent-Zugriff

[Harmony](https://gethmy.com) hält Cards, Pläne und Gedächtnis in einem System, in das Agents per MCP selbst schreiben. Ein Agent startet eine Session auf einer Card, arbeitet dort und legt Befund, Kosten und Ergebnis an derselben Stelle ab, an der der Mensch die Aufgabe angelegt hat.

Keiner dieser Ansätze ist per se der richtige. Eine Workflow-Datei passt, wenn jeder Lauf gleich aussehen soll, ein Fenster, wenn du allein mit einer Handvoll Agents arbeitest, ein Ticket, wenn dein Team schon in Tickets lebt, und ein Board mit Agent-Zugriff, wenn Menschen und Agents am selben Backlog arbeiten und du nachlesen willst, wer was entschieden hat. Das ist meine Einschätzung.

## Sechs Regeln für jedes Setup

**1. Teste, ob der Zustand die Sitzung überlebt.** Beende eine Sitzung mitten im Lauf. Kannst du in fünf Minuten sagen, was der Agent getan hat? Wenn nicht, liegt der Zustand an einem Ort, den nur die Sitzung kennt. Dann ist jeder Abbruch, jeder Neustart und jeder Wechsel zwischen Agents ein Informationsverlust.

**2. Gib jedem Lauf einen eigenen Arbeitsbereich.** Gängige Praxis dafür sind Git Worktrees: Jeder Agent bekommt ein eigenes Arbeitsverzeichnis auf einem eigenen Branch, alle aus demselben Repository (`git worktree add ../thema-x -b thema-x`). So arbeiten mehrere Agents an verschiedenen Themen, ohne sich in die Quere zu kommen. Symphony startet „isolated, autonomous implementation runs“. Der Grund: Ein gemeinsames Arbeitsverzeichnis ist gemeinsamer veränderlicher Zustand. Was ein Agent dort halb fertig liegen lässt, wird für den nächsten zur Eingabe, und was einer verschiebt, stimmt für den anderen nicht mehr.

**3. Lass einen Menschen als Verantwortlichen stehen.** Linear macht es vor: Der Agent ist Delegate, der Mensch bleibt Assignee. Sobald mehrere Agents an einer Aufgabe hängen, muss jemand entscheiden, wann sie fertig ist und wen du fragst, wenn etwas schiefgeht. Das lässt sich nicht an den Agent delegieren, der den Fehler gemacht hat. Leg die Sperre an die Aufgabe und nicht an die Sitzung. Sonst kann ein Mensch Arbeit anfangen, die ein Agent schon hat, und beide merken es erst im Merge.

**4. Mach „nicht getestet“ zum Pflichtfeld.** Die Ausgabe eines Agents liest sich gleich sicher, ob er etwas geprüft hat oder nicht. Ein Beispiel aus meinem Board: Ein Agent fand im Review eine Rechte-Lücke. Ein eingeladener Nutzer hätte `role` und `workspace_id` seiner eigenen Einladung ändern können und wäre damit Owner eines fremden Workspace geworden. Der Code war noch nicht ausgeliefert, betroffen war niemand. Im Befund stand: „[…] confirmed by reading origin/main on 2026-10-03. Not tested against a live database.“ Wer das liest, weiß sofort, was er selbst prüfen muss, und prüft nicht alles gleich misstrauisch. Ein Befund ohne diese Angabe ist unvollständig.

**5. Lege Modell, Eskalation und Kosten pro Aufgabe fest.** In meinem Setup nimmt der Daemon für einfache Aufgaben Sonnet und für schwierige Opus, nach zwei Fehlversuchen wechselt er zu Fable. Ohne so eine Regel läuft ein Agent mit demselben Modell in dieselbe Wand, und du bezahlst jeden Versuch. Die Zahl zwei ist eine Setzung, kein Naturgesetz. Halte dazu fest, was ein Lauf gekostet hat. Ein Lauf bei mir: 55 Tool-Calls, 4,7 Mio. Tokens, 2,78 Dollar, 1 PR, gemergt nach gut einer Stunde, mit fehlgeschlagenen CI-Checks dazwischen. Über viele Aufgaben siehst du, welche aus der Reihe fällt, und kannst entscheiden, ob dort der Plan zu vage war oder das Modell zu schwach.

**6. Setz Freigaben dort, wo ein Fehler teuer wird.** Das gilt für Merge, Deploy, Zugriff auf private Daten und alles, was Geld bewegt. Agents arbeiten schnell und parallel, ein falscher Schritt wiederholt sich, bevor du ihn bemerkst. Dort, wo der Schaden groß ist, ist deine Aufmerksamkeit am besten angelegt. Alles darunter darf der Agent allein.

## Was ein strukturierter Harness bringt

Ich nutze [Harmony](https://gethmy.com) seit Juni mit einem Daemon, der Cards abarbeitet. Aktuell stehen 2 Cards in „In Progress“, 3 in „Review“, rund 1.065 sind erledigt.

So läuft es: Ich lege die Idee als Card an. Sobald ich sie dem Daemon zuweise, startet die Arbeit, und der Rest läuft von allein. Der Agent arbeitet auf der Card, schreibt Plan, Befund und Ergebnis dort hin und öffnet einen PR. Normalerweise landet die Card dann in „Review“, und ich entscheide. Steht der Daemon auf Auto-Merge, prüft ein unabhängiger Review den PR, die Tests müssen grün sein, und bei Erfolg wird gemergt. Meine Freigabe ist dann die Zuweisung am Anfang, nicht der Klick am Ende.

Auto-Merge heißt, dass kein Mensch den Diff mehr liest, deshalb prüft die Maschine strenger. Es ist standardmäßig aus, und gemergt wird nur, wenn die Tests grün sind und ein unabhängiger Review den aktuellen Stand des Branches als „clean“ beurteilt hat. Im Zweifel hält sie an: Die Card bleibt in „Review“ und trägt die Begründung. Gemergt wird außerdem nur der PR, den dieser Lauf gebaut hat.

Der Gewinn zeigt sich im Alltag an zwei Stellen. Öffne ich ein Review, hängen Plan, Befund und Kosten an derselben Card. Und ein neuer Lauf beginnt nicht bei null, weil ein Gedächtnis da ist, auf das jeder Agent zugreift.

## Dein nächster Schritt

Nimm die letzten zehn Läufe deiner Agents. Prüfe bei jedem drei Dinge: Weißt du, wer ihn gestartet hat, was er geändert hat und was er nicht getestet hat? Jede Lücke zeigt dir, an welcher der sechs Regeln es hakt. Findest du die Antworten nur im Chatverlauf, ist das ein Befund für Regel 1.
