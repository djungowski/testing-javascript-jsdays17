class Typeahead {
  registerChange() {
    const typeahead = $('#typeahead');
    const suggestions = $('#typeahead-suggestions');


    typeahead.change(() => {
      const term = typeahead.val();

      $.ajax('/api/typeahead', {
        method: 'POST',
        data: {
          q: term
        },
        success: (response) => {
          suggestions.text(response);
        }
      })
    })
  }
}