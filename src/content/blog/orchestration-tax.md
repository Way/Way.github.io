---
title: 'Acht Köche, ein Küchenchef: die Orchestration Tax'
language: de
description: 'Acht Agenten produzieren achtmal so viel Code, aber jede Änderung läuft am Ende über einen einzigen Reviewer: dich. Addy Osmani nennt das die Orchestration Tax. Die Frage dahinter ist, woraus diese Steuer wirklich besteht und wie viel davon dein Urteil verlangt.'
pubDate: '2026-06-09'
visualTheme: 'cockpit'
prompt: 'Woraus besteht die Orchestration Tax beim Betrieb vieler AI-Agenten wirklich, und welcher Teil davon ist echtes menschliches Urteil gegenüber reinem Tooling-Overhead?'
tags:
  [
    'AI',
    'Agents',
    'Developer Experience',
    'Orchestration',
    'Softwareentwicklung',
  ]
---

Stell dir eine Küche im Vollbetrieb vor. Du stellst acht Köche ein, und tatsächlich kommen jetzt achtmal so viele Pfannen vom Herd. Nur läuft jeder Teller am Ende über einen einzigen Punkt: den Pass. So heißt in der Gastronomie der Tresen zwischen Küche und Service, wo angerichtet, unter Wärmelampen warmgehalten und abgeholt wird. Dort schaut der Küchenchef auf jeden Teller und entscheidet, ob er rausgeht oder zurück muss. Der Chef bist du. Und acht Köche bedeuten vor allem eines: eine sehr lange Schlange am Pass, vor einer Person, die jeden Teller einzeln abnimmt.

Genau das passiert gerade an tausenden Schreibtischen mit AI-Agenten. Einen Agenten zu starten kostet fast nichts. Seinen Output zu lesen, zu verstehen und in eine Codebase zu mergen, die danach weiter funktionieren muss, kostet so viel wie eh und je. Lässt du acht Agenten gleichzeitig laufen, wächst deshalb vor allem eines: die Schlange vor dem einzigen Reviewer. Dir.

[Addy Osmani](https://addyosmani.com/blog/orchestration-tax/) hat dafür letzte Woche einen Namen gefunden: die Orchestration Tax. Eine Steuer auf jeden zusätzlichen Agenten, die nie auf einer Rechnung auftaucht. Sein Bild dafür: du bist das GIL deiner Agenten, Pythons Global Interpreter Lock. Diese Sperre erlaubt beliebig viele Threads, rechnen lässt sie immer nur einen. Die Küche kennt dasselbe Gesetz: egal wie viele Köche braten, abgeschmeckt wird von einer Person.

Neu ist an diesem Muster wenig. [Amdahls Gesetz](https://de.wikipedia.org/wiki/Amdahlsches_Gesetz) beschreibt seit den Sechzigern, dass mehr Prozessoren ein Programm nur bis zu einer harten Grenze beschleunigen, und die setzt der Anteil, der nacheinander laufen muss. Fred Brooks hat 1975 in The Mythical Man-Month erklärt, warum mehr Leute ein spätes Projekt noch später machen: die Koordination wächst mit. 50 Jahre später stellen wir Maschinen ein statt Menschen und wundern uns über denselben Effekt.

Und die Daten sind deutlicher, als mir lieb ist. [Faros AI](https://www.faros.ai/blog/ai-software-engineering) hat Telemetrie von über 10.000 Entwicklern in 1.255 Teams ausgewertet: Teams mit hoher AI-Nutzung mergen 98 Prozent mehr Pull Requests. Die Review-Zeit pro PR steigt gleichzeitig um 91 Prozent. Fast doppelter Output, fast doppelt so lange Abnahme, und auf Unternehmensebene kommt davon kaum etwas an: zwischen AI-Adoption und Delivery-Metriken fand die Studie schwache bis gar keine Korrelation. [Agoda berichtet denselben Befund](https://www.infoq.com/news/2026/03/agoda-ai-code-bottleneck/) aus dem eigenen Haus: einzelne Entwickler messbar schneller, Projekte kaum, weil Code schreiben nie der Engpass war.

Du kannst dich nicht parallelisieren. Zwanzig laufende Agenten und ein Dashboard voller grüner Häkchen können sich anfühlen wie der produktivste Tag deines Lebens, während fast nichts davon im fertigen Produkt landet. Beschäftigt sein und produktiv sein sind zwei verschiedene Dinge. Agenten haben die Lücke dazwischen nur größer gemacht.

Mich lässt seitdem eine Frage nicht los: Woraus besteht diese Steuer eigentlich? Und wie viel davon kann wirklich nur ich bezahlen? Denn am Pass macht der Küchenchef zwei sehr verschiedene Dinge gleichzeitig, und nur eines davon ist seine Kunst.

## Zwei Kosten, verkleidet als eine

Am Pass tut der Chef das eine, das niemand sonst kann: schmecken und entscheiden. Geht der Teller raus? Daneben erledigt er ein Dutzend Dinge, die jeder Hilfskoch übernehmen könnte: Bons sortieren, nachfragen, ob Station drei fertig ist, den Pass abwischen, die Wärmelampe checken. Beim Orchestrieren von Agenten verschmelzen diese zwei Arten von Arbeit zu einem einzigen Gefühl von Überforderung. Dabei ist nur eine davon deine.

Die erste ist Urteil. Gehört diese Änderung in die Codebase? Hat der Agent das richtige Problem gelöst oder den plausibel aussehenden Nachbarn daneben? Tut diese Abstraktion in drei Monaten weh? Wenn zwei Branches dieselbe Datei anfassen, welcher hat recht? Diese Arbeit ist deine, und sie lässt sich durch nichts ersetzen. Kein Tool darf diese Entscheidung für dich treffen, und jedes Tool, das es verspricht, lügt dich an oder bringt dir gerade eine teure Lektion bei.

Die zweite ist Hilfsarbeit. Zwischen acht Fenstern hin- und herklicken, um dich zu erinnern, wer gerade was macht. Nachsehen, ob Agent Nummer vier fertig ist. Den Build nochmal anwerfen, weil du nicht sicher bist, ob die letzte Änderung noch kompiliert. Aufräumen, weil zwei Agenten in dieselbe Datei geschrieben haben. Drei Absätze Agenten-Geplapper lesen, um den einen Satz zu finden, der sagt: ich bin blockiert. Und so oft den Kontext wechseln, dass deine besten Stunden weg sind, bevor du überhaupt zum Denken kommst.

Auch das ist echte Arbeit. Nur ist sie in keinem sinnvollen Sinn deine. Sie ist wiederholbar, regelbasiert, ohne jede Geschmacksfrage. In der Küche macht so etwas der Hilfskoch. In Software heißt der Hilfskoch Maschine.

Hier schnappt die Falle zu: Im Alltag aus Chat-Fenstern und Terminals kleben beide Arbeiten am selben Ort. Das Urteil wohnt in denselben Fenstern wie die Statusabfrage. Jedes Mal, wenn du nach einer echten Entscheidung greifst, watest du erst durch einen Sumpf aus Nachsehen und Nachfragen. Es fühlt sich an, als wäre dein Urteil der Flaschenhals. Meistens steht es einfach nur hinter einer langen Schlange aus Verwaltung.

Wie gefährlich das wird, zeigt eine [Sonar-Umfrage](https://www.sonarsource.com/company/press-releases/sonar-data-reveals-critical-verification-gap-in-ai-coding/) unter Entwicklern: 96 Prozent trauen AI-generiertem Code nicht vollständig. Konsequent geprüft, bevor er committet wird, hat ihn nur knapp die Hälfte. Diese Lücke ist kein Charakterfehler. Sie ist das, was passiert, wenn ein Mensch 40 Teller pro Stunde abnehmen soll: irgendwann winkt er durch.

Trenn die beiden Kosten, und die Steuer, die wirklich auf deinem Urteil liegt, ist deutlich kleiner, als dein Tag sich angefühlt hat.

## Warum das übliche Setup es schlimmer macht

Chat-Fenster haben kein Gedächtnis. Schließt du den Tab, ist der Kontext weg, also wirst du selbst zum Gedächtnis und hältst den Stand jedes Agenten im Kopf. Terminals reden nicht miteinander, also koordinierst du von Hand, per Alt-Tab. Und das Ticket-Board stammt aus einer Zeit, in der Menschen die Arbeit machten und die Software daneben saß und zusah. Es weiß nicht einmal, dass Agenten existieren.

Keines dieser Werkzeuge wurde für eine Welt entworfen, in der die meisten deiner Mitarbeiter Maschinen sind. Du hast sie dir dafür zusammengezimmert. Und genau in diesen Nähten entsteht ein überraschend großer Teil der Orchestration Tax: drei Tools, von denen keines je ein Team aus Maschinen führen sollte, und du bist der Klebstoff dazwischen.

Schau dir mit diesem Blick an, was gegen die Steuer empfohlen wird, von Osmani und überall sonst. Fast alles davon ist Naht-Arbeit.

## Vier von fünf gehören dem Hilfskoch

Osmani schließt seinen Text mit fünf Ratschlägen gegen die Steuer. Ich habe sie neben meinen eigenen Alltag gelegt, und dabei ist mir etwas aufgefallen: nur einer davon hängt wirklich an dir. Die anderen vier beschreiben Arbeit, die eine Maschine erledigen sollte, lange bevor sie deinen Pass erreicht.

Der eine, der bleibt, ist die Delegation. Wie viele Agenten du parallel laufen lässt, richtet sich danach, wie viel fertige Arbeit du an einem Tag gründlich prüfen kannst. Bei den meisten ist das eine niedrige einstellige Zahl. Auch welche Aufgaben sich sicher abgeben lassen und welche dafür zu verzahnt sind, entscheidest du. Diesen Teil kann dir niemand abnehmen, und ein gutes System sollte es gar nicht erst versuchen. Es sollte dir nur helfen, deine Grenze einzuhalten, statt dass du sie um 23 Uhr vor zwanzig offenen Fenstern neu entdeckst.

Der Rest ist Hilfsarbeit, und hier wird das Prinzip konkret. Nimm die Verifikation, den Ratschlag, der am meisten zählt. "Baut das? Läuft das? Besteht es den Linter?" ist eine Frage, die kein Mensch vierzigmal am Tag beantworten sollte. Also beantwortet sie eine Maschine: Bevor eine Änderung überhaupt in deiner Queue landet, hat ein Prozess den Build angeworfen, den Linter gefahren und einen echten Dev-Server gestartet, um zu sehen, ob das Ding antwortet. Kaputte Builds und tote Server erreichen dich gar nicht erst. Was bei dir ankommt, hat die simplen Gates längst passiert, und übrig bleibt der Teil, der einen Menschen braucht. Der Hilfskoch räumt die Teller weg, die offensichtlich zurückmüssen, damit am Pass nur die Entscheidungen ankommen, die wirklich du treffen musst.

Die anderen drei folgen demselben Muster. Zwei Köche, die sich am selben Schneidebrett in die Quere kommen, sind kein Drama mehr, sobald jeder sein eigenes Brett hat. In Software bekommt dafür jeder Agent eine eigene Arbeitskopie des Codes (einen eigenen Git-Worktree mit eigenem Branch), sodass keiner dem anderen mitten im Lauf etwas überschreibt. Fassen zwei Branches später dieselben Zeilen an, entsteht ein Merge-Konflikt. Der ist wieder Urteil, also landet er bei dir.

Fertige Arbeit muss auch nicht in dem Moment geprüft werden, in dem sie fertig wird. Sie kann in einer Spalte warten, die du abläufst, wenn du so weit bist, statt dass jeder Ping deine Aufmerksamkeit zurücksetzt. Und der Schutz deiner besten Stunden ergibt sich dann von selbst: Ein System, das sich Arbeit zieht und sich nur meldet, wenn etwas zu entscheiden ist, lässt dir den Kopf frei fürs harte Problem, statt dich vor einem Fortschrittsbalken Wache stehen zu lassen.

Vier von fünf erledigt also das System. Der fünfte bleibt bei dir, und er wird leichter, sobald die anderen vier aus dem Weg sind.

## Ein Filter ist kein Urteil

Bei einer Sache will ich vorsichtig sein, weil genau hier diese Art von Argument normalerweise anfängt zu lügen.

Ein automatischer Review-Schritt, der das Diff liest, die Checks fährt und entscheidet, ob die Arbeit reif für einen Pull Request ist, ist ein Filter. Er sortiert aus, was offensichtlich zurückmuss, damit es dich gar nicht erreicht. Dein Urteil ersetzt er nicht, und ich werde nicht so tun, als täte er es. Wird die Arbeit zum PR, prüft ein Mensch und merged ein Mensch. Die Abnahme am Pass war immer der Kern des Jobs, und sie bleibt es.

Was sich ändert, ist, wie viel Müll vor der Abnahme liegt. Du schmeckst Teller ab, die schon heiß sind, schon vollständig, schon angerichtet. Die Frage "ist der Build grün" hat eine Maschine längst beantwortet, vierzigmal an diesem Tag, ohne dich ein einziges Mal zu stören.

Der Pass verschwindet also nicht, und das soll er auch nicht. Was sich verschieben lässt, ist die Schlange davor: weg von deinem Kopf, hinein in Infrastruktur.

## Der Teil, der dir bleibt

Du wirst weiter hart über harte Probleme nachdenken. Das war immer der Job, und es ist der gute Teil. Manchmal ist der beste Zug, jeden Agenten zu schließen und ein einziges, sperriges Problem anzustarren, bis es nachgibt. Osmani sagt das auch, und er hat recht.

Die Orchestration Tax ist echt. Die Frage, die sich lohnt: Wie viel von deiner Rechnung ist wirklich deine? Bei mir stellte sich der größte Teil als Hilfsarbeit heraus, verkleidet als Urteil. Gib die Hilfsarbeit an die Maschinen, behalt das Schmecken am Pass, und die Arbeit fühlt sich wieder an wie Kochen statt wie Flugsicherung. (Genau diese Trennung versuche ich mit [Harmony](https://gethmy.com) in Infrastruktur zu gießen, falls dich interessiert, wie das in echt aussieht.)

Agenten brauchen niemanden, der ihnen zusieht. Sie brauchen einen Ort zum Arbeiten, einen Weg zur Koordination und eine klare Linie zu der einen Person, deren Entscheidung zählt. Diese Person bist immer noch du. So soll es sein.
