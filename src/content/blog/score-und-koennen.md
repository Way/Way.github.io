---
title: 'Der Score und das Können'
language: de
description: 'Benchmarks haben Modelle vergleichbar gemacht, mit Scores und Leaderboards für alles, was sich sauber zählen lässt. Aber ob ein Modell im echten Einsatz taugt, entscheidet sich an den Dingen, die keine Zahl einfängt, genau wie bei der Bewertung von Menschen. Über das, was der Benchmark misst, das, was er übersieht, und warum am Ende wieder jemand hinschauen und urteilen muss.'
draft: true
pubDate: '2026-07-10'
visualTheme: 'cockpit'
prompt: 'Benchmarks messen Modelle über Scores und KPIs. Aber das Entscheidende an einem Modell oder Agenten lässt sich oft genauso wenig in Zahlen fassen wie die Leistung eines Menschen. Was misst der Benchmark, und was übersieht er?'
tags:
  [
    'AI',
    'Benchmarks',
    'Evals',
    'Agenten',
    'Bewertung',
  ]
---

Robert McNamara führte den Vietnamkrieg mit Kennzahlen. Der US-Verteidigungsminister kam aus der Autoindustrie, er glaubte an Zahlen, und die Zahl, die den Fortschritt zeigen sollte, war der body count, die Menge getöteter Gegner. Sie ließ sich sauber erheben, in Tabellen gießen und jeden Morgen aufs Neue vergleichen. Mit der Frage, ob dieser Krieg zu gewinnen war, hatte sie am Ende wenig zu tun. Was den Ausgang wirklich bestimmte, der Rückhalt in der Bevölkerung, die Legitimität, der Wille der anderen Seite, stand auf keinem Formular.

Der Sozialforscher Daniel Yankelovich hat daraus Anfang der 1970er einen [Denkfehler in vier Schritten](https://en.wikipedia.org/wiki/McNamara_fallacy) beschrieben, der heute McNamaras Namen trägt. Zuerst misst du, was sich leicht messen lässt. Dann lässt du beiseite, was sich schlecht messen lässt, oder gibst ihm einen willkürlichen Wert. Im dritten Schritt hältst du das schwer Messbare für nicht so wichtig. Und im vierten erklärst du das, was sich gar nicht messen lässt, kurzerhand für nicht existent. Den letzten Schritt nannte Yankelovich Selbstmord.

Ich musste an diese Geschichte denken, als ich mir angeschaut habe, wie wir heute die Leistung von KI-Modellen bewerten. Das Grundmuster ist nämlich dasselbe geblieben.

## Wie wir Modelle heute messen

Die Bewertung von Modellen ist in wenigen Jahren zu einer eigenen Disziplin geworden, und das aus gutem Grund. Ohne Benchmarks wäre jeder Fortschritt reine Behauptung. Es gibt Tests für breites Wissen quer durch die Fächer, es gibt [GPQA](https://arxiv.org/abs/2311.12022) mit 448 Fragen, die sich Fachleute aus Biologie, Physik und Chemie ausgedacht haben und an denen selbst promovierte Experten hängen bleiben, und es gibt SWE-bench, wo Modelle echte Bugs in echten Code-Repositories fixen sollen. Diese Tests haben aus einem diffusen „fühlt sich schlauer an" eine Zahl gemacht, mit der sich zwei Labore, zwei Modelle und zwei Versionen überhaupt erst vergleichen lassen.

Und Zahlen sind praktisch. Sie passen auf eine Folie, in eine Pressemitteilung, in ein Ranking. Wie hart die Tests sind, sieht man an GPQA: GPT-4 kam dort anfangs auf 39 Prozent, während die Fachleute selbst bei rund 65 lagen. Ein Modell springt von einer Version zur nächsten ein paar Punkte nach oben, und alle wissen sofort, in welche Richtung es ging. Genau diese Handlichkeit ist ihre Stärke. Und sie ist der Anfang des Problems.

## Wenn der Score zum Ziel wird

Der Anthropologin Marilyn Strathern verdanken wir den Satz, der das Problem auf den Punkt bringt: [Sobald ein Maß zum Ziel wird, taugt es nicht mehr als Maß](https://gwern.net/doc/statistics/decision/1997-strathern.pdf). Meistens läuft der Gedanke unter dem Namen Goodharts Gesetz, nach dem Ökonomen Charles Goodhart, der 1975 etwas Ähnliches über geldpolitische Kennzahlen gesagt hatte. Die eingängige Fassung stammt von Strathern, aus dem Jahr 1997, und sie handelte damit von Prüfungen an Universitäten, nicht von Maschinen.

In dem Moment, in dem ein Benchmark darüber entscheidet, welches Modell die Schlagzeile bekommt, wird er selbst zum Ziel. Und das hat handfeste Folgen.

Zum einen wandern Testaufgaben oder sehr ähnliche ins Trainingsmaterial. Scale AI hat das 2024 sauber gezeigt. Das Team baute mit [GSM1k](https://arxiv.org/abs/2405.00332) einen frischen Satz von 1.250 Grundschul-Matheaufgaben, exakt so schwer wie der etablierte Test GSM8k, den alle Modelle kennen. Auf dem frischen Satz fielen manche Modelle um bis zu 8 Prozentpunkte ab, einzelne Familien wie Phi und Mistral deutlich stärker. Ein klares Zeichen, dass ein Teil ihrer Glanzleistung schlicht auswendig gelernt war. Fair bleibt zu sagen: Die Spitzenmodelle von OpenAI und Anthropic zeigten kaum Abfall, und rechnen konnten am Ende alle. Auswendiglernen heißt nicht Unfähigkeit. Aber der Score allein verrät dir nicht, was davon Können war und was Gedächtnis.

Und dann ist da der Fall, der mich am meisten überzeugt hat. Als OpenAI 2024 den SWE-bench genauer unter die Lupe nahm, fand das Team drei [Messfehler](https://openai.com/index/introducing-swe-bench-verified/): Die Tests waren oft zu streng und verwarfen korrekte Lösungen, viele Aufgaben waren unklar beschrieben, und manche Entwicklungsumgebungen ließen sich gar nicht sauber aufsetzen. Sie reparierten den Benchmark und prüften jede Aufgabe von Hand nach. Auf dem bereinigten Testsatz sprang derselbe GPT-4o von 16 auf 33 Prozent. Das Modell hatte sich nicht verändert. Vorher war einfach das Maß kaputt. Ein halber Score war reine Messqualität.

## Was der Benchmark nicht sieht

Das eigentlich Entscheidende an einem guten Modell zeigt sich ohnehin selten in der einen Aufgabe, die man sauber abhaken kann. Es zeigt sich an den Rändern. Weiß das Modell, wann es etwas nicht weiß, oder halluziniert es mit derselben Souveränität wie bei einer richtigen Antwort? Fragt es nach, wenn eine Aufgabe unklar ist, oder rennt es zuversichtlich in die falsche Richtung? Und tut es beim zehnten Mal noch das, was es beim ersten getan hat?

Gerade dieser letzte Punkt ist bei Agenten der eigentliche Knackpunkt. Ein Team der Firma Sierra hat mit [tau-bench](https://arxiv.org/abs/2406.12045) genau das gemessen: einen Agenten, der ein echtes Gespräch mit einem Kunden führt, dabei Werkzeuge bedient und sich an Regeln halten muss. Sie ließen jede Aufgabe achtmal laufen statt nur einmal. Und da kippt das schöne Bild. Ein Spitzenmodell wie GPT-4o löste ohnehin weniger als die Hälfte der Aufgaben, und wenn dieselbe Aufgabe acht Mal hintereinander klappen musste, sackte die Quote im Handelsszenario unter 25 Prozent. Die Agenten seien, so die Autoren, ziemlich unzuverlässig. Ein einzelner Durchlauf sieht gut aus. Acht Durchläufe zeigen die Wahrheit.

Und dann bleibt die unbequemste Größe von allen: Vertraust du dem Ergebnis genug, um es rauszulassen? Darauf antwortet keine Prozentzahl.

## Das kennen wir längst von Menschen

Neu ist dieses Problem nicht, nur der Schauplatz ist neu. Wir versuchen seit Jahrzehnten, die Leistung von Menschen in Zahlen zu fassen, und stolpern über genau dieselbe Kante. Wir zählen geschlossene Tickets, Story Points, Zeilen Code, Umsatz pro Kopf, weil sich das zählen lässt. Und jeder, der schon in einem Team gearbeitet hat, weiß, dass die wertvollsten Beiträge selten in dieser Spalte stehen. Der Kollege, der eine halbe Stunde investiert, um jemand anderem den Tag zu retten. Die stille Entscheidung, ein Feature nicht zu bauen, das am Ende keiner gebraucht hätte. Nichts davon taucht in der Statistik auf, und trotzdem trägt es das Team.

W. Edwards Deming, der Mann, der Japans Industrie nach dem Krieg das Qualitätsdenken beibrachte, hat das schon 1982 aufgeschrieben. Er zählte die jährliche Leistungsbeurteilung zu den sieben [„tödlichen Krankheiten"](https://deming.org/explore/seven-deadly-diseases/) des Managements. Über sie schrieb er, sie „nährt kurzfristige Leistung, vernichtet langfristige Planung, baut Angst auf, zerstört Teamarbeit und nährt Rivalität". Und einen zweiten Satz aus demselben Buch würde ich am liebsten über jedes Leaderboard hängen: Die wichtigsten Zahlen, die ein Management braucht, seien unbekannt und oft unerkennbar, und ein gutes Management müsse sie trotzdem berücksichtigen. Das ist der McNamara-Fehler, einmal umgedreht und zur Handlungsanweisung gemacht.

Wir haben bei Menschen nie eine saubere Zahl für „gut" gefunden. Es gibt keinen Grund, sie ausgerechnet bei Modellen zu erwarten.

## Was hilft, und was nicht

Zahlen bleiben trotzdem nützlich, solange klar ist, was sie sind: eine grobe erste Orientierung. Und es gibt ehrliche Fälle, in denen kluges Messen enorm geholfen hat. Der Baseball, den „Moneyball" berühmt gemacht hat, ist so einer, ein Team fand mit besseren Statistiken die Spieler, die alle anderen übersehen hatten. Messen an sich ist wertvoll. Schieflaufen tut es erst, wenn man das Messbare mit dem Wichtigen verwechselt.

In der Bewertung von Modellen sieht man diese Einsicht schon wirken. Die [Chatbot Arena](https://arxiv.org/abs/2403.04132) stützt sich gar nicht mehr auf eine feste Kennzahl. Sie lässt Menschen entscheiden: zwei anonyme Antworten nebeneinander, du wählst die bessere, und aus Hunderttausenden solcher Vergleiche entsteht ein Ranking. Das ist im Grunde ein Eingeständnis. Am Ende zählt das menschliche Urteil.

LLM-as-Judge geht einen ähnlichen Weg und lässt ein Modell die Arbeit eines anderen bewerten, was erstaunlich weit trägt, solange man den Richter selbst kalibriert. Genau darüber habe ich [beim Thema Evals geschrieben](/blog/woher-weisst-du-dass-es-funktioniert): Eine gute Eval misst etwas sehr Konkretes, nämlich ob ein Ergebnis zu dem passt, was du in deinem Kontext vorher als gut definiert hast.

Und da schließt sich der Kreis. Der aufwendige Teil einer echten Bewertung ist das Definieren. Das Rechnen erledigt die Maschine. Jemand muss festlegen, was „gut" in diesem Fall überhaupt bedeutet, und dieser Maßstab entspringt einem menschlichen Urteil.

## Der Score und das Können

Ein Benchmark misst die Karte. Was ein Modell im echten Einsatz taugt, entscheidet sich im Gelände, in genau den Dingen, die sich schlecht in eine Zahl pressen lassen. Das liegt in der Natur der Sache, und bei uns Menschen war es nie anders.

Die Zahl wird uns weiter begleiten, und das ist gut so, sie gibt uns einen Startpunkt. Aber die Entscheidung, ob ein Modell wirklich taugt, ob ein Agent das Richtige getan hat, ob ein Ergebnis rausgehen darf, bleibt da, wo sie bei Menschen schon immer lag. Bei jemandem, der hinschaut und urteilt. Und der weiß, dass die wichtigsten Zahlen oft die sind, die auf keinem Dashboard stehen.
