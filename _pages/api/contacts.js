import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
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

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
