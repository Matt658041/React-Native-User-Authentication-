import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import { useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from 'react-native';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
        Alert.alert('Authentication failed')
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
