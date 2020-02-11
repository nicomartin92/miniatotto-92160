export default function ({ store, redirect, route }) {
    if(isLogin(store) && route.name == 'login') {
        console.warn('redirect admin')
        redirect('/admin')
    }

    if(!isLogin(store) == null && isAdminRoute(route)) {
        console.warn('redirect login')
        redirect('/login')
    }
}

const isLogin = (store) => {
    return (store && store.state && store.state.user)
}

const isAdminRoute = (route) => {
    if (route.matched.some(record => record.path == '/admin')) {
        return true
    }
}