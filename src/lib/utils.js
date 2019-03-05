
const removeAllTag = (text) => {
    return text.replace(/<\/?.+?\/?>/g, '')
}



export {
    removeAllTag
}