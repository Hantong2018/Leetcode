/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const rowCount = image.length
    const colCount = image[0].length
    const start = image[sr][sc]

    const fill = (sr, sc) => {
        if (image[sr][sc] !== start) return
        image[sr][sc] = color
        if (sr+1 < rowCount) fill(sr+1, sc)
        if (sr-1 >= 0) fill(sr-1, sc)
        if (sc+1 < colCount) fill(sr, sc+1)
        if (sc-1 >= 0) fill(sr, sc-1)
    }

    if (start !== color) fill(sr, sc)
    return image
};