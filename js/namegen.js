var nameGen = (function() {
  var germanAdj = [ '', 'Alte', 'Arme', 'Blaue', 'Blinde', 'Clevere', 'Dicke', 'Dünne', 'Duftende',
      'Dunkle', 'Eilige', 'Eiserne', 'Erfahrene', 'Feine', 'Fliegende', 'Gefährliche', 'Gefrorene',
      'Geheime', 'Gelbe', 'Glänzende', 'Goldene', 'Grüne', 'Große', 'Gute', 'Heilige', 'Helle',
      'Hinterlistige', 'Hitzige', 'Hüpfende', 'Jagende', 'Jodelnde', 'Jubelnde', 'Juckende',
      'Kaputte', 'Klasse', 'Klebrige', 'Kleine', 'Krümelnde', 'Lachende', 'Laufende', 'Laute',
      'Leckere', 'Leise', 'Liebe', 'Lila', 'Lustige', 'Mini', 'Monströse', 'Mutige', 'Neue',
      'Ölige', 'Orange', 'Pfiffige', 'Piepsende', 'Quasselnde', 'Quietschende', 'Reiche',
      'Richtige', 'Riesige', 'Rote', 'Schlaue', 'Schmutzige', 'Schöne', 'Siegende', 'Springende',
      'Tobende', 'Tödliche', 'Tolle', 'Tolpatschige', 'Träumende', 'Trunkene', 'Ungeduldige',
      'Unheimliche', 'Verrückte', 'Wartende', 'Weise', 'Wilde', 'Wirbelnde' ];

  var names = {
    'de' : [
        [
            [ 'Der' ],
            germanAdj,
            [ 'Adler', 'Astronaut', 'Biber', 'Brief', 'Clown', 'Daumen', 'Elch', 'Elefant',
                'Erpel', 'Fahrgast', 'Fels', 'Flitzer', 'Gast', 'Gürtel', 'Hase', 'Hecht', 'Herr',
                'Hirsch', 'Hund', 'Igel', 'Insider', 'Junge', 'Käfer', 'Kaffee', 'Käse', 'Klon',
                'Knauser', 'Keks', 'Kiesel', 'Kreis', 'Kürbis', 'Löwe', 'Mann', 'Mensch',
                'Moderator', 'Mond', 'Neffe', 'Onkel', 'Papagei', 'Pfosten', 'Polizist',
                'Praktikant', 'Prüfer', 'Riegel', 'Schnaps', 'Schuft', 'Spieler', 'Streuner',
                'Teller', 'Toaster', 'Vogel', 'Wächter', 'Wäschekorb', 'Welpe', 'Wirt', 'Wurm',
                'Ziegel', 'Zwerg' ] ],
        [
            [ 'Die' ],
            germanAdj,
            [ 'Achtzehn', 'Akte', 'Banane', 'Birne', 'Box', 'Cousine', 'Dreizehn', 'Elfe', 'Erbse',
                'Ex', 'Feder', 'Flasche', 'Fliege', 'Frau', 'Gans', 'Giraffe', 'Gitarre', 'Gurke',
                'Hälfte', 'Hand', 'Hilfe', 'Hose', 'Jungfrau', 'Kanone', 'Katze', 'Kreide', 'Kuh',
                'Lampe', 'Laterne', 'Maschine', 'Maus', 'Murmel', 'Nichte', 'Olive', 'Oma',
                'Paprika', 'Pepperoni', 'Pfeife', 'Pommes', 'Qualle', 'Ratte', 'Rose', 'Salami',
                'Schaukel', 'Schnecke', 'Stange', 'Sonne', 'Torte', 'Trompete', 'Tüte', 'Wurzel',
                'Wurst', 'Zeitung', 'Ziege', 'Zitrone', 'Zwiebel' ] ],
        [
            [ 'Das' ],
            germanAdj,
            [ 'Ah', 'Auge', 'Auto', 'Baby', 'Bett', 'Bier', 'Biest', 'Boot', 'Brot', 'Comic',
                'Dreieck', 'Ei', 'Einhorn', 'Eis', 'Element', 'Fenster', 'Flugzeug', 'Gebirge',
                'Geheimnis', 'Getränk', 'Heft', 'Kalb', 'Kamel', 'Kaninchen', 'Kanu', 'Kind',
                'Klavier', 'Korn', 'Lama', 'Luder', 'Messer', 'Model', 'Müsli', 'Nashorn',
                'Nilpferd', 'Papier', 'Pferd', 'Radio', 'Reh', 'Ruder', 'Rohr', 'Schiff',
                'Schnitzel', 'Telefon', 'Tier', 'Ungeheuer', 'Viereck', 'Wasser', 'Zebra' ] ] ],
    'en' : [
        [ '', 'My', 'Old', 'The' ],
        [ '', 'Aggressive', 'Black', 'Blind', 'Blinking', 'Blue', 'Cheap', 'Cheesy', 'Chunky',
            'Colorful', 'Cosmic', 'Cozy', 'Crazy', 'Dancing', 'Deadly', 'Feisty', 'Free', 'Funky',
            'Funny', 'Great', 'Green', 'Grumpy', 'Hazy', 'Helpful', 'Holy', 'Lawful', 'Lazy',
            'Lesser', 'Little', 'Metal', 'Mighty', 'Playful', 'Purple', 'Raving', 'Red',
            'Rightful', 'Rising', 'Rocking', 'Ruby', 'Special', 'Shady', 'Unlawful', 'Undead',
            'Unholy', 'Yellow', 'White' ],
        [ 'Ant', 'Athlete', 'Avenger', 'Bird', 'Bear', 'Biker', 'Cat', 'Clown', 'Criminal',
            'Diamond', 'Doctor', 'Dog', 'Donkey', 'Dragon', 'Duck', 'Eagle', 'Fighter', 'Flash',
            'Fly', 'Ghost', 'Gorilla', 'Hero', 'Horse', 'Human', 'Juggler', 'Kid', 'Koala',
            'Lantern', 'Lion', 'Mamba', 'Man', 'Mantis', 'Master', 'Monkey', 'Mouse', 'Officer',
            'Pirate', 'Pixel', 'Pumpkin', 'Pony', 'Rat', 'Robot', 'Rose', 'Skater', 'Snail',
            'Snake', 'Soldier', 'Spider', 'Sunshine', 'Tiger', 'Woman', 'Worm', 'Zebra', 'Zombie' ] ]
  };

  var nameGenFromArray = function(names) {
    var name = '', i = 0, l = names.length;
    while (i < l) {
      name = name + names[i][(Math.floor(Math.random() * names[i].length))];
      i = i + 1;
    }

    return name;
  };

  var generateFromMultiDimensionalArray = function(dimensions, names) {
    var x = Math.floor(Math.random() * names.length);
    var dims = dimensions - 1;
    if (dims <= 1) {
      return nameGenFromArray(names[x]);
    } else {
      return generateFromMultiDimensionalArray(dims, names[x]);
    }
  };

  var generator = {
    de : function() {
      return generateFromMultiDimensionalArray(2, names['de']);
    },
    en : function() {
      return nameGenFromArray(names['en']);
    },
    fromArray : nameGenFromArray,
    fromHigherArray : function(dimensions, names) {
      return generateFromMultiDimensionalArray(dimensions, names);
    }
  };

  return generator;
}());

if (typeof module !== 'undefined') {
  module.exports = nameGen;
}
