const SuggestedUsers = [
  {
    id: 1,
    name: "A",
    age: 22,
    image:
      "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "B",
    age: 25,
    image:
      "https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "C",
    age: 24,
    image:
      "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "D",
    age: 26,
    image:
      "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    name: "E",
    age: 23,
    image:
      "https://images.pexels.com/photos/227288/pexels-photo-227288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    name: "F",
    age: 27,
    image:
      "https://images.pexels.com/photos/3153200/pexels-photo-3153200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 7,
    name: "G",
    age: 22,
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 8,
    name: "H",
    age: 28,
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 9,
    name: "Léa",
    age: 24,
    image: "https://i.pravatar.cc/300?img=1",
  },
  {
    id: 10,
    name: "Karim",
    age: 29,
    image: "https://i.pravatar.cc/300?img=2",
  },
  {
    id: 11,
    name: "Emma",
    age: 22,
    image: "https://i.pravatar.cc/300?img=3",
  },
  {
    id: 12,
    name: "Nathan",
    age: 27,
    image: "https://i.pravatar.cc/300?img=4",
  },
  {
    id: 13,
    name: "Chloé",
    age: 25,
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    id: 14,
    name: "Yanis",
    age: 23,
    image: "https://i.pravatar.cc/300?img=6",
  },
  {
    id: 15,
    name: "Manon",
    age: 26,
    image: "https://i.pravatar.cc/300?img=7",
  },
  {
    id: 16,
    name: "Hugo",
    age: 30,
    image: "https://i.pravatar.cc/300?img=8",
  },
  {
    id: 17,
    name: "Camille",
    age: 24,
    image: "https://i.pravatar.cc/300?img=9",
  },
  {
    id: 18,
    name: "Adam",
    age: 28,
    image: "https://i.pravatar.cc/300?img=10",
  },
];
const matchwithgoalData = [
  {
    id: 1,
    name: "suhani",
    age: 23,
    image:
      "https://plus.unsplash.com/premium_photo-1661729781158-8abc559a94c5?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A long-term relationship",
  },
  {
    id: 2,
    name: "sukanya",
    age: 22,
    image:
      "https://images.unsplash.com/photo-1622782045716-a05bcc4f5ae8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A long-term relationship",
  },
  {
    id: 3,
    name: "pallabi",
    age: 23,
    image:
      "https://images.unsplash.com/photo-1622049605334-72e1e4432346?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A long-term relationship",
  },
  {
    id: 4,
    name: "manasi",
    age: 23,
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A long-term relationship",
  },
  {
    id: 5,
    name: "ananya",
    age: 24,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Looking for something meaningful",
  },
  {
    id: 6,
    name: "Inès",
    age: 25,
    image: "https://i.pravatar.cc/300?img=11",
    bio: "Passionnée de voyages, basée à Lyon, cherche une relation sérieuse.",
  },
  {
    id: 7,
    name: "Louis",
    age: 28,
    image: "https://i.pravatar.cc/300?img=12",
    bio: "Ingénieur à Bordeaux, aime la randonnée et la bonne cuisine.",
  },
  {
    id: 8,
    name: "Sarah",
    age: 23,
    image: "https://i.pravatar.cc/300?img=13",
    bio: "Étudiante en art à Marseille, à la recherche de quelqu'un d'authentique.",
  },
  {
    id: 9,
    name: "Malik",
    age: 27,
    image: "https://i.pravatar.cc/300?img=14",
    bio: "Musicien basé à Toulouse, ouvert à une belle rencontre.",
  },
  {
    id: 10,
    name: "Julie",
    age: 26,
    image: "https://i.pravatar.cc/300?img=15",
    bio: "Infirmière à Nantes, aime les soirées calmes et les grands voyages.",
  },
  {
    id: 11,
    name: "Théo",
    age: 24,
    image: "https://i.pravatar.cc/300?img=16",
    bio: "Développeur à Lille, fan de jeux vidéo et d'escalade.",
  },
  {
    id: 12,
    name: "Nora",
    age: 29,
    image: "https://i.pravatar.cc/300?img=17",
    bio: "Architecte à Nice, cherche une relation stable et sincère.",
  },
  {
    id: 13,
    name: "Antoine",
    age: 31,
    image: "https://i.pravatar.cc/300?img=18",
    bio: "Chef cuisinier à Strasbourg, aime partager de bons moments.",
  },
  {
    id: 14,
    name: "Lina",
    age: 22,
    image: "https://i.pravatar.cc/300?img=19",
    bio: "Étudiante à Rennes, curieuse et toujours partante pour de nouvelles aventures.",
  },
  {
    id: 15,
    name: "Baptiste",
    age: 30,
    image: "https://i.pravatar.cc/300?img=20",
    bio: "Photographe à Montpellier, à la recherche d'une connexion vraie.",
  },
];

const RECOMMENDATION_USER = [
  {
    id: 6,
    name: "suhani",
    age: 23,
    image:
      "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A long-term relationship",
  },
  {
    id: 7,
    name: "rahi",
    age: 23,
    image:
      "https://plus.unsplash.com/premium_photo-1661634439983-f934c191b4fd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A long-term relationship",
  },
  {
    id: 8,
    name: "sonia",
    age: 23,
    image:
      "https://plus.unsplash.com/premium_photo-1661729781158-8abc559a94c5?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "A long-term relationship",
  },
  {
    id: 9,
    name: "priya",
    age: 24,
    image:
      "https://images.unsplash.com/photo-1504973960431-7a37e4b3f2c4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Seeking a deep connection",
  },
  {
    id: 10,
    name: "tanisha",
    age: 22,
    image:
      "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Looking for my perfect match",
  },
  {
    id: 11,
    name: "Clara",
    age: 24,
    image: "https://i.pravatar.cc/300?img=21",
    bio: "Basée à Paris, aime le yoga et les brunchs du dimanche.",
  },
  {
    id: 12,
    name: "Samuel",
    age: 27,
    image: "https://i.pravatar.cc/300?img=22",
    bio: "Vit à Lyon, passionné de photographie et de vieux films.",
  },
  {
    id: 13,
    name: "Amira",
    age: 25,
    image: "https://i.pravatar.cc/300?img=23",
    bio: "Installée à Marseille, adore la danse et les longues discussions.",
  },
  {
    id: 14,
    name: "Victor",
    age: 29,
    image: "https://i.pravatar.cc/300?img=24",
    bio: "Basé à Toulouse, cherche une relation sérieuse et durable.",
  },
  {
    id: 15,
    name: "Zoé",
    age: 23,
    image: "https://i.pravatar.cc/300?img=25",
    bio: "Vit à Bordeaux, fan de musique live et de road trips.",
  },
  {
    id: 16,
    name: "Marc",
    age: 31,
    image: "https://i.pravatar.cc/300?img=26",
    bio: "Installé à Nantes, aime la cuisine du monde et les balades en forêt.",
  },
  {
    id: 17,
    name: "Yasmine",
    age: 26,
    image: "https://i.pravatar.cc/300?img=27",
    bio: "Basée à Lille, passionnée de lecture et de voyages en solo.",
  },
  {
    id: 18,
    name: "Étienne",
    age: 28,
    image: "https://i.pravatar.cc/300?img=28",
    bio: "Vit à Strasbourg, cherche quelqu'un avec qui construire quelque chose de vrai.",
  },
  {
    id: 19,
    name: "Salomé",
    age: 22,
    image: "https://i.pravatar.cc/300?img=29",
    bio: "Installée à Nice, aime le surf et les soirées entre amis.",
  },
  {
    id: 20,
    name: "Rayan",
    age: 30,
    image: "https://i.pravatar.cc/300?img=30",
    bio: "Basé à Rennes, passionné de sport et à la recherche d'une belle histoire.",
  },
];

export { SuggestedUsers, RECOMMENDATION_USER, matchwithgoalData };
