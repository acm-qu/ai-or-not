export type ImagePair = {
  url: string
  isAi: boolean
}

const Bank = [
  // --- PORTRAITS ---
  [{ "url": "https://imgs.search.brave.com/4uUyAG3r7xEot00V4r43pIQCieKf4gX8XWas8t4wXpg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdGVvZmhvbWUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzA5L3RocmVl/LWNoZWZzLWF0LXdv/cmsuanBnP2ZpdD03/MDAsNzAw", "isAi": false },
   { "url": "https://images.stockcake.com/public/b/3/b/b3bc9d9c-4137-4d64-8193-bd2193d60fef_large/tattooed-chef-creates-stockcake.jpg", "isAi": true }],
  [{ "url": "https://imgs.search.brave.com/41HsLtKHusQUYtu9qrHHUROs0OiT-Ne8js9iHS7enKY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnVuZXJhbHByaW50/cy5jb20vOTgyNDc4/Nzg1L0hhbmRsZXIv/UGljdHVyZS9QSS9U/LzAwMTIzMTNfZnJh/bWVkLW1lbW9yaWFs/LXBvcnRyYWl0LW9s/ZC13b3JsZC1iYWNr/Z3JvdW5kXzUwMC5q/cGVn", "isAi": false },
   { "url": "https://images.stockcake.com/public/9/2/4/9245cba5-8efc-40b0-9353-c5b6546b90c8_large/contemplative-man-portrait-stockcake.jpg", "isAi": true }],
  [{ "url": "https://imgs.search.brave.com/ReRP_Z-pIfWsl-QuljX_s8EbN2wzaVS2IbavIFrwSaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjY5/ODQ2NS9wZXhlbHMt/cGhvdG8tMjY5ODQ2/NS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2Imdz0x/MjYwJmg9NzUwJmRw/cj0x", "isAi": false },
   { "url": "https://images.stockcake.com/public/f/3/8/f3877ec7-7747-422e-a337-9935b3ce0eac_large/technology-meets-experience-stockcake.jpg", "isAi": true }],
  
  // --- LANDSCAPES ---
  [{ "url": "https://imgs.search.brave.com/JVapt3ASxv3JVleB0y7i4Y-GTscumlu-4Sp1y8Pwhc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLm5h/dGdlb2ZlLmNvbS9u/L2M3ZTU2ZWYyLWMx/NjgtNDQ3ZS05Mjhh/LTAwZjMyN2RjYTQ4/Ny8yNC05MDA3NzQw/X3VwbG9hZHNtZW1i/ZXI3OTgxMzV5b3Vy/c2hvdC03OTgxMzUt/OTAwNzc0MGpwZ19j/aTZxdDdxemhxbGRm/NGV4MzV0bzJqMmFz/N3AzZWZsdXRmdnZi/cHlqd2poemxtaDRp/emlxXzMwNjZ4MTcy/NS5qcGc", "isAi": false },
   { "url": "https://images.stockcake.com/public/f/e/2/fe2c1ddd-770a-4dc3-9ace-55d968c6fffd_large/rugged-cliffs-riverside-stockcake.jpg", "isAi": true }],
  [{ "url": "https://imgs.search.brave.com/CQU3e3gbleHoYo_Rw5YlRO6mpou7Ssa0oRxcBgKNkKM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzc2LzkzLzE4/LzM2MF9GXzY3Njkz/MTg3N19yR3pUWTBs/OWd3V1lNNVVLVzJJ/YTd2dTRnVW9sSmVT/cy5qcGc", "isAi": false },
   { "url": "https://images.stockcake.com/public/6/a/1/6a15fcec-6779-4780-9f25-43ebf593b51f_large/desert-sunset-view-stockcake.jpg", "isAi": true }],


  // --- ANIMALS ---
  [{ "url": "https://imgs.search.brave.com/mLgXSGhJkSWb2_Auz35JMBfaJqRidlN7bzXYoqnk32E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjA5/ODg5NTU3NC9waG90/by9kb2ctZ2l2ZXMt/cGF3LXRvLWEtd29t/YW4tbWFraW5nLWhp/Z2gtZml2ZS1nZXN0/dXJlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1BXzhadjdx/bDJMYjFZWUJfUGJK/YlVUalBpRjZ5elh6/NmxFSlZ4NUZiRnBF/PQ", "isAi": false },
   { "url": "https://images.stockcake.com/public/7/a/d/7ad59f21-757d-4fbd-97e9-57985f1ddd09_large/pet-in-motion-stockcake.jpg", "isAi": true }],
  [{ "url": "https://imgs.search.brave.com/FrSGXu7omgngZoW_dUuxxc1yWzSlVU4eiLKAvTidxrs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTgx/MTQ3ODkwL3Bob3Rv/L3Byb2ZpbGUtb2Yt/YnJvd24taG9yc2Ut/c2hvd2luZy10ZWV0/aC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9MEdocEM0Z2FR/SDJKblVyZnNidEV5/TVlETS0zcUhhS2NW/bnZMLXdSaV9tcz0", "isAi": false },
   { "url": "https://images.stockcake.com/public/8/9/f/89f95c13-b9e2-4f5d-855c-31cda1ab5db6_large/grazing-horse-illustration-stockcake.jpg", "isAi": true }],
  
  // --- FOOD ---
  [{ "url": "https://imgs.search.brave.com/xlNX_Rk5uhY4gAHspygEbbjBYbEAupFogSEzeDIQAnc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdGVvZmhvbWUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzAxL0NvdW50/cnktUHVtcGtpbi1N/dWZmaW5zX0VYUFNf/RlQyM18zODY3X0VD/XzA4MjRfOC5qcGc_/dz03MDA", "isAi": false },
   { "url": "https://images.stockcake.com/public/6/8/a/68a8b230-c81d-4ec2-9f44-9e93678d34ea_large/golden-muffin-perfection-stockcake.jpg", "isAi": true }],


  // --- TECH/FUTURISTIC ---
  [{ "url": "https://imgs.search.brave.com/ktjWGE-PmsEQVl5eG9SmpVpd1AwqzzsJsXUPNBFyNsI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vbmxp/bmUubmppdC5lZHUv/c2l0ZXMvb25saW5l/L2ZpbGVzL0V4dGVu/ZGVkJTIwUmVhbGl0/eS5wbmc", "isAi": false },
   { "url": "https://images.stockcake.com/public/5/4/a/54aa41ce-b2d3-4b0b-8d5e-875fc86b892b_large/tech-immersion-workspace-stockcake.jpg", "isAi": true }],

  // --- ARCHITECTURE ---

  [{ "url": "https://imgs.search.brave.com/loX-_EX_RjIrQjtRcZnxJ7VtJRJcnkzO7ihQcIS6Ulg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wYXJhbWVkaWNz/LWFyZS13b3JraW5n/LXdpdGgtc2VuaW9y/LW1hbi1wYXRpZW50/LXdoaWxlLWhlLWxp/ZXMtc3RyZXRjaGVy/LWFtYnVsYW5jZV85/MjYxOTktMjQ1Mjg1/Mi5qcGc_c2VtdD1h/aXNfaHlicmlk", "isAi": false },
   { "url": "https://images.stockcake.com/public/a/3/1/a3139e85-fb13-4c4b-b7c2-415a6633394d_large/medical-training-exercise-stockcake.jpg", "isAi": true }],
  
  // --- SCI-FI/SPACE ---

  [{ "url": "https://imgs.search.brave.com/QjERKCfM0lKcqBg0Kk2hfTguODLX9-yiI0N5lpn8Imc/rs:fit:860:0:0:0/g:ce/aHR0cDovL3R3aXN0/ZWRzaWZ0ZXIuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDEy/LzA1L25hc2Etcm9j/a2V0LWxhdW5jaC1o/aWdoLXF1YWxpdHkt/MTAuanBn", "isAi": false },
   { "url": "https://images.stockcake.com/public/3/8/6/386fe468-60fb-401d-8da7-1b7c24b13a6e_large/frosted-rocket-awaits-stockcake.jpg", "isAi": true }],

  // --- ART ---

  [{ "url": "https://www.rembrandtpaintings.com/assets/img/rembrandt.jpg", "isAi": false },
   { "url": "https://images.stockcake.com/public/e/0/6/e067cabd-39ed-482c-b460-9ae49d4a67c4_large/contemplative-portrait-painting-stockcake.jpg", "isAi": true }],
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