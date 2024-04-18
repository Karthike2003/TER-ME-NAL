export async function GET(request) {
  const contactMediums = [
    {
      medium: "github",
      username: "Karthike2003",
      link: "https://github.com/Karthike2003",
    },
    {
      medium: "email",
      username: "Karthik E",
      link: "mailto:karthiksujith789@gmail.com",
    },
    {
      medium: "linkedin",
      username: "Karthik E",
      link: "https://www.linkedin.com/in/karthik-e-52511b249/",
    },
    {
      medium: "twitter",
      username: "@KarthikE1549472",
      link: "https://twitter.com/KarthikE1549472",
    },
  ];

  return Response.json(contactMediums, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
