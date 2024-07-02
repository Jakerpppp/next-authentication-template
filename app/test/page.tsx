import User from "@/db/model/user"

export default async function Home() {

    const test = await User.findOne({ email: "J@j.com" });


    return (
        <div>
        <h1>Home</h1>
        <p>{test.name}</p>
        </div>
    )
    }