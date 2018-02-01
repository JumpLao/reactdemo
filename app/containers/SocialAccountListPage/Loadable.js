/**
 *
 * Asynchronously loads the component for SocialAccountListPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
