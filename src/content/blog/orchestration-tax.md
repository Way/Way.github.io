---
title: 'Die Orchestration Tax ist echt. Das meiste davon ist Busywork.'
language: de
description: 'Addy Osmani hat recht: Du kannst dein eigenes Urteil nicht parallelisieren. Aber das, was acht Agenten gleichzeitig so zermürbend macht, war zum größten Teil nie Urteil. Es war Tooling, das nie für Maschinen gebaut wurde.'
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

[Addy Osmani](https://addyosmani.com/blog/orchestration-tax/) hat letzte Woche etwas in Worte gefasst, das viele schon im Bauch gespürt haben, bevor es einen Namen hatte. Einen Agenten zu starten kostet fast nichts. Das, was er produziert, zu lesen, zu verstehen und in eine Codebase zu mergen, die weiter funktionieren muss: das kostet genau so viel wie immer. Lässt du acht Agenten gleichzeitig laufen, bekommst du nicht den achtfachen Output. Du bekommst eine sehr tiefe Queue, die einen einzigen Reviewer füttert. Dich.

Osmani nennt das die Orchestration Tax, und das Bild, zu dem er greift, kommt aus der Programmierung: du bist das [GIL](https://addyosmani.com/blog/orchestration-tax/), der Global Interpreter Lock. Deine Agenten laufen nebenläufig. Jede Arbeit, die echtes Urteil braucht, muss zuerst deinen Lock holen, und es gibt genau einen Lock, und du hältst ihn. Amdahls Gesetz macht den Rest. Der serielle Anteil setzt die Decke, egal wie viele Worker du auf den parallelen Teil wirfst.

Er hat recht. Das will ich klar sagen, bevor ich irgendwas hinzufüge, weil der bequeme Reflex hier wäre, den Essay mit einem Pitch wegzuwischen. Du kannst dich nicht parallelisieren. Zwanzig laufende Agenten und ein Dashboard voller grüner Häkchen können sich anfühlen wie der produktivste Tag deines Lebens, während fast nichts in main landet. Beschäftigt sein und produktiv sein sind schon lange zwei verschiedene Dinge. Agenten haben den Abstand nur lauter gemacht.

Über die Steuer streite ich also nicht. Ich will genauer hinsehen, was eigentlich drinsteckt.

## Zwei Kosten im selben Mantel

Wenn du eine Handvoll Agenten durch ein normales Setup orchestrierst, ein paar Chat-Fenster, drei Terminals, ein Ticket-Board, das älter ist als das ganze Thema, verschmelzen zwei sehr unterschiedliche Kosten zu einem einzigen Gefühl von Überforderung.

Die erste ist Urteil. Gehört diese Änderung in die Codebase? Hat der Agent das richtige Problem gelöst oder den plausibel aussehenden Nachbarn daneben? Tut diese Abstraktion in drei Monaten weh? Wenn zwei Branches dieselbe Datei anfassen, welcher hat recht? Diese Arbeit ist deine. Sie ist nicht reduzierbar. Kein Tool darf diesen Lock für dich halten, und jedes Tool, das behauptet, es könne das, lügt dich an oder bringt dir gerade eine teure Lektion bei.

Die zweite Kosten ist alles um das Urteil herum. Zwischen acht Fenstern hin- und herklicken, um dich zu erinnern, wer gerade was macht. Nachsehen, ob Agent Nummer vier schon fertig ist. Den Build nochmal anwerfen, weil du nicht sicher bist, ob das letzte Diff noch kompiliert. Das Worktree jagen, das mit einem anderen Worktree kollidiert ist. Drei Absätze Agenten-Geplapper lesen, um den einen Satz zu finden, der sagt: ich bin blockiert. So oft den Kontext wechseln, dass deine besten Stunden weg sind, bevor du dich überhaupt zum Denken hinsetzt.

Dieser zweite Haufen ist auch echte Arbeit. Er ist nur in keinem sinnvollen Sinn deine. Er hat die Form eines Tools, nicht die Form eines Menschen. Eine Maschine sollte fast alles davon erledigen.

Und hier schnappt die Falle zu. Im Chat-Fenster-und-Terminal-Workflow liegen die beiden Kosten physisch ineinander. Das Urteil wohnt am selben Ort wie das Babysitten. Jedes Mal, wenn du nach einer echten Entscheidung greifst, watest du durch einen Sumpf aus Status-Checks, um hinzukommen. Es fühlt sich an, als wäre das Urteil der Flaschenhals. Meistens steht das Urteil einfach nur hinter einer langen Schlange aus Overhead.

Trenn die beiden, und die Urteils-Steuer fällt kleiner aus, als der Tag sich angefühlt hat.

## Warum das übliche Setup es schlimmer macht

Chat-Fenster vergessen. Schließ den Tab, und der Kontext ist weg. Also wirst du das Gedächtnis und hältst den Zustand für jeden Agenten im Kopf. Terminals reden nicht miteinander, also ist Koordination etwas, das du manuell machst, per Alt-Tab. Und das Ticket-Board wurde gebaut, als noch Menschen die Arbeit machten und die Software danebensaß und zusah. Es hat keine Ahnung, dass ein Agent existiert.

Keines dieser Werkzeuge wurde für eine Welt entworfen, in der die meisten deiner Mitarbeiter keine Menschen sind. Sie wurden dafür zusammengezimmert. Genau dort kommt ein überraschend großer Teil der Orchestration Tax her: nicht aus den Agenten, nicht aus deinem Urteil, sondern aus den Nähten zwischen drei Tools, die nie dafür gedacht waren, ein Team aus Maschinen zu führen.

Liest man Osmanis Empfehlungen genau, drehen sie sich fast alle ums Schließen dieser Nähte. Und wenn man sie als Liste vor sich hat, springt einem etwas an: vier von fünf sind Dinge, die Infrastruktur einfach für dich tun sollte.

## Die Empfehlungen als Infrastruktur-Spec gelesen

Osmani gibt fünf Ratschläge, wie man weniger Steuer zahlt. Vier davon sind in Wahrheit Aufgaben für eine Maschine.

Skalier deine Agentenzahl an deiner Review-Kapazität. Die richtige Zahl paralleler Agenten ist die, die du wirklich gründlich prüfen kannst, und das sind für die meisten Menschen niedrige einstellige Werte. Das gehört kein Bauchgefühl, das gehört eine Konfiguration und ein Budget-Gate, das vor jeder einzelnen Arbeit greift. Du setzt die Decke einmal, statt sie um 23 Uhr neu zu entdecken, wenn das Dashboard dich anlügt.

Delegier das Isolierbare, behalt das Verzahnte. Was du abgibst, entscheidest du. Das ist Urteil und bleibt bei dir. Was verschwinden sollte, sind die Kosten der Isolation selbst: jeder Agent arbeitet in seinem eigenen Git-Worktree auf seinem eigenen Branch, sodass zwei parallele Agenten sich nie mitten im Lauf die Dateien überschreiben. Die halbfertige Datei, an der zwei gleichzeitig editiert haben, hört auf, ein Ding zu sein, das passieren kann. Berühren ihre Branches später dieselben Zeilen, ist das ein Merge-Konflikt, und den aufzulösen ist Urteil, also kommt es zu dir zurück.

Bündel deine Reviews. Interrupt-getriebenes Review ist die teuerste Sorte, weil jeder Ping deine Aufmerksamkeit zurücksetzt. Fertige Arbeit gehört in eine Review-Spalte und sollte dort warten. Eine Queue, die du abläufst, wenn du es entscheidest, kein Strom aus Benachrichtigungen, der deinen Tag bestimmt. Das Bündeln muss strukturell sein. Sonst brauchst du die Disziplin, und Disziplin um 17 Uhr ist ein schlechter Plan.

Automatisier die Verifikation, damit du Urteil nur dort ausgibst, wo Urteil nötig ist. Das ist der Punkt, der am meisten zählt. Bevor irgendwas dich erreicht, läuft der Build, läuft der Linter, und es prüft ein lebender Dev-Server, ob das Ding überhaupt antwortet. Kaputte Builds und tote Server sollten gar nicht erst in deiner Queue landen. Wenn du auf eine Änderung schaust, hat sie die dummen Gates schon passiert, und übrig bleibt nur der Teil, der einen Menschen braucht.

Schütz deine besten Stunden fürs Denken. Ein gutes System ist push-basiert. Agenten ziehen sich Karten selbst, so wie ein Kollege es täte, arbeiten, während du etwas anderes tust, und tauchen auf, wenn es etwas zu entscheiden gibt. Kein Pollen, kein "ist es schon fertig", kein Wachestehen vor einem Fortschrittsbalken. Deine besten Stunden gehen an das harte Problem statt ans Dashboard.

Vier von fünf erledigt das System selbst. Und der fünfte, was du delegierst, wird billiger, sobald Isolation aufhört, dein Problem zu sein.

## Wo der Lock bei dir bleibt, mit Absicht

Bei einer Sache will ich vorsichtig sein, weil genau hier diese Art von Argument normalerweise anfängt zu lügen.

Ein automatischer Review-Schritt, der das Diff liest, die Checks fährt und entscheidet, ob die Arbeit es wert ist, ein Pull Request zu werden, ist Verifikation. Er filtert raus, was nicht reif ist, damit es dich nie erreicht. Er ersetzt dein Urteil nicht, und ich werde nicht so tun, als täte er es. Wird die Arbeit zum PR, prüft ein Mensch und merged ein Mensch. Dieses Review ist der Lock. Es war immer schon der Lock.

Was sich ändert, ist, wo der Lock sitzt und wie viel Müll davor liegt. Du holst ihn am Pull Request, auf Arbeit, die schon baut, schon Lint besteht, schon läuft. Du holst ihn nicht vierzigmal am Tag, um "ist der Build grün" zu beantworten, weil das eine Maschine beantwortet hat, bevor du mit der Frage aufgewacht bist.

Das GIL löst sich also nicht auf. Osmanis Kernaussage überlebt unversehrt, und das soll sie auch. Was sich verschieben lässt, ist der eine Lock an den Ort, wo Urteil wirklich lebt, und die Schlange davor.

## Der Teil, der dir bleibt

Du wirst weiter hart über harte Probleme nachdenken. Das war immer der Job, und es ist der gute Teil. Manchmal ist der beste Zug, den du machen kannst, jeden Agenten zu schließen, den Lock selbst zu halten und ein einziges, sperriges Problem anzustarren, bis es nachgibt. Osmani sagt das auch, und er hat recht.

Die Orchestration Tax ist echt. Die Frage, die sich lohnt: wie viel von deiner Rechnung ist wirklich deine? Bei mir war das meiste Busywork im Kostüm des Urteils. Schieb das Busywork zu den Maschinen, behalt das Urteil, und die Arbeit fühlt sich wieder an wie Bauen statt wie Flugsicherung. (Genau diese Trennung versuche ich mit [Harmony](https://gethmy.com) in Infrastruktur zu gießen, falls dich interessiert, wie das in echt aussieht.)

Agenten brauchen dich nicht, um ihnen zuzusehen. Sie brauchen einen Ort zum Arbeiten, einen Weg zur Koordination und eine klare Linie zu der einen Person, deren Entscheidung noch zählt. Diese Person bist immer noch du. So soll es sein.
