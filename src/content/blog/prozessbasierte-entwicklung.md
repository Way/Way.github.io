---
title: 'Wenn der Prozess teurer wird als das Produkt'
language: de
description: 'Das Schreiben eines Features kostet kaum noch etwas. Was teuer geblieben ist, sind Entscheiden, Prüfen und Messen. Eine Skizze, wie die Engineering-Loop sich darauf umbauen lässt.'
draft: false
pubDate: '2026-05-28'
visualTheme: 'scaffold'
prompt: 'Wenn das Schreiben billig ist, sind Entscheiden, Prüfen und Messen die teuren Schritte. Wie sieht eine Engineering-Loop aus, die genau das umbaut?'
tags:
  [
    'engineering',
    'process',
    'harness-engineering',
    'ai-agents',
    'software-engineering',
  ]
---

Welcher Teil eines Features kostet heute noch Zeit? Das Tippen nicht mehr. Ein Agent baut in zwanzig Minuten, wofür ich früher einen Nachmittag brauchte. Übrig bleiben die Schritte drumherum: entscheiden, was gebaut wird, prüfen, ob es trägt, und am Ende messen, ob es das Richtige getroffen hat.

Das ist eine andere Kostenverteilung, als die, auf der unsere Entwicklungsprozesse gebaut sind.

## Die teuren Schritte haben sich verschoben

Software-Entwicklung hatte über Jahrzehnte eine klare Kostenstruktur. Das Schreiben war der teure Teil. Also ist die Arbeit drumherum stark geworden, um genau diesen teuren Schritt zu schützen. Anforderungen vorher klären, damit nicht falsch gebaut wird. Reviews, damit nichts Schlechtes durchrutscht. Plan und Schätzung, damit das Tempo halbwegs verlässlich bleibt.

Diese Logik war richtig. Was sich verschoben hat, ist der teuerste Schritt selbst.

Code schreiben kostet kaum noch etwas (siehe [Code ist billig geworden](/blog/code-is-cheap)). Ein Feature, das früher ein Sprint war, ist ein Nachmittag. Ein Refactoring, das ein Quartal gebraucht hätte, läuft in einer Woche durch. Was teuer geblieben ist, sind die drei Schritte drumherum: Entscheiden, Prüfen, Messen.

## Drei Schritte, die jetzt das Tempo machen

**Entscheiden.** Was bauen wir und in welcher Reihenfolge? Solange das Bauen lange dauerte, war diese Frage zweitrangig. Heute entscheidet das Tempo der Entscheidung über das Tempo der Auslieferung. Eine zwei Wochen offene Roadmap-Frage kostet zwei Wochen, in denen vier Varianten hätten gebaut, ausprobiert und verworfen werden können.

**Prüfen.** Funktioniert, was die Agenten produzieren? Hält es, wenn jemand draufdrückt, wenn andere Komponenten dranhängen, wenn die Last hochgeht? Drei Pull Requests pro Tag konnten Senior-Engineers manuell durchgehen. Bei dreißig pro Tag wird Review zur Quälerei oder zur Formalie.

**Messen.** Hat das, was ausgerollt wurde, tatsächlich etwas bewirkt? Sprint-Retrospektiven messen, ob das Team geliefert hat. Die andere Frage, ob das Gelieferte etwas verändert hat, fällt häufig hinten runter, weil sie schwerer zu beantworten ist und länger braucht, um zurückzukommen.

Diese drei sind das neue Bottleneck. Wer hier nicht umbaut, verschenkt den Geschwindigkeitsvorteil des billigen Codes wieder.

## Die Loop, die wir brauchen

Was wir brauchen, ist eine Loop, die genau diese drei Schritte schnell macht. Ich nenne das prozessbasierte Entwicklung, weil dasselbe Prinzip dahintersteht wie hinter [OpenAIs Harness Engineering](/blog/software-neu-denken): Die Engineering-Arbeit verlagert sich vom Schreiben in das Bauen der Umgebung, in der gearbeitet wird.

Ein paar Bausteine, die ich für tragfähig halte.

**Spike statt Spec.** Wenn das Bauen einer Variante einen Nachmittag kostet, ist die billigste Antwort auf eine offene Roadmap-Frage oft ein lauffähiger Spike. Drei Varianten parallel von Agenten gebaut, eine Stunde mit drei echten Nutzern getestet, danach Entscheidung. Diese Form von Entscheiden ist schneller und ehrlicher als ein zweiwöchiger Abstimmungsprozess. Die Engineers bauen dafür einen Spike-Bench: einen Ort, an dem Varianten in Stunden hochgezogen und in Stunden wieder verworfen werden können.

**Eine Verifikations-Harness, die mitläuft.** Bei dreißig Pull Requests pro Tag funktioniert Senior-Review als Engpass nicht mehr. Was funktioniert: automatisch erweiterte Test-Coverage durch Agenten, Property-Tests, Mutation Testing, gegnerische Agenten, die versuchen, den Code zu brechen. Statische Analyse mit Regeln, die das Team gepflegt hat. Menschen bleiben in der Schleife, aber an den Stellen, an denen Urteil gefragt ist, nicht an jeder Zeile. Der Engineer baut das Verifikations-System, der Agent läuft darin.

**Messen, was sich bewegt.** Outcome-Telemetrie gehört in die tägliche Engineering-Arbeit. Quartals-Reviews kommen zu spät, weil die nächste Entscheidung längst gefallen ist. Conversion, Retention, Errorrate, Time-to-Insight, je nach Produkt. Diese Signale existieren in den meisten Organisationen, sie liegen nur selten so nah am Team wie Velocity-Charts. Wenn ein Engineer beim Mergen eines Features sieht, ob die zugehörige Metrik in den nächsten 48 Stunden in die richtige Richtung läuft, ändert das die Art, wie er das nächste Feature anfasst.

Diese drei Bausteine hängen zusammen. Spikes brauchen einen Ort, an dem sie sicher laufen. Verifikation braucht Spielraum, weil sie sonst Spikes erstickt. Messung schließt die Loop, weil sie sagt, ob der Spike die richtige Frage gestellt hat. Wer einen Baustein alleine setzt, bekommt Schmerzen ohne den Nutzen. Wer die drei zusammen baut, verändert das Tempo seines Teams.

## Engineer wird zu Loop-Builder

Wenn die Loop selbst der teure Schritt ist, verlagert sich auch die Engineer-Arbeit dorthin. Aus dem Schreiben einzelner Features wird das Design der Umgebung, in der Features entstehen. Welche Tests laufen automatisch. Welche Daten fließen wo zurück. An welcher Schwelle muss ein Mensch ans Steuer.

Das ist konkrete Engineering-Arbeit. Es ist eine CI-Pipeline, ein Telemetrie-Dashboard, ein Test-Runner, ein Spike-Bench, ein Set von Leitplanken, in denen Agenten arbeiten dürfen. Der Schwerpunkt verschiebt sich. Die handfeste Arbeit wird das Bauen der Mechanik, in der Features entstehen, geprüft und gemessen werden.

Diese Verlagerung ist nicht für jeden bequem. Wer fünfzehn Jahre in einem Sprint-Modus gearbeitet hat, in dem das Schreiben das eigentliche Engineering war, muss umlernen. Die Skills bleiben relevant, sie wechseln den Einsatzort. Wer Systeme designen kann, designt jetzt die Loop. Edge-Case-Denken wandert in die Verifikations-Harness. Wer Daten lesen kann, hängt sie an den Prozess. Das eigentliche Handwerk wird sichtbarer, weil es jetzt das Ergebnis stärker bestimmt als die reine Implementierungsqualität.

## Wo das auf Hindernisse stößt

Ich behaupte nicht, dass das morgen früh in jedem Konzern läuft. Compliance-Audits brauchen einen nachvollziehbaren Pfad, wer was wann freigegeben hat. Verträge mit Verfügbarkeits-Zusagen lassen sich nicht durch eine Spike-Kultur ersetzen. Performance-Reviews messen oft noch, was sie immer gemessen haben. Diese Hürden sind real und sie haben gute Gründe.

Was sie tun: sie zwingen zum schichtweisen Umbau. Erst da, wo das Risiko begrenzt ist: interne Tools, Prototypen, Innovation-Bereiche. Dann die nächstgrößere Schicht. Irgendwann landet die Idee bei den Kernsystemen, wenn die Erfahrung aus den ersten Schichten mitgewachsen ist. Performance-Reviews, die Story Points abfragen, müssen parallel umgebaut werden, sonst macht es niemand. **Anreize schlagen Methoden, jedes Mal.**

## Was bleibt

Wenn Entscheiden, Prüfen und Messen die teuersten Schritte sind, sind sie auch die Schritte, die Urteilsvermögen brauchen. Ein Agent kann zwanzig Varianten bauen. Welche davon in den Markt geht, ist eine Frage, die jemand verantworten muss. Tausend Code-Zeilen lassen sich automatisch testen. Welche Schwelle als "gut genug" gilt, sagt das Team. Jede Metrik ist trackbar. Welche der trackbaren Metriken die richtige für diese Geschäftsentscheidung ist, beantwortet ein Mensch.

Das Engineering, das ich in den nächsten Jahren wachsen sehe, ist Loop-Design plus Urteil. Beides lässt sich lernen. Beides ist Arbeit, die ein Mensch tut, mit Agenten als Werkzeug, nicht umgekehrt.

Schau dir deinen Entwicklungsprozess an. Welcher Schritt kostet gerade wirklich Zeit? Plant ihr in Wochen oder probiert ihr in Tagen? Geht euer Review über manuelles Augenmerk, oder läuft eine Harness mit? Was misst ihr am Ende: Sprint-Lieferung oder Outcome-Bewegung?

Die ehrliche Antwort sagt dir, wo ihr im Umbau steht und wo der erste Hebel sitzt.
