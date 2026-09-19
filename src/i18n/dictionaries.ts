export const languages = ["sr", "en"] as const;
export type Language = (typeof languages)[number];

export const languageLabels: Record<Language, string> = {
  sr: "SR",
  en: "EN",
};

const sr = {
  nav: {
    ariaMain: "Glavna navigacija",
    cena: "Cena",
    proizvod: "Šta dobijaš",
    pitanja: "Česta pitanja",
    cta: "Želim Žar Klik",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
    languageLabel: "Izbor jezika",
  },
  logo: {
    alt: "Žar Klik logo — posuda sa parom i klik simbolom",
  },
  hero: {
    badge: "Zagrejan obrok bilo kad i bilo gde",
    title: "Topao domaći obrok, gde god da si.",
    lead:
      "Žar Klik je prenosiva posuda koja sama zagreva obrok koji si poneo od kuće — bez struje, plamena i dodatne opreme. Zagrevanje pokreće jednokratni grejni dodatak, a posudu koristiš više puta.",
    ctaPrimary: "Želim Žar Klik",
    ctaSecondary: "Vidi cenu",
    tagline: "Prilagođeno putu. Jednostavno za upotrebu. Ne zavisi od lokacije.",
    imageAlt: "Žar Klik prenosiva posuda za zagrevanje hrane sa poklopcem",
  },
  pricing: {
    title: "Cena i prijava interesovanja",
    lead:
      "Posudu kupuješ jednom, a grejni dodatak menjaš po obroku. Prijava interesovanja nije kupovina.",
    badgeMain: "Osnovni komplet",
    badgeRefill: "Dopuna",
    plans: {
      box: {
        name: "Žar Klik posuda",
        note: "Jednokratna kupovina, višekratna upotreba",
        alt: "Žar Klik posuda za zagrevanje obroka",
        items: ["Poklopac i aluminijumska posuda", "Baza sa grejnim sistemom"],
      },
      cartridge: {
        name: "Grejni dodatak",
        note: "Jednokratni dodatak po zagrevanju",
        alt: "Pakovanje jednokratnog grejnog dodatka",
        items: [
          "Sadrži kalcijum-oksid i vodu",
          "Zatvoreno pakovanje, odvojeno od hrane",
          "Menja se posle svakog obroka",
        ],
      },
    },
    form: {
      title: "Prijavi interesovanje",
      lead:
        "Ostavi kontakt i budi među prvima koji dobijaju informaciju kada Žar Klik postane dostupan. Bez obaveze kupovine.",
      privacy: "Podatke koristimo isključivo za kontakt u vezi sa dostupnošću proizvoda.",
      name: "Ime i prezime",
      namePlaceholder: "Marko Marković",
      email: "E-mail",
      emailPlaceholder: "marko@primer.rs",
      phone: "Telefon (opciono)",
      phonePlaceholder: "+381 60 000 0000",
      profile: "Kako bi koristio Žar Klik?",
      profilePlaceholder: "Izaberi",
      profileOptions: {
        vozac: "Profesionalni vozač",
        teren: "Terenski rad",
        putovanja: "Putovanja i kampovanje",
        posao: "Radno mesto bez kuhinje",
        drugo: "Drugo",
      },
      message: "Poruka (opciono)",
      messagePlaceholder: "Reci nam nešto o svojoj svakodnevici na putu.",
      submit: "Pošalji prijavu",
      submitting: "Šaljemo...",
      successTitle: "Prijava je poslata",
      successDescription: "Kontaktiraćemo te kada Žar Klik postane dostupan.",
    },
  },
  showcase: {
    title: "Šta dobijaš u kutiji",
    lead:
      "Žar Klik čine posuda koja se koristi više puta i jednokratni grejni dodatak koji menjaš posle svakog zagrevanja.",
    explodedAlt:
      "Rasklopljeni prikaz Žar Klik posude: poklopac, aluminijumska posuda, grejni dodatak i baza",
    parts: [
      { title: "Poklopac", text: "Uklonjivi poklopac zatvara posudu tokom nošenja i zagrevanja." },
      { title: "Aluminijumska posuda", text: "Deo u koji stavljaš obrok i iz kojeg jedeš." },
      {
        title: "Jednokratni dodatak",
        text: "Zatvoreno pakovanje sa CaO i vodom koje pokreće zagrevanje.",
      },
      { title: "Baza posude", text: "Nosi grejni deo i čini osnovu Žar Klik sistema." },
    ],
    gallery: [
      {
        alt: "Zatvorena Žar Klik posuda sa poklopcem i logotipom",
        caption: "Žar Klik posuda — zatvorena i spremna za nošenje",
      },
      {
        alt: "Rasklopljeni prikaz Žar Klik posude sa svim delovima",
        caption: "Rasklopljeni prikaz svih delova sistema",
      },
      {
        alt: "Pakovanje jednokratnog grejnog dodatka Žar Klik",
        caption: "Jednokratni grejni dodatak u pakovanju",
      },
    ],
    prev: "Prethodna slika",
    next: "Sledeća slika",
    showImage: "Prikaži sliku",
  },
  faq: {
    title: "Česta pitanja",
    lead: "Odgovori na pitanja koja najčešće dobijamo. Ono što još nije potvrđeno, ne obećavamo.",
    items: [
      {
        q: "Kako Žar Klik zagreva hranu?",
        a: "Zagrevanje pokreće kontrolisana hemijska reakcija između kalcijum-oksida (CaO) i vode. Oslobođena toplota se prenosi na aluminijumsku posudu u kojoj se nalazi obrok, pa se hrana zagreva ravnomerno.",
      },
      {
        q: "Da li mu je potrebna struja?",
        a: "Ne. Žar Klik radi bez struje, utičnice i električne instalacije.",
      },
      { q: "Da li se koristi otvoreni plamen?", a: "Ne. Sistem ne koristi otvoreni plamen niti gorivo." },
      {
        q: "Da li se posuda koristi više puta?",
        a: "Da. Posuda je namenjena višekratnoj upotrebi, dok se grejni dodatak menja.",
      },
      {
        q: "Koji deo se menja nakon korišćenja?",
        a: "Menja se jednokratni grejni dodatak koji sadrži CaO i vodu. Posuda, poklopac i aluminijumska posuda ostaju i koriste se dalje.",
      },
      {
        q: "Koju vrstu hrane mogu da zagrejem?",
        a: "Namenjen je obrocima koje sam pripremiš i poneseš — od čvrste hrane do jela sa više tečnosti. Tečna jela se zagrevaju brže jer se toplota raspoređuje i konvekcijom.",
      },
      {
        q: "Koliko traje zagrevanje i koju temperaturu dostiže obrok?",
        a: "Detalji će biti potvrđeni nakon završetka validacije i testiranja proizvoda.",
      },
      {
        q: "Da li je proizvod već dostupan za kupovinu?",
        a: "Žar Klik je trenutno u fazi validacije. Prijava interesovanja nije kupovina, već način da budeš među prvima kada proizvod postane dostupan.",
      },
      {
        q: "Kako mogu da se prijavim kao jedan od prvih korisnika?",
        a: "Popuni formu za prijavu interesovanja na ovoj stranici. Kontaktiraćemo te sa informacijama o dostupnosti i prvim serijama.",
      },
    ],
  },
  footer: {
    tagline: "Žar Klik zagreva obrok koji si poneo od kuće — bez struje i otvorenog plamena.",
    navAria: "Navigacija u podnožju",
    pageHeading: "Stranica",
    contactHeading: "Kontakt",
    links: { cena: "Cena", proizvod: "Proizvod", pitanja: "Pitanja" },
    disclaimer: "Proizvod je u fazi validacije. Prijava interesovanja nije kupovina.",
    rights: "Sva prava zadržana.",
  },
  meta: {
    title: "Žar Klik — zagrejan obrok bilo kad i bilo gde",
    description:
      "Žar Klik zagreva obrok koji si poneo od kuće, bez struje i otvorenog plamena. Rešenje za vozače i sve koji žive u pokretu.",
  },
  notFound: {
    title: "Stranica nije pronađena",
    text: "Stranica koju tražiš ne postoji ili je premeštena.",
    home: "Na početnu",
  },
} as const;

type Dictionary = typeof sr;

const en: Dictionary = {
  nav: {
    ariaMain: "Main navigation",
    cena: "Pricing",
    proizvod: "What's included",
    pitanja: "FAQ",
    cta: "I want Žar Klik",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language selection",
  },
  logo: {
    alt: "Žar Klik logo — heating container with steam and a click symbol",
  },
  hero: {
    badge: "A hot meal anytime, anywhere",
    title: "A warm home-cooked meal, wherever you are.",
    lead:
      "Žar Klik is a portable container that heats the meal you brought from home — no electricity, no flame, no extra equipment. A single-use heating insert starts the process, while the container itself is reusable.",
    ctaPrimary: "I want Žar Klik",
    ctaSecondary: "See pricing",
    tagline: "Built for the road. Simple to use. Works anywhere.",
    imageAlt: "Žar Klik portable food-heating container with lid",
  },
  pricing: {
    title: "Pricing and expression of interest",
    lead:
      "You buy the container once and replace the heating insert per meal. Expressing interest is not a purchase.",
    badgeMain: "Starter set",
    badgeRefill: "Refill",
    plans: {
      box: {
        name: "Žar Klik container",
        note: "One-time purchase, reusable for years",
        alt: "Žar Klik container for heating meals",
        items: ["Lid and aluminium food tray", "Base with the heating system"],
      },
      cartridge: {
        name: "Heating insert",
        note: "One single-use insert per heating",
        alt: "Packaging of the single-use heating insert",
        items: [
          "Contains calcium oxide and water",
          "Sealed packaging, fully separated from the food",
          "Replaced after every meal",
        ],
      },
    },
    form: {
      title: "Express your interest",
      lead:
        "Leave your contact details and be among the first to hear when Žar Klik becomes available. No purchase obligation.",
      privacy: "We use your details only to contact you about product availability.",
      name: "Full name",
      namePlaceholder: "John Smith",
      email: "Email",
      emailPlaceholder: "john@example.com",
      phone: "Phone (optional)",
      phonePlaceholder: "+381 60 000 0000",
      profile: "How would you use Žar Klik?",
      profilePlaceholder: "Select",
      profileOptions: {
        vozac: "Professional driver",
        teren: "Fieldwork",
        putovanja: "Travel and camping",
        posao: "Workplace without a kitchen",
        drugo: "Other",
      },
      message: "Message (optional)",
      messagePlaceholder: "Tell us a bit about your daily routine on the road.",
      submit: "Send request",
      submitting: "Sending...",
      successTitle: "Your request has been sent",
      successDescription: "We'll get in touch as soon as Žar Klik is available.",
    },
  },
  showcase: {
    title: "What's in the box",
    lead:
      "Žar Klik consists of a reusable container and a single-use heating insert that you replace after every heating.",
    explodedAlt:
      "Exploded view of the Žar Klik container: lid, aluminium tray, heating insert and base",
    parts: [
      { title: "Lid", text: "The removable lid seals the container while carrying and heating." },
      { title: "Aluminium tray", text: "The part you put your meal in and eat from." },
      {
        title: "Single-use insert",
        text: "A sealed pack with CaO and water that triggers the heating.",
      },
      { title: "Container base", text: "Holds the heating element and forms the core of the Žar Klik system." },
    ],
    gallery: [
      {
        alt: "Closed Žar Klik container with lid and logo",
        caption: "Žar Klik container — closed and ready to carry",
      },
      {
        alt: "Exploded view of the Žar Klik container with all its parts",
        caption: "Exploded view of every part of the system",
      },
      {
        alt: "Packaging of the single-use Žar Klik heating insert",
        caption: "Single-use heating insert in its packaging",
      },
    ],
    prev: "Previous image",
    next: "Next image",
    showImage: "Show image",
  },
  faq: {
    title: "Frequently asked questions",
    lead: "Answers to the questions we hear most. We don't promise anything that isn't confirmed yet.",
    items: [
      {
        q: "How does Žar Klik heat food?",
        a: "Heating is driven by a controlled chemical reaction between calcium oxide (CaO) and water. The released heat transfers to the aluminium tray holding your meal, so the food warms evenly.",
      },
      {
        q: "Does it need electricity?",
        a: "No. Žar Klik works without electricity, a power outlet or any wiring.",
      },
      { q: "Is an open flame involved?", a: "No. The system uses neither an open flame nor fuel." },
      {
        q: "Is the container reusable?",
        a: "Yes. The container is designed for repeated use, while the heating insert is replaced.",
      },
      {
        q: "Which part is replaced after use?",
        a: "You replace the single-use heating insert containing CaO and water. The container, lid and aluminium tray stay with you and keep being used.",
      },
      {
        q: "What kind of food can I heat?",
        a: "It's made for meals you prepare and bring yourself — from solid dishes to ones with more liquid. Liquid dishes heat faster because convection helps distribute the heat.",
      },
      {
        q: "How long does heating take and what temperature does the meal reach?",
        a: "These details will be confirmed once product validation and testing are complete.",
      },
      {
        q: "Is the product already available to buy?",
        a: "Žar Klik is currently in the validation phase. Expressing interest isn't a purchase — it's how you get to be among the first when the product launches.",
      },
      {
        q: "How can I sign up as one of the first users?",
        a: "Fill in the interest form on this page. We'll contact you with details about availability and the first production batches.",
      },
    ],
  },
  footer: {
    tagline: "Žar Klik heats the meal you brought from home — without electricity or an open flame.",
    navAria: "Footer navigation",
    pageHeading: "Site",
    contactHeading: "Contact",
    links: { cena: "Pricing", proizvod: "Product", pitanja: "FAQ" },
    disclaimer: "The product is in the validation phase. Expressing interest is not a purchase.",
    rights: "All rights reserved.",
  },
  meta: {
    title: "Žar Klik — a hot meal anytime, anywhere",
    description:
      "Žar Klik heats the meal you brought from home, without electricity or an open flame. Made for drivers and everyone living on the move.",
  },
  notFound: {
    title: "Page not found",
    text: "The page you're looking for doesn't exist or has been moved.",
    home: "Go home",
  },
};

export const dictionaries: Record<Language, Dictionary> = { sr, en };
export type { Dictionary };
