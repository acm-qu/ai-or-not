export type ImagePair = {
  url: string
  isAi: boolean
}

const Bank = [
  // --- PORTRAITS ---
  [{ "url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=60", "isAi": false },
   { "url": "https://thispersondoesnotexist.com/", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=60", "isAi": false },
   { "url": "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=60", "isAi": false },
   { "url": "https://www.thispersondoesnotexist.com/", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=60", "isAi": false },
   { "url": "https://xsgames.co/randomusers/assets/avatars/female/1.jpg", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=60", "isAi": false },
   { "url": "https://xsgames.co/randomusers/assets/avatars/male/2.jpg", "isAi": true }],

  // --- LANDSCAPES ---
  [{ "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=60", "isAi": false },
   { "url": "https://picsum.photos/id/10/400/400", "isAi": true }], // Using curated AI-looking stock
  [{ "url": "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/0p68TMTmY6M6Lp0p68TM/0p68TMTmY6M6Lp0p68TM--1--9M9M9.jpg?tr=w-400,c-at_max", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUfF9X8L9eJvUfF9X8L9eJvUfF9X8L/out-0.png", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUfF9X8L9eJvUfF9X8L9eJvUfF9X8L/out-1.png", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUfF9X8L9eJvUfF9X8L9eJvUfF9X8L/out-2.png", "isAi": true }],

  // --- ANIMALS ---
  [{ "url": "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/cat-ai-generated.jpg?tr=w-400,c-at_max", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/JvUfF9X8L9eJvUfF9X8L9eJvUfF9X8L/dog.png", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1474511320723-9a5617389797?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/fox-ai.jpg?tr=w-400,c-at_max", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUfF9X8L9eJvUfF/panda.png", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/wolf-ai.jpg?tr=w-400,c-at_max", "isAi": true }],

  // --- FOOD ---
  [{ "url": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUfF9X8L9eJvUfF/burger.png", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/salad-ai.jpg?tr=w-400,c-at_max", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUfF/pancakes.png", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1544273677-c433136021d4?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/sushi-ai.jpg?tr=w-400,c-at_max", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUf/pizza.png", "isAi": true }],

  // --- TECH/FUTURISTIC ---
  [{ "url": "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/car-future.jpg?tr=w-400,c-at_max", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUf/code-ai.png", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/robot-ai.jpg?tr=w-400,c-at_max", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUf/watch-ai.png", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/cyber-city.jpg?tr=w-400,c-at_max", "isAi": true }],

  // --- ARCHITECTURE ---
  [{ "url": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUf/house-ai.png", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/room-ai.jpg?tr=w-400,c-at_max", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUf/church-ai.png", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/village-ai.jpg?tr=w-400,c-at_max", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUf/mansion-ai.png", "isAi": true }],

  // --- SCI-FI/SPACE ---
  [{ "url": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/astronaut-ai.jpg?tr=w-400,c-at_max", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUf/galaxy-ai.png", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/planet-ai.jpg?tr=w-400,c-at_max", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1580130281216-1e3c1ce6411a?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUf/alien-ai.png", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1484589065579-248adc01527e?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/nebula-ai.jpg?tr=w-400,c-at_max", "isAi": true }],

  // --- ART ---
  [{ "url": "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUf/painting-ai.png", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/abstract-ai.jpg?tr=w-400,c-at_max", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUf/sculpture-ai.png", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&q=60", "isAi": false },
   { "url": "https://images.nightcafe.studio/jobs/modernart-ai.jpg?tr=w-400,c-at_max", "isAi": true }],
  [{ "url": "https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&q=60", "isAi": false },
   { "url": "https://replicate.delivery/pbxt/fLke1vUf/sketch-ai.png", "isAi": true }]
];

/**
 * Fisher-Yates shuffle algorithm to randomize array order
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Get 10 random image pairs from the question bank
 * Each pair is shuffled so the correct answer is in a random position
 */
export function getGameQuestions() {
  const shuffledBank = shuffleArray(Bank)
  const selectedPairs = shuffledBank.slice(0, 10)

  return selectedPairs.map((pair) => {
    const shuffledPair = shuffleArray([...pair])
    return {
      images: shuffledPair,
      correctIsFirst: shuffledPair[0].isAi === pair[0].isAi
    }
  })
}

export { Bank }