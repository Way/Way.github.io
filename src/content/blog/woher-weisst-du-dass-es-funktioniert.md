---
title: 'Woher weißt du, dass es funktioniert?'
language: de
description: 'Die meisten Teams shippen AI nach Bauchgefühl. Du änderst einen Prompt, der Output fühlt sich besser an, und keiner kann sagen, ob er es wirklich ist. Evals sind die Disziplin, die das misst. Über Error Analysis, LLM-as-Judge und den einen Teil, der menschlich bleibt: zu definieren, was gut heißt.'
pubDate: '2026-06-22'
visualTheme: 'signal'
prompt: 'Was ist eine Eval wirklich, warum shippen so viele Teams AI stattdessen nach Bauchgefühl, und welcher Teil der Bewertung lässt sich nicht an eine Maschine delegieren?'
tags:
  [
    'AI',
    'Evals',
    'LLM-as-Judge',
    'Qualität',
    'Softwareentwicklung',
  ]
---

[Hamel Husain](https://hamel.dev/blog/posts/field-guide/) berät seit Jahren Teams, die AI-Produkte bauen. Eine Szene wiederholt sich bei ihm so oft, dass er sie inzwischen erwartet. Er setzt sich zu den Entwicklern, lässt sich das System zeigen, das Wochen gekostet hat, und stellt eine einzige Frage: "Kannst du mir zeigen, wie du misst, ob das hier überhaupt funktioniert?"

Dann wird es still.

Es gibt ein Dashboard mit Latenz und Kosten. Es gibt Logs. Was es nicht gibt, ist eine Antwort auf die Frage, ob das Ding gut ist. Niemand kann sagen, ob die Änderung von letzter Woche etwas besser gemacht hat oder schlechter. Husains Befund nach Dutzenden solcher Termine: Die Produkte, die scheitern, teilen fast alle dieselbe Wurzel. Sie haben nie gemessen, ob sie funktionieren.

## Vibe-Shipping ist der Normalzustand

So läuft es gerade fast überall. Du schraubst am Prompt, schickst drei Testfragen durch, liest die Antworten, nickst. Fühlt sich besser an. Du deployst. Ob die Antwort auf die vierte Frage, die du nicht getestet hast, jetzt kaputt ist, erfährst du frühestens, wenn ein Nutzer sich beschwert. Meistens beschwert sich keiner. Er geht einfach.

Das Tückische daran: Es fühlt sich nach Arbeit an. Du hast ja was geändert, du hast ja was getestet. Nur misst dein Bauchgefühl bei drei Beispielen nichts, das über drei Beispiele hinausgeht. Greg Brockman, Mitgründer von OpenAI, hat 2023 [einen Satz getwittert](https://x.com/gdb/status/1733553161884127435), der in der Szene seitdem ständig zitiert wird: "evals are surprisingly often all you need." Erstaunlich oft sind Evals alles, was du brauchst. Der Satz ist deshalb so klebrig, weil das Gegenteil der Default ist. Die meisten bauen alles andere zuerst und die Evals nie.

## Warum du jeden Teller einzeln probierst

Ich habe [neulich über die Orchestration Tax geschrieben](/blog/orchestration-tax): Du startest acht Agenten, der Output verachtfacht sich, und jede einzelne Änderung läuft am Ende über dich. Du liest, du verstehst, du entscheidest, ob es rausgeht. Der Engpass bist du.

Jetzt die unbequeme Frage hinterher: Warum eigentlich liest du jeden einzelnen Teller? Weil du keine andere Möglichkeit hast, zu wissen, ob er gut ist. Genau hier sitzt die Lücke. Solange dein einziges Messinstrument deine eigenen Augen sind, skaliert deine Qualitätskontrolle exakt so weit wie deine Aufmerksamkeit an einem schlechten Dienstagnachmittag. Eine Eval ist der Versuch, dieses Wissen aus deinem Kopf herauszuziehen und in etwas zu gießen, das auch dann noch misst, wenn du gerade woanders bist.

## Was eine Eval wirklich ist

Bei "Eval" denken viele an Benchmarks und Leaderboards. In der Praxis fängt es viel unspektakulärer an: Du schaust dir deine Daten an.

Husain beschreibt einen Kunden, NurtureBoss, der einen Assistenten für Wohnungsbesichtigungen betrieb. Statt zu raten, haben sie angefangen, echte Konversationen zu lesen und die Fehler zu kategorisieren. Das Ergebnis war nüchtern: Der Assistent scheiterte in [66 Prozent der Fälle](https://hamel.dev/blog/posts/field-guide/) an Datumsangaben, sobald jemand etwas sagte wie "lass uns in zwei Wochen einen Termin machen". Und drei Fehlerklassen zusammen machten über 60 Prozent aller Probleme aus. Kein neues Modell, keine größere Pipeline. Sie haben die größte Fehlerklasse zuerst angefasst, das Datums-Handling, und allein dort stieg die Erfolgsquote von 33 auf 95 Prozent.

Das ist Error Analysis, und es ist die unglamouröseste Tätigkeit der ganzen AI-Welt. Fünfzig Traces öffnen, lesen, in Kategorien sortieren. Daraus werden Tests. Manche sind simpler Code: Steht im Output ein gültiges Datum? Dann eine Assertion, fertig, kostet nichts. Husains Beobachtung ist, dass du damit erschreckend weit kommst, bevor du überhaupt etwas Komplizierteres brauchst. Die Teams, die sich so ein einfaches Tool zum Sichten ihrer Daten bauen, [iterieren bei ihm um das Zehnfache schneller](https://hamel.dev/blog/posts/field-guide/) als die ohne. Nicht weil sie klüger sind. Weil sie hinschauen.

## Der Richter, der mitliest

Manche Fragen kann kein simpler Code beantworten. War die Antwort höflich? Hat sie die Frage des Nutzers wirklich getroffen oder nur am Thema entlanggeredet? Das kannst du nicht mit einer Assertion prüfen. Früher hieß die einzige Antwort: ein Mensch liest es. Genau der Engpass, den wir loswerden wollten.

Hier kommt LLM-as-Judge ins Spiel. Du nimmst ein Modell und lässt es den Output eines anderen Modells bewerten, gegen Kriterien, die du vorgibst. Klingt nach einem Zirkelschluss, funktioniert aber überraschend gut. Lianmin Zheng und Kollegen haben das 2023 sauber gemessen ([MT-Bench](https://arxiv.org/abs/2306.05685)): Ein starker Judge wie GPT-4 stimmt in über 80 Prozent der Fälle mit menschlichen Bewertern überein. Das ist ungefähr so hoch, wie zwei Menschen bei derselben Aufgabe untereinander übereinstimmen. Gemessen wurde das an allgemeinen Chatbot-Antworten. Ob ein Judge auch bei deiner Domäne so gut trifft, bei Wohnungsbesichtigungen, Faktenfragen, Compliance, musst du für deinen Fall selbst nachmessen. Das Prinzip trägt trotzdem, und der Judge liest tausend Antworten, während du dir einen Kaffee holst.

Jetzt der Haken, und er ist groß. Der Judge ist nur so gut wie das Rubric, das du ihm gibst. Schreibst du "bewerte die Qualität", bekommst du Zufallszahlen mit drei Nachkommastellen. Der Judge braucht dieselbe Behandlung wie das System, das er bewerten soll: Du musst ihn gegen menschliche Urteile kalibrieren, bis seine Bewertungen zu deinen passen. In einem [von Husain dokumentierten Fall](https://hamel.dev/blog/posts/field-guide/) brauchte das drei Runden, bis Mensch und Maschine zu über 90 Prozent zusammenlagen. Bei dir können es mehr sein. Der Richter selbst braucht eine Eval. Wer das überspringt, hat seinen flackernden Output nur durch einen flackernden Messwert ersetzt und merkt es nicht mal.

## Der Teil, der dir bleibt

In der Orchestration-Tax-Logik macht der Küchenchef am Pass zwei verschiedene Dinge: Er probiert, und er entscheidet, was "gut" überhaupt heißt. Evals nehmen dir das Probieren ab. Das Definieren von "gut" nicht.

Genau dort sitzt die Arbeit, die niemand für dich erledigt. Das Rubric ist nichts anderes als dein Urteil, aufgeschrieben, sodass eine Maschine es millionenfach anwenden kann. Was ist eine gute Antwort für unsere Nutzer? Wo ist die Grenze zwischen "hilfreich" und "schwafelt"? Welcher Fehler ist peinlich und welcher ist egal? Diese Fragen kann dir kein Modell abnehmen, weil sie keine technischen Fragen sind. Sie sind das, was du über dein Produkt und deine Nutzer weißt und was sonst niemand weiß.

Eine Eval verlagert deine Rolle. Du hörst auf, jeden Teller zu probieren. Du fängst an, die Rezepte zu schreiben, nach denen probiert wird, und kontrollierst Stichproben, ob die Küche sich dran hält. Vom Akkord am Pass zum Maßstab dahinter.

## Warum das jetzt der eigentliche Hebel ist

Code ist [billig geworden](/blog/code-is-cheap). Acht Agenten zu starten kostet fast nichts. Der teuerste Schritt der ganzen Pipeline ist die Abnahme, und die hängt an einem Menschen. Ohne Evals heißt skalieren: noch mehr lesen, bis du umfällst. Mit Evals heißt es: Die Suite ist grün, und dieser Haken bedeutet etwas, weil du das Rubric dahinter selbst gebaut und kalibriert hast. Was er dir sagt, ist eng umrissen: Dieser Stand hält ein, was du als gut definiert hast. Ob das Release insgesamt trägt, ob ein Fall außerhalb deiner Testverteilung kippt, steht auf einem anderen Blatt. Dafür bleiben die Stichproben.

Das ist der Unterschied zwischen einem Dashboard voller grüner Häkchen, das dich nur beruhigt, und einem, das dir tatsächlich etwas sagt. Der erste Haken ist Dekoration. Der zweite ist eine Messung, auf die du dich beim Release stützen kannst, im Rahmen dessen, was sie abdeckt. Erst der zweite lässt dich an deinem eigenen Engpass vorbeiwachsen.

## Die Disziplin, nicht die Technik

Das Verfahren ist nicht schwer. Daten anschauen, Fehler sortieren, Tests schreiben, einen Judge kalibrieren. Nichts davon braucht ein PhD. Es braucht die Bereitschaft, sich an einem Mittwoch fünfzig echte, oft langweilige Konversationen durchzulesen und ehrlich zu benennen, was schiefläuft. Das ist mühsamer als ein neues Framework zu installieren, und deshalb machen es die wenigsten.

Brockman hat recht: erstaunlich oft sind Evals alles, was du brauchst. Erstaunlich oft, weil wir immer noch überrascht sind, dass die unscheinbare Arbeit die ist, die zählt. Die Teams, die hinschauen und aufschreiben, was gut heißt, werden sich von denen absetzen, die weiter raten. Am Ende misst keine Eval, ob dein System gut ist. Sie misst nur, ob es zu dem passt, was du für gut hältst. Diesen Maßstab musst immer noch du setzen.
