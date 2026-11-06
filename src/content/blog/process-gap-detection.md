---
title: 'Process Gap Detection: Wo KI sich wirklich lohnt'
language: de
description: 'Software für Einstellungstests und Mitarbeiterüberwachung zählt Copy&Paste als Verdacht. Ich zähle es als Symptom: Jeder Kopiervorgang zeigt eine Lücke im Prozess. Wie du diese Lücken bei dir und im Team findest, und warum die Antwort erst weglassen, dann verbinden und erst zuletzt KI heißt.'
pubDate: '2026-11-05'
ressort: 'agenten-engineering'
kicker: 'Copy&Paste'
glance:
  - 'Testlify und wAnywhere protokollieren Copy&Paste als Schummeln oder Datenabfluss. Umgekehrt gelesen ist jeder Kopiervorgang eine Stelle, an der ein Mensch die fehlende Schnittstelle ersetzt.'
  - 'Die Leitfrage für jeden Prozess: Kommt diese Information von selbst dort an, oder trägt sie ein Mensch dorthin?'
  - 'Rangfolge der Antworten: weglassen, standardisieren, verbinden, erst dann KI. Und das Chatfenster ist selbst ein Copy&Paste-Fall.'
stat:
  value: '100 Stunden'
  text: 'Ein Handgriff von drei Minuten, 2.000 Mal im Jahr. Das ist das Potenzial, nicht die Ersparnis.'
visualTheme: 'pipeline'
prompt: 'Wie erkenne ich im Arbeitsalltag die Stellen, an denen sich KI lohnt, bevor ich sie einsetze, und wann ist eine Schnittstelle oder das Weglassen eines Schritts die bessere Antwort?'
tags: ['AI', 'Prozesse', 'Automation', 'Integration', 'Produktivität', 'Agenten']
---

Es gibt Software, die Copy&Paste zählt. Testlify macht das bei Einstellungstests und protokolliert jeden Kopiervorgang eines Kandidaten, als [„clear evidence of whether candidates completed the assessment independently“](https://help.testlify.com/article/330-copy-paste-tracking-in-assessments). wAnywhere macht das bei Mitarbeitern und sucht darin nach [Datenabfluss](https://www.wanywhere.com/es/blogs/deteccion-de-copiar-pegar-controle-las-intenciones-maliciosas-y-la-seguridad-de-los-datos/). Beide lesen dasselbe Signal, und beide lesen es als Verdacht. Wer kopiert, schummelt oder trägt Daten raus.

Ich lese es anders. Wer kopiert, hat ein Loch im Prozess und stopft es mit der Hand. Bei mir passiert das grob 50 bis 80 Mal am Tag.

Optimierungspotenzial zeigt sich selten in großen Problemen. Es steckt in Handgriffen, die so alltäglich geworden sind, dass niemand mehr darüber nachdenkt. Wer diese Handgriffe als Signale liest, findet die Lücken im Prozess. Erst danach stellt sich die Frage, ob KI, eine Schnittstelle oder das Weglassen eines Schritts die richtige Antwort ist.

## Zwei Lücken in jedem Strg+C

Copy&Paste wirkt trivial und fällt deshalb nicht auf. Genau deshalb taugt es als Indikator. Jeder Kopiervorgang deckt zwei Lücken auf.

Die erste ist ein Bruch im Informationsfluss. Eine Information muss von Ort A nach Ort B, meist über einen Tool- oder Medienbruch hinweg. Gäbe es eine Schnittstelle oder eine automatische Übertragung, wäre die Brücke da. Gibt es sie nicht, bin ich die Brücke.

Die zweite Lücke ist die menschliche Abhängigkeit. Ohne technische Brücke spielt der Mensch Brücke und Transporter zugleich. Der Prozess funktioniert nur, solange jemand kopiert. Ist derjenige krank, steht der Prozess, und zwar an einer Stelle, die in keinem Prozessdiagramm vorkommt.

In der Integrationswelt gibt es dafür einen Namen: Swivel Chair Integration. Jemand dreht sich auf dem Bürostuhl zwischen zwei Bildschirmen hin und her und überträgt Daten von Hand. Der Mensch wird zur Human Middleware. Diese Arbeit taucht nie als eigener Posten auf. Sie gehört einfach zu „so lange dauert das halt“.

Bei mir sieht das so aus. Ein Support-Ticket an einem normalen Dienstag: Ticketnummer aus dem Ticketsystem in die Log-Suche kopieren, Correlation-ID aus dem Log in den Slack-Thread, den Slack-Thread in die Karte auf dem Board, den Log-Auszug ins Chatfenster, die Antwort aus dem Chatfenster zurück ins Ticket. Fünf Kopiervorgänge für einen Vorgang, und das ist der einfache Fall. Mit einer Handvoll Tickets am Tag und dem Rest des Tages dazu lande ich bei den 50 bis 80 Kopiervorgängen von oben, also 250 bis 400 in der Woche.

Es gibt eine Steigerung davon, die noch unsichtbarer ist: Abtippen. Wer eine Rechnungsnummer von einem Bildschirm abliest und in ein Formular tippt, hat dieselbe Lücke, nur ohne Zwischenablage. Kein Clipboard-Manager sieht sie, und die Fehlerrate ist höher, weil Finger sich vertippen und Augen in der Zeile verrutschen.

Die Leitfrage, die ich an jeden Prozess stelle: Kommt diese Information von selbst dort an, oder trägt sie ein Mensch dorthin?

## Die Verwandten von Copy&Paste

Wer einmal so hinschaut, sieht die Verwandten überall. Ich habe sie bei mir und in Gesprächen gesammelt. Die erste Familie hängt an der ersten Lücke, am Bruch im Informationsfluss.

**Export-Import-Schleifen.** CSV runterladen, in Excel bereinigen, woanders hochladen. Jeder Download, der direkt wieder hochgeladen wird, ist eine fehlende Schnittstelle mit Umweg über den Downloads-Ordner.

**Schattenlisten.** Eine Excel- oder Notizliste neben dem eigentlichen System heißt: Das System bildet den echten Prozess nicht vollständig ab.

**Screenshots als Datenträger.** Wer einen Screenshot in Slack oder per Mail schickt, hat Daten in ein Bild verwandelt. Für den Empfänger sind sie lesbar, für jede Maschine danach erstmal nicht ohne Weiteres.

**Mehrfacherfassung.** Dieselben Stammdaten (Name, Adresse, Projektnummer) an drei Orten eingetragen.
**Umformatieren nach dem Einfügen.** Kopieren, und dann anpassen: Format, Struktur, Tonalität. Das ist kein Transport mehr, das ist ein Transformationsschritt.
Die zweite Familie hängt an der zweiten Lücke, an der Abhängigkeit von einem Menschen.

**Der Urlaubstest.** „Das weiß nur X.“ Was passiert, wenn X zwei Wochen weg ist? Wenn die Antwort „dann warten wir“ lautet, ist das ein Prozessrisiko mit einem Namen dran.

**Rückfragen als Datenbankabfrage.** „Kannst du mir kurz die Nummer schicken?“ Wenn Menschen andere Menschen wie eine Datenbank abfragen, fehlt eine Quelle, die für alle zugänglich ist.

**Erinnerungen als Trigger.** Post-its, Kalender-Reminder, „ich denk dran“. Jedes davon ersetzt ein Ereignis, das das System selbst auslösen müsste und nicht auslöst.

**Manuelles Zusammentragen.** Der Wochenbericht aus vier Quellen, per Hand zusammengestellt. Jede Woche dieselben vier Tabs, dieselbe Reihenfolge, derselbe Mensch.

Und dann gibt es die Signale, die du nicht siehst, sondern hörst. Sätze, bei denen ich inzwischen hellhörig werde: „Das machen wir halt so.“ „Eigentlich müsste …“ „Ich trag das dann noch schnell ein.“ „Das kopiere ich mir immer rüber.“ „Da muss ich erst X fragen.“ „Das war mal übergangsweise.“

## Die Lücken, die kein Werkzeug brauchen

Daneben gibt es Signale für Prozessprobleme, bei denen ein Werkzeug nichts hilft, und sie sind oft die teureren.

Nacharbeit. Etwas kommt zurück, weil Angaben fehlen. Die Ursache ist meist schlechte Eingangsqualität, nicht fehlende Geschwindigkeit. Wer hier beschleunigt, bekommt schnellere Schleifen.

Liegezeit. Ein Vorgang braucht zehn Minuten Arbeit und ist vier Tage unterwegs. Er wartet auf Freigaben, auf Informationen, auf jemanden, der sich zuständig fühlt. Loquenz beschreibt das in ihrer Liste der [acht Verschwendungsarten in der Verwaltung](https://www.loquenz.de/acht-verschwendungsarten-lean-administration-team/) als Vorgang, der „liegt statt fließt“: „Viele administrative Vorgänge benötigen nur wenig reine Bearbeitungszeit und haben dennoch eine lange Durchlaufzeit.“ Die richtige Frage ist „Worauf wartet der Vorgang und warum?“, nicht „Wer ist zu langsam?“.

Freigaben ohne Prüffunktion. Drei Stufen „kurz drüberschauen“, und keine der drei würde etwas anderes entscheiden als die davor.

„Das ist ein Sonderfall.“ Fällt der Satz oft, gibt es zu viele Varianten. Was keinen Standard hat, lässt sich auch nicht automatisieren, egal mit welchem Modell.
Suchen. „Wo liegt die aktuelle Version?“ Suchaufwand ist Verschwendung, und das Ergebnis ist oft Arbeit mit der falschen Version.

Für diese Gruppe lautet die Antwort fast nie KI. Sie lautet: Regel ändern, Schwelle ändern, Zuständigkeit klären, Schritt streichen. Wer einen schlechten Prozess digitalisiert, hat einen schlechten digitalen Prozess.

## Wie du hinschaust

Alles davon lässt sich beobachten, ohne ein Tool zu kaufen. Die Reihenfolge, die ich empfehle, fängt bei dir an. Das bringt niemanden gegen dich auf.

**Bei dir selbst.** Eine Woche lang Copy&Paste zählen, bei einer konkreten Aufgabe oder im ganzen Alltag. Ein Clipboard-Manager (Maccy, Raycast, Paste, unter Windows Ditto) ist ein fertiges Protokoll. Die Historie zeigt, was wie oft wohin kopiert wurde. Pass auf, was im Verlauf landet, Passwörter und Kundendaten haben dort nichts verloren. Ohne Tool geht es auch: ein Tag mit Notizblock neben der Tastatur, ein Strich pro Wechsel.

**Einen Datensatz verfolgen.** Nimm eine einzelne Anfrage, eine Rechnung, einen Lead, und folge ihr vom Entstehen bis zum Ergebnis. Notier jede Station, an der ein Mensch sie anfasst.

**Zusehen statt fragen.** Setz dich neben Kolleginnen und Kollegen, während sie die echte Arbeit machen, ohne zu bewerten. Lean nennt das Gemba Walk, Produktleute nennen es Shadowing. Beschriebene Prozesse sind immer sauberer als gelebte. Die Version, die jemand erzählt, hat keine Schattenliste. Die, die er macht, schon.

**Dich selbst beim Arbeiten ansehen.** Bildschirmaufnahme einer Routineaufgabe, idealerweise mit lautem Denken dazu.

**Weglassen auf Probe.** Einen Schritt für einen festen Zeitraum streichen und beobachten, ob ihn jemand vermisst. Loquenz empfiehlt genau das, und bei Freigabestufen ist es oft der schnellste Test.

**Fünfmal Warum.** Bei Nacharbeit und Wartezeit nach der Ursache graben, bevor du nach dem Werkzeug greifst. Die erste Antwort ist fast immer ein Symptom.

**KI als Sparringspartner.** Beschreib den Ablauf Schritt für Schritt, ohne private oder sensible Daten, und lass das Modell sortieren. Die Idee stammt aus einem [Artikel von The Solutions Team](https://mysolutionsteam.com/use-ai-to-spot-process-gaps/), geschrieben für Arztpraxen, sie funktioniert aber überall. Mein Prompt dafür:

```
Ich beschreibe dir einen Ablauf aus meinem Arbeitsalltag, Schritt für Schritt.
Stell mir zuerst Rückfragen, bis du jeden Schritt verstanden hast: Wer macht
ihn, mit welchem Werkzeug, woher kommen die Daten, wohin gehen sie.

Sortier deine Beobachtungen danach in fünf Gruppen:
1. Mögliche Engpässe
2. Risiken (Fehler, Datenverlust, Abhängigkeit von einer Person)
3. Manuelle Schritte, die sich vereinfachen lassen
4. Schritte ohne klaren Verantwortlichen
5. Automatisierungschancen, jeweils mit der einfachsten Lösung zuerst:
   weglassen, standardisieren, Schnittstelle, erst dann KI

Markiere jeden Schritt, bei dem ein Mensch Daten von einem Werkzeug in ein
anderes trägt. Hier ist der Ablauf:
```

**Der Agenten-Test.** Könnte ein Agent diesen Schritt mit den vorhandenen Zugängen erledigen? Wenn nein, woran scheitert es? An einer fehlenden API, an einem PDF, an Wissen in einem Kopf? Die Antwort zeigt die Lücke, und zwar genauer als jede Prozessbeschreibung, weil ein Agent nicht um Lücken herumarbeiten kann. Ich habe das in [If it cannot be used by an agent, it cannot be used](/blog/if-it-cannot-be-used-by-an-agent) für Produkte beschrieben.
Die Industrieversion dieser Beobachtung heißt Process Mining und Task Mining. Process Mining rekonstruiert Abläufe aus Systemlogs und zeigt Varianten, Schleifen und Wartezeiten. Task Mining zeichnet Desktop-Interaktionen auf, Copy&Paste und App-Wechsel eingeschlossen, und erfasst damit genau die Arbeit, die in keinem Systemlog steht. Beides ist das, was du mit einer Strichliste beginnst, nur mit Software und Lizenzkosten. Und beides ist in Deutschland kein Selbstläufer: Systematisches Tracking von Mitarbeitenden berührt die Mitbestimmung des Betriebsrats und die DSGVO. Selbstbeobachtung berührt nichts davon.

## Von der Lücke zur Antwort

Nicht jede Lücke ist ein KI-Fall. Wer jede gefundene Lücke mit KI füllt, baut sich eine teure Version des alten Prozesses.

Ich gehe die Antworten in dieser Reihenfolge durch, von der einfachsten zur aufwendigsten, und höre bei der ersten auf, die trägt.

1. **Weglassen.** Braucht es den Schritt überhaupt?
2. **Vereinfachen und standardisieren.** Varianten reduzieren, Eingangsqualität sichern, Zuständigkeit klären.
3. **Integrieren.** Bei strukturierten, gleichbleibenden Übertragungen zwischen zwei Systemen ist eine Schnittstelle, ein Connector oder ein Sync robuster und günstiger als jedes Sprachmodell. Wo deterministisch übertragen wird, braucht es kein Modell, das raten kann.
4. **Klick-Automatisierung (RPA).** Nur als Brücke, wenn ein Altsystem keine Schnittstelle bietet und so bald keine bekommt.
5. **KI.** Dort, wo ihre Stärken liegen: unstrukturierte Eingänge (PDFs, Mails, Freitext) in strukturierte Daten verwandeln. Umformulieren, zusammenfassen, übersetzen, also der Fall „kopieren, dann anpassen“ von oben. Klassifizieren und weiterleiten. Kontextabhängige Entscheidungen vorbereiten, mit einem Menschen, der sie trifft.
6. **Bewusst manuell lassen.** Wenn der Vorgang selten ist, risikoarm, oder das Tool ohnehin bald abgelöst wird. Oder wenn der manuelle Schritt eine gewollte Kontrolle ist, Vier-Augen-Prinzip zum Beispiel. Dann ist Copy&Paste kein Symptom, sondern ein Feature.

| Signal | Typische Ursache | Passende Antwort |
| --- | --- | --- |
| Copy&Paste zwischen zwei Systemen | fehlende Integration | Schnittstelle, Connector, Sync |
| Abtippen aus PDF oder Mail | unstrukturierter Eingang | KI-Dokumentenverarbeitung |
| Kopieren und umformulieren | Transformationsarbeit | KI-Entwurf mit Review |
| Nacharbeit-Schleife | schlechte Eingangsdaten, unklare Regeln | Ursache beheben, nicht beschleunigen |
| Lange Liegezeit | Freigabe, Zuständigkeit | Regeln und Schwellen ändern |
| Viele Sonderfälle | fehlender Standard | erst standardisieren |
| „Nur X weiß das“ | Wissen im Kopf | dokumentieren, Wissensbasis, darauf vielleicht ein Assistent |

Die Tabelle soll verhindern, dass du reflexhaft bei KI (Punkt 5) anfängst.

## Die KI als neuer Bürostuhl

KI erzeugt selbst neue Copy&Paste-Lücken. Ich kopiere eine Mail in ein Chatfenster, lasse eine Antwort schreiben, kopiere die Antwort heraus und füge sie in Outlook ein. Ich kopiere einen Fehler-Log in den Chat und den Fix zurück ins Ticket. Zwei Kopiervorgänge pro Aufgabe, und bei jedem bin ich wieder Brücke und Transporter.

Das Copy&Paste-Kriterium gilt also auch für den eigenen KI-Einsatz. Wenn ich oft in eine KI hinein und aus ihr heraus kopiere, sitzt die KI an der falschen Stelle im Prozess. Sie sollte dort arbeiten, wo die Daten liegen, mit Zugriff statt mit Zwischenablage. Ich habe das in [Die produktivsten KI-Nutzer schreiben die wenigsten Prompts](/blog/produktivste-ki-nutzer-schreiben-wenigste-prompts) als Systemfrage beschrieben. Hier ist es eine Prozessfrage, und die Antwort ist dieselbe.

Von den 50 bis 80 Kopiervorgängen am Tag geht bei mir, grob geschätzt, ein Drittel in ein Chatfenster hinein oder kommt aus einem heraus.

## Nicht alles, und nicht das Nervigste zuerst

Wer so hinschaut, findet zu viele Lücken. Das ist normal und der Grund, warum es eine Rangfolge braucht.

Meine Faustformel: Häufigkeit mal Dauer pro Vorgang, Kontextwechsel eingerechnet, plus Fehlerkosten. Ein Beispiel mit runden Zahlen: Ein Handgriff von drei Minuten, 2.000 Mal im Jahr, sind 100 Stunden. Das ist das Potenzial, nicht die Ersparnis. Davon gehen ab: Einführung, Betrieb, die Ausnahmen, die weiter von Hand laufen, und der Prüfaufwand, wenn ein Modell im Spiel ist. Was übrig bleibt, ist der Gewinn, und der ist oft kleiner, als die 100 Stunden versprechen. Manchmal ist er negativ.

Dann: nicht die nervigste Lücke zuerst, sondern die mit der höchsten Kombination aus Häufigkeit und Fehlerrisiko. Ein seltener, aber kritischer manueller Schritt, der Abgleich von Finanzdaten zum Beispiel, kann dringender sein als ein häufiger, harmloser. Jede manuelle Übertragung ist auch eine Stelle, an der Daten in falsche Hände oder falsche Felder geraten. Prozesslücke und Sicherheitslücke sind oft dieselbe Stelle, und insofern hat wAnywhere mit seinem Verdacht nicht ganz unrecht. Nur ist die Antwort darauf keine Überwachung, sondern das Schließen der Lücke.

Vorher messen, nachher mit derselben Kennzahl messen. Sonst bleibt „gewinnbringend“ ein Gefühl.

Und: ein Prozess, eine Lücke, ein Verantwortlicher. Nicht zehn Baustellen gleichzeitig. Dazu habe ich schon einmal geschrieben, [Du kannst alles ändern. Aber nicht alles auf einmal.](/blog/du-kannst-alles-aendern), und bei Prozessen gilt das genauso wie bei Vorsätzen.

## Eine Woche zählen

Wer Copy&Paste bei anderen zählt, sucht Lücken im Prozess und keine Schuldigen. Die Leute, die täglich kopieren, wissen am besten, wo es hakt. Sie haben nur nie jemanden gehabt, der danach fragt.

Deshalb der Vorschlag zum Schluss, der kein Tool braucht. Such dir eine Aufgabe, die du diese Woche mehrmals machst. Zähl eine Woche lang, wie oft du dabei kopierst oder abtippst, mit Clipboard-Manager oder Strichliste. Notier die drei häufigsten Stellen. Und stell für jede die eine Frage: weglassen, vereinfachen, verbinden, oder KI?

Ob meine Überschlagsrechnung etwas taugt, weiß ich noch nicht. Ein Teil der Kopiervorgänge sind Links und Suchbegriffe, und ob ein Link in Slack eine Lücke ist oder einfach ein Link, kann ich ohne Historie nicht sagen. Die Woche mit Clipboard-Manager steht bei mir noch aus. Das ist der Teil, den ich als Nächstes anschaue.
