export const getBrowser = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('chrome') && !userAgent.includes('edge') && !userAgent.includes('opera')) {
        return 'chrome';
    } else if (userAgent.includes('firefox')) {
        return 'firefox';
    }
    return 'other';
};