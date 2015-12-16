  var health = ["Acquired Brain Injury","Autism","Communication-Hearing","Communication-Speaking","Communication-Speaking & Hearing","Hearing - Deaf","Hearing - Hard Hearing","Learning Difficulties","Mobility Limitation","Psychological - Anxiety","Psychological - Depression","Psychological - Split","Visual - Blindness","Visual - Color Blindness","Visual - Low Vision","Visual - Monocular Vision"];

  // bloodhound
  // constructs the suggestion engine
  var health = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
  // this is the countries array declared above
    local: health
  });

  $('#bloodhound .htypeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'health',
    source: health
  });

