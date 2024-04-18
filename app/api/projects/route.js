export async function GET(request) {
  const projects = [
    {
      name: "Ship Tech Industrial Consultancy.",
      description:
        "Engineeres a cutting-edge web application for Ship Tech Industrial Consultancy, a company that provides services in the field of marine engineering and naval architecture.",
      stack: ["NextJS", "Tailwindcss","Framer Motion"],
      link: "https://shiptech.vercel.app/",
    
    },
    {
      name: "Anime Vault",
      description:
        "Developed an engaging anime vault with infinite scrolling for a seamless anime browsing expereience",
      stack: ["NextJS", "Tailwindcss","Framer Motion"],
      link: "https://nextjs-anime-vault-rho.vercel.app/",
    
    },
    {
      name: "Nurique",
      description:
        "Developed an impressive website for dyslexia detectiona and multisensory fingertip games for user training",
      stack: ["Reactjs", "Tailwindcss","Firebase-Authentication","Firestore-database"],
      link: "https://nurique.vercel.app/",
    
    },

  ];

  return Response.json(projects, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
