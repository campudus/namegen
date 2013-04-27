var nameGen = (function() {
  var nameGenFromArray = function(names) {
    var name = '', i = 0, l = names.length;
    console.log('l:' + l);
    while (i < l) {
      name = name + names[i][(Math.floor(Math.random() * names[i].length))];
      i = i + 1;
    }

    return name;
  };

  var adj = [ '', 'Alte', 'Arme', 'Blaue', 'Blinde', 'Clevere', 'Dicke', 'Dünne', 'Duftende',
      'Dunkle', 'Eiserne', 'Erfahrene', 'Fliegende', 'Gefährliche', 'Gefrorene', 'Geheime',
      'Gelbe', 'Glänzende', 'Goldene', 'Grüne', 'Große', 'Gute', 'Helle', 'Hinterlistige',
      'Hitzige', 'Jagende', 'Jodelnde', 'Jubelnde', 'Juckende', 'Kaputte', 'Klasse', 'Klebrige',
      'Kleine', 'Krümelnde', 'Lachende', 'Laufende', 'Laute', 'Leckere', 'Leise', 'Liebe', 'Lila',
      'Lustige', 'Mini', 'Monströse', 'Mutige', 'Neue', 'Ölige', 'Orange', 'Pfiffige', 'Piepsende',
      'Quasselnde', 'Quietschende', 'Reiche', 'Richtige', 'Riesige', 'Rote', 'Schlaue',
      'Schmutzige', 'Schöne', 'Siegende', 'Springende', 'Tobende', 'Tödliche', 'Tolle',
      'Tolpatschige', 'Träumende', 'Trunkene', 'Ungeduldige', 'Unheimliche', 'Verrückte',
      'Wartende', 'Weise', 'Wilde', 'Wirbelnde' ];
  var names = [
      [
          [ 'Der' ],
          adj,
          [ 'Adler', 'Astronaut', 'Biber', 'Brief', 'Clown', 'Daumen', 'Elch', 'Elefant', 'Erpel',
              'Fahrgast', 'Fels', 'Flitzer', 'Gast', 'Gürtel', 'Hase', 'Hecht', 'Herr', 'Hirsch',
              'Hund', 'Igel', 'Insider', 'Junge', 'Käfer', 'Kaffee', 'Käse', 'Klon', 'Knauser',
              'Keks', 'Kiesel', 'Kreis', 'Kürbis', 'Löwe', 'Mann', 'Mensch', 'Moderator', 'Mond',
              'Neffe', 'Onkel', 'Papagei', 'Pfosten', 'Polizist', 'Praktikant', 'Prüfer', 'Riegel',
              'Schnaps', 'Schuft', 'Spieler', 'Streuner', 'Teller', 'Toaster', 'Vogel', 'Wächter',
              'Wäschekorb', 'Welpe', 'Wirt', 'Wurm', 'Ziegel', 'Zwerg' ] ],
      [
          [ 'Die' ],
          adj,
          [ 'Achtzehn', 'Akte', 'Banane', 'Birne', 'Box', 'Cousine', 'Dreizehn', 'Elfe', 'Erbse',
              'Ex', 'Feder', 'Flasche', 'Fliege', 'Frau', 'Gans', 'Giraffe', 'Gitarre', 'Gurke',
              'Hälfte', 'Hand', 'Hilfe', 'Hose', 'Jungfrau', 'Kanone', 'Katze', 'Kreide', 'Kuh',
              'Lampe', 'Laterne', 'Maschine', 'Maus', 'Murmel', 'Nichte', 'Olive', 'Oma',
              'Paprika', 'Pepperoni', 'Pfeife', 'Pommes', 'Qualle', 'Ratte', 'Rose', 'Salami',
              'Schaukel', 'Schnecke', 'Stange', 'Sonne', 'Torte', 'Trompete', 'Tüte', 'Wurzel',
              'Wurst', 'Zeitung', 'Ziege', 'Zitrone', 'Zwiebel' ] ],
      [
          [ 'Das' ],
          adj,
          [ 'Ah', 'Auge', 'Auto', 'Baby', 'Bett', 'Bier', 'Biest', 'Boot', 'Brot', 'Comic',
              'Dreieck', 'Ei', 'Einhorn', 'Eis', 'Element', 'Fenster', 'Flugzeug', 'Gebirge',
              'Geheimnis', 'Getränk', 'Heft', 'Kalb', 'Kamel', 'Kaninchen', 'Kanu', 'Kind',
              'Klavier', 'Korn', 'Lama', 'Luder', 'Messer', 'Model', 'Müsli', 'Nashorn',
              'Nilpferd', 'Papier', 'Pferd', 'Radio', 'Reh', 'Ruder', 'Rohr', 'Schiff',
              'Schnitzel', 'Telefon', 'Tier', 'Ungeheuer', 'Viereck', 'Wasser', 'Zebra' ] ] ];

  var generate = function() {
    var x = Math.floor(Math.random() * names.length);
    return nameGenFromArray(names[x]);
  };

  return generate;
}());

if (module) {
  module.exports = nameGen;
}