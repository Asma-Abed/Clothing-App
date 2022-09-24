import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/signUp-form/sign-up-form.component';
import SignInForm from '../../components/signIn-form/sign-in-form.component';

const Authentication = () => {
  return (
    <div>
      <h1>Sign in page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
