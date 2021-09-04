export const isAuthenticated = () => {
    let status = localStorage.getItem('statusLogin');
    if (status == 'false') {
        return false;
    } else {
        return true;
    }
};