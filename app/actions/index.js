'use server'
import { signIn, signout } from "@/auth";


export async function doSociallogin(formData) {
    const action = formData.get('action');
    await signIn(action, { redirectTo: "/" })
}

export async function doLogout() {
    await signout({ redirectTo: "/" });
}

export async function doCredentialLogin(email, password) {


        const response = await signIn("credentials", { email: email, password: password, redirect: false })

        if (response?.error) {
            throw new Error(response.error);
        }

        return response;
};