import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

const dummyData = [
  {
    id: 1,
    review:
      "Vignam has completely changed the approach of digital learning for me, now I am able to perform experiments even from my home.",
    username: "Stephanie Francis",
    userPhoto:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    review:
      "Vignam has made learning process so easy for me! I am truly grateful to this platform.",
    username: "Sakshi Kumar",

    userPhoto:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    review:
      "Me and my classmates are able to do a tremendous amount of work from our homes, a great platform indeed.",
    username: "Sachin Singh",

    userPhoto:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    review:
      "Vignam has completely changed the approach of digital learning for me, now I am able to perform experiments even from my home.",
    username: "Naman Rastogi",

    userPhoto:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    review:
      "Vignam has made learning process so easy for me! I am truly grateful to this platform.",
    username: "Gagan Surana",

    userPhoto:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    review:
      "Vignam Labs has helped me to visualise physics like fluid mechanicsand vernier mechanism in very clear way, plus I have now access topractical labs 24/7.",
    username: "Manav Jain",

    userPhoto:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];

const dummySchoolData = [
  {
    id: 1,
    schoolName: "Akhil bhartiya gaur Brahmin sanskrit Institute",
    schoolPhoto:
      "https://www.vignamlabs.com/static/media/img3.1f7515a87de22136b509.png",
  },
  {
    id: 2,
    schoolName: "GBC Sr Sec School,Rohtak",
    schoolPhoto:
      "https://www.vignamlabs.com/static/media/img6.74d65f9d436d3f4d7b0d.png",
  },
  {
    id: 3,
    schoolName: "Govt. Sr Sc School, Jind",
    schoolPhoto:
      "https://www.vignamlabs.com/static/media/img7.7b5ca0f5a00446961d46.png",
  },
  {
    id: 4,
    schoolName: "Prince Public School",
    schoolPhoto:
      "https://www.vignamlabs.com/static/media/img1.73886b11e420e7c0f0e6.png",
  },
  {
    id: 5,
    schoolName: "GBC Sr Sec School,Rohtak",
    schoolPhoto:
      "https://www.vignamlabs.com/static/media/img6.74d65f9d436d3f4d7b0d.png",
  },
  {
    id: 6,
    schoolName: "Govt. Sr Sc School, Jind",
    schoolPhoto:
      "https://www.vignamlabs.com/static/media/img7.7b5ca0f5a00446961d46.png",
  },
];

app.get("/getPartners", (req, res) => {
  try {
    res.json(dummySchoolData);
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});

app.get("/getReviews", (req, res) => {
  try {
    res.json(dummyData);
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
});

const startServer = () => {
  app.listen(5050, () => {
    console.log(`Server started on port 5050`);
  });
};

startServer();
