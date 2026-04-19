import lagoon from "../assets/dest-lagoon.jpg";
import monastery from "../assets/dest-monastery.jpg";
import oasis from "../assets/dest-oasis.jpg";
import cliffs from "../assets/dest-cliffs.jpg";
import cave from "../assets/dest-cave.jpg";
import terraces from "../assets/dest-terraces.jpg";

export const destinations = [
  {
    slug: "azure-cradle",
    name: "The Azure Cradle",
    region: "Hidden Lagoon of Tham Phra Nang",
    country: "Krabi, Thailand",
    continent: "Asia",
    rarity: "Hidden",
    bestSeason: "Nov – Feb",
    image: lagoon,
    tagline: "A turquoise heart concealed by jungle cliffs.",
    description:
      "Reachable only by a dawn longtail and a short swim through a low cave mouth, the Azure Cradle is a saltwater lagoon hemmed in by limestone walls draped in vines. Few maps mark it. Fewer still find it twice.",
    loreEntries: [
      { date: "1923", note: "First sketched by cartographer E. Vihan, who lost his compass in the swim." },
      { date: "1971", note: "Local fishers stop guiding outsiders; the cradle 'rests'." },
      { date: "Today", note: "Granted to one passport-holder per dawn." },
    ],
    coordinates: "8.0086° N, 98.8417° E",
    caption: "Krabi — dawn swim, Feb '24",
    comments: [
      { author: "Mira K.", date: "12 Feb", note: "Swam through the cave at 6am. The water is the color of a memory you can't place." },
      { author: "Tomás L.", date: "03 Mar", note: "Went back twice. Couldn't find it the second time. Maybe that's the point." },
      { author: "Aiyana R.", date: "27 Jan", note: "The longtail boatman hummed the whole way. No talking. Best advice I got." },
    ],
  },
  {
    slug: "thunder-roof",
    name: "The Thunder Roof",
    region: "Cliffside Monastery of Druk Pa",
    country: "Bhutan",
    continent: "Asia",
    rarity: "Whispered",
    bestSeason: "Mar – May",
    image: monastery,
    tagline: "Where prayer flags speak the mountain's name.",
    description:
      "Built into a vertical face at 3,400 m, the Thunder Roof has been tended by a small order of monks for nine centuries. The climb costs a day. The view costs you a piece of who you were before.",
    loreEntries: [
      { date: "1146", note: "Foundation stones laid by a wandering hermit." },
      { date: "1689", note: "First foreign pilgrim recorded — turned back at the second gate." },
      { date: "Today", note: "Open to travelers carrying a stamped passport." },
    ],
    coordinates: "27.4924° N, 89.3645° E",
    caption: "Bhutan — second gate, Apr '23",
    comments: [
      { author: "Henrik B.", date: "18 Apr", note: "Climbed for six hours. Cried at the top. Not from the altitude." },
      { author: "Sora N.", date: "02 May", note: "A monk poured me butter tea and asked nothing. Worth every blistered step." },
      { author: "Yusuf E.", date: "11 Mar", note: "Carry less than you think. The mountain takes the rest." },
    ],
  },
  {
    slug: "amber-well",
    name: "The Amber Well",
    region: "Forgotten Oasis of Siwan",
    country: "Western Desert, Egypt",
    continent: "Africa",
    rarity: "Forgotten",
    bestSeason: "Oct – Mar",
    image: oasis,
    tagline: "Date palms above a city the dunes nearly took.",
    description:
      "A three-day caravan from the nearest paved road, the Amber Well sits among the half-buried walls of a Roman trading post. Travelers sleep in mud-brick rooms and bathe in spring water older than empires.",
    loreEntries: [
      { date: "31 BCE", note: "Roman garrison records a 'sweet well of amber light.'" },
      { date: "1817", note: "Rediscovered by a survey party that lost two camels." },
      { date: "Today", note: "Maintained by twelve families. No hotels. No cell signal." },
    ],
    coordinates: "29.2032° N, 25.5197° E",
    caption: "Siwan — third night, Nov '22",
    comments: [
      { author: "Léa V.", date: "14 Nov", note: "No signal for nine days. Came back a slower person." },
      { author: "Daniyar M.", date: "30 Oct", note: "The well water tastes faintly of stone and date sugar. I dream about it." },
      { author: "Priya S.", date: "06 Dec", note: "Fatima's family hosted us. Don't refuse a third cup of tea." },
    ],
  },
  {
    slug: "stone-throat",
    name: "The Stone Throat",
    region: "Mist Cliffs of Kalsoy",
    country: "Faroe Islands, Denmark",
    continent: "Europe",
    rarity: "Whispered",
    bestSeason: "Jun – Aug",
    image: cliffs,
    tagline: "Where the sea drinks the sky.",
    description:
      "A waterfall that pours sideways into the Atlantic, the Stone Throat is found at the end of a four-hour walk along a cliff path that disappears in fog without warning. Bring rope. Bring patience.",
    loreEntries: [
      { date: "1486", note: "Norse sagas describe 'a mouth at the end of the world.'" },
      { date: "1962", note: "Charted by a lone sheep farmer who later refused to return." },
      { date: "Today", note: "Visited by fewer than 200 travelers each year." },
    ],
    coordinates: "62.2997° N, 6.7710° W",
    caption: "Kalsoy — fog cleared, Jul '24",
    comments: [
      { author: "Eira J.", date: "21 Jul", note: "Walked in a cloud for three hours. Then it tore open. I forgot how to breathe." },
      { author: "Marco F.", date: "08 Aug", note: "Bring more rope than you think. And someone you trust." },
      { author: "Ingrid Ø.", date: "14 Jun", note: "The waterfall really does fall sideways. I laughed out loud." },
    ],
  },
  {
    slug: "sapphire-vault",
    name: "The Sapphire Vault",
    region: "Glowworm Cave of Whakatāne",
    country: "North Island, New Zealand",
    continent: "Oceania",
    rarity: "Hidden",
    bestSeason: "Apr – Sep",
    image: cave,
    tagline: "A constellation that lives beneath the ferns.",
    description:
      "A river-carved cavern lit by thousands of bioluminescent larvae, the Sapphire Vault is reached by floating in silence on an inflated inner tube. Speak above a whisper and the stars go out.",
    loreEntries: [
      { date: "1872", note: "Māori guides lead the first surveyor by lantern, then snuff it." },
      { date: "1931", note: "A photographer's flash empties the cave for a week." },
      { date: "Today", note: "Strict whisper protocol. No cameras." },
    ],
    coordinates: "37.9783° S, 176.9825° E",
    caption: "Whakatāne — silent float, May '23",
    comments: [
      { author: "Tane W.", date: "09 May", note: "We floated for an hour without speaking. The cave fills your chest." },
      { author: "Hana K.", date: "22 Apr", note: "The guide whispered one word. The whole ceiling lit up like a small galaxy." },
      { author: "Beatriz O.", date: "03 Jun", note: "Leave the camera. You'll remember it better." },
    ],
  },
  {
    slug: "harvest-stair",
    name: "The Harvest Stair",
    region: "Terraces of Mu Cang Chai",
    country: "Yên Bái, Vietnam",
    continent: "Asia",
    rarity: "Hidden",
    bestSeason: "Sep – Oct",
    image: terraces,
    tagline: "A staircase the H'Mong cut from the mountain.",
    description:
      "Carved by hand over four centuries, the Harvest Stair is at its most golden in the weeks before harvest, when mist sits in the valley below the highest terrace and the sun seems to climb the steps with you.",
    loreEntries: [
      { date: "c. 1600", note: "First terraces cut by H'Mong settlers fleeing the lowlands." },
      { date: "2007", note: "Recognized as national heritage; no resorts permitted." },
      { date: "Today", note: "Best walked at dawn with a guide from Che Cu Nha." },
    ],
    coordinates: "21.7833° N, 104.1167° E",
    caption: "Mu Cang Chai — golden week, Sep '23",
    comments: [
      { author: "Linh P.", date: "28 Sep", note: "Walked at 5am with Mr. Vang. Mist below us, gold above. I have never felt smaller or happier." },
      { author: "Owen T.", date: "11 Oct", note: "Ate sticky rice on a terrace edge. Locals laughed at my balance. Fair." },
      { author: "Amara D.", date: "19 Sep", note: "The stairs are uneven on purpose. So you have to look down. So you have to slow down." },
    ],
  },
];

export const getDestination = (slug) => destinations.find((d) => d.slug === slug);
