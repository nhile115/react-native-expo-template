import { Client } from 'react-native-appwrite';
import { appwiteConfig } from './config.appwrite';

// Init your React Native SDK
export const client = new Client();

client
    .setEndpoint(appwiteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwiteConfig.projectId) // Your project ID
    .setPlatform(appwiteConfig.platform) // Your application ID or bundle ID.
    ;




