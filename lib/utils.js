export function traverse(imageData, callback) {
    const { width, height, data } = imageData;
    for (let i = 0; i < width * height * 4; i += 4) {
        const [r, g, b, a] = callback({
            r: data[i] / 255,
            g: data[i + 1] / 255,
            b: data[i + 2] / 255,
            a: data[i + 3] / 255
        });
        data.set([r, g, b, a].map(v => Math.round(v * 255)), i);
    }
    return imageData;
}