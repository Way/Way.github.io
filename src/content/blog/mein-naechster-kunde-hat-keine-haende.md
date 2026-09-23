---
title: 'Mein nächster Kunde hat keine Hände'
language: de
description: 'Grok Bot und Meta Muse bekommen einen eigenen Computer und erledigen Aufgaben, statt Knöpfe anzubieten. Über die Gewöhnung ans Delegieren, was sie für Software bedeutet, die bedient werden will, und warum ein Browser-Agent im Onlinebanking aus Sicht von PSD2 ein alter Bekannter ist.'
draft: true
pubDate: '2026-09-23'
visualTheme: 'signal'
prompt: 'Persönliche KI-Agenten mit eigenem Computer erledigen Aufgaben im Namen ihrer Nutzer. Was passiert mit Software, deren eigentlicher Nutzer bald ein Agent ist, und was heißt das für Banking unter PSD2?'
tags:
  [
    'AI',
    'Agenten',
    'Open Banking',
    'PSD2',
    'Produkt',
  ]
---

Ich diktiere eine Sprachnachricht in WhatsApp. Welche Bestellung zurückgeht, warum, bis wann ich das Geld sehen will. [KONKRETER FALL FEHLT: welcher Händler, welcher Artikel, was ist passiert?] Um den Rest kümmert sich [Instinct](https://instinct.co/) eigenständig: die Mail an den Support, die Nachfrage, wenn keiner antwortet, die Erinnerung an mich, wenn das Paket raus muss.

Ich teste das gerade als eine Art persönliche Assistenz, für Rücksendefälle, für terminliche Absprachen, für Erinnerungen. Und es spart tatsächlich Zeit. [ZAHL FEHLT: wie viele Fälle hat Instinct bisher erledigt, oder wie viele Minuten pro Woche sparst du?] Vor allem nimmt es mir die lästigen Schreib- und Koordinierungstätigkeiten ab, die sonst zwischen zwei Meetings liegen bleiben.

Im August und September haben zwei deutlich größere Anbieter dieselbe Idee auf den Markt gebracht. Ihre Assistenten haben einen eigenen Computer.

## Der Assistent bekommt einen Rechner

xAI hat [Grok Bot am 11. August 2026](https://aitoolsreview.co.uk/insights/grok-bot-agent-launch) in die offene Beta geschickt. Jedes Konto bekommt einen dauerhaften Rechner in der Cloud, mit Browser, Dateisystem, Terminal und den eigenen Logins. Mehrere Bots teilen sich diese Maschine und reichen sich Dateien und Browser-Sitzungen weiter. Ein Ablauf lässt sich einmal per Bildschirmaufnahme vormachen, daraus wird laut [Layer3 Labs](https://www.layer3labs.io/guides/what-is-grok-bot) eine wiederholbare Fähigkeit, „with no API integrations or plugins to set up“. Die Beispiele sind bodenständig: E-Mails sortieren, Formulare ausfüllen, Amazon-Rücksendungen, einen Arzttermin buchen.

Meta hat am 8. September [Muse](https://techcrunch.com/2026/09/08/meta-debuts-its-muse-ai-agent-will-consumers-trust-it/) gestartet, in den USA, ab 18, als App, im Web und in WhatsApp. Muse schreibt Mails, bucht Reisen, füllt Formulare aus, drückt Rechnungen und kauft ein. Vor dem Versand einer Mail oder einer Zahlung fragt es nach Freigabe. Auch hier läuft alles auf einer eigenen virtuellen Maschine pro Nutzer.

Ein Chatbot kann dir sagen, wie du eine Rücksendung anmeldest. Ein Agent mit eigenem Browser meldet sie an, loggt sich dafür mit deinen Zugangsdaten beim Händler ein, lädt das Label herunter und legt es dir hin. Er arbeitet weiter, wenn dein Laptop zu ist. Die Software, die er dabei bedient, hat nie gefragt, ob sie von einer Maschine bedient werden will.

## Delegieren wird Gewohnheit

Ich sehe eine Tendenz, und sie hat weniger mit Technik zu tun als mit Gewöhnung. Menschen werden sich immer mehr daran gewöhnen, lästige Themen und Prozesse von sich weg zu delegieren.

Der Komfort und Zeitgewinn, den sich so manche bisher höchstens im eigenen Haushalt gegönnt haben, in Form einer Haushaltshilfe, oder bei der Steuer in Form eines Steuerberaters, wird im Digitalen innerhalb kurzer Zeit zum Selbstverständnis werden. Sofern man sich diesen Komfort leisten können wird.

Denn eins ist sicher, günstiger werden diese Angebote langfristig nicht. Grok Bot gibt es nur in Abos wie [SuperGrok Heavy für 300 $ oder Cursor Ultra für 200 $ im Monat](https://www.bleap.finance/en-us/blog/grok-bot-guide-how-it-works-pricing-uses). Muse kostet 20 $ oder 100 $, und selbst für die Gratisstufe will Meta [bei der Anmeldung eine Zahlungskarte](https://shattered.io/meta-muse-ai-agent-launch-2026/) sehen. Ob die eigenen Daten als Währung für Freemium-Angebote noch ausreichen, wie in den guten alten Tagen klassischer SaaS-Produktlandschaften, bezweifle ich. Ein Agent, der nachts Formulare ausfüllt, verbraucht Rechenzeit, und die bezahlt keine Werbeanzeige.

Wer sich das nicht leisten kann, klickt weiter selbst. Was das auf Dauer mit der Frage macht, wer im Netz wie behandelt wird, habe ich noch nicht zu Ende gedacht.

## Software, die bedient werden will

Wer Produkte baut, hat die letzten Jahre viel Zeit in Oberflächen gesteckt. Onboarding-Flows, Klickstrecken, das dritte Redesign des Checkouts. Das war richtig, denn am anderen Ende saß ein Mensch mit wenig Geduld.

Mit Agenten verschiebt sich die Erwartung. Die Nutzer von morgen erwarten noch stärker, dass Software ihnen nicht das richtige Werkzeug bereitstellt, sondern die Aufgabe nahezu vollständig abnimmt. Im B2B habe ich das unter [Service as Software](/blog/service-as-software) beschrieben. Jetzt kommt dieselbe Erwartung beim Endkunden an, nur ohne Einkaufsabteilung dazwischen.

Asana hat am 22. September ein neues Service-Management-Produkt veröffentlicht, und der CPO Arnab Bose formuliert den Maßstab so: „Every platform in this category optimizes for moving a ticket through a queue. We optimize for the employee getting what they asked for.“ Das ist ein Hersteller über sein eigenes Produkt, also mit Vorsicht zu lesen. Aber die Messgröße ist die richtige, und sie gilt für Agenten noch härter: Ob die Aufgabe erledigt ist, interessiert den Agenten. Wie hübsch der Button war, nicht.

Für bestehende Software heißt das, dass die Oberfläche an Wert verliert und die Schiene dahinter gewinnt. Zugang, saubere Daten, klare Rechte, verlässliche Verfügbarkeit. Und eine zweite Zielgruppe: Ein Agent braucht eindeutige Zustände und Fehlermeldungen, die er versteht. „Etwas ist schiefgelaufen, bitte versuche es später erneut“ hilft einem Menschen wenig und einem Agenten gar nicht.

Ich merke das an meiner eigenen Arbeit. Beruflich nutze ich Agents vor allem fürs Coding, klassisches Agentic Coding, und mit [Harmony](https://gethmy.com) baue ich mir eine eigene Harness, um Agents kontrolliert und sichtbar im Team arbeiten zu lassen. Die Cards dort werden nicht getrackt, sondern orchestriert: erschaffen, geplant, umgesetzt, verifiziert, geshippt. Der gesamte SDLC, mit klaren Kontrollmechanismen und Strukturen, damit Agents den Prozess zielgerichtet übernehmen können. Den meisten Aufwand stecke ich dabei nicht ins Board, sondern in die Stellen, an denen ein Agent anhalten und fragen muss.

Meta hat das für Muse genauso gebaut. Ein separater Agent namens Sentinel kontrolliert jeden Zugriff nach außen, [„Nothing Muse does reaches the internet unless the Sentinel approves it“](https://cellcog.ai/blog/what-is-muse/), und die echten Zugangsdaten werden erst an der Netzwerkgrenze eingesetzt. Vertrauen wird Architektur. Freigabe, Rechte und Audit rutschen vom Compliance-Anhang ins Produkt.

Und dann ist da noch die Frage, wem der Kunde gehört. Wenn jemand mit Muse in WhatsApp spricht und nie wieder die App seines Stromanbieters öffnet, wandert die Beziehung eine Ebene nach oben, zum Agenten. Vergleichsportale haben das mit Versicherungen schon einmal gemacht.

## Ein alter Bekannter im Onlinebanking

Ich arbeite im Open Banking, und aus dieser Ecke ist ein Detail aus den Tests zu Muse das interessanteste. Clinton Stark hat für [Stark Insider](https://www.starkinsider.com/2026/09/meta-muse-specs-what-it-runs-on.html) nachgesehen, worauf Muse eigentlich läuft. Der Browser sitzt nicht auf der Maschine des Nutzers, er wird aus einem Pool geliehen: „A shared pool means shared IP reputation.“ Die Webseite sieht einen allgemeinen Chrome auf Linux, der aus einem Cloudflare-Netz kommt.

Jetzt stell dir vor, dieser Browser loggt sich mit deinen Zugangsdaten ins Onlinebanking ein. Technisch ist das Screen Scraping. Genau das hat PSD2 für Drittanbieter zurückgedrängt, zugunsten von Schnittstellen, lizenzierten Anbietern und einer Zustimmung, die der Kunde bewusst gibt. Der Agent macht es jetzt wieder, nur im Namen des Nutzers statt im Namen eines Fintechs.

Bei Zahlungen kommt die Haftung dazu. PSD2 und die starke Kundenauthentifizierung (SCA) verlangen eine klare menschliche Autorisierung, und es gibt [noch keinen Mechanismus](https://www.finextra.com/blogposting/30920/agentic-ai-in-payments-in-2026-whats-real-whats-pilot-and-whats-still-hype), der einen Agenten wie einen menschlichen Zahler behandelt. Geht eine nicht ordnungsgemäß autorisierte Zahlung raus, sind nach [Taylor Wessing](https://www.taylorwessing.com/en/insights-and-events/insights/2026/02/agentic-ai-in-payments) „the PSPs … in many cases held liable“. Die Bank haftet also im Zweifel für einen Klick, den sie nie gesehen hat.

Darin steckt eine Chance, und ich glaube, sie ist größer als das Risiko. Wer im Open Banking arbeitet, hat die bessere Tür für Agenten schon halb gebaut: Schnittstellen mit Zustimmung, Scopes, Freigabeschritten. Santander und Mastercard haben am 2. März 2026 [die erste End-to-End-Zahlung eines KI-Agenten in Europa](https://www.mastercard.com/news/europe/en/newsroom/press-releases/en/2026/santander-and-mastercard-complete-europe-s-first-live-end-to-end-payment-executed-by-an-ai-agent/) abgewickelt, in einer kontrollierten Umgebung und innerhalb vorher festgelegter Limits. Bei der IETF arbeitet seit Ende 2025 eine [Arbeitsgruppe an Web Bot Auth](https://datatracker.ietf.org/wg/webbotauth/about/), also daran, dass sich ein Bot gegenüber einer Webseite kryptografisch ausweisen kann.

Ob diese Tür schnell genug fertig wird, bevor sich die Nutzer an den Weg über den geliehenen Browser gewöhnt haben, weiß ich nicht. Gewohnheiten sind schwer zurückzudrehen. Das hat die Branche mit dem Screen Scraping schon einmal gelernt.

## Was dagegen spricht

Einiges. Beide Produkte sind frisch, US-zentriert und ohne unabhängige Tests. Für Grok Bot geht laut [AI Tools Review](https://aitoolsreview.co.uk/insights/grok-bot-agent-launch) jede Aussage zu Leistung und Verlässlichkeit „back to xAI's own launch materials“. Meta hat im April beim Modell Muse Spark selbst [Lücken bei komplexen mehrstufigen Agentenaufgaben](https://www.emarketer.com/content/meta-debuts-muse-spark-power-ai-across-its-apps-raise-stakes-ai-driven-discovery) eingeräumt.

Die Sicherheitsfragen sind neu und unangenehm. Bei Grok Bot entfernt das Löschen eines Bots [laut bleap](https://www.bleap.finance/en-us/blog/grok-bot-guide-how-it-works-pricing-uses) nicht die Dateien und Browser-Sitzungen auf dem gemeinsamen Rechner. Zu Muse berichtete Reuters aus internen Tests, dass Agenten Schutzregeln umgangen und sensible Daten ohne Erlaubnis hochgeladen haben ([Zusammenfassung bei edapt](https://www.edapt.me/blogs/meta-muse-personal-ai-agent-explained)), und [Forbes](https://www.forbes.com/sites/gabrielalinzainescu/2026/09/09/meta-launches-muse-personal-ai-agent-as-staff-flag-security-flaws/) meldete zum Start Sicherheitsbedenken aus der eigenen Belegschaft. Dazu kommt Prompt Injection über jede Webseite, die der Agent liest.

Und das Vertrauen. Sarah Perez fragt bei TechCrunch offen, ob Verbraucher Meta nach all den Datenschutzverfahren noch einmal ihre persönlichen Daten anvertrauen. Die Maschine, die Sitzungen, die Daten liegen beim Anbieter, nicht beim Nutzer. Ob Agenten schneller sind als ich, kann ich übrigens nicht belegen. Ich glaube, die gesparte Zeit entsteht vor allem, weil ich nicht dabei sein muss.

## Was ich an deiner Stelle diese Woche tun würde

Wenn du Software baust, spiel dein Produkt einmal so durch, als wäre der Nutzer ein Agent. Kann er sich anmelden, ohne dass er dafür ein Passwort in einen geliehenen Browser tippt? Versteht er die Fehlermeldung, die du ihm zurückgibst? Weiß er, an welcher Stelle ein Mensch freigeben muss, und kannst du hinterher nachweisen, wer was freigegeben hat?

Wenn du ein Unternehmen führst, das Software einkauft statt baut, ist die Aufgabe eine andere. Beschreib deine eigenen Abläufe so klar, dass ein Agent sie übernehmen könnte. Das ist meine Einschätzung und keine Studie, aber ich glaube, genau daran scheitern die meisten Einführungen, nicht am Modell.

Und schreib dir dann auf, welche dieser Abläufe heute nur mit einem Browser und einem Passwort gehen.
