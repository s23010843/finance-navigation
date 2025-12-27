/**
 * Application Entry Point
 * Initializes the React Native application with Expo
 */

// Enable Fast Refresh for web platform
import '@expo/metro-runtime';
import { registerRootComponent } from 'expo';

import { App } from './src/App';

/**
 * Register the root component
 * This function:
 * - Registers the App component as the root of the application
 * - Ensures proper environment setup for both Expo Go and native builds
 * - Provides cross-platform compatibility
 */
registerRootComponent(App);
