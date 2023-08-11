import mongoose from "mongoose"

export async function connect() {
    try {
      await mongoose.connect("mongodb+srv://eafredesocial:IUL9AkRYkytfAaKx@herocode.oifwuck.mongodb.net/hero-tickes")  
      console.log("Connect database success");
    } catch (error) {
        console.log(",' ~ file: database.ts:5 ~ connect ~ error:", error)
    }
}