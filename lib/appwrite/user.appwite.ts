import { ICreateUser, ISignInDto } from "@/common/interfaces/uers.interfaces";
import { Account, Avatars, Databases, ID } from "react-native-appwrite";
import { signIn } from "./auth.appwrite";
import { client } from "./index.appwite";
import { appwiteConfig } from "./config.appwrite";


const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);


export const createUser = async (createUserDto: ICreateUser) => {
    const { email, password, userName } = createUserDto;
    try {
        const newAccount = await account.create(ID.unique(), email, password, userName);

        if (!newAccount) throw Error();

        const avatar = avatars.getInitials(userName);

        await signIn(email, password);

        const newUser = await database.createDocument(appwiteConfig.databaseId, appwiteConfig.usersCollectionId, ID.unique(), {
            accountId: newAccount.$id,
            email,
            name: userName,
            avatar
        })

        return newUser;

    } catch (error) {
        console.log("🚀 ~ createUser ~ error:", error)
        throw new Error(error as any);
    }
}

