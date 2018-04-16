
import setViewCoords from './set-view-coords';
import fetchTreeList from './fetch-tree-list';
import setTreeList from './set-tree-list';
import loginWithGoogle from './login-with-google';
import setUserData from './set-user-data';
import addToTreeList from './add-to-tree-list';
import addTree from './add-tree';
import loginAnonymously from './login-anonymously';
import loginWithEmail from './login-with-email';
import signupWithEmail from './signup-with-email';
import setAddMarker from './set-add-marker';
import showAddMarker from './show-add-marker';

const ActionCreators = {
  setViewCoords,
  fetchTreeList,
  setTreeList,
  loginWithGoogle,
  setUserData,
  addToTreeList,
  addTree,
  loginAnonymously,
  loginWithEmail,
  signupWithEmail,
  setAddMarker,
  showAddMarker,
};

export default ActionCreators;

/**************************************************************
The action index.js file

import actionOne from './actionOne';
import actionTwo from './actionTwo';
import actionThree from './actionThree';
import { actionType1 } from './severalActions';

const ActionCreators = {
  actionOne,
  actionTwo,
  actionThree,
  actionType1,
};

export default ActionCreators;

Here all of our actions are packaged together into a bundle
called ActionCreators. This will later be bound to components,
giving each component access to every action we list here.
**************************************************************/
