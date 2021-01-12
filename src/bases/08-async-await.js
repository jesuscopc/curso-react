const getImagen = async() => {
  try {
    const api_key = 'kf9mG8WLsxVOtcgFfIs0ook80JeB76so';
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
    const { data } = await res.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);   
  } catch (error) {
    console.error(error);
  }
};

getImagen();