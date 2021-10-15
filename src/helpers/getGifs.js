export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=iTpLiIS4oO21HX37tl4LbzbHklgUBJ7i`
    const resp = await fetch(url);
    const {data} = await resp.json();

    

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_large.url
        }
    });

    console.log(gifs);

    return gifs;
}