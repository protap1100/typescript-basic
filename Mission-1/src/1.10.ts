{
  // union types;
//   type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
//   type FullstackDeveloper = "BadDeveloper" | "Good Developer";

//   type Developer = FrontendDeveloper | FullstackDeveloper;

//   const newDeveloper: Developer = "BadDeveloper";

//   type User = {
//     name: string;
//     age: number;
//     gender: "male" | "female";
//     profession: "student" | "job holder";
//   };

//   type FrontendDeveloper2 = {
//     skills: string[];
//     company1: "Brain Station";
//   };

  type BackendDeveloper = {
    skills: string[];
    company2: "DataSoft";
  };

  type FullstackDeveloper2 = FrontendDeveloper2 & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper2 = {
    skills: [
      "Html",
      "Css",
      "Javascript",
      "React",
      "Node",
      "Express",
      "Mongodb",
    ],
    company1: "Brain Station",
    company2: "DataSoft",
  };
}
