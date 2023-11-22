import React from "react";
import { useUserAuth } from "./_utils/auth-context";

const LoginPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignInWithGitHub = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub sign-in error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleSignOut}>Logout</button>
          <a href="/shopping-list">Go to Shopping List</a>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button onClick={handleSignInWithGitHub}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
