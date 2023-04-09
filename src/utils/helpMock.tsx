import { rest } from "msw";
import { setupServer } from "msw/node";

const handlers = [
  rest.get(`https://rickandmortyapi.com/api/character/`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "Testing Rick",
          status: "Alive",
          species: "Human",
          type: "",
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          url: "https://rickandmortyapi.com/api/character/1",
          created: "2017-11-04T18:48:46.250Z",
        },
        {
          id: 2,
          name: "Testing Morty",
          status: "Alive",
          species: "Human",
          type: "",
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          url: "https://rickandmortyapi.com/api/character/1",
          created: "2017-11-04T18:48:46.250Z",
        },
      ]),
    ),
  ),
];

export const mockServer = setupServer(...handlers);
