/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('birds').del();
  await knex('birds').insert([
    {
      name: 'Bald Eagle',
      description:
        'The Bald Eagle, an emblem of the United States, is known for its white head and tail. With a wingspan up to 8 feet, it’s a powerful bird of prey often seen swooping down to catch fish with astonishing accuracy.',
      image_url: 'bald-eagle.jpg',
    },
    {
      name: 'Peregrine Falcon',
      description:
        'Peregrine Falcons are the fastest birds in the world, reaching speeds up to 240 mph during their characteristic hunting stoop. They are widespread throughout North America, found in various habitats from tundra to desert regions.',
      image_url: 'peregrine-falcon.jpg',
    },
    {
      name: 'Northern Cardinal',
      description:
        'The Northern Cardinal is known for its bright red plumage and the beautiful songs of both the males and females. This bird, which does not migrate, is a common sight in gardens and bird feeders across North America.',
      image_url: 'northern-cardinal.jpg',
    },
    {
      name: 'American Robin',
      description:
        'Often considered a sign of spring, the American Robin is recognized for its grey-brown upperparts and a rich red breast. They are also famous for their beautiful, often-heard song.',
      image_url: 'american-robin.jpg',
    },
    {
      name: 'Blue Jay',
      description:
        'Blue Jays are known for their intelligence and tight family bonds. Recognizable by their bright blue, white, and black plumage, they are known to mimic the calls of hawks to scare off other birds.',
      image_url: 'blue-jay.jpg',
    },
    {
      name: 'Great Blue Heron',
      description:
        'The Great Blue Heron, one of North America’s most majestic water birds, is often seen standing silently along riverbanks, lakeshores, and in wet meadows. It is known for its six-foot wingspan and its slow, graceful flight.',
      image_url: 'great-blue-heron.jpg',
    },
    {
      name: 'Canada Goose',
      description:
        "Canada Geese are easily recognized by their long black necks, a large white cheek patch, and honking call. Their migration V-formation is one of nature's great spectacles.",
      image_url: 'canada-goose.jpg',
    },
    {
      name: 'Mourning Dove',
      description:
        "Mourning Doves are one of the most abundant and widespread birds in North America. Their soft, mournful calls are a familiar sound in many areas. They're also known for their speedy, straight flight.",
      image_url: 'mourning-dove.jpg',
    },
    {
      name: 'American Goldfinch',
      description:
        "American Goldfinches are recognized by their bright yellow summer plumage. They're unique among finches for their vegetarian diet, mainly feeding on seeds.",
      image_url: 'american-goldfinch.jpg',
    },
    {
      name: 'Red-tailed Hawk',
      description:
        'The Red-tailed Hawk is one of the largest raptors in North America. Known for its broad, rounded wings and short, wide tail, this bird of prey is often seen soaring in wide circles high over fields.',
      image_url: 'red-tailed-hawk.jpg',
    },
    {
      name: 'Snowy Owl',
      description:
        'The Snowy Owl, a visitor from the Arctic, is known for its striking appearance: predominantly white with sparse brown spots, large yellow eyes, and feather-covered feet for warmth.',
      image_url: 'snowy-owl.jpg',
    },
    {
      name: 'Cedar Waxwing',
      description:
        "Cedar Waxwings are sleek, colorful birds known for their love of berries. They have a unique behavior called 'passing the berry' where they will pass a berry down a line of birds until one finally eats it.",
      image_url: 'cedar-waxwing.jpg',
    },
    {
      name: 'Barn Owl',
      description:
        'Barn Owls have a unique heart-shaped face and are known for their eerie, raspy calls. Unlike most owls, they don’t hoot but emit a long, harsh screech and hissing sounds.',
      image_url: 'barn-owl.jpg',
    },
    {
      name: 'Eastern Bluebird',
      description:
        "Eastern Bluebirds are small, brightly colored thrushes. They're known for their vibrant blue backs and red-orange throats and chests, and they hold the distinction of being the first birds to sing at dawn.",
      image_url: 'eastern-bluebird.jpg',
    },
    {
      name: 'Mallard Duck',
      description:
        "The Mallard Duck is one of the most recognized waterfowl due to its distinctive coloration. The male's iridescent green head, chestnut chest, and curling tail feathers are iconic.",
      image_url: 'mallard-duck.jpg',
    },
    {
      name: 'Black-capped Chickadee',
      description:
        "Black-capped Chickadees are known for their black caps and bibs, white cheeks, and soft, gray backs, wings, and tail. They're beloved for their cheery 'chickadee-dee-dee' calls.",
      image_url: 'black-capped-chickadee.jpg',
    },
    {
      name: 'Brown Pelican',
      description:
        'The Brown Pelican, found along coastlines, is known for its skillful plunge-diving from as high as 60 feet to catch fish. Despite its large size, it’s graceful in flight, often seen gliding in single file.',
      image_url: 'brown-pelican.jpg',
    },
    {
      name: 'Wild Turkey',
      description:
        'The Wild Turkey, a large ground-dwelling bird, is known for its gobbling call. Males have fan-like tails and wattles on their throats, while females are more subdued in color.',
      image_url: 'wild-turkey.jpg',
    },
    {
      name: 'American Kestrel',
      description:
        "The American Kestrel is the smallest and most common falcon in North America. They're known for their ability to spot and catch prey from a stationary position, a behavior called 'hover hunting'.",
      image_url: 'american-kestrel.jpg',
    },
    {
      name: 'Yellow Warbler',
      description:
        "Yellow Warblers are small, sunny yellow birds known for their sweet song. They're one of the most widespread warblers in North America, found in every state and province.",
      image_url: 'yellow-warbler.jpg',
    },
    {
      name: 'Belted Kingfisher',
      description:
        'The Belted Kingfisher is often seen perched along water bodies. They dive headfirst into water to catch fish, and are known for their distinctive rattling call and large head crests.',
      image_url: 'belted-kingfisher.jpg',
    },
    {
      name: 'Northern Flicker',
      description:
        'Northern Flickers are large, brown woodpeckers known for their spots and beautiful flight pattern. Unlike most woodpeckers, they often forage on the ground for ants and beetles.',
      image_url: 'northern-flicker.jpg',
    },
    {
      name: 'Osprey',
      description:
        'Ospreys are large raptors known for their fishing ability. They have specialized talons for grasping fish and a reversible outer toe that allows them to carry their catch headfirst, reducing aerodynamic drag.',
      image_url: 'osprey.jpg',
    },
    {
      name: 'Sandhill Crane',
      description:
        'Sandhill Cranes are tall, gray birds known for their graceful dancing rituals during mating season. They have a distinctive, trumpeting call that can be heard from miles away.',
      image_url: 'sandhill-crane.jpg',
    },
    {
      name: 'Roseate Spoonbill',
      description:
        "The Roseate Spoonbill is known for its brilliant pink plumage and spoon-shaped bill, which it uses to sweep through the water to catch food. It's one of the most striking birds found in North America.",
      image_url: 'roseate-spoonbill.jpg',
    },
    {
      name: 'White-throated Sparrow',
      description:
        'White-throated Sparrows have a lovely, whistling song and are known for their bold black-and-white striped head. They often forage on the ground and under thickets.',
      image_url: 'white-throated-sparrow.jpg',
    },
    {
      name: 'Pileated Woodpecker',
      description:
        'Pileated Woodpeckers are one of the biggest, most striking forest birds in North America. They are known for their large size, bright red crests and their habit of digging large holes in trees in search of ants and beetles.',
      image_url: 'pileated-woodpecker.jpg',
    },
    {
      name: 'Eastern Screech Owl',
      description:
        'Eastern Screech Owls are small, nocturnal raptors known for their distinctive trilling call. They come in two color forms, red and gray, allowing them to blend in with tree bark.',
      image_url: 'eastern-screech-owl.jpg',
    },
    {
      name: 'Ruby-throated Hummingbird',
      description:
        "Ruby-throated Hummingbirds are known for their iridescent green feathers and the males' bright red throat patch or 'gorget'. They are capable of beating their wings 53 times a second.",
      image_url: 'ruby-throated-hummingbird.jpg',
    },
    {
      name: 'Green Heron',
      description:
        'Green Herons are one of the world’s few tool-using bird species. They create fishing lures with bread crusts, insects, or feathers, dropping them on the surface of the water to attract small fish.',
      image_url: 'green-heron.jpg',
    },
    {
      name: 'Black Skimmer',
      description:
        'Black Skimmers have a unique foraging style - they fly low over the water with their beak open, skimming the surface. When they touch a fish, they snap their beak shut.',
      image_url: 'black-skimmer.jpg',
    },
    {
      name: 'Prothonotary Warbler',
      description:
        'Prothonotary Warblers are small, bright yellow birds known for their sweet song. They prefer swampy habitats and are the only eastern warbler that nests in tree cavities.',
      image_url: 'prothonotary-warbler.jpg',
    },
    {
      name: 'Scarlet Tanager',
      description:
        'Scarlet Tanagers are medium-sized songbirds known for the brilliant, almost fluorescent red bodies of the males, contrasted with black wings. Females are yellow-green, resembling a large finch.',
      image_url: 'scarlet-tanager.jpg',
    },
  ]);
};
