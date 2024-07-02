

export const POST = async(request) => {
    const { name, email, password } = await request.json();

    console.log(name,email,password);

    //Create DB Connection

    //Encrypt Password

    //Create User

    //Update DB
}