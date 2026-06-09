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

Stell dir eine Küche im Vollbetrieb vor. Du stellst acht Köche ein, und tatsächlich kommen jetzt achtmal so viele Pfannen vom Herd. Nur läuft jeder Teller am Ende über einen einzigen Punkt: den Pass. So heißt in der Gastronomie der Tresen zwischen Küche und Service, wo angerichtet, unter Wärmelampen warmgehalten und abgeholt wird. Dort schaut der Küchenchef auf jeden Teller und entscheidet, ob er rausgeht oder zurück muss. Der Chef bist du. Acht Köche heißen nicht acht Chefs. Sie heißen eine sehr lange Schlange am Pass und eine Person, die jeden Teller einzeln abnimmt.

Genau das passiert gerade an tausenden Schreibtischen mit AI-Agenten. Einen Agenten zu starten kostet fast nichts. Das, was er produziert, zu lesen, zu verstehen und in eine Codebase zu mergen, die weiter funktionieren muss: das kostet genau so viel wie immer. Lässt du acht Agenten gleichzeitig laufen, bekommst du nicht den achtfachen Output. Du bekommst eine sehr tiefe Queue, die einen einzigen Reviewer füttert. Dich.

[Addy Osmani](https://addyosmani.com/blog/orchestration-tax/) hat dafür letzte Woche einen Namen gefunden: die Orchestration Tax. Eine Steuer, die du auf jeden zusätzlichen Agenten zahlst, ohne dass sie je auf einer Rechnung auftaucht. Sein Bild kommt aus der Programmierung: du bist das GIL, der Global Interpreter Lock. Deine Agenten laufen nebenläufig, aber jede Arbeit, die echtes Urteil braucht, muss zuerst deinen Lock holen, und es gibt genau einen Lock, und du hältst ihn.

Dahinter steht eine alte Regel aus der Parallelrechnung, [Amdahls Gesetz](https://de.wikipedia.org/wiki/Amdahlsches_Gesetz): Wie viel schneller ein Programm durch mehr Prozessoren wird, hat eine harte Obergrenze, und die bestimmt der Anteil, der ohnehin nacheinander laufen muss. Du kannst den parallelen Teil beliebig beschleunigen, über diese Grenze kommst du nie. In der Küche heißt das simpel: Du kannst beliebig viele Köche einstellen, am Pass steht weiter genau einer, und an ihm staut sich alles.

Er hat recht, und ich will das klar sagen, bevor ich irgendwas hinzufüge. Du kannst dich nicht parallelisieren. Zwanzig laufende Agenten und ein Dashboard voller grüner Häkchen können sich anfühlen wie der produktivste Tag deines Lebens, während fast nichts davon im fertigen Produkt landet. Beschäftigt sein und produktiv sein sind schon lange zwei verschiedene Dinge. Agenten haben den Abstand nur lauter gemacht.

Die Frage, die mich seitdem nicht loslässt, steht hinter dem Begriff: woraus besteht diese Steuer eigentlich? Und wie viel davon ist wirklich meine, in dem Sinn, dass nur ich sie zahlen kann? Denn am Pass macht der Küchenchef zwei sehr verschiedene Dinge gleichzeitig, und nur eines davon ist seine Kunst.

## Zwei Kosten, verkleidet als eine

Am Pass macht der Chef das Eine, das niemand sonst kann: schmecken und entscheiden. Geht der Teller raus? Daneben macht er ein Dutzend Dinge, die jeder Hilfskoch übernehmen könnte: Bons sortieren, nachfragen, ob Station drei fertig ist, den Pass abwischen, die Heizlampe checken. Beim Orchestrieren von Agenten verschmelzen genau diese zwei Kosten zu einem einzigen Gefühl von Überforderung. Und nur eine davon ist deine.

Die erste ist Urteil. Gehört diese Änderung in die Codebase? Hat der Agent das richtige Problem gelöst oder den plausibel aussehenden Nachbarn daneben? Tut diese Abstraktion in drei Monaten weh? Wenn zwei Branches dieselbe Datei anfassen, welcher hat recht? Diese Arbeit ist deine. Sie ist nicht reduzierbar. Kein Tool darf diesen Lock für dich halten, und jedes Tool, das behauptet, es könne das, lügt dich an oder bringt dir gerade eine teure Lektion bei.

Die zweite Kosten ist die ganze Hilfsarbeit drumherum. Zwischen acht Fenstern hin- und herklicken, um dich zu erinnern, wer gerade was macht. Nachsehen, ob Agent Nummer vier schon fertig ist. Den Build nochmal anwerfen, weil du nicht sicher bist, ob das letzte Diff noch kompiliert. Das Worktree jagen, das mit einem anderen Worktree kollidiert ist. Drei Absätze Agenten-Geplapper lesen, um den einen Satz zu finden, der sagt: ich bin blockiert. So oft den Kontext wechseln, dass deine besten Stunden weg sind, bevor du dich überhaupt zum Denken hinsetzt.

Dieser zweite Haufen ist auch echte Arbeit. Er ist nur in keinem sinnvollen Sinn deine. Er hat die Form eines Tools, nicht die Form eines Menschen. Ein Hilfskoch sollte ihn machen, und im Software-Fall heißt Hilfskoch: eine Maschine.

Und hier schnappt die Falle zu. Im Workflow aus Chat-Fenstern und Terminals liegen die beiden Kosten physisch ineinander. Das Urteil wohnt am selben Ort wie die Statusarbeit. Jedes Mal, wenn du nach einer echten Entscheidung greifst, watest du durch einen Sumpf aus Nachsehen und Nachfragen, um hinzukommen. Es fühlt sich an, als wäre das Urteil der Flaschenhals. Meistens steht das Urteil einfach nur hinter einer langen Schlange aus Verwaltung.

Trenn die beiden, und die Urteils-Steuer fällt kleiner aus, als der Tag sich angefühlt hat.

## Warum das übliche Setup es schlimmer macht

Chat-Fenster vergessen. Schließ den Tab, und der Kontext ist weg. Also wirst du das Gedächtnis und hältst den Zustand für jeden Agenten im Kopf. Terminals reden nicht miteinander, also ist Koordination etwas, das du manuell machst, per Alt-Tab. Und das Ticket-Board wurde gebaut, als noch Menschen die Arbeit machten und die Software danebensaß und zusah. Es hat keine Ahnung, dass ein Agent existiert.

Keines dieser Werkzeuge wurde für eine Welt entworfen, in der die meisten deiner Mitarbeiter keine Menschen sind. Sie wurden dafür zusammengezimmert. Genau dort kommt ein überraschend großer Teil der Orchestration Tax her: nicht aus den Agenten, nicht aus deinem Urteil, sondern aus den Nähten zwischen drei Tools, die nie dafür gedacht waren, ein Team aus Maschinen zu führen.

Liest man Osmanis Empfehlungen genau, drehen sie sich fast alle ums Schließen dieser Nähte. Und wenn man sie als Liste vor sich hat, springt einem etwas an: das meiste darin ist Arbeit, die eine Maschine übernehmen sollte.

## Vier von fünf gehören dem Hilfskoch

Osmani gibt fünf Ratschläge, wie man weniger Steuer zahlt. Liest man sie nebeneinander, hängt nur einer wirklich an dir. Die anderen vier beschreiben Arbeit, die eine Maschine erledigen sollte, lange bevor sie deinen Pass erreicht.

Der eine, der bleibt, ist die Delegation. Wie viele Agenten du parallel laufen lässt, richtet sich nach der Zahl, die du an einem Tag wirklich gründlich prüfst, und das sind bei den meisten niedrige einstellige Werte. Welche Arbeit sicher abzugeben ist und welche zu verzahnt dafür, entscheidest ebenfalls du. Diesen Teil kann dir niemand abnehmen, und ein gutes System sollte es nicht mal versuchen. Es sollte deine Zahl nur festhalten, statt dass du sie um 23 Uhr neu entdeckst, wenn das Dashboard dich anlügt.

Der Rest ist Hilfsarbeit, und hier wird das Prinzip konkret. Nimm die Verifikation, den Ratschlag, der am meisten zählt. "Baut das? Läuft das? Besteht es den Linter?" ist eine Frage, die kein Mensch vierzigmal am Tag beantworten sollte. Auf Infrastruktur-Ebene heißt das: bevor eine Änderung in deiner Queue landet, hat ein Prozess schon den Build angeworfen, den Linter gefahren und einen echten Dev-Server angesprochen, um zu sehen, ob das Ding überhaupt antwortet. Kaputte Builds und tote Server erreichen dich gar nicht. Wenn du draufschaust, hat die Arbeit die simplen Gates längst passiert, und übrig bleibt der Teil, der einen Menschen braucht. Das ist der Hilfskoch, der die Teller wegräumt, die offensichtlich zurückmüssen, damit am Pass nur die Entscheidungen ankommen, die wirklich du treffen musst.

Dasselbe Muster trägt die anderen drei. Zwei Köche, die sich am selben Schneidebrett ins Gehege kommen, sind kein Drama mehr, sobald jeder sein eigenes Brett hat. In Software ist das ein eigener Git-Worktree pro Agent auf eigenem Branch, kein Überschreiben mitten im Lauf. Berühren ihre Branches später dieselben Zeilen, wird daraus ein Merge-Konflikt, und der ist wieder Urteil, also landet er bei dir.

Fertige Arbeit muss auch nicht in dem Moment geprüft werden, in dem sie fertig wird. Sie kann in einer Spalte warten, die du abläufst, wenn du so weit bist, statt dass jeder Ping deine Aufmerksamkeit zurücksetzt. Und deine besten Stunden zu schützen ist dann keine eigene Disziplin mehr, sondern fällt von selbst ab. Ein System, das sich Arbeit zieht und nur auftaucht, wenn etwas zu entscheiden ist, lässt dir den Kopf fürs harte Problem, statt dich vor einem Fortschrittsbalken Wache stehen zu lassen.

Vier von fünf erledigt also das System. Der fünfte bleibt deiner, und er wird leichter, sobald die anderen vier dir aus dem Weg sind.

## Wo der Lock bei dir bleibt, mit Absicht

Bei einer Sache will ich vorsichtig sein, weil genau hier diese Art von Argument normalerweise anfängt zu lügen.

Ein automatischer Review-Schritt, der das Diff liest, die Checks fährt und entscheidet, ob die Arbeit es wert ist, ein Pull Request zu werden, ist Verifikation. Er filtert raus, was nicht reif ist, damit es dich nie erreicht. Er ersetzt dein Urteil nicht, und ich werde nicht so tun, als täte er es. Wird die Arbeit zum PR, prüft ein Mensch und merged ein Mensch. Dieses Review ist der Lock. Es war immer schon der Lock.

Was sich ändert, ist, wo der Lock sitzt und wie viel Müll davor liegt. Du holst ihn am Pull Request, auf Arbeit, die schon baut, schon Lint besteht, schon läuft. Du holst ihn nicht vierzigmal am Tag, um "ist der Build grün" zu beantworten, weil das eine Maschine beantwortet hat, bevor du mit der Frage aufgewacht bist.

Das GIL löst sich also nicht auf. Osmanis Kernaussage überlebt unversehrt, und das soll sie auch. Was sich verschieben lässt, ist der eine Lock an den Ort, wo Urteil wirklich lebt, und die Schlange davor.

## Der Teil, der dir bleibt

Du wirst weiter hart über harte Probleme nachdenken. Das war immer der Job, und es ist der gute Teil. Manchmal ist der beste Zug, den du machen kannst, jeden Agenten zu schließen, den Lock selbst zu halten und ein einziges, sperriges Problem anzustarren, bis es nachgibt. Osmani sagt das auch, und er hat recht.

Die Orchestration Tax ist echt. Die Frage, die sich lohnt: wie viel von deiner Rechnung ist wirklich deine? Bei mir stellte sich der größte Teil als Hilfsarbeit heraus, verkleidet als Urteil. Gib die Hilfsarbeit an die Maschinen, behalt das Schmecken am Pass, und die Arbeit fühlt sich wieder an wie Kochen statt wie Flugsicherung. (Genau diese Trennung versuche ich mit [Harmony](https://gethmy.com) in Infrastruktur zu gießen, falls dich interessiert, wie das in echt aussieht.)

Agenten brauchen dich nicht, um ihnen zuzusehen. Sie brauchen einen Ort zum Arbeiten, einen Weg zur Koordination und eine klare Linie zu der einen Person, deren Entscheidung noch zählt. Diese Person bist immer noch du. So soll es sein.
