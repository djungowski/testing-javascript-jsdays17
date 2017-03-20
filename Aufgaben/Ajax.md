# AJAX

Gebeben ist folgendes HTML:
```
<input type="text" id="typeahead">
<div id="typeahead-suggestions"></div>
```

Sobald der User anfängt zu tippen, wird ein Request an den Server geschickt und die Antwort mit den Suchvorschlägen in `#typeahead-suggestions` gerendert.

jasmine-ajax funktioniert wie folgt:
```
const httpResponse = {
  status: 200,
  responseText: JSON.stringify(responseText)
};

jasmine.Ajax.install();

const request = jasmine.Ajax.requests.mostRecent();
request.respondWith(httpResponse);

jasmine.Ajax.uninstall();
```