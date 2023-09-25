const generateId = () => {
    const fecha = Date.now().toString();
    const random = Math.random().toString().substring(2);
    return fecha + random;
}

export default generateId