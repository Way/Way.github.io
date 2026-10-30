---
title: 'If it cannot be used by an agent, it cannot be used'
language: de
description: 'Die Doku für „stripe pay“ ist an den Agent geschrieben statt an den Menschen, Resend macht jede Dashboard-Funktion programmatisch erreichbar, und der SaaSpocalypse blieb aus. Warum die Frage nicht mehr lautet, ob dein Produkt leicht zu bedienen ist, sondern ob ein Agent es bedienen kann. Und was das mit Preisen, Zugang und Verantwortung macht.'
pubDate: '2026-10-28'
ressort: 'maerkte-modelle'
kicker: 'Agent-ready'
glance:
  - 'Die Doku für „stripe pay“ ist an den Agent geschrieben, nicht an den Menschen. Patrick Collison dazu: „A2A payments will be more important than P2P payments.“'
  - 'Resends Regel „Everything the dashboard can do should also be available programmatically“ ist die Messlatte. Bei fino: fünf Tools, nur lesend, eine Ausnahme.'
  - 'Der Engpass ist nicht Intelligenz, sondern Autorisierung. Wer hat was erlaubt, und wie weist man das hinterher nach?'
visualTheme: 'blueprint'
prompt: 'Was passiert mit Software und SaaS-Geschäftsmodellen, wenn der Nutzer ein Agent ist? Was heißt es, Agents zu befähigen, unsere Produkte zu benutzen, und warum verkaufen wir dann Lösungen statt Werkzeuge?'
tags: ['AI', 'Agenten', 'SaaS', 'Geschäftsmodelle', 'Headless', 'Open Banking']
---

Gestern hat Stripe [„stripe pay“](https://x.com/stripe/status/2115122346075832468) vorgestellt. Überweisungen von Firma zu Firma, sofort und kostenlos, über einen Profil-Handle wie `@recipient`, im Dashboard und in der CLI. Die [Doku dazu](https://docs.stripe.com/cli/pay) liest sich anders als jede Doku, die ich kenne. Sie ist nicht an mich geschrieben, sondern an den Agent:

> This command can move money. Use `--agent` or `--json` to review transfer details in machine-readable output. Only add `--yes` after the user confirms the recipient, amount, currency, and source financial account. Use `--dry-run` to validate the flow without creating or sending the transfer.

Und einen Absatz weiter oben: „Don't guess the recipient.“

Patrick Collison hat die Ankündigung mit einem Satz weitergereicht: [„A2A payments will be more important than P2P payments.“](https://www.pymnts.com/news/b2b-payments/2026/stripe-pay-targets-instant-b2b-payments/) Agent zu Agent, wichtiger als Mensch zu Mensch. Gesagt von der Firma, die den Zahlungsverkehr im Internet etabliert hat.

Ich glaube, in dem Satz steckt eine Regel, die über Zahlungen hinausgeht. **Wenn ein Agent dein Produkt nicht benutzen kann, kann es nicht benutzt werden.** Nicht heute, aber in dem Zeitraum, für den du gerade planst.

## Der SaaSpocalypse blieb aus. Der Nutzer hat sich trotzdem geändert.

Anfang des Jahres sind Software-Aktien eingebrochen, bis Anfang Februar [fast eine Billion Dollar](https://www.stripeeconomics.com/p/the-saaspocalypse-was-more-like-a) Börsenwert. Die Angst dahinter: Agents ersetzen SaaS. Ernie Tedeschi hat im September nachgerechnet, mit dem Zahlungsvolumen von rund 72.000 SaaS-Firmen pro Woche. Der Umsatz wächst mit über 30 Prozent im Jahr, mindestens so schnell wie zuletzt im Sommer 2023. Die Panik war, wie er schreibt, „almost entirely prospective“.

Interessanter als die Summe ist, wer wächst. Firmen, die jünger als ein Jahr sind, ziehen den älteren davon. Und derselbe Datensatz zeigt, welche Firmen von Agents bedient werden: MCP-Anfragen, Aufrufe aus agentischen CLIs, Sandbox-Claims. Anfang 2026 lagen die reifen Firmen bei diesen Signalen noch fünf Punkte vorn. Im April ist das gekippt, jetzt liegen die jungen vier Punkte vorn.

SaaS stirbt nicht. Aber die Firmen, die wachsen, sind die, die ein Agent bedienen kann.

## Was die Oberfläche kann, soll auch der Agent können

Resend hat am 22. September die [„Headless Dashboard Initiative“](https://resend.com/blog/headless-dashboard-initiative) vorgestellt. Der Grundsatz in einem Satz: „Everything the dashboard can do should also be available programmatically.“ Über API, SDKs, CLI und MCP-Server. Mensch und Agent bekommen gleichen Zugriff, der Entwickler bleibt der Bediener.

Konkret hat Resend in den letzten Monaten neun Lücken geschlossen. Zustellungs-Kennzahlen lassen sich per API abrufen. Fehlgeschlagene Webhook-Events kann man auflisten und erneut senden, Signing-Secrets rotieren, ohne das Dashboard zu öffnen. Eine Automation lässt sich duplizieren, die Kopie startet als deaktivierter Entwurf. Für jede künftige Funktion gilt die Zusage, sie von Anfang an headless anzubieten.

Das sind keine großen Features. Das ist Inventur: Interaktionen sammeln, die nur im Dashboard gehen, und Lücke für Lücke schließen.

Wir haben bei fino gerade angefangen, dasselbe zu tun. Der erste Entwurf von [finoos-mcp](https://mcp.dev.fino.cloud) verbindet ein Bankkonto aus Claude heraus und beantwortet danach Fragen zu Kontoständen, Umsätzen und Ausgaben. Fünf Tools, nur lesend, mit einer Ausnahme: `connect_bank` startet den Bank-Login.

Lesend anfangen ist Risikosteuerung. Jede Funktion, die wir headless öffnen, ist auch für Fehlbedienung offen.

Der Trend und die Anforderungen für diese Agentifizierung sind klar. Das Ziel und die daraus entstehenden Möglichkeiten sind völlig offen.

## Lösungen statt Werkzeuge

Was ändert sich, wenn der Agent der Nutzer ist? Mehr, als die Headless-Checkliste vermuten lässt.

Ein Mensch kauft ein Werkzeug und bringt die Arbeit mit. Er lernt die Oberfläche und arbeitet um die Lücken herum. Ein Agent kauft kein Werkzeug. Er hat eine Aufgabe, und er sucht den Weg, auf dem die Aufgabe erledigt wird. Wenn dein Produkt dafür einen Login im Browser braucht, nimmt er den Browser, mit allen Folgen, die ich in [Die Haushaltshilfe fürs Digitale](/blog/die-haushaltshilfe-fuers-digitale) beschrieben habe. Gibt es einen MCP-Server, nimmt er den, und hat der Wettbewerber einen und du nicht, nimmt er den Wettbewerber, ohne dass irgendwer dein Dashboard je gesehen hat.

Das verschiebt, wofür bezahlt wird. 25 Jahre lang war der Seat die Einheit: ein Login pro Mensch, ein Preis pro Monat. Das Modell setzt voraus, dass Menschen die Arbeit machen und Software sie schneller macht. Wenn drei Agents die Arbeit von zehn Menschen erledigen, zahlt niemand zehn Seats. Übrig bleibt das, was der Agent erledigt hat: die Überweisung, das gelöste Ticket. Im B2B habe ich das unter [Service as Software](/blog/service-as-software) beschrieben, dort rechnen Firmen wie Decagon pro gelöstem Ticket ab. Headless ist die technische Voraussetzung dafür. **Du kannst kein Ergebnis verkaufen, das ein Agent nicht abrufen kann.**

Und es verschiebt die Erwartung. Wer Instinct oder Claude Duet eine Aufgabe gibt, erwartet die Lösung. Ob dahinter dein Produkt steckt oder das eines anderen, sieht er nicht mehr. Die Beziehung zum Kunden wandert eine Ebene nach oben, zum Agent. Was bei dir bleibt, ist der Teil, den der Agent nicht selbst kann: die Daten, die Regeln, der Zugang zur Bank, die Haftung.

## Agents kriegen den Schlüsselbund

Damit ein Agent etwas nutzen kann, braucht er Zugang. Diese Woche stand das in jeder zweiten Meldung. 1Password hat [„1Password for Agents“](https://9to5google.com/?p=734318) gestartet: Der Agent erreicht ein Login, fragt an, ich gebe frei, und 1Password füllt das Formular selbst aus. Der Agent sieht das Passwort nie. Anthropic hat [Claude Duet](https://letsdatascience.com/news/anthropic-opens-claude-duet-research-preview-for-proactive-a-16522f5d) vorgestellt, einen Agent, der morgens eine Übersicht aus allen verbundenen Apps schickt und in der Cloud weiterarbeitet, wenn mein Laptop zu ist. Vor Senden, Zahlen, Unterschreiben oder Löschen fragt er nach. Und Auto Mode wird in den Claude-Apps zum Standard: Statt dass ich jede Aktion abnicke, blockiert ein Klassifikator das, was riskant aussieht.

Das ist bequem, und wer es bis jetzt noch nicht genutzt hat, wird sich wundern, wie schnell man sich daran gewöhnt, die Kontrolle abzugeben. Aber der Kontrollpunkt wandert. Früher war ich die Prüfung, jetzt ist es ein Klassifikator. Die Frage ist nicht mehr „Darf er das?“, sondern „Was ist durchgerutscht?“

Bei den Banken ist diese Frage schon angekommen. [Laut Axios](https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-friday-october-23-2026/) versuchen Morgan Stanley und Bank of America gerade, ungeprüfte Drittanbieter-Agents in Kundenkonten in den Griff zu bekommen. Das Kernproblem ist die Zuordnung: Hat der Kunde diese Aktion angewiesen, oder handelt der Agent über das hinaus, was er sollte? Lesen ist das kleinere Problem. Spannend wird es bei Überweisungen.

Ich arbeite im Open Banking, und das erinnert mich stark an Screen Scraping vor PSD2. Damals gab es auch Zugriff mit echten Zugangsdaten, ohne klaren Auftrag. Die Antwort war regulierter Zugang, Consent mit Scope und starke Kundenauthentifizierung. Das hat Jahre gedauert.

Die CLI-Doku vom Anfang hat das für Agents schon vorweggenommen, ohne auf einen Regulator zu warten. Der Agent soll `--dry-run` laufen lassen, bevor er Geld bewegt. Er soll `--yes` erst setzen, wenn der Mensch Empfänger, Betrag, Währung und Quellkonto bestätigt hat. Für die [Treasury-Konten](https://docs.stripe.com/treasury/agents) gibt es eigene Agent-API-Keys für dauerhaften Zugriff ohne eingeloggten Menschen, jede Geldbewegung muss standardmäßig freigegeben werden, und ein Admin kann im Dashboard jede Agent-Session widerrufen. Das ist Consent und Scope, nur eben vom Anbieter gebaut statt vom Gesetzgeber.

**Der Engpass ist nicht Intelligenz, sondern Autorisierung.** Wer darf was, und wie weist man es hinterher nach? Ein Agent mit Zugang ist ein privilegierter Account und braucht dieselbe Härte wie jeder andere.

## Was kann bei uns nur ein Mensch?

Im AI Weekly habe ich diese Woche gefragt, wer einem Agent heute Lesezugriff auf sein Konto geben würde. Viele Hände. Dann die zweite Frage: Und Schreibzugriff, also Überweisungen? Deutlich weniger Hände. Einig war sich die Runde in einem Punkt: Was der Agent tut, will man kontrollieren, bestätigen und hinterher nachvollziehen können.

Die Frage, mit der ich im Team weitermache, ist eine andere: Was kann bei fino heute nur ein Mensch in einer Oberfläche auslösen? Ich habe keine vollständige Liste. Bei fünf Tools ist das noch kein Thema. Bei fünfzig wird es eins, und dann stellt sich die nächste Frage, die ich auch noch nicht beantworten kann: ab welchem Punkt uns ein Agent mit Schreibrechten recht wäre. Und vor allem, ab welchem Punkt Kunden und Nutzer im regulierten Umfeld von Banken und Finanzdienstleistern bereit sind, einem Agent dieses Vertrauen zu schenken.
