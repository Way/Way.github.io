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

Letzte Woche hat Jack Dorsey bei Block [4.000 Menschen entlassen](https://x.com/jack/status/2027129697092731343). Nicht weil die Firma schrumpft. [Block wächst, Block ist profitabel](https://www.cnbc.com/2026/02/26/block-laying-off-about-4000-employees-nearly-half-of-its-workforce.html). Dorsey sagt: "The intelligence tools we're creating and using, paired with smaller and flatter teams, are enabling a new way of working which fundamentally changes what it means to build and run a company." Von über 10.000 auf knapp 6.000 Menschen. Kein schrittweiser Abbau, kein vorsichtiges Downsizing. [Ein Schnitt.](https://techcrunch.com/2026/02/26/jack-dorsey-block-layoffs-4000-halved-employees-your-company-is-next/)

Block ist dabei nur der lauteste Fall, nicht der größte. Allein in den [ersten sechs Wochen von 2026](https://technode.global/2026/02/13/tech-sector-layoffs-reach-30700-just-6-weeks-into-2026-on-track-to-surpass-2025s-job-cuts-rationalfx/) hat die Tech-Branche über 50.000 Stellen gestrichen. [Amazon baut 16.000 Corporate-Jobs ab](https://www.computerworld.com/article/3816579/tech-layoffs-this-year-a-timeline.html), vor allem in AWS und technischen Rollen. [Microsoft streicht 9.000 Stellen](https://www.computerworld.com/article/3816579/tech-layoffs-this-year-a-timeline.html). [Pinterest löst 15% der Belegschaft auf](https://www.cbsnews.com/news/ai-layoffs-2026-artificial-intelligence-amazon-pinterest/), um Ressourcen in AI umzuschichten. Auch in Deutschland ist der Schnitt längst angekommen: [SAP hat 10.000 Stellen abgebaut](https://www.produktion.de/wirtschaft/stellenabbau-rund-3500-menschen-verlassen-sap-367.html), allein in Deutschland 3.500, rund 14% der deutschen Belegschaft. Nicht wegen schlechter Zahlen. Wegen "Business AI". Das Muster ist überall dasselbe: profitable Unternehmen, die nicht schrumpfen, sondern sich für eine Welt umbauen, in der kleinere Teams mehr Output liefern.

Gleichzeitig zeigen Entwickler wie [Pieter Levels](https://x.com/levelsio/status/2027566773814403448), [Marc Lou](https://newsletter.marclou.com/p/i-made-1-032-000-in-2025) und [Theo (t3.gg)](https://www.youtube.com/watch?v=p2aea9dytpE), was auf der anderen Seite passiert. Alle drei bauen profitable Softwareprodukte, allein oder in Kleinstteams. Keine VC-Millionen, keine 50-Personen-Orgs. Stattdessen: volle Verantwortung für das gesamte Produkt und AI als Multiplikator für den eigenen Output.

Auf der einen Seite ein Konzern, der die Hälfte seiner Belegschaft streicht. Auf der anderen Einzelpersonen und Kleinstteams, die mit AI mehr schaffen als je zuvor. Dieselbe Botschaft: Code schreiben ist nicht mehr der Engpass. Und das verändert alles.

## Die alte Gleichung ist kaputt

Jahrzehntelang galt im Software-Engineering eine einfache Formel: Mehr Entwickler gleich mehr Features gleich mehr Wachstum. Firmen haben Teams aufgebaut, Headcount war ein Proxy für Produktivität, und die Fähigkeit, Code zu schreiben, war die zentrale Währung eines Entwicklers.

Diese Gleichung bricht gerade auseinander.

Die Zahlen sind eindeutig: [4% aller öffentlichen GitHub-Commits](https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point) werden heute schon von Claude Code geschrieben. SemiAnalysis prognostiziert über 20% bis Ende 2026. Das ist kein Experiment mehr. Das ist ein neuer Normalzustand, der sich gerade in Echtzeit etabliert.

Die Stimmen derjenigen, die das Handwerk über Jahrzehnte geprägt haben, sprechen eine klare Sprache. [Ryan Dahl](https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point), der Erfinder von Node.js, sagt offen: "The era of humans writing code is over." [Andrej Karpathy](https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point), einer der profiliertesten AI-Forscher weltweit, berichtet, dass seine eigene Fähigkeit, manuell Code zu schreiben, verkümmert. Er trennt inzwischen "Code generieren" und "Code beurteilen" klar als zwei eigenständige Fähigkeiten. Sogar [Linus Torvalds](https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point) vibe-codet öffentlich auf GitHub. Das sind keine Randpersonen. Das sind die Gründer und Ikonen des Handwerks.

Besonders bezeichnend: Boris Cherny, der Erfinder von Claude Code selbst, gibt an, dass [sein Team 100% des Codes über Claude Code und Opus schreibt](https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point). Der Toolmaker benutzt sein eigenes Tool nicht als Ergänzung, sondern als kompletten Ersatz für manuelles Coding. Was früher ein ganzes Team über Monate beschäftigt hätte, entsteht jetzt mit zwei bis drei Leuten in wenigen Wochen.

Das klingt erstmal nur nach Effizienzgewinn. Ist es aber nicht. Es ist ein Strukturbruch. Denn wenn der teuerste Teil der Feature-Pipeline (Code schreiben) plötzlich fast nichts mehr kostet, verschiebt sich der gesamte Wertschöpfungsschwerpunkt. Die Preise machen das greifbar: Ein Claude-Pro-Abo kostet [$20 im Monat](https://claude.com/pricing). Ein Wissensarbeiter kostet ein Unternehmen $350 bis $500 pro Tag. Selbst wenn der Agent nur einen Bruchteil des Tageswerks übernimmt, ist das ein ROI von 10x bis 30x. Code ist nicht einfach billiger geworden. Code ist fast gratis.

## Wo der neue Engpass liegt

Schau dir die typische Feature-Pipeline an: Nutzerproblem erkennen, Problem beschreiben, Lösung entwerfen, Arbeit scopen, Code schreiben, Review, Testen, Release planen, releasen. AI übernimmt zunehmend den Schritt "Code schreiben" und Teile von Review und Testing.

Was bleibt? Alles drumherum.

SemiAnalysis beschreibt das als [READ-THINK-WRITE-VERIFY-Zyklus](https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point): Agents lesen Kontext, denken nach, schreiben Output und verifizieren Ergebnisse. Der WRITE-Teil wird automatisiert. Aber READ (den richtigen Kontext verstehen), THINK (die richtigen Entscheidungen treffen) und VERIFY (sicherstellen, dass das Ergebnis stimmt) bleiben beim Menschen. Diese Aufteilung gilt übrigens nicht nur für Code. Sie betrifft jede Form von Wissensarbeit.

**Problemverständnis und Spezifikation:** Wer das Problem nicht richtig versteht, gibt dem Agent die falsche Aufgabe. Die Qualität des Outputs hängt direkt davon ab, wie präzise die Eingabe ist. Gute Tickets, klare UX-Entscheidungen, richtige Architektur: Das wird zum zentralen Hebel.

Dann Testing. AI-generierter Code ist nicht automatisch korrekt. Jemand muss End-to-End-Tests definieren, Edge Cases durchdenken, Monitoring aufsetzen, Rollback-Strategien planen. Das ist keine Fleißarbeit, das ist die Stelle, an der Fehler teuer werden.

**Ownership und Produktverantwortung:** Wer nutzt das Produkt? Was melden die Nutzer? Wie priorisieren wir? Diese Fragen kann kein Agent beantworten. Sie erfordern Kontakt zur Realität, nicht nur zum Code.

Und schließlich Release und Operations: Deployment-Pipelines, Observability, Incident Handling. Der Code mag fertig sein, aber "fertig" heißt nicht "live und stabil".

Der Engpass liegt nicht mehr bei "Wie schnell können wir das bauen?", sondern bei "Wissen wir überhaupt, was wir bauen sollten, und können wir sicherstellen, dass es funktioniert?"

## Kleine Teams, große Wirkung

Hier wird es für Unternehmen richtig unbequem. Wenn Code billig ist, braucht man weniger Köpfe zum Bauen. Aber die organisatorischen Strukturen, die für große Teams designt wurden (Genehmigungsprozesse, Hierarchien, Spezialisten-Silos) werden plötzlich zum Ballast.

Ein simples Beispiel: Ein neues AI-Modell in eine CLI einbauen ist technisch eine Zeile Code. In einem großen Unternehmen dauert das Wochen, weil Freigaben, Reviews und Prozesse dazwischenstehen. Ein kleines Team macht das in einer Stunde. Anthropic selbst liefert den Beweis: [Cowork](https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point), ihr Desktop-Tool für allgemeine Wissensarbeit, wurde von vier Engineers in zehn Tagen gebaut. Der Großteil des Codes stammt von Claude Code selbst. Vier Leute, zehn Tage, ein neues Produkt. Versuch das mal in einem Konzern mit dreißig Entwicklern und einem Quarterly Planning Cycle.

Und das skaliert. Zwei bis drei Engineers mit starken AI-Tools können eine Feature-Geschwindigkeit erreichen, die ein 50-Personen-Team nicht halten kann. Nicht weil die Einzelnen besser sind, sondern weil die organisatorische Reibung wegfällt.

Das Gegenmodell dazu: Solo-Entwickler wie Levels oder Lou, die ohne Slack, ohne Standups, ohne Approval-Chains arbeiten. Die stattdessen ihre Nutzer beobachten, Feedback in Stunden umsetzen und neue Produkte in Tagen statt Quartalen launchen.

Dazu kommt ein Effekt, der weniger sichtbar, aber genauso disruptiv ist: AI-Agents [untergraben klassische SaaS-Wettbewerbsvorteile](https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point). Switching Costs, UI-Lock-in, Integrationskomplexität: All das verliert an Bedeutung, wenn ein Agent direkt die Datenbank abfragen, Charts generieren und Stakeholder per Mail informieren kann. Kein Dashboard-Tool nötig, kein Retraining der Nutzer. Die Tool-Stacks schrumpfen mit den Teams.

Das ist kein Einzelfall. Das ist ein Muster, das sich gerade überall zeigt. Und es stellt die Grundannahme in Frage, auf der die meisten Tech-Unternehmen aufgebaut sind: dass Skalierung über Headcount läuft.

Natürlich gilt das nicht überall gleich. Regulierte Branchen, kritische Infrastruktur, Plattformen mit Millionen Nutzern: Dort braucht es auch in Zukunft größere Teams mit spezialisierten Rollen. Aber selbst dort verschiebt sich das Verhältnis. Und für die riesige Mehrheit der Software-Unternehmen ist die Analogie treffend: Was Amazon für den Einzelhandel war, könnten kleine, AI-getriebene Teams für die Branche werden. Der Vorteil liegt nicht in der Technologie selbst (die hat jeder), sondern in der Fähigkeit, sie ohne organisatorische Bremsen einzusetzen.

## Was die Layoff-Welle wirklich bedeutet

Dorseys Memo bei Block ist deshalb so bemerkenswert, weil er ausspricht, was viele denken, aber niemand sagt. Er entlässt nicht, weil die Zahlen schlecht sind. Er entlässt, weil er glaubt, dass das alte Modell nicht mehr wettbewerbsfähig ist.

["I think most companies are late. Within the next year, I believe the majority of companies will reach the same conclusion and make similar structural changes."](https://fortune.com/2026/02/27/block-jack-dorsey-ceo-xyz-stock-square-4000-ai-layoffs/)

Das ist eine Ansage. Nicht "wir passen uns an", sondern "wer sich nicht anpasst, wird dazu gezwungen."

Die Zahlen geben ihm Recht. [2025 wurden 55.000 Jobs explizit wegen AI gestrichen](https://www.cbsnews.com/news/ai-layoffs-2026-artificial-intelligence-amazon-pinterest/), zwölfmal mehr als noch zwei Jahre zuvor. 2026 liegt das Tempo nochmal deutlich höher. Amazons CEO spricht offen davon, White-Collar-Positionen durch AI Agents zu ersetzen. CrowdStrikes CEO nennt es einen ["market and technology inflection point"](https://www.cbsnews.com/news/ai-layoffs-2026-artificial-intelligence-amazon-pinterest/). Und [44% der US-Hiring-Manager](https://www.informationweek.com/it-staffing-careers/2026-tech-company-layoffs) erwarten, dass AI der Haupttreiber für weitere Stellenstreichungen wird.

Und das betrifft längst nicht nur Entwickler. [SemiAnalysis rechnet vor](https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point), dass weltweit über eine Milliarde Wissensarbeiter von der Automatisierung durch AI-Agents betroffen sein könnten. Finanzdienstleistungen, Rechtsberatung, Consulting, Healthcare: Überall dort, wo Menschen unstrukturierte Informationen lesen, verarbeiten und in Entscheidungen übersetzen, greift dieselbe Logik. [Accenture hat gerade den größten Enterprise-Deal der AI-Geschichte abgeschlossen](https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point) und trainiert 30.000 Berater auf Claude. Das Signal ist eindeutig: Der Strukturwandel beschränkt sich nicht auf die Tech-Branche. Er erfasst die gesamte Wissensökonomie.

Wer denkt, das sei ein rein amerikanisches Phänomen, sollte sich die Zahlen des [ifo Instituts](https://www.ifo.de/fakten/2025-06-05/ein-viertel-der-unternehmen-rechnet-mit-stellenabbau-durch-kuenstliche) anschauen: 27% der deutschen Unternehmen rechnen mit Stellenabbau durch KI in den nächsten fünf Jahren. In der Industrie sind es [über 37%](https://www.ifo.de/publikationen/2025/aufsatz-zeitschrift/mehr-ki-weniger-jobs-was-unternehmen-deutschland-erwarten). Das ist kein Silicon-Valley-Hype. Das ist die Einschätzung deutscher Mittelständler und Konzerne.

Und Dorsey wählt bewusst den harten Schnitt statt vieler kleiner Runden: ["Repeated rounds of cuts are destructive to morale, to focus, and to the trust that customers and shareholders place in our ability to lead."](https://www.newsweek.com/read-jack-dorseys-full-statement-block-layoffs-11590862)

Man kann das kaltschnäuzig finden. Man kann es auch als ehrliche Konsequenz einer Einsicht lesen: Wenn AI die Produktivität pro Kopf massiv steigert, dann ist eine Organisation mit 10.000 Menschen, die für eine Welt ohne AI gebaut wurde, schlicht falsch dimensioniert. Microsofts AI-Chef Mustafa Suleyman [prognostiziert](https://edition.cnn.com/2026/02/26/business/block-layoffs-ai-jack-dorsey), dass AI innerhalb von 12 bis 18 Monaten bei den meisten professionellen Aufgaben auf menschlichem Niveau arbeiten wird. [METR-Daten](https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point) zeigen, dass sich der autonome Task-Horizont von AI-Agents alle vier bis sieben Monate verdoppelt. Von Autocomplete-Snippets über mehrstündiges Modul-Refactoring bis hin zu mehrtägigen Audits. Die Fähigkeitskurve ist exponentiell. Ob daraus sofort Jobverluste folgen, ist eine andere Frage. Aber die Richtung ist klar.

## Was das für Entwickler bedeutet

Das ist der Punkt, an dem es persönlich wird. Wenn "Code schreiben" nicht mehr die zentrale Wertschöpfung ist, was bleibt dann für Entwickler?

Ich bin hier gleichzeitig alarmiert und optimistisch. Alarmiert, weil viele Entwickler sich genau in dem Bereich definieren, der gerade automatisiert wird: sauberer Code, elegante Implementierungen, technisches Handwerk. Karpathys Beobachtung trifft einen Nerv: Er beschreibt, wie seine Fähigkeit, manuell Code zu schreiben, aktiv verkümmert, weil er es kaum noch tut. Stattdessen liest er Code, beurteilt Code, gibt Richtung vor. "Generation and discrimination are different capabilities", [sagt er](https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point). Das ist die neue Realität.

Optimistisch bin ich trotzdem, weil die Rolle, die entsteht, eigentlich spannender ist.

Die neue Rolle sieht so aus:

**Problem-Übersetzer:** Nutzerprobleme verstehen, in klare Spezifikationen gießen, die richtigen Fragen stellen. Das erfordert Empathie, Domainwissen und Produktverständnis. Nichts davon kann ein Agent heute gut.

**System-Designer:** Architekturen entwerfen, Datenströme definieren, Observability planen, Failover-Strategien setzen. AI-generierter Code muss irgendwo sicher andocken. Wer diese Andockstellen nicht versteht, hat ein Problem.

Dazu kommt die undankbare, aber entscheidende Arbeit: Tests, Monitoring, Rollbacks, Incident Response. Qualitäts- und Risikomanagement. Das macht niemand gerne, aber genau hier wird über Erfolg und Misserfolg entschieden. Oder, in der Sprache des READ-THINK-WRITE-VERIFY-Frameworks: WRITE automatisiert sich. READ, THINK und VERIFY bleiben bei dir.

Und schließlich: **das eigene Produkt benutzen.** Nutzerfeedback auswerten, Prioritäten setzen, verstehen, warum ein Feature existiert. Nicht nur Backend-Tickets abarbeiten.

Entwickler, die nur tippen und weder testen noch ihr eigenes Produkt benutzen, werden ersetzbar. Entwickler, die Verantwortung übernehmen, die über Code hinausgeht, werden wertvoller als je zuvor.

## "Automate Yourself"

Ein Gedanke, der zunächst paradox klingt: Automatisiere deine eigene Arbeit. Bewusst. Proaktiv.

Die Logik dahinter: Wenn du die AI dazu bringst, deinen Code zu schreiben, lernst du die Prozesse drumherum kennen. Testing, Deployment, Monitoring, Incident Handling. Du verschaffst dir Kontrolle über das Gesamtprodukt. Und du wirst zur Person, die Agents orchestriert, statt von ihnen ersetzt zu werden.

Das ist kein Zynismus. Es ist eine Überlebensstrategie. Wer versteht, wie der gesamte Delivery-Prozess funktioniert (nicht nur das Coding), ist genau die Person, die in einer AI-Welt gebraucht wird. Denn irgendwer muss definieren, was die Agents tun, prüfen, ob sie es richtig tun, und die Verantwortung übernehmen, wenn es schiefgeht. Malte Ubl, CTO von Vercel, [beschreibt genau das als seinen neuen Job](https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point): nicht mehr selbst Code schreiben, sondern AI-Outputs reviewen, Richtung geben, Qualität sichern. Das ist keine Degradierung. Das ist die Rolle, die in einer AI-first-Welt den meisten Impact hat.

## Was bleibt

Das alte Modell ("viele Engineers, viel Code, langsamer Prozess") stirbt. Das ist keine Prognose mehr, das passiert gerade. [Block macht den Schnitt.](https://sfstandard.com/2026/02/26/block-lays-off-staff/) Startups zeigen, was kleine Teams können. Solo-Entwickler bauen Millionen-Businesses. [Laut Stack Overflow](https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point) nutzen bereits 84% aller Entwickler AI-Tools, aber nur 31% arbeiten mit Coding-Agents. Die nächste Welle steht erst am Anfang.

Das neue Modell ist: wenige Köpfe mit viel Verantwortung, starker AI-Unterstützung und extrem schneller Iteration.

Das bedeutet mehr Unsicherheit für Entwickler, die sich über die Anzahl abgearbeiteter Tickets definieren. Und gleichzeitig einen massiven Machtzuwachs für alle, die bereit sind, Verantwortung zu übernehmen, die über Code hinausgeht.

Die Frage ist nicht, ob AI das Engineering verändert. Die Frage ist, ob du die Person bist, die Agents orchestriert, oder die Person, die von ihnen ersetzt wird. Und diese Entscheidung liegt, Stand heute, noch bei dir.
