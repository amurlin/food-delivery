import { Foods } from "../../models/food.schema";

export const createFood = async (req, res) => {
    const { foodName, price, image, ingredients } = req.body;
    const  newFood = await Foods.create(req.body);

    res.json({message: "Food created successfully!", newFood});
}


// export const getMovies = async (req, res) => {
//     const response = await fetch(`${MONGO_CONNECTION_STRING}/food/:foodId`,
//         {
//             headers: {
//               Accept: "application/json",
//               Authorization: `Bearer ${TMDB_API_TOKEN}`,
//             },
//           }
//     )
//     const movies = await response.json();
//     console.log(movies);
//     res.send(movies)
// }