export default function ({ store, redirect, route }) {
    if(isLogin() && route.name == 'login') {
        console.warn('redirect admin');
        redirect('/admin')
    }

    if(!isLogin() == null && isAdminRoute(route)) {
        console.warn('redirect login');
        redirect('/login')
    }

    console.warn('something happening here 2', route.name, ' ', store.state.user, '', isLogin, isAdminRoute(route));
}

const isLogin = (store) => {
    return (store && store.state && store.state.user)
}

const isAdminRoute = (route) => {
    if (route.matched.some(record => record.path == '/admin')) {
        console.warn('admin')
        return true
    }
}