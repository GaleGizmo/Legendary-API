let rollingStones = {
    "name": "The Rolling Stones",
    "numberOfComponents": 8,
    "componentsNames": ["Mick Jagger", "Keith Richards", "Ronnie Wood", "Brian Jones", "Ian Stewart", "Bill Wyman", "Charlie Watts", "Mick Taylor"],
    "country": "England",
    "discography": ["The Rolling Stones (1964)", "12 X 5 (1964)", "The Rolling Stones No. 2 (1965)", "The Rolling Stones, Now! (1965)", "Out of Our Heads (1965)", "December's Children (And Everybody's) (1965)", "Aftermath (1966)", "Between the Buttons (1967)", "Their Satanic Majesties Request (1967)", "Beggars Banquet (1968)", "Let It Bleed (1969)", "Sticky Fingers (1971)", "Exile on Main St. (1972)", "Goats Head Soup (1973)", "It's Only Rock 'n Roll (1974)", "Black and Blue (1976)", "Some Girls (1978)", "Emotional Rescue (1980)", "Tattoo You (1981)", "Undercover (1983)", "Dirty Work (1986)", "Steel Wheels (1989)", "Voodoo Lounge (1994)", "Bridges to Babylon (1997)", "A Bigger Bang (2005)"],
    "image": "<URL>",
    "description": `The Rolling Stones es una banda de rock inglesa formada en Londres en 1962. Son una de las bandas más populares y duraderas de la era del rock. A principios de la década de 1960, The Rolling Stones fue pionera en el sonido arenoso y rítmicamente impulsado que llegó a definir el hard rock. Su primera alineación estable consistió en el vocalista Mick Jagger, el multiinstrumentista Brian Jones, el guitarrista Keith Richards, el bajista Bill Wyman y el baterista Charlie Watts. Durante sus años formativos, Jones fue el líder principal: armó la banda, la nombró y dirigió su sonido e imagen. Después de que Andrew Loog Oldham se convirtiera en el manager del grupo en 1963, los animó a escribir sus propias canciones. Jagger y Richards se convirtieron en la fuerza creativa principal detrás de la banda, alienando a Jones, quien había desarrollado una adicción a las drogas que interfería con su capacidad para contribuir significativamente. Arraigados en el blues y el rock and roll temprano, The Rolling Stones comenzó tocando covers y estuvo a la vanguardia de la Invasión Británica en 1964, identificándose con la contracultura juvenil y rebelde de la década de 1960. Luego encontraron un mayor éxito con su propio material, ya que "(I Can't Get No) Satisfaction" (1965), "Get Off of My Cloud" (1965) y "Paint It Black" (1966) se convirtieron en éxitos internacionales número uno. Aftermath (1966) - su primer álbum completamente original - es considerado por The Daily Telegraph como el más importante de sus registros formativos.` 
  };
  let queen = {
    "name": "Queen",
    "numberOfComponents": 4,
    "componentsNames": ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
    "country": "England",
    "discography": ["Queen (1973)", "Queen II (1974)", "Sheer Heart Attack (1974)", "A Night at the Opera (1975)", "A Day at the Races (1976)", "News of the World (1977)", "Jazz (1978)", "The Game (1980)", "Flash Gordon (1980)", "Hot Space (1982)", "The Works (1984)", "A Kind of Magic (1986)", "The Miracle (1989)", "Innuendo (1991)", "Made in Heaven (1995)"],
    "image": "<URL>",
    "description": `Queen es una banda de rock británica formada en Londres en 1970 por Freddie Mercury (voz principal, piano), Brian May (guitarra, voz) y Roger Taylor (batería, voz), a los que más tarde se unió John Deacon (bajo). Sus primeras obras estuvieron influenciadas por el rock progresivo, el hard rock y el heavy metal, pero la banda se aventuró gradualmente en trabajos más convencionales y amigables para la radio al incorporar estilos adicionales como el rock de arena y el pop rock.`
  };
  let michaelJackson = {
    "name": "Michael Jackson",
    "numberOfComponents": 1,
    "componentsNames": ["Michael Jackson"],
    "country": "United States",
    "discography": ["Got to Be There (1972)", "Ben (1972)", "Music & Me (1973)", "Forever, Michael (1975)", "Off the Wall (1979)", "Thriller (1982)", "Bad (1987)", "Dangerous (1991)", "HIStory: Past, Present and Future, Book I (1995)", "Invincible (2001)"],
    "image": "<URL>",
    "description": `Michael Jackson fue un cantante, compositor y bailarín estadounidense. Apodado el Rey del Pop, es considerado uno de los artistas más exitosos de todos los tiempos. Su contribución a la música, la danza y la moda lo convirtieron en una figura global en la cultura popular durante más de cuatro décadas.`
  };
  let pinkFloyd={
    "name": "Pink Floyd",
    "numberOfComponents": 5,
    "componentsNames": ["Syd Barrett", "Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"],
    "country": "Reino Unido",
    "discography": ["The Dark Side of the Moon", "Wish You Were Here", "Animals", "The Wall", "The Final Cut"],
    "image": "",
    "description": "Pink Floyd fue una banda de rock británica, fundada en Londres en 1965. Considerada un ícono cultural del siglo XX y una de las bandas más influyentes, exitosas y aclamadas en la historia de la música popular. Es conocida por sus canciones de alto contenido filosófico, a veces de crítica política, junto a la experimentación sonora, las innovadoras portadas de sus discos y sus elaborados espectáculos en vivo. Su estilo musical incluye rock progresivo, art rock, rock psicodélico, rock experimental y rock sinfónico [^1^][1]."
}
let beachBoys={
    "name": "The Beach Boys",
    "numberOfComponents": 5,
    "componentsNames": ["Brian Wilson", "Mike Love", "Al Jardine", "Carl Wilson", "Dennis Wilson"],
    "country": "Estados Unidos",
    "discography": ["Surfin' Safari", "Surfin' U.S.A.", "Surfer Girl", "Little Deuce Coupe", "Shut Down Volume 2", "All Summer Long", "The Beach Boys' Christmas Album", "The Beach Boys Today!", "Summer Days (And Summer Nights!!)", "Beach Boys' Party!", "Pet Sounds", "Smiley Smile", "Wild Honey", "Friends", "20/20"],
    "image": "",
    "description": "The Beach Boys es una banda de rock formada en la ciudad estadounidense de Hawthorne, Los Ángeles (California) en el año 1961. Distinguidos por sus armonías vocales, son uno de los grupos más influyentes de la era del rock and roll. El grupo, dirigido por su principal compositor y productor Brian Wilson, fue pionero en nuevos enfoques de la producción de música popular, combinando sus afinidades por grupos vocales basados en el jazz y el rock and roll de los años 50 para crear su sonido único [^1^][1]."
}
let theBeatles={
    "name": "The Beatles",
    "numberOfComponents": 4,
    "componentsNames": ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
    "country": "Reino Unido",
    "discography": ["Please Please Me", "With The Beatles", "A Hard Day's Night", "Beatles for Sale", "Help!", "Rubber Soul", "Revolver", "Sgt. Pepper's Lonely Hearts Club Band", "Magical Mystery Tour", "The Beatles (White Album)", "Yellow Submarine", "Abbey Road", "Let It Be"],
    "image": "",
    "description": "The Beatles, también conocida en el mundo hispano como los Beatles, fue una banda de rock británica formada en Liverpool durante los años 1960, estando integrada desde 1962 a su separación en 1970 por John Lennon, Paul McCartney, George Harrison y Ringo Starr. Está considerada como una de las bandas más importantes del movimiento contracultural de la década de 1960 y de la historia de la música [^1^][1]."
}
let paulSimon={
    "name": "Paul Simon",
    "numberOfComponents": 1,
    "componentsNames": ["Paul Simon"],
    "country": "Estados Unidos",
    "discography": ["The Paul Simon Songbook", "Paul Simon", "There Goes Rhymin' Simon", "Still Crazy After All These Years", "One-Trick Pony", "Hearts and Bones", "Graceland", "The Rhythm of the Saints", "Songs from The Capeman", "You're the One", "Surprise", "So Beautiful or So What", "Stranger to Stranger", "In the Blue Light"],
    "image": "",
    "description": "Paul Frederic Simon (Newark, Nueva Jersey, 13 de octubre de 1941) es un cantante, músico y renombrado compositor musical estadounidense. La carrera musical de Simon se ha extendido por más de seis décadas. Es ampliamente considerado como uno de los compositores más aclamados en la historia de la música popular [^1^][1]."
}
let marvinGaye={
    "name": "Marvin Gaye",
    "numberOfComponents": 1,
    "componentsNames": ["Marvin Gaye"],
    "country": "Estados Unidos",
    "discography": [    "The Soulful Moods of Marvin Gaye",
    "That Stubborn Kinda Fellow",
    "When I'm Alone I Cry",
    "Hello Broadway",
    "How Sweet It Is to Be Loved by You",
    "A Tribute to the Great Nat \"King\" Cole",
    "Moods of Marvin Gaye",
    "In the Groove",
    "M.P.G.",
    "That's the Way Love Is",
    "What's Going On",
    "Trouble Man",
    "Let's Get It On"
],
    "image": "",
    "description": "Marvin Pentz Gay, Jr. (Washington D. C., 2 de abril de 1939 - Los Ángeles, 1 de abril de 1984) conocido por su nombre artístico Marvin Gaye, fue un músico, productor y cantante estadounidense de soul, smooth soul, quiet storm y blaxploitation. Apodado comúnmente como \"el príncipe del soul\", fue uno de los cantantes fundamentales del Motown Sound [^1^][1]."
}
let stevieWonder={
    "name": "Stevie Wonder",
    "numberOfComponents": 1,
    "componentsNames": ["Stevie Wonder"],
    "country": "Estados Unidos",
    "discography": [
        "The Jazz Soul of Little Stevie",
        "Tribute to Uncle Ray",
        "Recorded Live: The 12 Year Old Genius",
        "With a Song in My Heart",
        "Stevie at the Beach",
        "Up-Tight",
        "Down to Earth",
        "I Was Made to Love Her",
        "Someday at Christmas",
        "Eivets Rednow",
        "For Once in My Life",
        "My Cherie Amour",
        "Stevie Wonder Live",
        "Live at the Talk of the Town",
        "Signed, Sealed & Delivered",
        "Where I'm Coming From",
        "Music of My Mind",
        "Talking Book",
        "Innervisions",
        "Fulfillingness' First Finale",
        "Songs in the Key of Life"
    ],
    "image": "",
    "description": "Stevland Hardaway Morris (Saginaw, Míchigan; 13 de mayo de 1950), conocido artísticamente como Stevie Wonder, es un cantautor y activista social estadounidense. Uno de los más exitosos y reconocidos artistas en la compañía discográfica Motown, con más de 100 millones de discos vendidos. Ciego prácticamente de nacimiento, fue un niño prodigio y durante su carrera ha grabado diversos discos y sencillos que fueron aclamados por la crítica [^1^][1]."
}
let bobDylan={
    "name": "Bob Dylan",
    "numberOfComponents": 1,
    "componentsNames": ["Bob Dylan"],
    "country": "Estados Unidos",
    "discography": [
        "Bob Dylan",
        "The Freewheelin' Bob Dylan",
        "The Times They Are a-Changin'",
        "Another Side of Bob Dylan",
        "Bringing It All Back Home",
        "Highway 61 Revisited",
        "Blonde on Blonde",
        "John Wesley Harding",
        "Nashville Skyline",
        "Self Portrait",
        "New Morning",
        "Pat Garrett & Billy the Kid",
        "Dylan",
        "Planet Waves",
        "Blood on the Tracks",
        "The Basement Tapes",
        "Desire"
    ],
    "image": "",
    "description": "Bob Dylan (Duluth, Minesota; 24 de mayo de 1941), registrado al nacer como Robert Allen Zimmerman, es un músico, compositor, cantante y poeta estadounidense, ampliamente considerado como una de las figuras más prolíficas e influyentes en la música popular del siglo XX y de comienzos del siglo XXI [^1^][2]."
}
let davidBowie={
    "name": "David Bowie",
    "numberOfComponents": 1,
    "componentsNames": ["David Bowie"],
    "country": "Reino Unido",
    "discography": [
        "David Bowie",
        "Space Oddity",
        "The Man Who Sold the World",
        "Hunky Dory",
        "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        "Aladdin Sane",
        "Pin Ups",
        "Diamond Dogs",
        "Young Americans",
        "Station to Station",
        "Low",
        "Heroes",
        "Lodger",
        "Scary Monsters (and Super Creeps)",
        "Let's Dance",
        "Tonight",
        "Never Let Me Down"
    ],
    "image": "",
    "description": "David Robert Jones (Londres, 8 de enero de 1947 - Nueva York, 10 de enero de 2016), más conocido por su nombre artístico David Bowie, fue un cantautor, actor, multiinstrumentista y diseñador británico. Figura importante de la música popular durante casi cinco décadas, Bowie es considerado un innovador, en particular por sus trabajos de la década de 1970 y por su peculiar voz, además de la profundidad intelectual de su obra [^1^][1]."
}
let publicEnemy={
    "name": "Public Enemy",
    "numberOfComponents": 4,
    "componentsNames": ["Chuck D", "Flavor Flav", "Professor Griff", "DJ Lord"],
    "country": "Estados Unidos",
    "discography": [
        "Yo! Bum Rush the Show",
        "It Takes a Nation of Millions to Hold Us Back",
        "Fear of a Black Planet",
        "Apocalypse 91... The Enemy Strikes Black",
        "Greatest Misses",
        "Muse Sick-n-Hour Mess Age",
        "He Got Game",
        "There's a Poison Goin On...."
    ],
    "image": "",
    "description": "Public Enemy es un grupo estadounidense de rap proveniente de Long Island, Nueva York, formado en 1985. El grupo se hizo conocido por sus mensajes políticos que incluyen temas como el racismo estadounidense y los medios de comunicación estadounidenses [^1^][1]."
}
let Ramones={
    "name": "Ramones",
    "numberOfComponents": 4,
    "componentsNames": ["Joey Ramone", "Johnny Ramone", "Dee Dee Ramone", "Tommy Ramone"],
    "country": "Estados Unidos",
    "discography": [
        "Ramones",
        "Leave Home",
        "Rocket to Russia",
        "Road to Ruin",
        "End of the Century",
        "Pleasant Dreams",
        "Subterranean Jungle",
        "Too Tough to Die"
    ],
    "image": "",
    "description": "Los Ramones fueron una banda estadounidense de punk rock que se formó en el barrio de Forest Hills en Queens, Nueva York, en 1974. A menudo se les cita como el primer grupo verdadero de punk rock. A pesar de haber logrado solo un éxito comercial limitado durante su tiempo juntos, la banda es vista hoy en día como altamente influyente."
}