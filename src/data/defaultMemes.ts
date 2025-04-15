export type Meme = {
    id: number;
    name: string;
    image: string;
    likes: number;
  };
  
  export const defaultMemes: Meme[] = [
    {
      id: 1,
      name: "Distracted Boyfriend",
      image: "https://i.imgflip.com/1ur9b0.jpg",
      likes: Math.floor(Math.random() * 100),
    },
    {
      id: 2,
      name: "Drake Hotline Bling",
      image: "https://i.imgflip.com/30b1gx.jpg",
      likes: Math.floor(Math.random() * 100),
    },
    {
      id: 3,
      name: "Two Buttons",
      image: "https://i.imgflip.com/1g8my4.jpg",
      likes: Math.floor(Math.random() * 100),
    },
    {
        id: 4,
        name: "Hide the Pain Harold",
        image: "https://i.imgflip.com/gk5el.jpg",
        likes: Math.floor(Math.random() * 100),
      },      
    {
      id: 5,
      name: "Batman Slapping Robin",
      image: "https://i.imgflip.com/9ehk.jpg",
      likes: Math.floor(Math.random() * 100),
    },
    {
      id: 6,
      name: "Mocking Spongebob",
      image: "https://i.imgflip.com/1otk96.jpg",
      likes: Math.floor(Math.random() * 100),
    },
    {
      id: 7,
      name: "Expanding Brain",
      image: "https://i.imgflip.com/1jwhww.jpg",
      likes: Math.floor(Math.random() * 100),
    },
    {
      id: 8,
      name: "Woman Yelling at a Cat",
      image: "https://i.imgflip.com/345v97.jpg",
      likes: Math.floor(Math.random() * 100),
    },
    {
        id: 9,
        name: "One Does Not Simply",
        image: "https://i.imgflip.com/1bij.jpg",
        likes: Math.floor(Math.random() * 100),
      },
    {
      id: 10,
      name: "Is This a Pigeon?",
      image: "https://i.imgflip.com/1o00in.jpg",
      likes: Math.floor(Math.random() * 100),
    },
  ];
  