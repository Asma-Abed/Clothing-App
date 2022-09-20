import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/signUp-form/sign-up-form.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
