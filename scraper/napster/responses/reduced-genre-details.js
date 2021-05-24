const genres = [
  // {
  //   type: 'genre',
  //   id: 'g.1053',
  //   name: 'Modern Power Pop',
  //   href: 'https://api.napster.com/v2.2/genres/g.1053',
  //   shortcut: 'alt-punk/power-pop/modern-power-pop',
  // },
  // {
  //   type: 'genre',
  //   id: 'g.112',
  //   name: 'Hard Rock',
  //   href: 'https://api.napster.com/v2.2/genres/g.112',
  //   shortcut: 'rock/hard-rock',
  //   description: `As the 1960s saw rock acts like <a href="http://www.rhapsody.com/artist/jimi-hendrix">Jimi Hendrix</a> and <a href="http://www.rhapsody.com/artist/the-who">the Who</a> turn up their amps, bands began to augment their guitar sounds with distortion. Their blues-based structures, with driving rock guitars and pop hooks, were the rudiments of Hard Rock. The basics of Hard Rock haven't changed, but the myriad styles it has spawned -- from Heavy Metal to Power Pop -- have taken those simple elements in hundreds of directions.`,
  // },
  // {
  //   type: 'genre',
  //   id: 'g.187',
  //   name: 'Industrial Metal',
  //   href: 'https://api.napster.com/v2.2/genres/g.187',
  //   shortcut: 'metal/industrial-metal',
  //   description: `Loud guitars are a staple of the Industrial sound, but in the late '80s, bands such as <a href="http://www.rhapsody.com/artist/ministry">Ministry</a>, <a href="http://www.rhapsody.com/artist/nine-inch-nails">Nine Inch Nails</a> and <a href="http://www.rhapsody.com/artist/kmfdm">KMFDM</a> dramatically increased the riff factor by attacking their guitars with the aggression and intensity of Metal. Ministry's groundbreaking album <i>The Land of Milk and Honey</i> signaled a paradigm shift with its screeching, howling guitars and pummeling beats. Meanwhile, KMFDM took advantage of sampling technology by using other bands' riffs over their own dance beats. On the other side of the Atlantic, U.K. bands <a href="http://www.rhapsody.com/artist/godflesh">Godflesh</a> and <a href="http://www.rhapsody.com/artist/scorn">Scorn</a> created oppressively heavy downtuned noise. Conversely, '90s shock-industrial acts <a href="http://www.rhapsody.com/artist/marilyn-manson">Marilyn Manson</a> and <a href="http://www.rhapsody.com/artist/rammstein">Rammstein</a> added a pop sheen, bringing the Industrial Metal sound into the mainstream.`,
  //   links: { parentGenres: null }
  // },
  {
    type: 'genre',
    id: 'g.204',
    name: 'Indie/Alternative',
    href: 'https://api.napster.com/v2.2/genres/g.204',
    shortcut: 'alt-punk/indie-alternative',
    description: `Indie rock artists traditionally aspire to commercial and artistic autonomy, selectively self-marketing 
their music as inexpensively as possible outside the elaborate mechanisms of the music industry. Spun on college radio and distributed on cheap cassettes, Indie Alternative has ironically provided the rock mainstream with some of its most influential albums. <a href="http://www.rhapsody.com/artist/rem">R.E.M.'s</a> <a href="http://www.rhapsody.com/artist/rem/album/murmur-bonus-tracks">"Murmur"</a> and <a href="http://www.rhapsody.com/artist/the-replacements">the Replacements'</a> <a 
href="http://www.rhapsody.com/artist/the-replacements/album/let-it-be-bonus-tracks">"Let it Be"</a> became cult sensations in the 1980s, while the <a href="http://www.rhapsody.com/artist/archers-of-loaf">Archers of Loaf's</a> <a href="http://www.rhapsody.com/artist/archers-of-loaf/album/icky-mettle-deluxe-reissue">"Icky Mettle"</a> and <a href="http://www.rhapsody.com/artist/elliott-smith">Elliott Smith's</a> <a href="http://www.rhapsody.com/artist/elliott-smith/album/eitheror">"Either/Or"</a> achieved success in the '90s. All of this helped pave the way for the commercial success of bands like <a href="http://www.rhapsody.com/artist/modest-mouse">Modest Mouse</a>, <a href="http://www.rhapsody.com/artist/the-shins">the Shins</a> and <a href="http://www.rhapsody.com/artist/bright-eyes">Bright Eyes</a> in the new millennium.`,
    links: { childGenres: null, parentGenres: null }
  },
  {
    type: 'genre',
    id: 'g.30',
    name: 'Ska Punk',
    href: 'https://api.napster.com/v2.2/genres/g.30',
    shortcut: 'alt-punk/punk/ska-punk',
    description: `During the 1980s, bands like Fishbone and the Mighty, Mighty Bosstones mixed Ska with a raw Punk sound, 
  attaching the lurching rhythms of Ska to loud, aggressive-- yet catchy-- guitar lines and speedy drumming.As their sound developed, their guitar output became louder and heavier.As Ska Punk entered mainstream radio in the '90s, bands like No Doubt and Sublime have infused the upbeat Ska sound with the even heavier guitar sound of white suburbia, while maintaining a clutch of pop radio-friendly singles.`,
    links: { parentGenres: null }
  },
  {
    type: 'genre',
    id: 'g.314',
    name: 'Punk',
    href: 'https://api.napster.com/v2.2/genres/g.314',
    shortcut: 'alt-punk/punk',
    description: `Punk is predicated on aggressive musicianship and often heavy, angry politics. Punk's pioneers emerged from New York City's Lower East Side. They blended elements of aggression and attitude with undertones of Hard Rock, Girl Groups and even Rockabilly, turning rock 'n' roll on its head. <p><p>With roots in the nihilistic sounds of <a href="http://www.rhapsody.com/artist/the-stooges">the Stooges</a>, <a href="http://www.rhapsody.com/artist/mc5">MC5</a>, and <a href="http://www.rhapsody.com/artist/the-velvet-underground">the Velvet Underground</a>, punk rose in England in the late '70s as a savage reaction to polished, tired mainstream rock. More than a musical revolution, Punk was a full-blown assault on the soured, restrictive social and political conventions that lingered in England following World War II. Few people were living England's 'dream' lifestyle of economic security, sophistication, and modernity, allowing bands such as <a href="http://www.rhapsody.com/artist/the-sex-pistols">the Sex Pistols</a> -- Punk's standard bearers -- burst onto the scene. Taking their cue from the New York groups, the Sex Pistols' anger and rebelliousness permeated their music, their appearance, their stage presence, and the embittered politics of their lyrics.  Meanwhile, faster, rawer, and bitterly radio-hostile acts like <a href="http://www.rhapsody.com/artist/black-flag">Black Flag</a> and <a href="http://www.rhapsody.com/artist/dead-kennedys">Dead Kennedys</a> were taking wing on the West Coast, even as the more expansive <a href="http://www.rhapsody.com/artist/x"X</a> (from Los Angeles) and legends <a href="http://www.rhapsody.com/artist/the-clash">the Clash</a> (from the U.K.) broadened the definition of what Punk could be.<p>Punk finally topped America's charts in the '90s, with the Punk-Pop of <a href="http://www.rhapsody.com/artist/green-day">Green Day</a> and the Ska-flavored Punk of <a href="http://www.rhapsody.com/artist/rancid">Rancid</a> -- both Berkeley, Calif., bands who owed huge debts to <a href="http://www.rhapsody.com/artist/the-ramones">the Ramones</a> and the Clash. Nirvana's Punk roots were meanwhile so distinct that the Grunge music they defined can be considered a flavor of Punk. But Punk as music and as an underground culture thrives, especially on regional scenes and through a loosely-knit network of fanzines, college radio shows and all-ages concerts.`,
    links: { childGenres: null, parentGenres: null }
  },
  {
    type: 'genre',
    id: 'g.315',
    name: 'Post-Punk',
    href: 'https://api.napster.com/v2.2/genres/g.315',
    shortcut: 'alt-punk/post-punk',
    description: `Post-Punk artists ran the wide gamut, but all were initially linked by an arty, intellectual spirit; from the obscure such as of <a href="http://www.rhapsody.com/artist/mission-of-burma">Mission of Burma</a> and <a href="http://www.rhapsody.com/artist/the-fall">The Fall</a>, and <a href="http://www.rhapsody.com/artist/doll-by-doll">Doll by Doll</a> to cult favorites <a href="http://www.rhapsody.com/artist/the-jesus-and-mary-chain">the Jesus and Mary Chain</a> & <a href="http://www.rhapsody.com/artist/siouxsie-and-the-banshees">Siouxsie and the Banshees</a>. Whereas Punk wasn't exactly 
musically innovative, Post-Punk bands experimented with guitar textures, the ever-expanding role of synthesizers and darker themes.`,
    links: { childGenres: null, parentGenres: null }
  },
  {
    type: 'genre',
    id: 'g.316',
    name: 'Contemporary Hard Rock',
    href: 'https://api.napster.com/v2.2/genres/g.316',
    shortcut: 'rock/hard-rock/contemporary-hard-rock',
    description: `After Nirvana's tragic demise in 1994, scads of bands scrambled to seize the grunge throne. Though lighter-themed punk-pop became a commercial force around that time, post-grunge bands like Bush and Silverchair continued to explore the angst-ridden sounds and themes of early '90s Grunge. Post-grunge guitars were just as loud as grunge, but not as cutting. Its production was smoother and more sterile, its songs more pop-influenced. Post-grunge, like most second-generation genres, was essentially a hybridized version of the original. The most critically-acclaimed post-frungers, like Everclear and Nirvana-drummer Dave Grohl's Foo Fighters, added subtle nuances to their work rather than simply rehashing the dying days of flannel.`,
    links: { parentGenres: null }
  },
  // {
  //   type: 'genre',
  //   id: 'g.32',
  //   name: 'Lo-Fi',
  //   href: 'https://api.napster.com/v2.2/genres/g.32',
  //   shortcut: 'alt-punk/indie-alternative/lo-fi',
  //   description: `Originally known only as a technique for making recordings, Lo-Fi -- shortspeak for low-fidelity -- is now a vibrant subgenre of Indie Rock. As the media embraced this budding sub-genre and gave it its two minutes, it became a musical/political statement of sorts. An intentional nose-thumbing to the glitzy, cookie-cutter albums major labels often churn out -- as well as being a minimalist form of art -- these records were notoriously produced on $200 four-tracks using cheap microphones. Despite indie rock's sometimes-sour elitism, Pavement's <I>Slanted and Enchanted</I> and Guided By Voices' pre-<I>Do The Collapse</I> catalog indeed offer strong testimony that production dollars can't alone write a song.`,
  //   links: { parentGenres: null }
  // },
  {
    type: 'genre',
    id: 'g.33',
    name: 'Alternative',
    href: 'https://api.napster.com/v2.2/genres/g.33',
    shortcut: 'alt-punk',
    description: 'Everything from early <a href="http://www.rhapsody.com/genre/alt-punk/garage-rock">garage</a> rockers <a href="http://www.rhapsody.com/artist/the-stooges">the Stooges</a> to noise artisans <a href="http://www.rhapsody.com/artist/sonic-youth">Sonic Youth</a>, and from synth-pop royalty <a href="http://www.rhapsody.com/artist/new-order">New Order</a> to post-modern pop of <a href="http://www.rhapsody.com/artist/beck">Beck</a>. The "alternative" tag was introduced in the early 1990s as an alternative to mainstream radio. Alternative represented a collision of several genres whose momentum had been building for several decades.\n' +
      '\n' +
      `Beginning with the artsy, seedy undercurrents of <a href="http://www.rhapsody.com/artist/the-velvet-underground">the Velvet Underground</a> in the late '60s, and continuing through both punk's heyday in the late '70s and the college rock/post-punk of the '80s, the groundswell of the underground ultimately broke big in January 1992 when grunge upstart <a href="http://www.rhapsody.com/artist/nirvana">Nirvana's</a> <I>Nevermind</I> improbably topped album charts worldwide. The brashness of the original punk movement has played a significant role in forming the attitude and identity of most alternative music of the last twenty years, yet the underground's original scorn of mass acceptance became so diluted in the wake of its ever-growing commercial success, its near-complete metamorphosis into the mainstream was an inevitability in the hodgepodge '90s.`,
    links: { childGenres: null, parentGenres: null }
  },
  {
    type: 'genre',
    id: 'g.351',
    name: 'Pop Punk',
    href: 'https://api.napster.com/v2.2/genres/g.351',
    shortcut: 'alt-punk/punk/pop-punk',
    description: `Pop Punk is widely -- but inaccurately -- recognized as a 1990s phenomenon. It first emerged with the Ramones' debut album in 1976 and included '80s underground successes like the Dickies, the Descendants, and the Buzzcocks, who earned cult followings with their catchy, peppy Punk. It wasn't until the mid-'90s, however, when Punk-Pop finally wound its way into America's commercial mainstream, due in part to MTV's incessant airing of Green Day's "Longview" video in the spring of 1994. Pop Punk, with its irresistibly simple chord progressions, speedy tempos and strong sense of melody, seems almost like the Bubblegum rock of the '60s. But albums like Husker Du's <I>Flip Your Wig</I> and Jawbreaker's <I>Dear 
You</I>point to a different side of the music, layering deeply personal lyrics beneath their catchy melodies and wall-of-guitar production.`,
    links: { parentGenres: null }
  },
  // {
  //   type: 'genre',
  //   id: 'g.398',
  //   name: 'Indie Pop',
  //   href: 'https://api.napster.com/v2.2/genres/g.398',
  //   shortcut: 'alt-punk/indie-alternative/indie-pop',
  //   description: `Indie pop bands offered a pretty, saccharine alternative to the aggressive punk and macho indie rock of 
  // the 1990s.Inspired by English groups like the Pastels, the Vaselines and Orange Juice, indie popsters made their own feel - good confections: simple, introspective, playful love songs that worked the simplicity of punk without the anger.The sound emerged from England's Sarah Records, with albums by Boyracer, the Field Mice and Heavenly. <br><br>Meanwhile, in the Pacific Northwest and California, Beat Happening paved the way for mostly female indie bands like Cub, the Softies and Lois, all of whom created fun and playful pop as a counterpoint to the politicized anger of the riot grrrl movement. Rather than addressing feminism and race and sexuality issues, indie pop bands focused on childhood fascinations like fluffy animals, nature, candy and the kind of love that doesn't go wrong.`,
  //   links: { parentGenres: null }
  // },
  {
    type: 'genre',
    id: 'g.403',
    name: 'Oi/Street Punk',
    href: 'https://api.napster.com/v2.2/genres/g.403',
    shortcut: 'alt-punk/punk/oi-street-punk',
    description: `As arty pretension became the norm rather than the exception in the Punk world of the late '70s, certain English bands decided to return Punk to the streets. Building on Punk's existing slapdash, chaotic foundations, Street Punk neatened the former's sound with hook-laden melodies, catchy choruses, and chanting, sing-along song structures derived from soccer chants. British Street Punk pioneers Sham '69, as well as followers Cock Sparrer, the Business, and Cockney Rejects (whose song "Oi! Oi! Oi!" gave the genre its name) encouraged their listeners to rally under the banner of youth and working class culture -- not to mention shared pints of lager -- while dismissing the political baiting of right-wing groups such as the National Front. Skrewdriver, a nationalist English band who used their music to clearly outline their racist beliefs, created a clear political divide amongst Oi!/Street Punk bands. The early '80s saw Oi!'s arrival on American 
soil in the form of catchy Hardcore from Atlanta's Anti-Heros and New York's Cro-Mags. In the '90s, America's Templars and Britain's Boisterous resurrected the aggression of first- generation Oi! with a return to its brawl-ready roots.`,
    links: { parentGenres: null }
  },
  {
    type: 'genre',
    id: 'g.42',
    name: 'Classic Rock',
    href: 'https://api.napster.com/v2.2/genres/g.42',
    shortcut: 'rock/classic-rock',
    description: `Less a genre than a radio marketing term, Classic Rock is a blanket term for decades-old rock anthems, Classic Rock's diverse styles include the arena rock of <a href="http://www.rhapsody.com/artist/led-zeppelin">Led Zeppelin</a>, the <a href="http://www.rhapsody.com/genre/rock/blues-and-boogie-rock/southern-rock">Southern Rock</a> of <a href="http://www.rhapsody.com/artist/lynyrd-skynyrd">Lynyrd Skynyrd</a>, the classic pop of the Beatles and early <a href="http://www.rhapsody.com/genre/metal">Metal</a> such as <a href="http://www.rhapsody.com/artist/black-sabbath">Black Sabbath</a>. 
Loud guitars with heavy hooks are the bread-and-butter of Classic Rock.`,
    links: { childGenres: null, parentGenres: null }
  },
  //   {
  //     type: 'genre',
  //     id: 'g.432',
  //     name: 'Garage Rock Revival',
  //     href: 'https://api.napster.com/v2.2/genres/g.432',
  //     shortcut: 'alt-punk/garage-rock/garage-rock-revival',
  //     description: `The Garage Rock Revival of the 1980s was a grassroots response to the pre-fab music of an era which found models-as-musicians (e.g. Duran Duran) and hair metal bands (e.g. Poison, Bon Jovi) ruling the charts and the airwaves. 
  //   Bands like the Chesterfield Kings sought to restore a sense of unrefined chaos to the rock scene.The Garage Rock Revivalists were the direct heirs of pre - 1967(that's pre-psychedelia) rock -- the golden age of the early Rolling Stones and the 
  // Kinks.The sound continues as an underground phenomenon thanks to Indie Garage labels like Sympathy for the Record Industry and Estrus.`,
  //     links: { parentGenres: null }
  //   },
  // {
  //   type: 'genre',
  //   id: 'g.44',
  //   name: 'Art & Progressive Rock',
  //   href: 'https://api.napster.com/v2.2/genres/g.44',
  //   shortcut: 'rock/art-and-progressive-rock',
  //   description: `Progressive rock came out of the <a href="http://www.rhapsody.com/genre/oldies/psychedelic">psychedelic 
  // boom</a > when the desire to experiment led musicians to incorporate classical elements and intellectual attitude in their
  // music.Prog rock, refers to the mystical, multi - chaptered bombastic rock popularized by the keyboard - driven excesses of < a href = "http://www.rhapsody.com/artist/emerson-lake-and-palmer" > Emerson Lake & Palmer</a > and the symphonic concept records of < a href = "http://www.rhapsody.com/artist/yes" > Yes</a >.`,
  //   links: { childGenres: null, parentGenres: null }
  // },
  {
    type: 'genre',
    id: 'g.454',
    name: 'Adult Alternative',
    href: 'https://api.napster.com/v2.2/genres/g.454',
    shortcut: 'rock/adult-alternative',
    description: `Adult alternative filled a niche in the 1990s as a middle ground for artists too safe for <a href="http://www.rhapsody.com/genre/alt-punk">alt rock</a>, yet well short of the level of conservatism preferred by the adult rock audience. Adult alternative wisely found a balanced following between genders, both onstage and in the audience; women and 
men were drawn in equal numbers to performances by the <a href="http://www.rhapsody.com/artist/dave-matthews-band">Dave Matthews Band</a> and <a href="http://www.rhapsody.com/artist/jewel">Jewel</a>, demonstrating the genre's commercial dominance since the rise of alternative in the early '90s. Albums by <a href="http://www.rhapsody.com/artist/sarah-mclachlan">Sarah McLachlan</a> and <a href="http://www.rhapsody.com/artist/hootie-and-the-blowfish">Hootie & the Blowfish</a> sold in far greater numbers than the more experimental offerings by '80s stylistic lynchpins <a href="http://www.rhapsody.com/artist/rem">R.E.M.</a> and <a href="http://www.rhapsody.com/artist/u2">U2</a>.`,
    links: { parentGenres: null }
  },
  // {
  //   type: 'genre',
  //   id: 'g.457',
  //   name: 'Stoner Rock',
  //   href: 'https://api.napster.com/v2.2/genres/g.457',
  //   shortcut: 'metal/stoner-rock',
  //   description: `During the '80s, while the <a href="http://www.rhapsody.com/genre/metal">Metal</a> bandwagon strained to reach the velocities achieved by Thrash and Grindcore, a small faction led by <a href="http://www.rhapsody.com/artist/saint-vitus">Saint Vitus</a> and <a href="http://www.rhapsody.com/artist/trouble">Trouble</a> splintered off to explore the swampy, pot-marked side roads. Travelling at lumbering tempos, Stoner Rock revels in abysmal quicksands of feedback like bands <a href="http://www.rhapsody.com/artist/kyuss">Kyuss</a>, <a href="http://www.rhapsody.com/artist/sleep">Sleep</a>, and <a href="http://www.rhapsody.com/artist/monster-magnet">Monster Magnet</a>. By slow-dancing on the pedal effects, they were able to unveil thick, sticky taffy sheets of distortion that blanketed compositions in a rippling fuzz.`,
  //   links: { parentGenres: null }
  // },
  {
    type: 'genre',
    id: 'g.458',
    name: 'Singer-Songwriter',
    href: 'https://api.napster.com/v2.2/genres/g.458',
    shortcut: 'rock/singer-songwriter',
    description: 'Mostly aimed at guitar playing, folk-inspired songwriters, the Singer-Songwriter tag applies to post-Dylan, folk-leaning solo artists like <a href="http://www.rhapsody.com/artist/joni-mitchell">Joni Mitchell</a>, <a href="http://www.rhapsody.com/artist/james-taylor">James Taylor</a>, and <a href="http://www.rhapsody.com/artist/jackson-browne">Jackson Browne</a>. The tradition still continues with artists as varied as folk & guitar legend <a href="http://www.rhapsody.com/artist/richard-thompson">Richard Thompson</a>, <a href="http://www.rhapsody.com/genre/country/alt-country">Alt-Country</a> poet <a href="http://www.rhapsody.com/artist/richard-buckner">Richard Buckner</a>, <a href="http://www.rhapsody.com/artist/tori-amos">Tori Amos</a> and <a href="http://www.rhapsody.com/artist/jewel">Jewel</a>. Though the songwriting is often confessional and introspective, the Singer-Songwriter label is generally applied to solo artists who concentrate on song craft over all else.',
    links: { parentGenres: null }
  },
  {
    type: 'genre',
    id: 'g.465',
    name: 'Alt Metal',
    href: 'https://api.napster.com/v2.2/genres/g.465',
    shortcut: 'metal/alt-metal',
    description: `As heavy metal split off into microgenres in the '90s, many bands reacted against <a href="http://www.rhapsody.com/genre/alt-punk/grunge">Grunge's</a> sloppiness by crafting fast, concise songs driven by an industrial-strength beat, replacing sludgy chords with tight, percussive riffs and an overdriven sound. Growling vocals shared grunge's DNA, 
and bands like <a href="http://www.rhapsody.com/artist/alice-in-chains">Alice in Chains</a> flitted between the two styles.`,
    links: { parentGenres: null }
  },
  // {
  //   type: 'genre',
  //   id: 'g.5',
  //   name: 'Rock',
  //   href: 'https://api.napster.com/v2.2/genres/g.5',
  //   shortcut: 'rock',
  //   description: `A basic beat, a little electricity, a hint of sexual abandon, and generous helpings of youth & rebellion have always been the essential ingredients. In rock's early days, "pop artist" was shorthand for commercially successful, mop-topped musicians. As rock became more ambitious, <a href="http://www.rhapsody.com/genre/pop">pop</a> came to denote anything short & sugarcoated.`,
  //   links: { childGenres: null, parentGenres: null }
  // },
]

module.exports = genres;