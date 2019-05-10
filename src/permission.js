import router from './router'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) => {
    console.log('start')
  // start progress bar
  NProgress.start()
  const hasToken = sessionStorage.getItem('token');
  if (hasToken) {
    if (to.path === '/login') {
        // if is logged in, redirect to the home page
        next({ path: '/' })
        NProgress.done()
    } else {
        next();
    }
  } else {
    /* has no token*/
    if(to.path === '/login' || to.path === '/register'){
        next();
    }else{
        next({path:'/login'});
        NProgress.done();

    }
  }
})

router.afterEach(() => {
  // finish progress bar
  console.log('end')
  NProgress.done()
})
