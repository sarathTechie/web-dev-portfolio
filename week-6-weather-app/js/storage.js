class Storage {
    static saveCity(city) {
        localStorage.setItem('lastCity', city);
    }

    static getLastCity() {
        return localStorage.getItem('lastCity') || 'London'; // Default to London if nothing saved
    }
}