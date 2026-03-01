---
title: 'Code ist billig geworden. Was jetzt zählt.'
language: de
description: 'AI macht Codezeilen praktisch gratis. Das verschiebt den Engpass von der Implementierung hin zu Problemverständnis, Testing und Ownership. Große Teams werden schrumpfen, kleine Teams werden Konzerne überholen. Die Frage ist nicht, ob das passiert, sondern ob du auf der richtigen Seite stehst.'
pubDate: '2026-03-01'
visualTheme: 'towers'
prompt: 'Wie verändert die radikale Verbilligung von Code durch AI die Struktur von Engineering-Teams, die Rolle von Entwicklern und den Wettbewerb zwischen großen Konzernen und kleinen, fokussierten Teams?'
tags:
  [
    'AI',
    'Software Engineering',
    'Layoffs',
    'Teamstruktur',
    'Zukunft der Arbeit',
  ]
---

Letzte Woche hat Jack Dorsey bei Block [4.000 Leute entlassen](https://x.com/jack/status/2027129697092731343). Nicht weil die Firma schrumpft. [Block wächst, Block ist profitabel](https://www.cnbc.com/2026/02/26/block-laying-off-about-4000-employees-nearly-half-of-its-workforce.html). Dorsey sagt: "The intelligence tools we're creating and using, paired with smaller and flatter teams, are enabling a new way of working which fundamentally changes what it means to build and run a company." Von über 10.000 auf knapp 6.000 Mitarbeitende. Kein schrittweiser Abbau, kein vorsichtiges Downsizing. [Ein Schnitt.](https://techcrunch.com/2026/02/26/jack-dorsey-block-layoffs-4000-halved-employees-your-company-is-next/)

Gleichzeitig zeigen Leute wie [Pieter Levels](https://x.com/levelsio/status/2027566773814403448) und [Marc Lou](https://newsletter.marclou.com/p/i-made-1-032-000-in-2025), was passiert, wenn Einzelpersonen AI konsequent für sich arbeiten lassen. Levels baut mit [PhotoAI](https://www.indiehackers.com/post/photo-ai-by-pieter-levels-complete-deep-dive-case-study-0-to-132k-mrr-in-18-months-3a9a2b1579) ein Produkt, das über $130.000 MRR generiert. Lou hat [2025 über eine Million Dollar Umsatz gemacht](https://indiepattern.com/stories/marc-lou/), allein, mit einem Dutzend Produkten, die er in absurder Geschwindigkeit rausfeuert. Beide sind keine klassischen Tech-Gründer mit VC-Backing und 50-Personen-Teams. Es sind Einzelpersonen, die genau verstehen, was ihre Nutzer brauchen, und AI nutzen, um die Umsetzung so schnell wie möglich hinter sich zu bringen.

Und [Theo (t3.gg)](https://www.youtube.com/watch?v=p2aea9dytpE) zeigt, wie sein kleines Team mit AI-Agents in wenigen Wochen eine Frame.io-Alternative baut, für die ein klassisches Unternehmen Monate und ein Dutzend Entwickler gebraucht hätte.

Drei völlig verschiedene Perspektiven. Dieselbe Botschaft: Code schreiben ist nicht mehr der Engpass. Und das verändert alles.

## Die alte Gleichung ist kaputt

Jahrzehntelang galt im Software-Engineering eine einfache Formel: Mehr Entwickler gleich mehr Features gleich mehr Wachstum. Firmen haben Teams aufgebaut, Headcount war ein Proxy für Produktivität, und die Fähigkeit, Code zu schreiben, war die zentrale Währung eines Entwicklers.

Diese Gleichung bricht gerade auseinander.

AI-Agents können heute Code schreiben, Tests generieren, PRs öffnen und Reviews vorbereiten. Nicht perfekt, nicht immer. Aber schnell genug und gut genug, um die Kosten einer Codezeile gegen null zu drücken. Theos Tool "lawn" (eine Video-Review-Plattform als Frame.io-Alternative) wurde zu großen Teilen von Agents geschrieben. Was früher ein ganzes Team über Monate beschäftigt hätte, entsteht jetzt mit zwei bis drei Leuten in wenigen Wochen.

Das klingt erstmal nur nach Effizienzgewinn. Ist es aber nicht. Es ist ein Strukturbruch. Denn wenn der teuerste Teil der Feature-Pipeline (Code schreiben) plötzlich fast nichts mehr kostet, verschiebt sich der gesamte Wertschöpfungsschwerpunkt.

## Wo der neue Engpass liegt

Schau dir die typische Feature-Pipeline an: Nutzerproblem erkennen, Problem beschreiben, Lösung entwerfen, Arbeit scopen, Code schreiben, Review, Testen, Release planen, releasen. AI übernimmt zunehmend den Schritt "Code schreiben" und Teile von Review und Testing.

Was bleibt? Alles drumherum.

**Problemverständnis und Spezifikation:** Wer das Problem nicht richtig versteht, gibt dem Agent die falsche Aufgabe. Die Qualität des Outputs hängt direkt davon ab, wie präzise die Eingabe ist. Gute Tickets, klare UX-Entscheidungen, richtige Architektur: Das wird zum zentralen Hebel.

Dann Testing. AI-generierter Code ist nicht automatisch korrekt. Jemand muss End-to-End-Tests definieren, Edge Cases durchdenken, Monitoring aufsetzen, Rollback-Strategien planen. Das ist keine Fleißarbeit, das ist die Stelle, an der Fehler teuer werden.

**Ownership und Produktverantwortung:** Wer nutzt das Produkt? Was melden die Nutzer? Wie priorisieren wir? Diese Fragen kann kein Agent beantworten. Sie erfordern Kontakt zur Realität, nicht nur zum Code.

Und schließlich Release und Operations: Deployment-Pipelines, Observability, Incident Handling. Der Code mag fertig sein, aber "fertig" heißt nicht "live und stabil".

Der Engpass liegt nicht mehr bei "Wie schnell können wir das bauen?", sondern bei "Wissen wir überhaupt, was wir bauen sollten, und können wir sicherstellen, dass es funktioniert?"

## Kleine Teams, große Wirkung

Hier wird es für Unternehmen richtig unbequem. Wenn Code billig ist, braucht man weniger Leute zum Bauen. Aber die organisatorischen Strukturen, die für große Teams designt wurden (Genehmigungsprozesse, Hierarchien, Spezialisten-Silos) werden plötzlich zum Ballast.

Ein simples Beispiel: Ein neues AI-Modell in eine CLI einbauen ist technisch eine Zeile Code. In einem großen Unternehmen dauert das Wochen, weil Freigaben, Reviews und Prozesse dazwischenstehen. Ein kleines Team macht das in einer Stunde.

Und das skaliert. Zwei bis drei Leute mit starken AI-Tools können eine Feature-Geschwindigkeit erreichen, die ein 50-Personen-Team nicht halten kann. Nicht weil die Einzelnen besser sind, sondern weil die organisatorische Reibung wegfällt.

Das Gegenmodell dazu: Solo-Entwickler wie Levels oder Lou, die ohne Slack, ohne Standups, ohne Approval-Chains arbeiten. Die stattdessen ihre Nutzer beobachten, Feedback in Stunden umsetzen und neue Produkte in Tagen statt Quartalen launchen.

Das ist kein Einzelfall. Das ist ein Muster, das sich gerade überall zeigt. Und es stellt die Grundannahme in Frage, auf der die meisten Tech-Unternehmen aufgebaut sind: dass Skalierung über Headcount läuft.

Natürlich gilt das nicht überall gleich. Regulierte Branchen, kritische Infrastruktur, Plattformen mit Millionen Nutzern: Dort braucht es auch in Zukunft größere Teams mit spezialisierten Rollen. Aber selbst dort verschiebt sich das Verhältnis. Und für die riesige Mehrheit der Software-Unternehmen ist die Analogie treffend: Was Amazon für den Einzelhandel war, könnten kleine, AI-getriebene Teams für die Branche werden. Der Vorteil liegt nicht in der Technologie selbst (die hat jeder), sondern in der Fähigkeit, sie ohne organisatorische Bremsen einzusetzen.

## Was die Block-Layoffs wirklich bedeuten

Dorseys Memo bei Block ist deshalb so bemerkenswert, weil er ausspricht, was viele denken, aber niemand sagt. Er entlässt nicht, weil die Zahlen schlecht sind. Er entlässt, weil er glaubt, dass das alte Modell nicht mehr wettbewerbsfähig ist.

["I think most companies are late. Within the next year, I believe the majority of companies will reach the same conclusion and make similar structural changes."](https://fortune.com/2026/02/27/block-jack-dorsey-ceo-xyz-stock-square-4000-ai-layoffs/)

Das ist eine Ansage. Nicht "wir passen uns an", sondern "wer sich nicht anpasst, wird dazu gezwungen."

Und er wählt bewusst den harten Schnitt statt vieler kleiner Runden: ["Repeated rounds of cuts are destructive to morale, to focus, and to the trust that customers and shareholders place in our ability to lead."](https://www.newsweek.com/read-jack-dorseys-full-statement-block-layoffs-11590862)

Man kann das kaltschnäuzig finden. Man kann es auch als ehrliche Konsequenz einer Einsicht lesen: Wenn AI die Produktivität pro Kopf massiv steigert, dann ist eine Organisation mit 10.000 Leuten, die für eine Welt ohne AI gebaut wurde, schlicht falsch dimensioniert. Microsofts AI-Chef Mustafa Suleyman [prognostiziert](https://edition.cnn.com/2026/02/26/business/block-layoffs-ai-jack-dorsey), dass AI innerhalb von 12 bis 18 Monaten bei den meisten professionellen Aufgaben auf menschlichem Niveau arbeiten wird. Ob daraus sofort Jobverluste folgen, ist eine andere Frage. Aber die Richtung ist klar.

## Was das für Entwickler bedeutet

Das ist der Punkt, an dem es persönlich wird. Wenn "Code schreiben" nicht mehr die zentrale Wertschöpfung ist, was bleibt dann für Entwickler?

Ich bin hier gleichzeitig alarmiert und optimistisch. Alarmiert, weil viele Entwickler sich genau in dem Bereich definieren, der gerade automatisiert wird: sauberer Code, elegante Implementierungen, technisches Handwerk. Optimistisch, weil die Rolle, die entsteht, eigentlich spannender ist.

Die neue Rolle sieht so aus:

**Problem-Übersetzer:** Nutzerprobleme verstehen, in klare Spezifikationen gießen, die richtigen Fragen stellen. Das erfordert Empathie, Domainwissen und Produktverständnis. Nichts davon kann ein Agent heute gut.

**System-Designer:** Architekturen entwerfen, Datenströme definieren, Observability planen, Failover-Strategien setzen. AI-generierter Code muss irgendwo sicher andocken. Wer diese Andockstellen nicht versteht, hat ein Problem.

Dazu kommt die undankbare, aber entscheidende Arbeit: Tests, Monitoring, Rollbacks, Incident Response. Qualitäts- und Risikomanagement. Das macht niemand gerne, aber genau hier wird über Erfolg und Misserfolg entschieden.

Und schließlich: **das eigene Produkt benutzen.** Nutzerfeedback auswerten, Prioritäten setzen, verstehen, warum ein Feature existiert. Nicht nur Backend-Tickets abarbeiten.

Entwickler, die nur tippen und weder testen noch ihr eigenes Produkt benutzen, werden ersetzbar. Entwickler, die Verantwortung übernehmen, die über Code hinausgeht, werden wertvoller als je zuvor.

## "Automate Yourself"

Ein Gedanke, der zunächst paradox klingt: Automatisiere deine eigene Arbeit. Bewusst. Proaktiv.

Die Logik dahinter: Wenn du die AI dazu bringst, deinen Code zu schreiben, lernst du die Prozesse drumherum kennen. Testing, Deployment, Monitoring, Incident Handling. Du verschaffst dir Kontrolle über das Gesamtprodukt. Und du wirst zur Person, die Agents orchestriert, statt von ihnen ersetzt zu werden.

Das ist kein Zynismus. Es ist eine Überlebensstrategie. Wer versteht, wie der gesamte Delivery-Prozess funktioniert (nicht nur das Coding), ist genau die Person, die in einer AI-Welt gebraucht wird. Denn irgendwer muss definieren, was die Agents tun, prüfen, ob sie es richtig tun, und die Verantwortung übernehmen, wenn es schiefgeht.

## Was bleibt

Das alte Modell ("viele Engineers, viel Code, langsamer Prozess") stirbt. Das ist keine Prognose mehr, das passiert gerade. [Block macht den Schnitt.](https://sfstandard.com/2026/02/26/block-lays-off-staff/) Startups zeigen, was kleine Teams können. Solo-Entwickler bauen Millionen-Businesses.

Das neue Modell ist: wenige Leute mit viel Verantwortung, starker AI-Unterstützung und extrem schneller Iteration.

Das bedeutet mehr Unsicherheit für Entwickler, die sich über die Anzahl abgearbeiteter Tickets definieren. Und gleichzeitig einen massiven Machtzuwachs für alle, die bereit sind, Verantwortung zu übernehmen, die über Code hinausgeht.

Die Frage ist nicht, ob AI das Engineering verändert. Die Frage ist, ob du die Person bist, die Agents orchestriert, oder die Person, die von ihnen ersetzt wird. Und diese Entscheidung liegt, Stand heute, noch bei dir.
