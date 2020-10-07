const symbols = [
  {
    translation: " ",
    toTranslate: "&#32;"
  },
  {
    translation: "!",
    toTranslate: "&#33;"
  },
  {
    translation: '"',
    toTranslate: "&#34;"
  },
  {
    translation: "#",
    toTranslate: "&#35;"
  },
  {
    translation: "$",
    toTranslate: "&#36;"
  },
  {
    translation: "%",
    toTranslate: "&#37;"
  },
  {
    translation: "&",
    toTranslate: "&#38;"
  },
  {
    translation: "'",
    toTranslate: "&#39;"
  },
  {
    translation: "(",
    toTranslate: "&#40;"
  },
  {
    translation: ")",
    toTranslate: "&#41;"
  },
  {
    translation: "*",
    toTranslate: "&#42;"
  },
  {
    translation: "+",
    toTranslate: "&#43;"
  },
  {
    translation: ",",
    toTranslate: "&#44;"
  },
  {
    translation: "-",
    toTranslate: "&#45;"
  },
  {
    translation: ".",
    toTranslate: "&#46;"
  },
  {
    translation: "/",
    toTranslate: "&#47;"
  },
  {
    translation: "0",
    toTranslate: "&#48;"
  },
  {
    translation: "1",
    toTranslate: "&#49;"
  },
  {
    translation: "2",
    toTranslate: "&#50;"
  },
  {
    translation: "3",
    toTranslate: "&#51;"
  },
  {
    translation: "4",
    toTranslate: "&#52;"
  },
  {
    translation: "5",
    toTranslate: "&#53;"
  },
  {
    translation: "6",
    toTranslate: "&#54;"
  },
  {
    translation: "7",
    toTranslate: "&#55;"
  },
  {
    translation: "8",
    toTranslate: "&#56;"
  },
  {
    translation: "9",
    toTranslate: "&#57;"
  },
  {
    translation: ":",
    toTranslate: "&#58;"
  },
  {
    translation: ";",
    toTranslate: "&#59;"
  },
  {
    translation: "<",
    toTranslate: "&#60;"
  },
  {
    translation: "=",
    toTranslate: "&#61;"
  },
  {
    translation: ">",
    toTranslate: "&#62;"
  },
  {
    translation: "?",
    toTranslate: "&#63;"
  },
  {
    translation: "@",
    toTranslate: "&#64;"
  },
  {
    translation: "A",
    toTranslate: "&#65;"
  },
  {
    translation: "B",
    toTranslate: "&#66;"
  },
  {
    translation: "C",
    toTranslate: "&#67;"
  },
  {
    translation: "D",
    toTranslate: "&#68;"
  },
  {
    translation: "E",
    toTranslate: "&#69;"
  },
  {
    translation: "F",
    toTranslate: "&#70;"
  },
  {
    translation: "G",
    toTranslate: "&#71;"
  },
  {
    translation: "H",
    toTranslate: "&#72;"
  },
  {
    translation: "I",
    toTranslate: "&#73;"
  },
  {
    translation: "J",
    toTranslate: "&#74;"
  },
  {
    translation: "K",
    toTranslate: "&#75;"
  },
  {
    translation: "L",
    toTranslate: "&#76;"
  },
  {
    translation: "M",
    toTranslate: "&#77;"
  },
  {
    translation: "N",
    toTranslate: "&#78;"
  },
  {
    translation: "O",
    toTranslate: "&#79;"
  },
  {
    translation: "P",
    toTranslate: "&#80;"
  },
  {
    translation: "Q",
    toTranslate: "&#81;"
  },
  {
    translation: "R",
    toTranslate: "&#82;"
  },
  {
    translation: "S",
    toTranslate: "&#83;"
  },
  {
    translation: "T",
    toTranslate: "&#84;"
  },
  {
    translation: "U",
    toTranslate: "&#85;"
  },
  {
    translation: "V",
    toTranslate: "&#86;"
  },
  {
    translation: "W",
    toTranslate: "&#87;"
  },
  {
    translation: "X",
    toTranslate: "&#88;"
  },
  {
    translation: "Y",
    toTranslate: "&#89;"
  },
  {
    translation: "Z",
    toTranslate: "&#90;"
  },
  {
    translation: "[",
    toTranslate: "&#91;"
  },
  {
    translation: "\\",
    toTranslate: "&#92;"
  },
  {
    translation: "]",
    toTranslate: "&#93;"
  },
  {
    translation: "^",
    toTranslate: "&#94;"
  },
  {
    translation: "_",
    toTranslate: "&#95;"
  },
  {
    translation: "`",
    toTranslate: "&#96;"
  },
  {
    translation: "a",
    toTranslate: "&#97;"
  },
  {
    translation: "b",
    toTranslate: "&#98;"
  },
  {
    translation: "c",
    toTranslate: "&#99;"
  },
  {
    translation: "d",
    toTranslate: "&#100;"
  },
  {
    translation: "e",
    toTranslate: "&#101;"
  },
  {
    translation: "f",
    toTranslate: "&#102;"
  },
  {
    translation: "g",
    toTranslate: "&#103;"
  },
  {
    translation: "h",
    toTranslate: "&#104;"
  },
  {
    translation: "i",
    toTranslate: "&#105;"
  },
  {
    translation: "j",
    toTranslate: "&#106;"
  },
  {
    translation: "k",
    toTranslate: "&#107;"
  },
  {
    translation: "l",
    toTranslate: "&#108;"
  },
  {
    translation: "m",
    toTranslate: "&#109;"
  },
  {
    translation: "n",
    toTranslate: "&#110;"
  },
  {
    translation: "o",
    toTranslate: "&#111;"
  },
  {
    translation: "p",
    toTranslate: "&#112;"
  },
  {
    translation: "q",
    toTranslate: "&#113;"
  },
  {
    translation: "r",
    toTranslate: "&#114;"
  },
  {
    translation: "s",
    toTranslate: "&#115;"
  },
  {
    translation: "t",
    toTranslate: "&#116;"
  },
  {
    translation: "u",
    toTranslate: "&#117;"
  },
  {
    translation: "v",
    toTranslate: "&#118;"
  },
  {
    translation: "w",
    toTranslate: "&#119;"
  },
  {
    translation: "x",
    toTranslate: "&#120;"
  },
  {
    translation: "y",
    toTranslate: "&#121;"
  },
  {
    translation: "z",
    toTranslate: "&#122;"
  },
  {
    translation: "{",
    toTranslate: "&#123;"
  },
  {
    translation: "|",
    toTranslate: "&#124;"
  },
  {
    translation: "}",
    toTranslate: "&#125;"
  },
  {
    translation: "~",
    toTranslate: "&#126;"
  },
  {
    translation: "À",
    toTranslate: "&#192;"
  },
  {
    translation: "Á",
    toTranslate: "&#193;"
  },
  {
    translation: "Â",
    toTranslate: "&#194;"
  },
  {
    translation: "Ã",
    toTranslate: "&#195;"
  },
  {
    translation: "Ä",
    toTranslate: "&#196;"
  },
  {
    translation: "Å",
    toTranslate: "&#197;"
  },
  {
    translation: "Æ",
    toTranslate: "&#198;"
  },
  {
    translation: "Ç",
    toTranslate: "&#199;"
  },
  {
    translation: "È",
    toTranslate: "&#200;"
  },
  {
    translation: "É",
    toTranslate: "&#201;"
  },
  {
    translation: "Ê",
    toTranslate: "&#202;"
  },
  {
    translation: "Ë",
    toTranslate: "&#203;"
  },
  {
    translation: "Ì",
    toTranslate: "&#204;"
  },
  {
    translation: "Í",
    toTranslate: "&#205;"
  },
  {
    translation: "Î",
    toTranslate: "&#206;"
  },
  {
    translation: "Ï",
    toTranslate: "&#207;"
  },
  {
    translation: "Ð",
    toTranslate: "&#208;"
  },
  {
    translation: "Ñ",
    toTranslate: "&#209;"
  },
  {
    translation: "Ò",
    toTranslate: "&#210;"
  },
  {
    translation: "Ó",
    toTranslate: "&#211;"
  },
  {
    translation: "Ô",
    toTranslate: "&#212;"
  },
  {
    translation: "Õ",
    toTranslate: "&#213;"
  },
  {
    translation: "Ö",
    toTranslate: "&#214;"
  },
  {
    translation: "Ø",
    toTranslate: "&#216;"
  },
  {
    translation: "Ù",
    toTranslate: "&#217;"
  },
  {
    translation: "Ú",
    toTranslate: "&#218;"
  },
  {
    translation: "Û",
    toTranslate: "&#219;"
  },
  {
    translation: "Ü",
    toTranslate: "&#220;"
  },
  {
    translation: "Ý",
    toTranslate: "&#221;"
  },
  {
    translation: "Þ",
    toTranslate: "&#222;"
  },
  {
    translation: "ß",
    toTranslate: "&#223;"
  },
  {
    translation: "à",
    toTranslate: "&#224;"
  },
  {
    translation: "á",
    toTranslate: "&#225;"
  },
  {
    translation: "â",
    toTranslate: "&#226;"
  },
  {
    translation: "ã",
    toTranslate: "&#227;"
  },
  {
    translation: "ä",
    toTranslate: "&#228;"
  },
  {
    translation: "å",
    toTranslate: "&#229;"
  },
  {
    translation: "æ",
    toTranslate: "&#230;"
  },
  {
    translation: "ç",
    toTranslate: "&#231;"
  },
  {
    translation: "è",
    toTranslate: "&#232;"
  },
  {
    translation: "é",
    toTranslate: "&#233;"
  },
  {
    translation: "ê",
    toTranslate: "&#234;"
  },
  {
    translation: "ë",
    toTranslate: "&#235;"
  },
  {
    translation: "ì",
    toTranslate: "&#236;"
  },
  {
    translation: "í",
    toTranslate: "&#237;"
  },
  {
    translation: "î",
    toTranslate: "&#238;"
  },
  {
    translation: "ï",
    toTranslate: "&#239;"
  },
  {
    translation: "ð",
    toTranslate: "&#240;"
  },
  {
    translation: "ñ",
    toTranslate: "&#241;"
  },
  {
    translation: "ò",
    toTranslate: "&#242;"
  },
  {
    translation: "ó",
    toTranslate: "&#243;"
  },
  {
    translation: "ô",
    toTranslate: "&#244;"
  },
  {
    translation: "õ",
    toTranslate: "&#245;"
  },
  {
    translation: "ö",
    toTranslate: "&#246;"
  },
  {
    translation: "ø",
    toTranslate: "&#248;"
  },
  {
    translation: "ù",
    toTranslate: "&#249;"
  },
  {
    translation: "ú",
    toTranslate: "&#250;"
  },
  {
    translation: "û",
    toTranslate: "&#251;"
  },
  {
    translation: "ü",
    toTranslate: "&#252;"
  },
  {
    translation: "ý",
    toTranslate: "&#253;"
  },
  {
    translation: "þ",
    toTranslate: "&#254;"
  },
  {
    translation: "ÿ",
    toTranslate: "&#255;"
  },
  {
    translation: " ",
    toTranslate: "&#160;"
  },
  {
    translation: "¡",
    toTranslate: "&#161;"
  },
  {
    translation: "¢",
    toTranslate: "&#162;"
  },
  {
    translation: "£",
    toTranslate: "&#163;"
  },
  {
    translation: "¤",
    toTranslate: "&#164;"
  },
  {
    translation: "¥",
    toTranslate: "&#165;"
  },
  {
    translation: "¦",
    toTranslate: "&#166;"
  },
  {
    translation: "§",
    toTranslate: "&#167;"
  },
  {
    translation: "¨",
    toTranslate: "&#168;"
  },
  {
    translation: "©",
    toTranslate: "&#169;"
  },
  {
    translation: "ª",
    toTranslate: "&#170;"
  },
  {
    translation: "«",
    toTranslate: "&#171;"
  },
  {
    translation: "¬",
    toTranslate: "&#172;"
  },
  {
    translation: "­",
    toTranslate: "&#173;"
  },
  {
    translation: "®",
    toTranslate: "&#174;"
  },
  {
    translation: "¯",
    toTranslate: "&#175;"
  },
  {
    translation: "°",
    toTranslate: "&#176;"
  },
  {
    translation: "±",
    toTranslate: "&#177;"
  },
  {
    translation: "²",
    toTranslate: "&#178;"
  },
  {
    translation: "³",
    toTranslate: "&#179;"
  },
  {
    translation: "´",
    toTranslate: "&#180;"
  },
  {
    translation: "µ",
    toTranslate: "&#181;"
  },
  {
    translation: "¶",
    toTranslate: "&#182;"
  },
  {
    translation: "¸",
    toTranslate: "&#184;"
  },
  {
    translation: "¹",
    toTranslate: "&#185;"
  },
  {
    translation: "º",
    toTranslate: "&#186;"
  },
  {
    translation: "»",
    toTranslate: "&#187;"
  },
  {
    translation: "¼",
    toTranslate: "&#188;"
  },
  {
    translation: "½",
    toTranslate: "&#189;"
  },
  {
    translation: "¾",
    toTranslate: "&#190;"
  },
  {
    translation: "¿",
    toTranslate: "&#191;"
  },
  {
    translation: "×",
    toTranslate: "&#215;"
  },
  {
    translation: "÷",
    toTranslate: "&#247;"
  },
  {
    translation: "∀",
    toTranslate: "&#8704;"
  },
  {
    translation: "∂",
    toTranslate: "&#8706;"
  },
  {
    translation: "∃",
    toTranslate: "&#8707;"
  },
  {
    translation: "∅",
    toTranslate: "&#8709;"
  },
  {
    translation: "∇",
    toTranslate: "&#8711;"
  },
  {
    translation: "∈",
    toTranslate: "&#8712;"
  },
  {
    translation: "∉",
    toTranslate: "&#8713;"
  },
  {
    translation: "∋",
    toTranslate: "&#8715;"
  },
  {
    translation: "∏",
    toTranslate: "&#8719;"
  },
  {
    translation: "∑",
    toTranslate: "&#8721;"
  },
  {
    translation: "−",
    toTranslate: "&#8722;"
  },
  {
    translation: "∗",
    toTranslate: "&#8727;"
  },
  {
    translation: "√",
    toTranslate: "&#8730;"
  },
  {
    translation: "∝",
    toTranslate: "&#8733;"
  },
  {
    translation: "∞",
    toTranslate: "&#8734;"
  },
  {
    translation: "∠",
    toTranslate: "&#8736;"
  },
  {
    translation: "∧",
    toTranslate: "&#8743;"
  },
  {
    translation: "∨",
    toTranslate: "&#8744;"
  },
  {
    translation: "∩",
    toTranslate: "&#8745;"
  },
  {
    translation: "∪",
    toTranslate: "&#8746;"
  },
  {
    translation: "∫",
    toTranslate: "&#8747;"
  },
  {
    translation: "∴",
    toTranslate: "&#8756;"
  },
  {
    translation: "∼",
    toTranslate: "&#8764;"
  },
  {
    translation: "≅",
    toTranslate: "&#8773;"
  },
  {
    translation: "≈",
    toTranslate: "&#8776;"
  },
  {
    translation: "≠",
    toTranslate: "&#8800;"
  },
  {
    translation: "≡",
    toTranslate: "&#8801;"
  },
  {
    translation: "≤",
    toTranslate: "&#8804;"
  },
  {
    translation: "≥",
    toTranslate: "&#8805;"
  },
  {
    translation: "⊂",
    toTranslate: "&#8834;"
  },
  {
    translation: "⊃",
    toTranslate: "&#8835;"
  },
  {
    translation: "⊄",
    toTranslate: "&#8836;"
  },
  {
    translation: "⊆",
    toTranslate: "&#8838;"
  },
  {
    translation: "⊇",
    toTranslate: "&#8839;"
  },
  {
    translation: "⊕",
    toTranslate: "&#8853;"
  },
  {
    translation: "⊗",
    toTranslate: "&#8855;"
  },
  {
    translation: "⊥",
    toTranslate: "&#8869;"
  },
  {
    translation: "⋅",
    toTranslate: "&#8901;"
  },
  {
    translation: "Α",
    toTranslate: "&#913;"
  },
  {
    translation: "Β",
    toTranslate: "&#914;"
  },
  {
    translation: "Γ",
    toTranslate: "&#915;"
  },
  {
    translation: "Δ",
    toTranslate: "&#916;"
  },
  {
    translation: "Ε",
    toTranslate: "&#917;"
  },
  {
    translation: "Ζ",
    toTranslate: "&#918;"
  },
  {
    translation: "Η",
    toTranslate: "&#919;"
  },
  {
    translation: "Θ",
    toTranslate: "&#920;"
  },
  {
    translation: "Ι",
    toTranslate: "&#921;"
  },
  {
    translation: "Κ",
    toTranslate: "&#922;"
  },
  {
    translation: "Λ",
    toTranslate: "&#923;"
  },
  {
    translation: "Μ",
    toTranslate: "&#924;"
  },
  {
    translation: "Ν",
    toTranslate: "&#925;"
  },
  {
    translation: "Ξ",
    toTranslate: "&#926;"
  },
  {
    translation: "Ο",
    toTranslate: "&#927;"
  },
  {
    translation: "Π",
    toTranslate: "&#928;"
  },
  {
    translation: "Ρ",
    toTranslate: "&#929;"
  },
  {
    translation: "Σ",
    toTranslate: "&#931;"
  },
  {
    translation: "Τ",
    toTranslate: "&#932;"
  },
  {
    translation: "Υ",
    toTranslate: "&#933;"
  },
  {
    translation: "Φ",
    toTranslate: "&#934;"
  },
  {
    translation: "Χ",
    toTranslate: "&#935;"
  },
  {
    translation: "Ψ",
    toTranslate: "&#936;"
  },
  {
    translation: "Ω",
    toTranslate: "&#937;"
  },
  {
    translation: "α",
    toTranslate: "&#945;"
  },
  {
    translation: "β",
    toTranslate: "&#946;"
  },
  {
    translation: "γ",
    toTranslate: "&#947;"
  },
  {
    translation: "δ",
    toTranslate: "&#948;"
  },
  {
    translation: "ε",
    toTranslate: "&#949;"
  },
  {
    translation: "ζ",
    toTranslate: "&#950;"
  },
  {
    translation: "η",
    toTranslate: "&#951;"
  },
  {
    translation: "θ",
    toTranslate: "&#952;"
  },
  {
    translation: "ι",
    toTranslate: "&#953;"
  },
  {
    translation: "κ",
    toTranslate: "&#954;"
  },
  {
    translation: "λ",
    toTranslate: "&#955;"
  },
  {
    translation: "μ",
    toTranslate: "&#956;"
  },
  {
    translation: "ν",
    toTranslate: "&#957;"
  },
  {
    translation: "ξ",
    toTranslate: "&#958;"
  },
  {
    translation: "ο",
    toTranslate: "&#959;"
  },
  {
    translation: "π",
    toTranslate: "&#960;"
  },
  {
    translation: "ρ",
    toTranslate: "&#961;"
  },
  {
    translation: "ς",
    toTranslate: "&#962;"
  },
  {
    translation: "σ",
    toTranslate: "&#963;"
  },
  {
    translation: "τ",
    toTranslate: "&#964;"
  },
  {
    translation: "υ",
    toTranslate: "&#965;"
  },
  {
    translation: "φ",
    toTranslate: "&#966;"
  },
  {
    translation: "χ",
    toTranslate: "&#967;"
  },
  {
    translation: "ψ",
    toTranslate: "&#968;"
  },
  {
    translation: "ω",
    toTranslate: "&#969;"
  },
  {
    translation: "ϑ",
    toTranslate: "&#977;"
  },
  {
    translation: "ϒ",
    toTranslate: "&#978;"
  },
  {
    translation: "ϖ",
    toTranslate: "&#982;"
  },
  {
    translation: "Œ",
    toTranslate: "&#338;"
  },
  {
    translation: "œ",
    toTranslate: "&#339;"
  },
  {
    translation: "Š",
    toTranslate: "&#352;"
  },
  {
    translation: "š",
    toTranslate: "&#353;"
  },
  {
    translation: "Ÿ",
    toTranslate: "&#376;"
  },
  {
    translation: "ƒ",
    toTranslate: "&#402;"
  },
  {
    translation: "ˆ",
    toTranslate: "&#710;"
  },
  {
    translation: "˜",
    toTranslate: "&#732;"
  },
  {
    translation: " ",
    toTranslate: "&#8194;"
  },
  {
    translation: " ",
    toTranslate: "&#8195;"
  },
  {
    translation: " ",
    toTranslate: "&#8201;"
  },
  {
    translation: "‌",
    toTranslate: "&#8204;"
  },
  {
    translation: "‍",
    toTranslate: "&#8205;"
  },
  {
    translation: "‎",
    toTranslate: "&#8206;"
  },
  {
    translation: "‏",
    toTranslate: "&#8207;"
  },
  {
    translation: "–",
    toTranslate: "&#8211;"
  },
  {
    translation: "—",
    toTranslate: "&#8212;"
  },
  {
    translation: "‘",
    toTranslate: "&#8216;"
  },
  {
    translation: "’",
    toTranslate: "&#8217;"
  },
  {
    translation: "‚",
    toTranslate: "&#8218;"
  },
  {
    translation: "“",
    toTranslate: "&#8220;"
  },
  {
    translation: "”",
    toTranslate: "&#8221;"
  },
  {
    translation: "„",
    toTranslate: "&#8222;"
  },
  {
    translation: "†",
    toTranslate: "&#8224;"
  },
  {
    translation: "‡",
    toTranslate: "&#8225;"
  },
  {
    translation: "•",
    toTranslate: "&#8226;"
  },
  {
    translation: "…",
    toTranslate: "&#8230;"
  },
  {
    translation: "‰",
    toTranslate: "&#8240;"
  },
  {
    translation: "′",
    toTranslate: "&#8242;"
  },
  {
    translation: "″",
    toTranslate: "&#8243;"
  },
  {
    translation: "‹",
    toTranslate: "&#8249;"
  },
  {
    translation: "›",
    toTranslate: "&#8250;"
  },
  {
    translation: "‾",
    toTranslate: "&#8254;"
  },
  {
    translation: "€",
    toTranslate: "&#8364;"
  },
  {
    translation: "™",
    toTranslate: "&#8482;"
  },
  {
    translation: "←",
    toTranslate: "&#8592;"
  },
  {
    translation: "↑",
    toTranslate: "&#8593;"
  },
  {
    translation: "→",
    toTranslate: "&#8594;"
  },
  {
    translation: "↓",
    toTranslate: "&#8595;"
  },
  {
    translation: "↔",
    toTranslate: "&#8596;"
  },
  {
    translation: "↵",
    toTranslate: "&#8629;"
  },
  {
    translation: "⌈",
    toTranslate: "&#8968;"
  },
  {
    translation: "⌉",
    toTranslate: "&#8969;"
  },
  {
    translation: "⌊",
    toTranslate: "&#8970;"
  },
  {
    translation: "⌋",
    toTranslate: "&#8971;"
  },
  {
    translation: "◊",
    toTranslate: "&#9674;"
  },
  {
    translation: "♠",
    toTranslate: "&#9824;"
  },
  {
    translation: "♣",
    toTranslate: "&#9827;"
  },
  {
    translation: "♥",
    toTranslate: "&#9829;"
  },
  {
    translation: "♦",
    toTranslate: "&#9830;"
  }
];

exports.replaceWithSymbol = text => {
  return text
    .split(" ")
    .map(word => {
      const symbol = symbols.find(sym => sym.toTranslate === word);
      if (symbol) {
        return symbol.translation;
      } else {
        return word;
      }
    })
    .join(" ");
};

// In regex, $0 is the entire matched string. $1 is the first subpattern (ie. nbsp, euro...).
exports.replaceHtmlEntites = (function() {
  const translate_re = /&(nbsp|euro|ndash|amp|rsquo|rdquo|ldquo|lsquo|rsquo|aacute|agrave|egrave|eacute);/g;
  const translate = {
    nbsp: String.fromCharCode(160),
    euro: "€",
    ndash: "-",
    amp: "&",
    rsquo: "’",
    rdquo: "”",
    ldquo: "“",
    lsquo: "‘",
    rsquo: "’",
    aacute: "á",
    agrave: "à",
    egrave: "è",
    eacute: "é"
  };
  const translator = function($0, $1) {
    return translate[$1];
  };

  return function(s) {
    return s.replace(translate_re, translator);
  };
})();
