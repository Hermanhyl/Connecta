// All site content (verbatim, Norwegian) scraped from connecta.no.
// Single source of truth consumed by the pages/components.

export const site = {
  name: 'Connecta',
  tagline: 'Terapi og veiledning online',
  phone: '922 50 863',
  emails: {
    kjersti: 'kjersti@connecta.no',
    amalie: 'amalie@connecta.no',
  },
  // Canonical site URL — used for canonical tags, Open Graph and the sitemap.
  // TEMPORARY: Netlify preview URL until the real domain (connecta.no) is connected.
  url: 'https://connecta-preview.netlify.app',
}

// Per-route SEO copy. Keep titles ~50–60 chars and descriptions ~150–160.
export type SeoMeta = { title: string; description: string }

export const seo: Record<string, SeoMeta> = {
  '/': {
    title: 'Connecta – Terapi og veiledning online',
    description:
      'Connecta tilbyr terapi og veiledning online: individualterapi, kognitiv atferdsterapi og familieveiledning med erfarne terapeuter. Ta kontakt i dag.',
  },
  '/om-oss': {
    title: 'Om oss – Terapeutene hos Connecta',
    description:
      'Møt terapeutene Kjersti og Amalie Hylland. Lang erfaring som terapeut og veileder i offentlig og privat sektor – online terapi for hele landet.',
  },
  '/tjenester': {
    title: 'Tjenester – Individualterapi, online & familieveiledning',
    description:
      'Våre tjenester: individualterapi, onlineterapi og familieveiledning. Hos oss kan du få hjelp til å finne løsninger, alene eller sammen med andre.',
  },
  '/behandlingsmetode': {
    title: 'Behandlingsmetode – Kognitiv atferdsterapi | Connecta',
    description:
      'Vi tilbyr kognitiv atferdsterapi (KAT) – en godt dokumentert metode som ser på samspillet mellom tanker, følelser og handlinger for varig endring.',
  },
  '/priser': {
    title: 'Priser – Terapi og veiledning | Connecta',
    description:
      'Oversikt over priser for individualterapi, familieveiledning og terapipakker hos Connecta. Se hva som passer for deg.',
  },
  '/blogg': {
    title: 'Blogg – Psykisk helse, språk og terapi | Connecta',
    description:
      'Tanker og refleksjoner om psykisk helse, språk og terapi fra terapeutene hos Connecta.',
  },
  '/kontakt': {
    title: 'Kontakt – Bestill time hos Connecta',
    description:
      'Ta kontakt med Connecta for terapi og veiledning online. Se åpningstider, telefon og e-post, eller send oss en melding via kontaktskjemaet.',
  },
  '/personvern': {
    title: 'Personvernerklæring | Connecta',
    description:
      'Slik behandler Connecta personopplysninger når du bruker nettsiden og tar kontakt med oss.',
  },
}

export type NavItem = { label: string; to: string }

export const nav: NavItem[] = [
  { label: 'Forside', to: '/' },
  { label: 'Om oss', to: '/om-oss' },
  { label: 'Tjenester', to: '/tjenester' },
  { label: 'Behandlingsmetode', to: '/behandlingsmetode' },
  { label: 'Priser', to: '/priser' },
  { label: 'Blogg', to: '/blogg' },
  { label: 'Kontakt', to: '/kontakt' },
]

export const home = {
  heroTitle: 'Terapi og veiledning online',
  intro:
    'Relasjoner er en viktig del av livet for oss alle, enten det handler om forholdet vi har til oss selv eller forholdet vi har til mennesker rundt oss. Samtidig kan relasjoner være kompliserte, utfordrende og noen ganger ødeleggende. Hos oss kan du få hjelp til å finne løsninger, enten alene eller sammen med andre. Ta kontakt, så finner vi en løsning sammen!',
}

// ---- Service teasers shown on the home page ----
export type ServiceTeaser = {
  title: string
  text: string
  icon: 'user' | 'brain' | 'family'
}

export const serviceTeasers: ServiceTeaser[] = [
  {
    title: 'Individuelle samtaler',
    icon: 'user',
    text: 'De fleste mennesker vil i løpet av livet oppleve vanskeligheter eller livsbelastninger. Livet kan oppleves som så vanskelig at det er behov for å snakke med en utenforstående fagperson som kan hjelpe med å finne løsninger.',
  },
  {
    title: 'Kognitiv atferdsterapi',
    icon: 'brain',
    text: 'Kognitiv atferdsterapi er en retning innenfor psykoterapi som har vist seg å være effektiv ved en rekke psykiske helseutfordringer som blant annet angst, depresjon og lavt selvbilde.',
  },
  {
    title: 'Foreldreveiledning',
    icon: 'family',
    text: 'De fleste foreldre opplever perioder hvor de føler seg rådville og fortvilet i forhold til hvordan forstå eller ivareta barnet sitt. Foreldreveiledning kan være for deg som er engstelig for barnet ditt, som er bekymret for at barnets utvikling går i en retning du ikke liker eller som opplever at kommunikasjonen og relasjonen med barnet ditt har kommet inn i et negativt spor.',
  },
]

// ---- Full services (Tjenester page) ----
export type ServiceBlock = {
  title: string
  paragraphs: string[]
  groups?: { heading: string; items: string[] }[]
  forWhom?: { title: string; items: string[] }
  note?: string
  topics?: { heading: string; text: string }[]
}

export const services: ServiceBlock[] = [
  {
    title: 'Individualterapi',
    paragraphs: [
      'Livet kan by på mange utfordringer. Som oftest greier vi å takle utfordringene selv med hjelp fra de rundt oss, men noen ganger kan livet oppleves som så vanskelig at det er behov for å snakke med en utenforstående fagperson som kan hjelpe med å finne løsninger og veien videre.',
      'Da kan det være nyttig å få hjelp fra en profesjonell som kan gi deg innspill, innsikt og verktøy for hvordan gå videre så du ikke blir begrenset av problemene dine. Bakgrunnen for å komme til samtale hos oss kan være et ønske om selvutvikling, opplevelse av tristhet, angstsymptomer, bekymringer, følelsen av å ikke strekke til, vonde tanker og følelser og mange andre ting.',
    ],
  },
  {
    title: 'Onlineterapi',
    paragraphs: [
      'I dagens samfunn har det blitt stadig mer vanlig å gjennomføre møter online, og dette gjelder også for terapi. En stor fordel med onlineterapi er at man sparer tid på reise, parkeringsutgifter, og at man står fritt til å velge fagperson uavhengig av geografisk tilhørighet.',
      'Man kan delta fra hvor som helst i verden, noe som tilbyr fleksibilitet i en travel hverdag. Onlineterapi kan være like effektivt som tradisjonell terapi med personlig oppmøte. For å sikre en best mulig opplevelse, er det imidlertid noen forberedelser som kan være nyttige:',
    ],
    groups: [
      {
        heading: 'Finn et passende sted og tidspunkt',
        items: [
          'Velg et stille og privat sted for terapitimen. Det er viktig å finne et sted hvor andre ikke kan høre det som snakkes om i timene. Taushetsplikten er like viktig online som ved fysisk oppmøte. Offentlige steder som kafeer eller parker passer derfor ikke for terapisamtaler.',
          'Velg et tidspunkt hvor du ikke vil bli forstyrret, og når du føler deg relativt uthvilt og oppmerksom.',
          'Velg komfortable omgivelser. En behagelig stol, tilstrekkelig belysning og en ordnet bakgrunn kan bidra til en mer behagelig samtale.',
        ],
      },
      {
        heading: 'Forbered deg mentalt',
        items: [
          'Forberedelse: Det kan være hjelpsomt å reflektere over hva du ønsker å diskutere under terapitimen. Å lage noen notater på forhånd kan forhindre at du glemmer viktige punkter under samtalen.',
          'Sett av tid etterpå: Terapi kan være energikrevende, så det er best om timen ikke blir presset inn mellom mange andre planer. Ikke planlegg for mange aktiviteter rett etter timen slik at du gir deg selv tid til å bearbeide og reflektere rundt samtalen.',
          'Fokuser på terapisamtalen: Unngå å multitaske under terapitimen. Når vi har terapi online kan vi noen ganger glemme at terapi krever mye oppmerksomhet, og vi begynner å gjøre andre ting mens vi lytter til det terapeuten sier. For at terapien skal ha best effekt, er det viktig at vi har oppmerksomheten rettet kun mot det vi snakker om i terapien.',
        ],
      },
      {
        heading: 'Teknisk oppsett',
        items: [
          'Sjekk utstyret ditt: Forsikre deg om at enheten din fungerer optimalt. Test mikrofon, høyttalere eller hodetelefoner, samt kamera, for å sikre god lyd- og bildekvalitet. En større skjerm som på en datamaskin eller et nettbrett anbefales for en bedre opplevelse.',
          'Stabil internettforbindelse: En pålitelig internettforbindelse er viktig for å unngå avbrudd.',
          'Bli kjent med plattformen: Terapien skjer via en bestemt plattform som krever opprettelse av en konto og innlogging. Prøv å logge inn litt før timen starter, spesielt ved første time, for å gjøre deg kjent med hvordan plattformen fungerer.',
          'Alle terapitimer foregår gjennom en sikker plattform som overholder europeiske personvernregler (GDPR), og det kreves derfor innlogging før hver time.',
        ],
      },
    ],
  },
  {
    title: 'Familieveiledning',
    paragraphs: [
      'De fleste foreldre opplever perioder hvor de føler seg rådville og fortvilet i forhold til hvordan forstå eller ivareta barnet / ungdommen sin. Det er få ting som er mer sårbart for oss enn barna våre, og det er derfor ekstra vondt når vi bekymrer oss eller opplever at forholdet til barnet / ungdommen vår blir vanskelig eller konfliktfylt. Bekymringene kan ofte være flere og sammensatte, og utfordringene vil kunne variere med barnets alder.',
    ],
    forWhom: {
      title: 'Foreldreveiledning kan passe for deg som',
      items: [
        'er bekymret for barnets trivsel eller utvikling',
        'opplever at kommunikasjonen og relasjonen til barnet ditt har kommet inn i et negativt spor',
        'opplever usikkerhet i forhold til hvilke rammer og grenser barnet ditt trenger',
      ],
    },
    note: 'Vi har svært god kompetanse på barn og ungdoms utviklingstrinn og har lang erfaring i å veilede foreldre som på en eller annen måte trenger hjelp og støtte i foreldrerollen.',
    topics: [
      {
        heading: 'Ved samlivsbrudd',
        text: 'I forbindelse med samlivsbrudd kan det oppstå uenighet og konflikter mellom de voksne knyttet til samarbeid rundt barna. Vi kan veilede foreldre i hvordan kommunisere og samarbeide om løsninger rundt barna slik at barna ikke behøver å leve i et vedvarende konflikt-felt mellom de to voksne som betyr mest for dem.',
      },
      {
        heading: 'Den moderne familien',
        text: 'Den moderne familie kan bestå av både mine, dine og felles barn. Det innebærer at man må forholde seg til partnerens barn fra tidligere forhold og samarbeidet partneren har med sin ex, og / eller omvendt. Det kan oppleves vanskelig å navigere i et slikt landskap, og mange opplever at dette gir grobunn for konflikter både mellom de voksne, og mellom barna og de voksne i familien. Da kan det være nyttig å få et utenforstående blikk som kan bistå med kart og kompass i et utfordrende terreng.',
      },
    ],
  },
]

// ---- Team (Om oss) ----
export type Therapist = {
  name: string
  initials: string
  photo?: string
  paragraphs: string[]
  email: string
  languages: string
}

export const team: Therapist[] = [
  {
    name: 'Kjersti Hylland',
    initials: 'KH',
    photo: '/Kjersti.webp',
    paragraphs: [
      'Kjersti er utdannet sosionom og kognitiv terapeut, og har i tillegg en videreutdanning i veiledning og coaching. Hun er sertifisert kursleder innenfor foreldreveilednings programmene “Tuning into kids” og “Tuning into teens”, samt mestringskurset “Tankevirus”.',
    ],
    email: 'kjersti@connecta.no',
    languages: 'Norsk',
  },
  {
    name: 'Amalie Hylland',
    initials: 'AH',
    paragraphs: [
      'Amalie er utdannet og autorisert psykolog i Spania, og tilbyr online terapi til norske klienter. Hun har en omfattende erfaring som klinisk psykolog.',
      'Hun har arbeidet med et bredt utvalg av psykiske helseutfordringer som angst, fobier, grubling, depresjon, sosiale vansker og ferdigheter, grensesetting, selvhevdelse, selvtillit, selvbilde, prokrastinering, selvskading, utbrenthet, diverse tvangslidelser, og psykose.',
    ],
    email: 'amalie@connecta.no',
    languages: 'Norsk, Engelsk og Spansk',
  },
]

// ---- Behandlingsmetode ----
export const method = {
  title: 'Behandlingsmetode',
  lead:
    'Vi tilbyr kognitiv atferdsterapi (KAT) — en godt dokumentert metode som hjelper deg å forstå sammenhengen mellom tanker, følelser og handlinger, og å skape varige endringer.',
  // Short, scannable takeaways shown at the top so leseren raskt får det viktigste.
  summary: [
    'Effektiv ved bl.a. angst, depresjon, stress og lavt selvbilde',
    'Ser på samspillet mellom tanker, følelser og handlinger',
    'Fokus på her og nå — og på varige verktøy du tar med deg videre',
    'Godt dokumentert og anbefalt i nasjonale behandlingsveiledere',
  ],
  // Visual model of the core CBT idea.
  triad: {
    caption: 'Kjernen i kognitiv atferdsterapi',
    note: 'Alt henger sammen — endrer vi ett, påvirker det de andre.',
    nodes: [
      { label: 'Tanker', desc: 'Hvordan vi tolker en situasjon' },
      { label: 'Følelser', desc: 'Det vi kjenner på' },
      { label: 'Handlinger', desc: 'Det vi gjør' },
    ],
  },
  // The full explanation, split into short, titled sections for readability.
  sections: [
    {
      heading: 'Hva er kognitiv atferdsterapi?',
      paragraphs: [
        'Vi tilbyr kognitiv atferdsterapi, en retning innenfor psykoterapi som har vist seg å være effektiv ved en rekke psykiske helseutfordringer som bl.a. angst, depresjon, lavt selvbilde, panikklidelser, fobier, søvnvansker, stressmestring, sinneproblemer og avhengighetsproblemer.',
      ],
    },
    {
      heading: 'Samspillet mellom tanker, følelser og handlinger',
      paragraphs: [
        'Om du er preget av negative tanker, vonde og vanskelige følelser og/eller har en uønsket væremåte, så kan det bli vanskelig å mestre hverdagen. Å avdekke hvorfor du opplever visse problemer vil være avgjørende fordi denne forståelsen er første skritt mot å finne veier til forbedring og skape varige endringer. Et viktig mål vil være å bryte og endre uhensiktsmessige mønstre som påvirker livskvaliteten din negativt, og i kognitiv atferdsterapi ser vi på samspillet mellom tanker, følelser og handlinger. Gjennom å bli bevisst denne sammenhengen, kan vi jobbe med å endre det du opplever som vanskelig eller negativt.',
      ],
    },
    {
      heading: 'Vi fokuserer på her og nå',
      paragraphs: [
        'Tidligere erfaringer kan være viktig for hvordan du opplever ting i dag og kan påvirke de forventninger du har i en gitt situasjon. Selv om vi ser på sammenhengen mellom tidligere opplevelser og det du opplever i dag, vil imidlertid nøkkelen til endring ligge i å fokusere mest på her-og-nå-situasjonen. Gjennom terapien vil du lære teknikker for å endre negative mønstre slik at du kan oppnå varige forbedringer i din livskvalitet.',
      ],
    },
    {
      heading: 'Din deltakelse betyr mye',
      paragraphs: [
        'I kognitiv atferdsterapi vil din deltakelse være avgjørende for et best mulig resultat. Egen aktivitet er viktig for at terapien skal ha best mulig effekt, og man vil derfor ofte inkludere noen oppgaver eller aktiviteter mellom timene. Du er imidlertid alltid selv med på å avgjøre innhold og fremdrift i dette. Et sentralt mål i kognitiv atferdsterapi er at du skal få kunnskap og verktøy som du kan ta i bruk når du senere opplever utfordrende livssituasjoner.',
      ],
    },
    {
      heading: 'En godt dokumentert metode',
      paragraphs: [
        'Terapien tilpasses dine spesifikke behov med grundig kartlegging, analyse, behandling og oppfølging. Kognitiv atferdsterapi er en godt dokumentert behandlingsmetode for psykiske helseutfordringer. Dette er bakgrunnen for at kognitiv terapi ofte fremheves i nasjonale behandlingsveiledere, også her i Norge.',
      ],
    },
    {
      heading: 'En personlig prosess',
      paragraphs: [
        'Hver handling, følelse og tanke har en underliggende årsak. Terapi er en personlig prosess som skal være skreddersydd for å møte dine unike behov og utfordringer. Selv om alle terapeutiske prosesser er individuelle, så er det likevel noen generelle fremgangsmåter du kan forvente når du går i terapi.',
      ],
    },
  ],
  // A short, memorable highlight pulled from the explanation.
  pullQuote:
    'Et sentralt mål er at du skal få kunnskap og verktøy som du kan ta i bruk også når terapien er avsluttet.',
  processTitle: 'Fremgangsmåten i terapi: Hva kan du forvente?',
  processLead: 'Terapiprosessen inkluderer vanligvis fire hovedfaser:',
  phases: [
    {
      name: 'Kartlegging',
      text: 'For å tilby deg den mest effektive hjelpen, er det avgjørende å forstå deg og din situasjon. Selv om mange kan oppleve lignende utfordringer, er hver person unik. Vi vil ikke gjette eller anta, vi vil vite og forstå! Derfor vil de første timene fokusere på å stille spørsmål for å få en grundig forståelse av dine spesifikke utfordringer og behov.',
    },
    {
      name: 'Analyse',
      text: 'Basert på kartleggingen, utarbeider vi en analyse som forklarer årsakene bak dine utfordringer og hvorfor de vedvarer. Denne analysen deles og diskuteres med deg. Målet er å gi en generell forståelse av menneskelig atferd, og deretter tilpasse denne kunnskapen til din situasjon.',
    },
    {
      name: 'Behandling',
      text: 'Med en klar forståelse av problemene og deres årsaker, kan vi sammen utarbeide en behandlingsplan. Denne planen er rettet mot å gi deg verktøyene du trenger for å håndtere utfordringene du står overfor.',
    },
    {
      name: 'Oppfølging',
      text: 'For å sikre at endringene du oppnår gjennom terapi er varige, anbefaler vi oppfølgingstimer. Disse timene, som vil være spredt over noen uker, bidrar til at de positive endringene vedvarer.',
    },
  ],
  outro:
    'Vårt mål er ikke å tilby en kortsiktig løsning, men å støtte deg gjennom en prosess som fører til varig forandring og forbedring i livskvaliteten.',
}

// ---- Priser ----
export type PriceRow = { label: string; price: string }
export type PriceTableData = { name: string; rows: PriceRow[] }

export const pricing = {
  sessions: [
    {
      name: 'Kjersti',
      rows: [
        { label: 'Individualterapi 60 minutter', price: '900,-' },
        { label: 'Individualterapi 75 minutter', price: '1125,-' },
        { label: 'Familieveiledning 60 minutter', price: '900,-' },
        { label: 'Familieveiledning 75 minutter', price: '1125,-' },
        { label: 'Familieveiledning 90 minutter', price: '1350,-' },
      ],
    },
    {
      name: 'Amalie',
      rows: [
        { label: 'Individualterapi 60 minutter', price: '1100,-' },
        { label: 'Individualterapi oppfølging 30 minutter', price: '550,-' },
      ],
    },
  ] as PriceTableData[],
  travelNote:
    'Ved familieveiledning i hjemmet tilkommer timepris for medgått reisetid og statens satser for kilometergodtgjørelse.',
  packages: [
    {
      name: 'Kjersti',
      tiers: [
        { duration: '60 minutter', rows: [{ label: '4 avtaler', price: '3.300,-' }, { label: '8 avtaler', price: '6.900,-' }] },
        { duration: '75 minutter', rows: [{ label: '4 avtaler', price: '4.200,-' }, { label: '8 avtaler', price: '8.700,-' }] },
        { duration: '90 minutter', rows: [{ label: '4 avtaler', price: '5.100,-' }, { label: '8 avtaler', price: '10.500,-' }] },
      ],
    },
    {
      name: 'Amalie',
      tiers: [
        { duration: '60 minutter', rows: [{ label: '4 avtaler', price: '4.100,-' }, { label: '8 avtaler', price: '8.500,-' }] },
      ],
    },
  ],
  packageExplainerTitle: 'Hva innebærer en terapipakke?',
  packageExplainer:
    'Å få til varig endring er en prosess som tar tid. Et pakkeforløp med regelmessige samtaler innebærer en forpliktelse overfor deg selv til å jobbe mot de endringer du ønsker å oppnå. En slik forpliktelse påvirker både oppmerksomhet og motivasjon som man tar med seg inn i terapien, og bidrar til å holde fokus på endringsprosessen. En forpliktelse om regelmessige samtaler sikrer også kontinuitet og fremdrift i det man jobber med.',
  cancellationTitle: 'Avbestilling av time',
  cancellation:
    'Avbestilling kan gjøres ved å logge inn i portalen og avbestille den direkte der. Hvis du ikke får til dette, kan du sende en mail til kjersti@connecta.no eller amalie@connecta.no. Avbestilling av timer gjøres minimum 48 timer i forkant av oppsatt avtale. Dersom frist for avbestilling ikke overholdes, må timen betales for i sin helhet. Dette gjelder også ved sykdom.',
}

// ---- FAQ ----
export type Faq = { q: string; a: string }

export const faq: Faq[] = [
  {
    q: 'Dekker helseforsikringen min terapitimene?',
    a: 'Connecta har ingen spesifikk avtale med forsikringsselskap. Det er derfor best å ta kontakt direkte med forsikringsselskapet for å avklare om forsikringsselskapet ditt vil kunne dekke utgifter til terapien.',
  },
  {
    q: 'Hvordan kan jeg vite om jeg trenger terapi?',
    a: 'Hvis du opplever vedvarende følelser av tristhet, angst, andre negative følelser eller finner det vanskelig å håndtere utfordringer i hverdagen din, kan det være tegn på at du kan ha nytte av terapi. Videre, hvis du merker at dine vanlige måter å takle problemer på ikke lenger fungerer, eller at utfordringene dine påvirker relasjonene dine på en negativ måte, så kan en psykolog eller terapeut tilby støtte og nye strategier for å forbedre din mentale helse.',
  },
  {
    q: 'Hva innebærer kognitiv atferdsterapi?',
    a: 'Kjernen i kognitiv terapi er å synliggjøre sammenhengen mellom tanker, følelser og atferd. Terapeuten hjelper klienten til å endre uhensiktsmessige tankemønstre og uhensiktsmessig atferd som er forbundet med problemene, og som kanskje også har bidratt til eller er med på å opprettholde problemene. Det gis en forklaring på hva som skjer og hvorfor det skjer slik at terapien gjøres forståelig for klienten. Det er et mål at klienten skal lære og benytte verktøy som hen vil kunne benytte også etter at terapiforløpet er avsluttet.',
  },
  {
    q: 'Hvordan bestiller jeg time?',
    a: 'Det kan du gjøre direkte gjennom online booking, eller ved å ta kontakt her; kjersti@connecta.no eller amalie@connecta.no',
  },
  {
    q: 'Hvordan avbestiller jeg en time?',
    a: 'Avbestilling kan gjøres ved å logge inn i portalen og avbestille den direkte der. Hvis du ikke får til dette, kan du sende en mail til kjersti@connecta.no eller amalie@connecta.no. Avbestilling av timer gjøres minimum 48 timer i forkant av oppsatt avtale. Dersom frist for avbestilling ikke overholdes, må timen betales for i sin helhet. Dette gjelder også ved sykdom.',
  },
]

// ---- Testimonials ----
export type Testimonial = { quote: string; author: string }

export const testimonials: Testimonial[] = [
  {
    quote:
      'Jeg har gått i terapi i mange år og fått hjelp med alle problemene jeg har hatt i ulike perioder av livet, men noe som skiller Kjersti fra resten er hennes evne til å se roten til problemene og ikke kun jobbe overfladisk. Hun har fått meg selv og tvunget fram undertrykte følelser. Hun har ikke bare funnet løsning på problemene mine der og da, men sett på hvorfor disse problemene oppstår, noe jeg tror og håper vil hjelpe meg å takle problemene jeg har hatt i mange år på en bedre måte.',
    author: 'Dame, 22',
  },
  {
    quote:
      'Investering for livet. Fantastisk veiledning og samtale. Her er det trygt å dele, gråte, gruble og lære om seg selv. Kan varmt anbefales.',
    author: 'Dame, 34',
  },
  {
    quote:
      'Et sted hvor det er trygt å snakke om vanskelige ting og livet generelt. Kjersti er en god person å snakke med, som lytter og kan faget sitt. Jeg vil varmt anbefale Connecta terapi og veiledning.',
    author: 'Dame, 32',
  },
]

// ---- Contact ----
export const contact = {
  openingHours: [
    { day: 'Mandag', hours: '09–19' },
    { day: 'Tirsdag', hours: '09–17' },
    { day: 'Onsdag', hours: '09–19' },
    { day: 'Torsdag', hours: '09–19' },
    { day: 'Fredag', hours: '09–17' },
    { day: 'Lørdag – Søndag', hours: 'stengt' },
  ],
  blurb:
    'Connecta tilbyr terapeutiske samtaler online. Vi har lang erfaring som terapeut og veileder i offentlig og privat sektor, og bistår gjerne med terapi for enkeltpersoner, familier, par og bedrifter. Hos oss kan du få hjelp til å finne løsninger, enten alene eller sammen med andre. Ta kontakt, så finner vi en løsning sammen!',
}

// ---- Personvernerklæring (GDPR) ----
// NB: Utkast — bør kvalitetssikres juridisk før publisering.
export const privacy = {
  title: 'Personvernerklæring',
  updated: 'Sist oppdatert: juni 2026',
  draftNote:
    'Dette er et utkast. Innholdet bør gjennomgås og kvalitetssikres (gjerne juridisk) før nettsiden tas i bruk.',
  intro:
    'Denne personvernerklæringen forklarer hvordan Connecta behandler personopplysninger når du bruker nettsiden vår og tar kontakt med oss.',
  sections: [
    {
      heading: 'Behandlingsansvarlig',
      paragraphs: [
        'Connecta, ved Kjersti Hylland og Amalie Hylland, er behandlingsansvarlig for personopplysningene som behandles i forbindelse med denne nettsiden. Du kan kontakte oss på kjersti@connecta.no eller amalie@connecta.no, eller på telefon 922 50 863.',
      ],
    },
    {
      heading: 'Hvilke opplysninger vi behandler',
      paragraphs: [
        'Når du bruker kontaktskjemaet på nettsiden, behandler vi navnet ditt, e-postadressen din og innholdet i meldingen du sender. Vi samler ikke inn opplysninger om deg utover det du selv oppgir.',
        'Selve terapitimene foregår på en egen, sikker plattform som overholder europeiske personvernregler (GDPR). Behandling av helseopplysninger i forbindelse med terapien reguleres i egen avtale og journal, og omfattes ikke av denne erklæringen.',
      ],
    },
    {
      heading: 'Formål og behandlingsgrunnlag',
      paragraphs: [
        'Vi bruker opplysningene fra kontaktskjemaet utelukkende til å svare på henvendelsen din og eventuelt avtale en time. Behandlingsgrunnlaget er ditt samtykke og vår berettigede interesse i å besvare henvendelser, jf. personvernforordningen artikkel 6.',
      ],
    },
    {
      heading: 'Lagring og sletting',
      paragraphs: [
        'Henvendelser lagres kun så lenge det er nødvendig for å følge opp kontakten, og slettes når de ikke lenger er nødvendige. Vi deler ikke opplysningene dine med uvedkommende.',
      ],
    },
    {
      heading: 'Databehandlere',
      paragraphs: [
        'Nettsiden driftes hos Netlify, som på våre vegne lagrer skjemaer som sendes inn. E-post håndteres av vår e-postleverandør. Disse opptrer som databehandlere og behandler kun opplysninger etter våre instrukser.',
      ],
    },
    {
      heading: 'Informasjonskapsler (cookies)',
      paragraphs: [
        'Denne nettsiden bruker ikke informasjonskapsler til sporing eller analyse. For utseendet lastes skrifttyper inn fra Google Fonts; ved dette overføres IP-adressen din til Google. Ønsker du å unngå dette, kan du blokkere eksterne skrifter i nettleseren din.',
      ],
    },
    {
      heading: 'Dine rettigheter',
      paragraphs: [
        'Du har rett til innsyn i, retting av og sletting av personopplysningene vi har om deg. Du kan også be om begrensning av behandlingen og protestere mot den. Ta kontakt med oss for å bruke rettighetene dine.',
        'Mener du at vi behandler opplysningene dine i strid med regelverket, har du rett til å klage til Datatilsynet.',
      ],
    },
    {
      heading: 'Endringer',
      paragraphs: [
        'Vi kan oppdatere denne personvernerklæringen ved behov. Den til enhver tid gjeldende versjonen er tilgjengelig på denne siden.',
      ],
    },
  ],
}

// ---- Blog ----
export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  body: { type: 'h2' | 'p'; text: string }[]
}

export const posts: BlogPost[] = [
  {
    slug: 'sprakets-makt',
    title: 'Språkets makt',
    date: '31. mars 2024',
    excerpt:
      'Makten språket kan ha. Bare ved å uttrykke visse typer ord i en bestemt rekkefølge, kan en person få oss til å gråte, le, smile eller eksplodere.',
    body: [
      { type: 'p', text: 'Vi har alle opplevd det. Makten språket kan ha. Bare ved å uttrykke visse typer ord i en bestemt rekkefølge, kan en person få oss til å gråte, le, smile eller eksplodere. De kan få oss til å føle oss bra, eller de kan få oss til å føle oss helt forferdelige.' },
      { type: 'p', text: 'Språk er et flott verktøy vi mennesker har. Det lar oss kommunisere med andre på en mer effektiv måte, planlegge hva som skal skje i fremtiden, og mimre om fortiden. Det kan hjelpe oss med å uttrykke følelsene våre og forklare oppførselen vår slik at menneskene rundt oss lettere kan forstå hva vi går gjennom. Imidlertid er språket et svært kraftig verktøy, og vi bør derfor være klar over dets krefter.' },
      { type: 'p', text: 'Alt språk læres. Vi blir ikke født med et språk, men vi blir født med evnen til å utvikle det.' },
      { type: 'p', text: 'Fra øyeblikket vi blir født, begynner vi på en reise med å lære språk. Som spedbarn starter vi med å absorbere lyder, bevegelser og uttrykk fra omsorgspersonene våre, og gradvis bygger vi opp ordforrådet vårt og forståelsen av setningsoppbygging. Språk er en sosial konstruksjon, overført gjennom generasjoner, og det utvikler seg ettersom samfunnet endrer seg og varierer avhengig av konteksten du befinner deg i.' },
      { type: 'h2', text: 'Språk gir oss mulighet for en følelsesmessig tidsreise' },
      { type: 'p', text: 'Hvis vi for eksempel tenker på ting som skjedde i fortiden som gjorde oss triste, begynner vi å føle oss triste i øyeblikket. Kanskje ikke i like stor grad eller med samme intensitet som vi følte i fortiden, men vi begynner å føle oss verre enn før vi begynte å tenke på den triste hendelsen. Hvis vi tenker på noe spennende som kommer til å skje i fremtiden, for eksempel en morsom tur, kan vi kjenne på spenning selv om vi ikke har reist noen steder ennå.' },
      { type: 'p', text: 'Dette kan være både til hjelp og gi oss noen utfordringer. Når vi tenker på positive ting som har skjedd eller som vil skje, kan det motivere oss til å utføre nødvendige handlinger for at det skal skje eller skje igjen. Når vi tenker på negative ting som skjedde i fortiden, kan det hjelpe oss med å finne måter å håndtere det som skjedde, slik at vi ikke trenger å oppleve de negative konsekvensene igjen.' },
      { type: 'p', text: 'Imidlertid kan vi noen ganger ta dette til et mer ekstremt nivå der vi begynner å tenke på alle mulige negative scenarier som kan skje i fremtiden, noe som får oss til å føle oss dårlige uten at det er til nytte for oss.' },
      { type: 'h2', text: 'Språk er ikke uskyldig' },
      { type: 'p', text: 'Ordene vi bruker er koblet til forskjellige følelsesmessige reaksjoner. Dette betyr at når vi sier et ord, føler vi også en følelse. For eksempel, hvis noen forteller oss at vi er veldig vakre eller veldig stygge, vil disse to ordene fremkalle forskjellige følelsesmessige reaksjoner hos oss; vi ville føle oss bra hvis de kalte oss vakre, og dårlige hvis de kalte oss stygge.' },
      { type: 'p', text: 'Hvis noen forteller oss at vi er vakre eller stygge på et språk vi ikke forstår, føler vi oss ikke annerledes, ettersom disse ordene ennå ikke er lært eller koblet til noe. Dette er også grunnen til at vi ofte føler mer når vi snakker eller hører vårt morsmål sammenlignet med et annet språk vi har lært. Dette fordi vi har en større emosjonell tilknytning til vårt eget morsmål som fremkaller sterkere emosjonelle reaksjoner enn språk vi lærer senere.' },
      { type: 'p', text: 'Noen ganger kan det derfor være lettere å si vanskelige ting på et annet språk ettersom ordene ikke fremkaller så sterke følelsesmessige reaksjoner som på morsmålet vårt, hvilket kan gjøre det lettere å holde følelsene våre i sjakk. Dette kan også gjøre det litt vanskeligere når vi lærer et nytt språk, ettersom vi ennå ikke har lært hvordan vi skal bruke det mest passende vokabularet i ulike sammenhenger. Vi kan si ting som høres mer fornærmende ut enn det vi mente, eller vi klarer ikke å fremkalle den ønskede reaksjonen hos den andre personen som vi ønsker.' },
      { type: 'h2', text: 'Språk kan styre atferden vår' },
      { type: 'p', text: 'Språk former ikke bare følelser, men spiller også en rolle i å påvirke oppførselen vår. Måten vi beskriver og definerer handlinger på, kan påvirke hvordan vi oppfatter og reagerer på dem. For eksempel kan noen som vanligvis bruker frasen «Jeg er en som utsetter ting» begynne å assosiere seg selv med denne merkelappen og gjøre dette til sin identitet. Dette beskriver ikke bare den typiske unngåelsen vi gjør av oppgaver, men det kan også brukes som en ansvarsfraskrivelse fordi dette er «hvem vi er».' },
      { type: 'p', text: 'Det samme gjelder for alle negative ord vi kombinerer med «Jeg er», som for eksempel «Jeg er dum», «Jeg er stygg», osv. Vi er ikke dumme! Det kan skje at vi sier eller gjør dumme ting, men det er ikke det samme som å definere hele vår identitet som dum. Vi kan definitivt finne mange eksempler på at vi ikke har gjort eller sagt noe dumt, så «Jeg er dum» er ikke en god eller riktig språkbruk for å beskrive oss selv.' },
      { type: 'p', text: 'Når vi sier «Jeg er…» + et negativt ord, kan det føre til at vi begrenser oss selv. Hvis jeg gjentatte ganger sier at «Jeg er dum», kan det påvirke hvor ofte jeg løfter hånden min i klassen eller kommer med nye forslag til sjefen min. Ved å være oppmerksom på språket vårt, kan vi forme vår oppfatning av oss selv og oppmuntre til positive handlinger. I stedet for å si «Jeg er dårlig til å snakke i offentlige sammenhenger», kan man velge å si «Jeg jobber med å forbedre mine ferdigheter i å snakke i offentlige sammenhenger.» Denne endringen i språk kan fremme en vekstmentalitet og gi personen kraft til å handle mot forbedring.' },
      { type: 'h2', text: 'Språkets innvirkning på holdninger og atferd' },
      { type: 'p', text: 'Makten språket kan ha, er noe politikere er veldig klar over. Ved å pare to ord sammen, for eksempel «kvinner» og «dumme» eller «innvandrere» og «kriminalitet», begynner du å skape assosiasjoner mellom ordene, og derfor også mellom følelsene de vil fremkalle. Selv om vi ikke vil tro at kvinner er dumme kan det fortsatt ha en ubevisst effekt når vi gjentatte ganger blir presentert med kombinasjonen.' },
      { type: 'p', text: 'Dette vil igjen kunne påvirke oppførselen vår, for eksempel når vi skal velge å ansette en ny person på arbeidsplassen. Selv om vi vet at innvandrere ikke nødvendigvis er kriminelle, så kan vi begynne å assosiere ordet «innvandrer» med tilsvarende negative følelser som ordet «kriminalitet» fremkaller hos oss dersom vi ofte hører disse to ordene paret sammen. Dette kan i neste omgang endre holdningen eller oppførselen vår overfor innvandrere selv om vi ikke ønsker at det skal påvirke oss.' },
      { type: 'h2', text: 'Språket er et kraftig verktøy' },
      { type: 'p', text: 'Som vi kan se, er ikke språket uskyldig, men et svært kraftig verktøy. Ved å gjøre oss mer oppmerksomme på dets påvirkning, kan vi redusere den negative innflytelsen det kan ha på oppførselen vår, og vi kan bruke språket til vår fordel fremfor at det begrenser oss. Ved å være mer bevisst på hvilke ord og begreper vi velger, kan vi unngå å begrense oss selv mer enn nødvendig. I stedet kan vi bruke språket til å hjelpe oss selv til å føle oss bedre og bruke det på en mer funksjonell måte.' },
    ],
  },
  {
    slug: 'diagnostiske-begrep-i-den-digitale-verden',
    title: 'Diagnostiske begrep i den digitale verden. Fordeler og ulemper.',
    date: '31. mars 2024',
    excerpt:
      'Diagnostiske begrep har blitt stadig mer normalisert. Hvilke fordeler og ulemper følger med når ord som «angst» og «depresjon» blir en del av vårt daglige vokabular?',
    body: [
      { type: 'p', text: 'I løpet av det siste tiåret, og enda mer etter COVID-19-pandemien, har vi blitt mer oppmerksomme på viktigheten av psykisk helse, og mange finner det nå mer naturlig å oppsøke terapi.' },
      { type: 'p', text: 'Dagens digitale tidsalder, med sosiale medier, kjendiser og influensere, har ført til en betydelig endring i hvordan vi oppfatter og forstår psykisk helse, og terapi er ikke lenger bare for «gale mennesker».' },
      { type: 'p', text: 'Vi kan stadig lese og høre om andre menneskers kamper, deres problemer, hvordan de aksepterer sine problemer, og hvordan de prøver å håndtere dem. Dette er en god ting, siden psykiske problemer kan påvirke livene våre like mye, noen ganger til og med mer, enn fysiske problemer.' },
      { type: 'p', text: 'Diagnostiske begrep, som en gang var begrenset til kontorene til psykologer og psykiatere, har blitt stadig mer normalisert, og ord som «angst», «depresjon», «traume» og «dissosiasjon» har blitt en del av vårt daglige vokabular når vi beskriver hvordan vi føler oss.' },
      { type: 'p', text: 'Mens denne endringen har sine fordeler og positive effekter, har den økte fokuseringen og daglige bruken av diagnostiske begrep også introdusert noen utfordringer som vi trenger å være klar over. Denne artikkelen vil drøfte fordeler og ulemper med diagnostiske begrep og erkjenne deres økende betydning i vår digitalt tilkoblede verden.' },
      { type: 'h2', text: 'Hva er diagnoser?' },
      { type: 'p', text: 'Diagnoser er begreper som brukes av psykiatere og kliniske psykologer for å beskrive og klassifisere spesifikke psykiske helseproblemer en person kan oppleve. En diagnose spesifiserer ulike symptomer, følelser, tanker eller atferd en person opplever eller utviser.' },
      { type: 'p', text: 'Avhengig av hyppighet, intensitet og effekt disse symptomene har på dagliglivet og livskvaliteten, kan det gis en diagnose. En diagnose forklarer ikke nødvendigvis hvorfor en person sliter, men kan bidra til å beskrive hva en person sliter med, og brukes som et begrep når en rekke symptomer presenteres sammen.' },
      { type: 'h2', text: 'Normalisering av diagnostiske merkelapper' },
      { type: 'p', text: 'Kjendiser, influensere og sosiale medieplattformer har spilt en avgjørende rolle i å bryte ned barrierer rundt diskusjoner om psykisk helse. Mange fremtredende personer har snakket åpent om sine kamper og erfaringer med diagnoser som angst, depresjon eller ADHD.' },
      { type: 'p', text: 'Denne åpenheten har bidratt til økt bevissthet og redusert stigma rundt psykiske problemer og psykiske helseforhold, og oppmuntret andre til å søke hjelp og dele sine egne historier.' },
      { type: 'p', text: 'Videre gir sosiale medieplattformer rom for at enkeltpersoner kan koble seg til andre som deler lignende erfaringer og diagnoser.' },
      { type: 'p', text: 'Støttegrupper og nettbasert fellesskap har oppstått, og tilbyr verdifull støtte og ressurser for de som navigerer gjennom kompleksitetene i psykisk helse.' },
      { type: 'p', text: 'Imidlertid reiser denne økte synligheten av psykiske helseproblemer og diagnoser også viktige spørsmål om deres bruk, forståelse og mulige konsekvenser. For eksempel kan vi se kjendiser som promoterer bruken av angstdempende midler og antidepressiva som er kraftige psykofarmakologiske behandlinger.' },
      { type: 'p', text: 'Bruken av medikamenter for psykiske problemer kan være svært nyttig som et kortvarig verktøy for å lette gjennomføringen og utviklingen av gode verktøy og strategier, men dette må evalueres i hvert enkelt tilfelle sammen med en profesjonell innen psykisk helse. Å annonsere bruken av psykofarmakologisk behandling som noe som vil forandre livet ditt og ta bort problemene dine kan være ganske skadelig.' },
      { type: 'p', text: 'Ikke bare er det ikke sant fordi vi ikke har en pille som alene kan ta bort våre psykiske problemer. Det kreves flere tiltak for å behandle et psykisk problem, og hvis bruk av medikamenter er den eneste behandlingsplanen man følger, så vil en måtte være på medikamenter resten av livet – noe som har vist seg å ha begrensede effekter.' },
      { type: 'p', text: 'Det er bra å fjerne stigmatiseringen av psykofarmakologiske behandlinger fordi de noen ganger er nødvendige og ikke er problematiske.' },
      { type: 'p', text: 'Imidlertid har noen klienter oppsøkt terapi og trodd at de er i fornektelse eller har undertrykt problemene sine fordi de er den eneste personen i vennegruppen sin som ikke tar angstdempende midler eller antidepressiva, og derfor tror det må være noe galt med dem. Her kan vi ha gått for langt med å normalisere psykofarmakologisk behandling, ettersom medisinering bør være et nyttig verktøy når det er nødvendig, og ikke en grunnleggende menneskelig nødvendighet.' },
      { type: 'h2', text: 'Fordeler med diagnostiske merkelapper' },
      { type: 'p', text: 'Bruken av diagnoser kan være et nyttig verktøy for fagfolk, og muliggjør kommunikasjon mellom ulike disipliner og fagpersoner. Det kan være nyttig når man undersøker visse problemer og behandlinger, og det kan gi retningslinjer for hvordan man kan gripe inn når man står overfor psykiske problemer.' },
      { type: 'p', text: 'For mange enkeltpersoner gir det en følelse av lettelse å få en diagnose, da man føler at det nå er et ord eller en forklaring på det man går gjennom, og at dette ikke er noe man går gjennom alene. Normaliseringen av diagnostiske termer har gitt aksept og anerkjennelse til mange enkeltpersoner, og å vite at andre har lignende erfaringer kan redusere følelser av å være alene og oppmuntre folk til å søke den hjelpen de trenger.' },
      { type: 'p', text: 'Diagnoser fungerer som et felles språk, som gjør at enkeltpersoner kan kommunisere sine opplevelser mer effektivt. Når folk bruker termer som «depresjon» eller «sosial angst», legger det til rette for forståelse og fremmer empati, både innenfor og utenfor fellesskapet for psykisk helse.' },
      { type: 'p', text: 'I mange helsesystemer er diagnoser nødvendige for forsikringsdekning og tildeling av midler. En anerkjent diagnose kan sikre at enkeltpersoner har tilgang til de økonomiske ressursene som trengs for å støtte deres terapeutiske prosess.' },
      { type: 'h2', text: 'Ulemper med diagnostiske termer' },
      { type: 'p', text: 'Selv om det er mange fordeler med bruken og normaliseringen av diagnoser, er det noen utfordringer vi må være klar over og ta hensyn til når vi bruker dem. Diagnoser kan fortsatt bære stigma, selv i dagens mer åpne og aksepterende samfunn.' },
      { type: 'p', text: 'Fordommer og misforståelser om spesifikke psykiske helseforhold vedvarer, noe som kan føre til diskriminering og sosial isolasjon. Noen enkeltpersoner kan fremdeles unngå å søke hjelp eller være åpne om sine utfordringer på grunn av frykten for å få en diagnose, selv om det er en økt bevissthet og normalisering av psykiske problemer.' },
      { type: 'p', text: 'Noen ganger kan det å få en diagnose også ha en negativ effekt på andre områder av en persons liv. For eksempel kan det i noen land føre til ekstra kostnader for helseforsikring hvis man har fått en diagnose.' },
      { type: 'p', text: 'Diagnoser kan også introdusere skjevheter både i behandling og oppfatning. Klinikere kan fokusere for mye på diagnosen i stedet for individets unike behov og styrker, og de spesifikke funksjonene problemene kan ha. I så fall vil man fokusere mer på beskrivelsen av problemet og dets symptomer i stedet for dets spesifikke årsak og vedlikehold. I tillegg kan diagnosen til og med forsterke de opplevde problemene ettersom de blir en del av personens identitet.' },
      { type: 'p', text: 'Den økte bruken av diagnostiske termer i vårt daglige vokabular har ført til en potensiell risiko for sykeliggjøring, der normale variasjoner i atferd og følelser blir merket som lidelser. Dette kan føre til unødvendig medikalisering og behandling.' },
      { type: 'p', text: 'For eksempel hører vi nå oftere «jeg er engstelig for eksamen» og «det gjorde meg veldig deprimert» i stedet for «jeg er nervøs» eller «jeg er trist», som er helt normale følelser vi noen ganger trenger å ha og oppleve. Disse følelsene er ikke problematiske eller noe som bør behandles. Negative følelser er en nødvendig del av det menneskelige livet, så lenge det ikke begynner å påvirke din daglige funksjon eller generelle livskvalitet.' },
      { type: 'p', text: 'Diagnostiseringsprosessen er heller ikke feilfri. Feildiagnoser kan forekomme på grunn av kompleksiteten i psykiske helseforhold, overlappende symptomer eller utilstrekkelige vurderingsmetoder. En feil diagnose kan føre til upassende behandling, noen ganger til og med gjøre at en person føler seg verre.' },
      { type: 'p', text: 'Dessuten er det viktig å huske at alle enkeltpersoner og deres utfordringer er forskjellige. To personer med angst kan trenge to helt forskjellige intervensjoner, selv om de kan få den samme diagnosen. Hvis vi bruker en standardisert behandlingsplan eller protokoll for en bestemt diagnose, kan det hende vi ikke hjelper personen på best mulig måte.' },
      { type: 'p', text: 'Selv om det å få en diagnose kan gi en opplevelse av lettelse, så har de også potensial til å redusere enkeltpersoner til en rekke symptomer, overskygge deres unikhet, funksjon og kompleksitet. Dessuten er ikke problemene våre statiske og bør kontinuerlig evalueres. Symptomene vi viste da vi fikk diagnose endrer seg, spesielt med adekvat behandling, og vi oppfyller derfor kanskje ikke lenger kriteriene for den gitte diagnosen.' },
      { type: 'p', text: 'Dette betyr ikke at hvis vi begrenser bruken av diagnoser, så betyr det at en persons utfordringer eller problemer ikke er så alvorlige, eller at det er personens feil at de går gjennom dette. En diagnose bør ikke være nødvendig for at et problem skal være alvorlig eller kreve oppmerksomhet og behandling. Vi mennesker gjør alltid vårt beste med de ressursene vi har, men av og til er dette ikke alltid nok til å hjelpe oss med å få det bedre, og da kan dette føre til andre negative konsekvenser.' },
      { type: 'h2', text: 'Balansert tilnærming: Bruke diagnostiske termer klokt' },
      { type: 'p', text: 'I denne nye æraen med normalisering av diagnostiske termer og påvirkningen vi utsettes for i den digitale verden, er det avgjørende for psykologer og enkeltpersoner å nærme seg diagnosebegrepene med forsiktighet og omtanke, samt være klar over deres fordeler og ulemper. Å fjerne stigma og normalisere psykiske problemer er viktig, og sosiale medieplattformer er et flott verktøy for å oppnå dette.' },
      { type: 'p', text: 'Imidlertid må vi være forsiktige med hvordan det gjøres, slik at vi ikke sykeliggjør normale negative følelser eller problemer fordi dette kan føre til enda verre problemer. Vi må også være forsiktige med hvem vi lytter til og følger på sosiale medier, siden det er mye feilinformasjon om psykiske problemer i sosiale medier.' },
    ],
  },
]
