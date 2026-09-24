---
title: 'Die Haushaltshilfe fürs Digitale'
language: de
description: 'Grok Bot, Meta Muse und Google Gemini Spark geben ihren Assistenten einen eigenen Computer, ein Gedächtnis und die Erlaubnis, weiterzuarbeiten, während du weg bist. Über die Gewöhnung ans Delegieren, wer sich diesen Komfort leisten kann und was mit Software passiert, die bisher darauf gewartet hat, dass jemand klickt.'
pubDate: '2026-09-23'
ressort: 'maerkte-modelle'
kicker: 'Agenten im Alltag'
figure: 'agent-computer'
glance:
  - 'Gemini Spark, Grok Bot und Muse geben dem Assistenten einen eigenen Rechner in der Cloud, mit Browser, Logins und Gedächtnis. Er arbeitet weiter, wenn dein Laptop zu ist. Die Vorlage für alle drei ist das Open-Source-Projekt OpenClaw.'
  - 'Delegieren wird Gewohnheit. Was früher Haushaltshilfe und Steuerberater waren, wird im Digitalen selbstverständlich, sofern man es sich leisten kann.'
  - 'Die Oberfläche verliert, alles dahinter gewinnt: Zugang, saubere Daten, klare Rechte und Fehlermeldungen, die ein Agent versteht.'
visualTheme: 'signal'
prompt: 'Persönliche KI-Assistenten mit eigenem Computer übernehmen lästige Aufgaben im Alltag und im Job. Was passiert, wenn Delegieren so selbstverständlich wird wie früher nur für die, die sich eine Haushaltshilfe oder einen Steuerberater geleistet haben?'
tags: ['AI', 'Agenten', 'Personal Assistants', 'Produkt', 'Zukunft der Arbeit']
---

Vor zwei Wochen habe ich mir aus der Laune der Natur heraus einen 3D-Drucker bestellt. Die Idee war ein Spielgerät und neues Hobby zu etablieren, für mich, aber auch für meine Familie. Mit zwei Kids und weiteren zeitintensiven Beschäftigungen kam dann recht schnell die Erkenntnis, dass noch nicht der richtige Zeitpunkt ist, mein Lego etwas beiseitezuräumen, um überhaupt erst mal Platz für den Drucker zu schaffen.

Also zurück damit. Nur ahnte ich nicht, wie viele Schritte dahinterstecken. Bei Amazon oder Zara ist eine Rücksendung heute in Minuten erledigt: ein Klick, ein Code, ab in den Laden. Hier lag alles bei mir. Das Rücksendeetikett musste ich per Support-Ticket beschaffen, ausdrucken, anbringen und abfotografieren. Fotos vom angebrachten Etikett sowie Zustand der Originalverpackung verschicken, dazu einen Beleg der Sendungsverfolgung. In Summe einiges zusammenzusuchen und zu koordinieren.

Dank [Instinct](https://instinct.co/) musste ich mich lediglich um das Abfotografieren und Wegbringen des Pakets kümmern. Alles Weitere, vom Formulieren bis zum Versenden, wurde mir abgenommen, und auch die Erinnerung daran, was die nächsten Schritte sind.

Ich teste Instinct gerade in WhatsApp als eine Art persönliche Assistenz, für Rücksendefälle, für terminliche Absprachen, für Erinnerungen. Die wesentlichen Inhalte und Fragen diktiere ich schnell per Sprachnachricht, um die Erledigung kümmert es sich eigenständig. Und es spart tatsächlich Zeit. Vor allem nimmt es mir die lästigen Schreib- und Koordinierungstätigkeiten ab, die sonst gern mal aufgeschoben werden oder gar liegen bleiben.

Instinct ist ein Startup, bisher nur auf Einladung und laut [The Information](https://www.theinformation.com/articles/ai-agent-startup-instinct-talks-10-billion-valuation) mit gut 100.000 Nutzern (und es verhandelt gerade über eine Bewertung von 10 Mrd. $, so klein ist es also auch nicht mehr). Seit Mai haben drei deutlich größere Anbieter dieselbe Idee auf den Markt gebracht, und alle drei geben ihrem Assistenten einen eigenen Computer.

## Drei Wetten auf dieselbe Zukunft

Google hat [Gemini Spark am 19. Mai](https://techcrunch.com/2026/05/19/google-introduces-gemini-spark-a-24-7-agentic-assistant-with-gmail-integration/) auf der I/O vorgestellt, xAI hat [Grok Bot am 11. August 2026](https://aitoolsreview.co.uk/insights/grok-bot-agent-launch) in die offene Beta geschickt, und Meta hat am 8. September [Muse](https://techcrunch.com/2026/09/08/meta-debuts-its-muse-ai-agent-will-consumers-trust-it/) gestartet. Im Kern verkaufen alle drei dasselbe: einen Agenten mit eigenem Rechner in der Cloud, mit Browser und deinen Logins, der sich an frühere Gespräche erinnert und weiterarbeitet, wenn dein Laptop zu ist.

Ein Chatbot kann dir sagen, wie du eine Rücksendung anmeldest. Ein Agent mit eigenem Browser meldet sie an. Er loggt sich dafür beim Händler ein, lädt das Label herunter und legt es dir hin. Die Software des Händlers wurde dabei nie gefragt, ob eine Maschine sie bedienen darf.

Der [Vergleich bei CodePick](https://codepick.dev/en/compare/grok-bot-vs-muse-ai-2026/) trennt die beiden sauber nach Publikum. Grok Bot ist für Arbeit gebaut. Du legst Rollen an, einen Bot für den Vertrieb, einen für Bugs, einen für Recherche, bis zu rund 50 pro Konto, und die Bots reichen sich Aufgaben gegenseitig weiter. Auslöser sind Zeitpläne, Webhooks, Pull Requests, fehlgeschlagene CI-Läufe oder Slack. Seit dem 3. September gibt es eine Enterprise-Version mit SSO und Audit-Logs.

Muse ist für dein Privatleben gebaut. Ein Agent statt einer Mannschaft, der dich über die Zeit kennenlernt: Mails, Kalender, Reisen, Einkäufe, Familienlogistik. Er schreibt Mails, bucht, füllt Formulare aus, verhandelt günstigere Tarife für Handy oder Internet und kauft ein, und er fragt vor dem Versand oder der Zahlung nach Freigabe. Du schreibst mit ihm wie mit einem Menschen, auch in WhatsApp.

Gemini Spark sitzt dazwischen. Persönlich wie Muse, aber im Arbeitsalltag verankert, weil es dort andockt, wo viele ohnehin arbeiten: Gmail, Docs, Slides, dazu per MCP Canva, OpenTable und Instacart. Googles eigene Beispiele sind auffällig häuslich. Spark durchsucht Kreditkartenabrechnungen nach versteckten Abos und baut aus den Schul-Mails der Kinder einen täglichen Digest. Käufe innerhalb selbst gesetzter Grenzen sollen über ein Agent-Payment-Protokoll später im Jahr dazukommen.

Dass sich die drei so ähneln, hat einen Grund, und der heißt [OpenClaw](https://openclaw.ai/). Das Open-Source-Projekt von Peter Steinberger läuft selbst gehostet auf eigener Hardware und hat vorgemacht, wie ein Agent mit eigenem Rechner und Gedächtnis aussieht. Nat Friedman, Produktchef bei Metas Superintelligence Labs, hat [bei TechCrunch](https://techcrunch.com/2026/09/22/meta-admits-muses-likeness-to-openclaw-isnt-a-coincidence/) offen gesagt, Muse sei „definitely heavily inspired as a product by OpenClaw“, bis hin zu fast identischen `SOUL.md`-Dateien. Steinberger selbst arbeitet seit Februar bei OpenAI, ein Gegenangebot von Meta hat er ausgeschlagen. OpenAI hat noch nichts Vergleichbares im Regal, baut laut The Information ([Zusammenfassung bei AI Weekly](https://aiweekly.co/alerts/openai-preps-codex-bot-to-chase-grok-weighs-muse-rival)) aber an einem Produkt mit dem Arbeitstitel Codex Bot, auf OpenClaw aufgesetzt und näher an Grok Bot als am bestehenden ChatGPT Work. Sam Altman hat sein „großes neues Ding“ gerade um eine Woche verschoben. Ob das Codex Bot ist, weiß ich nicht.

Wenn die Architektur offen ist und alle vom selben Bauplan abschreiben, entscheidet sich der Wettbewerb woanders: bei Vertrauen, Verbreitung und Integrationen. Google hat Gmail, Meta hat WhatsApp.

## Delegieren wird Gewohnheit

Ich sehe eine Tendenz, und sie hat weniger mit Technik zu tun als mit Gewöhnung. Menschen werden sich immer mehr daran gewöhnen, lästige Themen und Prozesse von sich weg zu delegieren.

Die ersten Zahlen passen dazu. Muse stand knapp zwei Wochen nach dem Start auf Platz 1 der kostenlosen iOS-Apps in den USA, noch vor ChatGPT, mit [2,8 Millionen Installationen weltweit in den ersten zwölf Tagen](https://techcrunch.com/2026/09/21/metas-muse-is-outpacing-chatgpts-early-mobile-launch/). ChatGPT kam 2022 im vergleichbaren Fenster nach seinem eigenen Start auf [3,1 Millionen](https://www.cnbc.com/2026/09/21/meta-muse-personal-ai-agent-downloads.html). Ein Rekord ist das also nicht. Für ein Produkt, das bei der Anmeldung eine Zahlungskarte sehen will, ist es trotzdem viel.

Der Komfort und Zeitgewinn, den sich so manche bisher höchstens im eigenen Haushalt gegönnt haben, in Form einer Haushaltshilfe, oder bei der Steuer in Form eines Steuerberaters, wird im Digitalen innerhalb kurzer Zeit zum Selbstverständnis werden. Sofern man sich diesen Komfort leisten können wird.

Eine Haushaltshilfe hat einen Schlüssel zu deiner Wohnung. Sie weiß, wo die Sachen liegen, und nach ein paar Monaten weiß sie auch, was du nicht magst. Genau das bauen Grok Bot und Muse gerade: den Schlüssel (deine Logins), das Wissen, wo die Sachen liegen (der eigene Rechner mit deinen Dateien), und das Gedächtnis. Den Schlüssel gibst du nicht jedem, und ob du ihn einem Werbekonzern gibst, ist eine andere Frage als die, ob der Assistent gut putzt.

Denn eins ist sicher, günstiger werden diese Angebote langfristig nicht. Die Einstiegspreise sprechen gerade gegen mich. Muse ist für die meiste Alltagsnutzung gratis, will aber [bei der Anmeldung eine Zahlungskarte](https://shattered.io/meta-muse-ai-agent-launch-2026/) sehen, und darüber liegen Abos für 20 $ und 100 $. Grok Bot gab es zum Start nur in Abos wie [SuperGrok Heavy für 300 $ oder Cursor Ultra für 200 $ im Monat](https://www.bleap.finance/en-us/blog/grok-bot-guide-how-it-works-pricing-uses), inzwischen nennt CodePick Cursor Pro für 20 $ als Einstieg. Gemini Spark startete als Beta nur für US-Abonnenten von Google AI Ultra für 100 $ im Monat und kommt seit Ende Juli [auch zu AI-Pro-Kunden in Indien](https://blog.google/intl/en-in/company-news/technology/introducing-gemini-spark-your-247-personal-ai-agent-in-country/). Das sind Preise, mit denen Anbieter Gewohnheiten kaufen. Ein Agent, der nachts Formulare ausfüllt, verbraucht Rechenzeit, und ob die eigenen Daten als Währung für Freemium-Angebote noch ausreichen, wie in den guten alten Tagen klassischer SaaS-Produktlandschaften, bezweifle ich.

Wer sich das nicht leisten kann, klickt weiter selbst. Was das auf Dauer mit der Frage macht, wer im Netz wie behandelt wird, habe ich noch nicht zu Ende gedacht.

## Software, die bedient werden will

Wer Produkte baut, hat die letzten Jahre viel Zeit in Oberflächen gesteckt. Onboarding-Flows, Klickstrecken, das dritte Redesign des Checkouts. Das war richtig, denn am anderen Ende saß ein Mensch mit wenig Geduld.

Mit Assistenten verschiebt sich die Erwartung. Die Nutzer von morgen erwarten noch stärker, dass Software ihnen nicht das richtige Werkzeug bereitstellt, sondern die Aufgabe nahezu vollständig abnimmt. Im B2B habe ich das unter [Service as Software](/blog/service-as-software) beschrieben. Jetzt kommt dieselbe Erwartung beim Endkunden an, nur ohne Einkaufsabteilung dazwischen.

Asana hat am 22. September ein neues Service-Management-Produkt veröffentlicht, und der CPO Arnab Bose formuliert den Maßstab so: „Every platform in this category optimizes for moving a ticket through a queue. We optimize for the employee getting what they asked for.“ Das ist ein Hersteller über sein eigenes Produkt, also mit Vorsicht zu lesen. Die Messgröße gilt für Agenten aber noch härter. Ob die Aufgabe erledigt ist, interessiert den Agenten. Wie hübsch der Button war, nicht.

Für bestehende Software heißt das, dass die Oberfläche an Wert verliert und alles dahinter gewinnt: Zugang, saubere Daten, klare Rechte, Verfügbarkeit auch nachts um drei. Und es gibt eine zweite Zielgruppe. Ein Agent braucht eindeutige Zustände und Fehlermeldungen, die er versteht. „Etwas ist schiefgelaufen, bitte versuche es später erneut“ hilft einem Menschen wenig und einem Agenten gar nicht.

Wo es keine gute Tür gibt, nimmt der Agent das Fenster. Clinton Stark hat für [Stark Insider](https://www.starkinsider.com/2026/09/meta-muse-specs-what-it-runs-on.html) nachgesehen, worauf Muse läuft. Der Browser wird aus einem Pool geliehen, „A shared pool means shared IP reputation“, und die Webseite sieht einen allgemeinen Chrome auf Linux. Ich arbeite im Open Banking und kenne das Muster: Ein fremder Browser loggt sich mit den Zugangsdaten des Kunden ein, das hieß früher Screen Scraping, und PSD2 hat Jahre gebraucht, um es durch Schnittstellen mit echter Zustimmung zu ersetzen. Die Agenten bringen es zurück, diesmal in jeder Branche gleichzeitig.

Wie das auf der anderen Seite ankommt, hat Resy gerade gezeigt. Ein Investor aus New York wollte mit Instinct, also genau dem Assistenten, der mir beim Drucker geholfen hat, einen Tisch in einem Steakhouse im West Village bekommen. Der Agent schickte rund 200 Anfragen pro Stunde, Resy stufte das als bösartigen Bot ein, sperrte das Konto und stornierte alle künftigen Reservierungen ([CNN](https://www.cnn.com/2026/09/23/tech/ai-agent-restaurant-reservations-instinct-resy-cec), [Inc.](https://www.inc.com/victoria-salves/resy-deactivated-user-after-automated-assistant-made-200-requests-an-hour/91402131)). Das Konto kam zurück, mit der Warnung, beim nächsten Mal könne American Express es dauerhaft schließen, die Kreditkarte gleich mit. Ein Mensch, der zweihundertmal pro Stunde auf „Reservieren“ drückt, wäre vermutlich auch aufgefallen. Nur macht das keiner.

Und dann ist da noch die Frage, wem der Kunde gehört. Wenn jemand mit Muse in WhatsApp spricht und nie wieder die App seines Stromanbieters öffnet, wandert die Beziehung eine Ebene nach oben, zum Assistenten. Vergleichsportale haben das mit Versicherungen schon einmal gemacht.

## Was dagegen spricht

Einiges. Beide Produkte sind frisch und laufen in den USA. Für Grok Bot geht laut [AI Tools Review](https://aitoolsreview.co.uk/insights/grok-bot-agent-launch) jede Aussage zu Leistung und Verlässlichkeit „back to xAI's own launch materials“. Meta hat im April beim Modell Muse Spark (nicht verwandt mit Googles Gemini Spark, die Namen in dieser Branche wären einen eigenen Text wert) selbst [Lücken bei komplexen mehrstufigen Agentenaufgaben](https://www.emarketer.com/content/meta-debuts-muse-spark-power-ai-across-its-apps-raise-stakes-ai-driven-discovery) eingeräumt.

Die Sicherheitsfragen sind neu. Bei Grok Bot teilen sich alle Bots eines Nutzers dieselbe Maschine, und die Dokumentation sagt laut CodePick ausdrücklich, dass einzelne Bots keine Sicherheitsgrenze sind. Das Löschen eines Bots entfernt [laut bleap](https://www.bleap.finance/en-us/blog/grok-bot-guide-how-it-works-pricing-uses) nicht die Dateien und Browser-Sitzungen auf dem gemeinsamen Rechner. Meta hat bei Muse mehr Aufwand in die Grenzen gesteckt. Ein separater Agent namens Sentinel muss jeden Zugriff nach außen freigeben, [„Nothing Muse does reaches the internet unless the Sentinel approves it“](https://cellcog.ai/blog/what-is-muse/), und die echten Zugangsdaten werden erst an der Netzwerkgrenze eingesetzt. Die Variante, bei der selbst Meta nicht an die Daten kommt, soll aber erst später im Jahr kommen. Reuters berichtete aus internen Tests, dass Agenten Schutzregeln umgangen haben ([Zusammenfassung bei edapt](https://www.edapt.me/blogs/meta-muse-personal-ai-agent-explained)), und [Forbes](https://www.forbes.com/sites/gabrielalinzainescu/2026/09/09/meta-launches-muse-personal-ai-agent-as-staff-flag-security-flaws/) meldete zum Start Sicherheitsbedenken aus der eigenen Belegschaft.

Und das Vertrauen. Sarah Perez fragt bei TechCrunch offen, ob Verbraucher Meta nach all den Datenschutzverfahren noch einmal ihre persönlichen Daten anvertrauen. Die Maschine, die Sitzungen, das Gedächtnis liegen beim Anbieter. Ob Assistenten schneller sind als ich, kann ich übrigens nicht belegen. Ich glaube, die gesparte Zeit entsteht vor allem, weil ich nicht dabei sein muss.

## Womit ich anfangen würde

Wenn du Software baust, spiel dein Produkt einmal so durch, als wäre der Nutzer ein Assistent. Kann er sich anmelden, ohne dass er dafür ein Passwort in einen geliehenen Browser tippt? Versteht er die Fehlermeldung, die du ihm zurückgibst? Weiß er, an welcher Stelle ein Mensch freigeben muss, und kannst du hinterher nachweisen, wer was freigegeben hat?

Wenn du ein Unternehmen führst, das Software einkauft statt baut, beschreib deine eigenen Abläufe so klar, dass ein Agent sie übernehmen könnte. Das ist meine Einschätzung und keine Studie, aber ich glaube, genau daran scheitern die meisten Einführungen, nicht am Modell.

Und für dich selbst gilt der Rat, den CodePick am Ende seines Vergleichs gibt: „begin with read-only, reversible work and expand permissions gradually.“ Bei mir war das ein 3D-Drucker, der zurück in seinen Karton musste.
