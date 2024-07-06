import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)

//const uri: string = `mongodb+srv://${process.env.MONGO_USER}`
//const options = { useNewUrlParser: true, useUnifiedTopology: true }
//mongoose.set("useFindAndModify", false)
const DB_URI = `${process.env.DB_USER}`;
mongoose
  .connect(DB_URI)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })