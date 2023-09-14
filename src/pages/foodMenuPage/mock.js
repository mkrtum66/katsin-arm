import { v4 as uuid } from 'uuid';

const starters = [
  {
    id: uuid(),
    name: 'ՍՄԲՈՒԿԻ ԽԱՎԻԱՐ',
    description: 'Խորոված սմբուկ, պղպեղ, թահին, նուռ, բազիլիկ',
    price: '2600',
  },
  {
    id: uuid(),
    name: 'ՄՈՒՀԱՄԱՐԱ ՄՈՑԱՐԵԼԱՅԻ ՄՈՒՍՈՎ',
    description: 'կարմիր խորոված պղպեղ, լոլիկ, պանրի մուս',
    price: '2700',
  },
  {
    id: uuid(),
    name: 'ՀՈՒՄՄՈՒՍ ԷԴԱՄԱՄԵՅՈՎ ԵՎ ՍՆԿՈՎ',
    description: '',
    price: '2700',
  },
  {
    id: uuid(),
    name: 'ՎԻՏԵԼԼՈ ՏՈՆԱՏՈ ԼԵԶՎՈՎ',
    description: 'հորթի լեզվով փասթրամի, միքս աղցան, տոնատո սոուս',
    price: '3200',
  },
  {
    id: uuid(),
    name: 'ՄՈՒԹԱԲԱԼ ՍՈՃԵՆՈՒ ԸՆԿՈՒՅԶՈՎ',
    description: 'Խորոված սմբուկ, սոճընկույզ, կրեմ պանիր, մաղադանոս',
    price: '2700',
  },
  {
    id: uuid(),
    name: 'ՆՈՒՇՈՎ ԵՎ ՍՊԻՏԱԿ ԼՈԲՈՎ ՊԱՇՏԵՏ',
    description: '',
    price: '2300',
  },
  {
    id: uuid(),
    name: 'ԽՐԹԽՐԹԱՆ ՍՄԲՈՒԿ ՖԵՏԱՅՈՎ',
    description: 'Չերրի, հարած ֆետա, կանաչեղեն, հնդկ. ընկույզ',
    price: '2700',
  },
  {
    id: uuid(),
    name: 'ԿԱՐՄԻՐ ԼՈԲՈՒ ԽՅՈՒՍ ԸՆԿՈՒՅԶՈՎ',
    description: '',
    price: '2300',
  },
  {
    id: uuid(),
    name: 'ՊԱՆՐԻ ԱՓՍԵ 4 ԱՆՁԻ ՀԱՄԱՐ',
    description: '',
    price: '5600',
  },
  {
    id: uuid(),
    name: 'ՄՍԻ ԵՎ ՊԱՆՐԻ ԱՓՍԵ 4-5 ԱՆՁԻ ՀԱՄԱՐ',
    description: '',
    price: '8000',
  },
  {
    id: uuid(),
    name: 'ՆԱԽՈՒՏԵՍՏՆԵՐԻ ՍԵԹ 4 ԱՆՁԻ ՀԱՄԱՐ',
    description:
      'Ֆիրմային նախուտեստներ - Մութաբալ, մուհամմարա, սպիտակ լոբու պաշտետ, սմբուկի խավիար, հումմուս, կարմիր լոբու պաշտետ, թարմ լոշիկ',
    price: '16.000',
  },
];
const raw_starters = [
  {
    id: uuid(),
    name: 'ՀՈՐԹԻ ԹԱՐԹԱՐ (100 ԳՐ)',
    description: 'Տրյուֆելի մայոնեզ, կարտոֆիլի չիպս, կանաչ սոխ, տոբիկո',
    price: '4000',
  },
  {
    id: uuid(),
    name: 'ՍԱՂՄՈՆԻ ԹԱԹԱԿԻ (100 ԳՐ)',
    description: 'պոնզու, մանգո, կանաչ եւ կարմիր սոխ, պանկո',
    price: '5000',
  },
  {
    id: uuid(),
    name: 'ՏԱՎԱՐԻ ԿԱՐՊԱՉԻՈ (100 ԳՐ)',
    description: 'Տրյուֆելի սոուս, միքս աղցան, պարմեզան, պոնզու',
    price: '4300',
  },
  {
    id: uuid(),
    name: 'ՍԱՂՄՈՆԻ ՍԵՎԻՉԵ (100 ԳՐ)',
    description: 'Մանգո, սոխ, մարակույայի սոուս, համեմ, չիլի',
    price: '5400',
  },
  {
    id: uuid(),
    name: 'ԹՈՒՆԱ ՄԻԼԱՆԵԶԵ (100 ԳՐ)',
    description: 'պոնզու, չիլի, քունջութ, սոխ',
    price: '5200',
  },
  {
    id: uuid(),
    name: 'ՍԱՂՄՈՆԻ ԹԱՐԹԱՐ (100 ԳՐ)',
    description: '',
    price: '5100',
  },
];

const sushi_sashimi = [
  {
    id: uuid(),
    name: '',
    description: 'ԿԼԱՍԻԿ ՌՈԼԵՐ, 8 ՀԱՏ',
    price: '',
  },
  {
    id: uuid(),
    name: 'ԿԱԼԻՖՈՐՆԻԱ ԴԱՍԱԿԱՆ',
    description: '',
    price: '5300',
  },
  {
    id: uuid(),
    name: 'ՍՈՒՇԻ ՌՈԼ ԾՈՎԱԽԵՑԳԵՏՆՈՎ',
    description: '',
    price: '5500',
  },
  {
    id: uuid(),
    name: 'ԹՈՒՆԱ ԹԱՐԹԱՐ ՌՈԼ',
    description: '',
    price: '5500',
  },
  {
    id: uuid(),
    name: 'ԿԱՆԱԴԱ ՌՈԼ ՕՁԱՁԿՈՎ ԵՎ ԿՐԱԲԻ ՁՈՂԻԿՆԵՐՈՎ',
    description: '',
    price: '5900',
  },
  {
    id: uuid(),
    name: 'ՖԻԼԱԴԵԼՖԻԱ ՌՈԼ ՍԱՂՄՈՆՈՎ ԵՎ ՕՁԱՁԿՈՎ',
    description: '',
    price: '5900',
  },
  {
    id: uuid(),
    name: 'ԾԽԵՑՎԱԾ ՍԱՂՄՈՆՈՎ ՌՈԼ',
    description: '',
    price: '5500',
  },
  {
    id: uuid(),
    name: 'ՄԱԿԻ ՌՈԼ ՍԱՂՄՈՆՈՎ ԹՈՒՆԱՅՈՎ ԾՈՎԱԽԵՑԳԵՏՆՈՎ ԵՎ ՄԱՆԳՈՅՈՎ',
    description: '',
    price: '5300',
  },
  {
    id: uuid(),
    name: 'ԿԱԼԻՖՈՐՆԻԱ ՄԻՔՍ',
    description: '',
    price: '5500',
  },
  {
    id: uuid(),
    name: 'ՏԱՔ ՌՈԼ ԿԱԼԻՖՈՐՆԻԱ',
    description: '',
    price: '5400',
  },
  {
    id: uuid(),
    name: 'ՏԱՔ ՌՈԼ ԾՈՎԱԽԵՑԳԵՏՆՈՎ ԵՎ ՍԱՂՄՈՆՈՎ',
    description: '',
    price: '5900',
  },
  {
    id: uuid(),
    name: 'ՍՈՒՇԻ ՍԵԹ ՊՐԵՄԻՈՒՄ',
    description: '40 հատ, մատուցվում է նիտրո սառույցով',
    price: '28.600',
  },
  {
    id: uuid(),
    name: '',
    description: 'ՖԻՐՄԱՅԻՆ ՌՈԼԵՐ, 8 ՀԱՏ',
    price: '',
  },
  {
    id: uuid(),
    name: 'ՖԻՐՄԱՅԻՆ ԿԱՑԻՆ ՌՈԼ',
    description: '',
    price: '5800',
  },
  {
    id: uuid(),
    name: 'ՌՈԼ ՕՁԱՁԿՈՎ ԵՎ ՏՐՅՈՒՖԵԼԻ ՍՈՈՒՍՈՎ',
    description: '',
    price: '5900',
  },
  {
    id: uuid(),
    name: 'ԿԱԼԻՖՈՐՆԻԱ ԹԱՐԹԱՐ',
    description: '',
    price: '5400',
  },
  {
    id: uuid(),
    name: '',
    description: 'ՆԻԳԻՐԻ , 1 ՀԱՏ',
    price: '',
  },
  {
    id: uuid(),
    name: 'ՍԱՂՄՈՆ',
    description: '',
    price: '1200',
  },
  {
    id: uuid(),
    name: 'ՕՁԱՁՈՒԿ',
    description: '',
    price: '1500',
  },
  {
    id: uuid(),
    name: 'ԾՈՎԱԽԵՑԳԵՏԻՆ',
    description: '',
    price: '1200',
  },
];
const salads = [
  {
    id: uuid(),
    name: 'ԱՂՑԱՆ ՔԵՅԼՈՎ ԵՎ ԱՎՈԿԱԴՈՅՈՎ',
    description:
      'Քեյլ, նուռ, մեղրով սոուս, պարմեզան, էդամամե, վարունգի եւ ավոկադոյի սոուս, պանկո, հնդկ. ընկույզ',
    price: '3600',
  },
  {
    id: uuid(),
    name: 'ԱՂՑԱՆ ԾՈՎԱԽԵՑԳԵՏՆՈՎ ԵՎ ՄԱՆԳՈՅՈՎ',
    description:
      'Ծովախեցգետին, մանգո, ավոկադոյի սոուս, վարունգ, բրնձե չիփսեր, միքս աղցան, չիլի մայոնեզ, նուռ, համեմ, կանաչ եւ կարմիր սոխ',
    price: '4900',
  },
  {
    id: uuid(),
    name: 'ՄՈՑԱՐԵԼԱՅՈՎ, ՉԵՐՐԻՈՎ ԵՎ ԱՎՈԿԱԴՈՅՈՎ ԱՂՑԱՆ',
    description: 'Թարմ մոցարելա, բազիլիկ, միքս աղցան, պեստո, նուշ, սոճընկույզ',
    price: '4100',
  },
  {
    id: uuid(),
    name: 'ԲՈՒՐԱՏԱՆ ԴԵՂՁՈՎ ԵՎ ՀԱՏԱՊՏՂԱՅԻՆ ՍՈՈՒՍՈՎ',
    description: '',
    price: '4700',
  },
  {
    id: uuid(),
    name: 'ԱՂՑԱՆ ԾԽԵՑՎԱԾ ՍԱՂՄՈՆՈՎ',
    description: 'Նարինջ, միքս աղցան, բազուկ, նուշ, ավոկադո',
    price: '5300',
  },
  {
    id: uuid(),
    name: 'ԱՂՑԱՆ ՍԱՂՄՈՆՈՎ ԵՎ ՔԻՆՈԱՅՈՎ',
    description: 'Ավոկադո, սպանախ, քինոա, բրոկոլի, բողկ, մասագո, նռան դրեսինգ',
    price: '4900',
  },
  {
    id: uuid(),
    name: 'ԱՂՑԱՆ ՀՈՒՆԱԿԱՆ',
    description: 'Վարունգ, լոլիկ, ձիթապտուղ, ֆետա, օրեգանո, բուլղարական պղպեղ, կիտրոնի սոուս',
    price: '3500',
  },
];

const seafood = [
  {
    id: uuid(),
    name: 'ՈՒԹՈՏՆՈՒԿ ՄԱՐՈԿԿՈՅԻՑ (ԵՓՎԱԾ՝ 150 ԳՐ)',
    description: 'Կարտոֆիլ, կարմիր պղպեղի մուս, սպանախ',
    price: '14.500',
  },
  {
    id: uuid(),
    name: 'ԳՐԻԼ ՍԱՂՄՈՆԻ ՖԻԼԵ (220 ԳՐ)',
    description: 'Թերիյակի սոուս, էդամամե, բրոկոլի',
    price: '8600',
  },
  {
    id: uuid(),
    name: 'ԾՈՎԱՅԻՆ ՈՒՏԵՍՏՆԵՐԻ ԱՓՍԵ /4 անձի համար/',
    description: 'Ութոտնուկ, ծովախեցգետիններ, սաղմոն, սիբաս, լանգուստիններ, ծնեբեկ, բանջարեղեն',
    price: '62.000',
  },
  {
    id: uuid(),
    name: 'ԾՈՎԱԽԵՑԳԵՏԻՆՆԵՐ ԼՈԼԻԿԻ ՍՈՈՒՍՈՒՄ',
    description: '',
    price: '6800',
  },
  {
    id: uuid(),
    name: 'ՍԻԲԱՍ ՀՈՒՆԱԿԱՆ (700 ԳՐ) / 2 ԲԱԺԻՆ /',
    description: 'Բրոկոլի, ծնեբեկ, էդամամե',
    price: '18.600',
  },
  {
    id: uuid(),
    name: 'ՍԱՂՄՈՆԻ ՊՈՉ / 2 ԲԱԺԻՆ /',
    description: 'Էդամամե, բրոկոլի, ծնեբեկ',
    price: '16.200',
  },
  {
    id: uuid(),
    name: 'ԳՐԻԼ ՀՍԿԱ ԾՈՎԱԽԵՑԳԵՏԻՆՆԵՐ (2Հ.)',
    description: 'Սնկի սոուս, միքս աղցան, կիտրոն',
    price: '14.600',
  },
  {
    id: uuid(),
    name: 'ՊԱՏԱԳՈՆԻԱԿԱՆ ՍԻԲԱՍ',
    description: 'Չիլիական սոուս, ծնեբեկ',
    price: '18.800',
  },
  {
    id: uuid(),
    name: 'ԱՄԲՈՂՋԱԿԱՆ ՀՍԿԱ ԻՇԽԱՆ (2 ԿԳ)',
    description: 'Կալամատա , չերրի, սոխ',
    price: '34.000',
  },
];

const mangal = [
  {
    id: uuid(),
    name: 'ԽՈԶԻ ԿՈՂԱՄԻՍ/ՄԵՋՔԱՄԻՍ ՈՍԿՈՐԻ ՎՐԱ (800ԳՐ)',
    description:
      'Ուրցով եւ պապրիկայով մարինադ, տապակած կարտոֆիլ, խորոված բանջարեղեն, թարմ կանաչեղեն, մարինացված սոխ',
    price: '16.000',
  },
  {
    id: uuid(),
    name: 'ՀՈՐԹԻ ՍՈՒԿԻ (300 ԳՐ)',
    description:
      'Չոր ռեհանով եւ պապրիկայով մարինադ, տապակած կարտոֆիլ, խորոված բանջարեղեն, թարմ կանաչեղեն',
    price: '8400',
  },
  {
    id: uuid(),
    name: 'ԳԱՌԻ ԿՈՂԱՄԻՍ (400 ԳՐ)',
    description: 'Թանդուրի մարինադ, խորոված բանջարեղեն, կարտոֆիլ, սմբուկի սոուս, թարմ կանաչեղեն',
    price: '9800',
  },
  {
    id: uuid(),
    name: 'ԳԱՌԻ ՓԱՓԿԱՄԻՍ (300 ԳՐ)',
    description: 'Խորոված բանջարեղեն, կարտոֆիլ, սմբուկի սոուս, թարմ կանաչեղեն',
    price: '7800',
  },
  {
    id: uuid(),
    name: 'ՖԻՐՄԱՅԻՆ ԿՈԼՈԼԱԿՆԵՐ ՔԱԲԱԲԻ ՈՃՈՎ (3 ՀԱՏ)',
    description:
      'Մատուցվում է խաղողի վազի շամփուրիկներով՝ տորտիլլայի վրա, սամիթի ու մածունի սոուսով եւ կանաչեղենով',
    price: '',
  },
  {
    id: uuid(),
    name: 'ԳԱՌ',
    description: '',
    price: '4500',
  },
  {
    id: uuid(),
    name: 'ԽՈԶ',
    description: '',
    price: '3000',
  },
  {
    id: uuid(),
    name: 'ՏԱՎԱՐ',
    description: '',
    price: '4200',
  },
  {
    id: uuid(),
    name: '',
    description: '',
    price: '3000',
  },
];

const other_dishes_on_charcoal = [
  {
    id: uuid(),
    name: 'ԳՐԻԼ ՀՆԴԿԱՀԱՎԻ ՓԱՓԿԱՄԻՍ (220 ԳՐ)',
    description: 'Մատուցվում է բանջարեղենով, սեւ բրնձով եւ կանաչեղենով',
    price: '5200',
  },
  {
    id: uuid(),
    name: 'ՀԱՎԻ ԳՐԻԼ ՓԱՓԿԱՄԻՍ (250 ԳՐ)',
    description: 'Տապակած կարտոֆիլ, չիլի պղպեղի պյուրե, կանաչեղեն',
    price: '4300',
  },
  {
    id: uuid(),
    name: 'ԱՆԳՈՒՍԻ ՕՍՈԲՈՒԿՈ ՐԻԶՈՏՏՈՅՈՎ (600 ԳՐ)',
    description: 'Ռիզոտտո սնկով, կծու սոուս',
    price: '8800',
  },
  {
    id: uuid(),
    name: 'ԾԽԵՑՎԱԾ ԽՈԶԻ ՄԱՏՆԵՐ (900 ԳՐ) AMD 18.900 /3 անձի համար/',
    description: 'Լցոնած կարտոֆիլ, կանաչ սոխ, հաբաներո սոուս, մանգոյի սալսա',
    price: '18.900',
  },
  {
    id: uuid(),
    name: 'ԱՆԳՈՒՍԻ ՌԻԲԱՅ ՏՐՅՈՒՖԵԼԻ ՍՈՈՒՍՈՎ (200 ԳՐ)',
    description: 'Ծնեբեկ, կարտոֆիլ, տրյուֆելի սոուս, կարտոֆիլի մուս',
    price: '10.800',
  },
  {
    id: uuid(),
    name: 'ԴԱՆԴԱՂ ՊԱՏՐԱՍՏՎԱԾ ԳԱՌ (1 ԿԳ)',
    description: 'Տապակած կարտոֆիլ, խորոված բանջարեղեն, թարմ կանաչեղեն, ձաձիկի, չիլի, կարմիր սոխ',
    price: '15.800',
  },
  {
    id: uuid(),
    name: 'ՄՍԱՅԻՆ ՈՒՏԵՍՏՆԵՐԻ ԱՓՍԵ "ԿԱՑԻՆ" /4 ԲԱԺԻՆ/',
    description:
      'Խորոված հորթի փափկամիս, գառ ջեռոցից, խորոված խոզի փափկամիս,հորթի եւ խոզի մսով քյաբաբիկներ, կարտոֆիլ, բանջարեղեն, լոլիկով եւ կարմիր սոխով աղցան, կանաչեղեն',
    price: '48.800',
  },
];

const steak_on_charcoal = [
  {
    id: uuid(),
    name: 'ՌԻԲԱՅ, ԱՆԳՈՒՍ (400 ԳՐ)',
    description: '',
    price: '23.000',
  },
  {
    id: uuid(),
    name: 'ՌԻԲԱՅ ՈՍԿՈՐԻ ՎՐԱ, (1-1.5ԿԳ)',
    description: '',
    price: '4400 100գր',
  },
  {
    id: uuid(),
    name: 'ԱՆԳՈՒՍ ՏԵՆԴԵՐԼՈԻՆ, (240 ԳՐ)',
    description: '',
    price: '14.900',
  },
];

const darkness = [
  {
    id: uuid(),
    name: 'ԳՐԻԼ ԲԱՆՋԱՐԵՂԵՆ',
    description: '',
    price: '1800',
  },
  {
    id: uuid(),
    name: 'ՋԵՌՈՑՈՒՄ ՊԱՏՐԱՍՏՎԱԾ ԿԱՐՏՈՖԻԼ',
    description: '',
    price: '1400',
  },
  {
    id: uuid(),
    name: 'ԿԱՐՏՈՖԻԼԻ ՊՅՈՒՐԵ',
    description: '',
    price: '1200',
  },
  {
    id: uuid(),
    name: 'ՏԱՊԱԿԱԾ ԾՆԵԲԵԿ',
    description: '',
    price: '2700',
  },
  {
    id: uuid(),
    name: 'ՏԱՊԱԿԱԾ ՍՆԿԻ ՏԵՍԱԿԱՆԻ',
    description: '',
    price: '2500',
  },
  {
    id: uuid(),
    name: 'ԲԱԶԻԼԻԿԻ ՊԵՍՏՈ',
    description: '',
    price: '700',
  },
  {
    id: uuid(),
    name: 'ԹԱՐՄ ԼՈՇԻԿՆԵՐ ԶԱԹԱՐՈՎ ԵՎ ՁԻԹ. ՁԵԹՈՎ',
    description: '',
    price: '1000',
  },
  {
    id: uuid(),
    name: 'ՏԱՔ ՀԱՑ ԶԱԹԱՐՈՎ ԵՎ ՊԱՐՄԵԶԱՆՈՎ',
    description: '',
    price: '1600',
  },
];

const sauces = [
  {
    id: uuid(),
    name: 'ՊՈՐՉԻՆԻ ՍՆԿԻ ԵՎ ՇԱՄՊԻՆՅՈՆԻ ՍՈՈՒՍ',
    description: '',
    price: '800',
  },
  {
    id: uuid(),
    name: 'ՍԱԼՍԱ ՎԵՐԴԵ',
    description: '',
    price: '600',
  },
  {
    id: uuid(),
    name: 'ՓԵՓԸՐ ՍՈՈՒՍ',
    description: '',
    price: '800',
  },
  {
    id: uuid(),
    name: 'ԲԼՈՒ ՉԻԶ ՍՈՈՒՍ',
    description: '',
    price: '700',
  },
  {
    id: uuid(),
    name: 'ԼՈԼԻԿԻ ՉՐԻ ՊԵՍՏՈ',
    description: '',
    price: '700',
  },
];

const desserts = [
  {
    id: uuid(),
    name: 'ԴԵՍԵՐՏ ՄԱՆԳՈ ՄԱՐԱԿՈՒՅԱ',
    description: '',
    price: '3000',
  },
  {
    id: uuid(),
    name: 'ԲԱՍԿՅԱՆ ՉԻԶՔԵՅՔ',
    description: '',
    price: '3300',
  },
  {
    id: uuid(),
    name: 'ՄԵԴՈՎԻԿ ՄԵՂՐԻ ՊԱՂՊԱՂԱԿՈՎ',
    description: '',
    price: '2700',
  },
  {
    id: uuid(),
    name: 'ՍԵԶՈՆԱՅԻՆ ՄՐԳԵՐ ԵՎ ՀԱՏԱՊՏՈՒՂՆԵՐ',
    description: '',
    price: '12.500',
  },
  {
    id: uuid(),
    name: 'ԿԱՑԻՆ–Ի ԴԵՍԵՐՏՆԵՐԻ ՄԵԾ ՍԵԹ /5-6 անձի համար/',
    description: '',
    price: '22.800',
  },
  {
    id: uuid(),
    name: 'ԿԱՆՈԼԻ ՍԻՑԻԼԻԱՆԻ ՊԻՍՏԱԿԻ ՋԵԼԱՏՈՅՈՎ',
    description: '',
    price: '3100',
  },
  {
    id: uuid(),
    name: 'ՄԵԾ ՇՈՒ ՀԱՏԱՊՏՈՒՂՆԵՐՈՎ',
    description: '',
    price: '2800',
  },
  {
    id: uuid(),
    name: 'ԴԵՍԵՐՏ ԱԶՆՎԱՄՈՐԻՈՎ ԵՎ ՊԻՍՏԱԿՈՎ',
    description: '',
    price: '2900',
  },
  {
    id: uuid(),
    name: 'ՖՂԵԶԻԵ',
    description: 'Ելակ, պիստակի կրեմ, ելակով բիսքվիթ',
    price: '2800',
  },
  {
    id: uuid(),
    name: 'ՄԵՐ ԿՈՂՄԻՑ ՊԱՏՐԱՍՏԱԾ ՋԵԼԱՏՈ /75գր/',
    description: 'Սուրճ, պիստակ, հատապտղային, լոռամիրգ, վանիլ',
    price: '1500',
  },
  {
    id: uuid(),
    name: 'ՄԵՐ ԿՈՂՄԻՑ ՊԱՏՐԱՍՏԱԾ ՍՈՐԲԵ /75գր/',
    description: 'Խնձոր–բազիլիկ, մանգո, հատապտղային, կիտրոն',
    price: '1500',
  },
  {
    id: uuid(),
    name: 'ՏՈՐԹ ԾՆՆԴՅԱՆ (ՓՈՔՐ)',
    description: 'Հարցրեք մատուցողին ավելի մեծ տարբերակների համար',
    price: '7800',
  },
  {
    id: uuid(),
    name: 'ՁՄԵՐՈՒԿ /2-3 անձի համար/',
    description: '',
    price: '6800',
  },
];

export const foodMenu = [
  {
    id: uuid(),
    title: 'starters',
    description: '',
    type: starters,
  },
  {
    id: uuid(),
    title: 'raw starters',
    description: '',
    type: raw_starters,
  },
  {
    id: uuid(),
    title: 'sushi',
    description: '',
    type: sushi_sashimi,
  },
  {
    id: uuid(),
    title: 'salads',
    description: '',
    type: salads,
  },
  {
    id: uuid(),
    title: 'seafood',
    description: '',
    type: seafood,
  },
  {
    id: uuid(),
    title: 'mangal',
    description: '',
    type: mangal,
  },
  {
    id: uuid(),
    title: 'other dishes on charcoal',
    description: '',
    type: other_dishes_on_charcoal,
  },
  {
    id: uuid(),
    title: 'steak on charcoal',
    description: '',
    type: steak_on_charcoal,
  },
  {
    id: uuid(),
    title: 'darkness',
    description: '',
    type: darkness,
  },
  {
    id: uuid(),
    title: 'sauces',
    type: sauces,
  },
  {
    id: uuid(),
    title: 'desserts',
    description: '',
    type: desserts,
  },
];

export const lunchMenu = [
  {
    id: uuid(),
    name: '',
    description: 'ԱՊՈՒՐՆԵՐ',
    price: '',
  },
  {
    id: uuid(),
    name: 'ԳԱՍՊԱՉԻՈ ՍՏՐԱՉԻԱՏԵԼԱՅՈՎ',
    description: '',
    price: '3000',
  },
  {
    id: uuid(),
    name: 'ՏՈՄ ՅԱՄ ԾՈՎԱԽԵՑԳԵՏՆՈՎ',
    description: '',
    price: '4400',
  },
  {
    id: uuid(),
    name: 'ՕՐՎԱ ԱՊՈՒՐԸ',
    description: '',
    price: '2900',
  },
  {
    id: uuid(),
    name: '',
    description: 'ՄԱՆՂԱԼ',
    price: '',
  },
  {
    id: uuid(),
    name: 'ԽՈԶԻ ՓԱԿՓԿԱՄՍԻ ԽՈՐՈՎԱԾ (300 ԳՐ)',
    description:
      'Ուրցով եւ պապրիկայով մարինադ, տապակած կարտոֆիլ, խորոված բանջարեղեն, թարմ կանաչեղեն, մարինացված սոխ',
    price: '6700',
  },
  {
    id: uuid(),
    name: 'ՀՈՐԹԻ ՔԱԲԱԲԻԿՆԵՐ ԽՈՐՈՎԱԾ ՍՄԲՈՒԿՈՎ',
    description: 'Խորոված սմբուկ, մոցարելա, զաթար, սոխ, կանաչեղեն',
    price: '4100',
  },
  {
    id: uuid(),
    name: '',
    description: 'ՏԱՔ ՖԻՐՄԱՅԻՆ ՀԱՑ ՎԱՌԱՐԱՆԻՑ',
    price: '',
  },
  {
    id: uuid(),
    name: 'ԲԱՆՋԱՐԵՂԵՆՈՎ ԵՎ ՀԱԼՎԱԾ ՊԱՆՐՈՎ',
    description: '',
    price: '3200',
  },
  {
    id: uuid(),
    name: 'ՓԱՍԹՐԱՄԻՈՎ ԵՎ ՏՐՅՈՒՖԵԼԻ ՍՈՈՒՍՈՎ',
    description: '',
    price: '4200',
  },
  {
    id: uuid(),
    name: 'ՄՈՑԱՐԵԼԱՅՈՎ, ՊԵՍՏՈՅՈՎ ԵՎ ԼՈԼԻԿՈՎ',
    description: '',
    price: '4200',
  },
];
