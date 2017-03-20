# Spies

Schreibe eine Funktion notify(), die einen String als
Parameter erhält und gibt den String mitsamt der aktuellen
Zeit über window.alert wieder aus.

## API
`notify('Wir testen spies')` =>
`window.alert('[Mon Mar 20 2017 11:42:37 GMT+0100 (CET)] Wir testen spies')`

## Wegmocken / DI
Date()
window.alert

## Aufgabe 2
Kopiere den notify Testcase und schreibe ihn so um, dass `jasmine.clock().mockDate(baseTime);` verwendet wird.