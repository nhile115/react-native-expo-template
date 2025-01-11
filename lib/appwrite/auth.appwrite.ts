import { Account, Databases, Query } from "react-native-appwrite";
import { client } from "./index.appwite";
import { appwiteConfig } from "./config.appwrite";

const account = new Account(client);
const database = new Databases(client);


export const signIn = async (email: string, password: string) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        console.log("🚀 ~ signIn ~ error:", error)
        throw new Error(error as any);
    }

}

export async function getAccount() {
    try {
        const currentAccount = await account.get();

        return currentAccount;
    } catch (error) {
        throw new Error(error as any);
    }
}

export async function getCurrentUser() {
    try {
        const currentAccount = await getAccount();
        if (!currentAccount) throw Error;

        const currentUser = await database.listDocuments(
            appwiteConfig.databaseId,
            appwiteConfig.usersCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
        );

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}