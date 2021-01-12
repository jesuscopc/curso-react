const api_key = 'kf9mG8WLsxVOtcgFfIs0ook80JeB76so';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

peticion.then( res => res.json())
        .then( ({data}) => {
          const { url } = data.images.original;
          const img = document.createElement('img');
          img.src = url;
          document.body.append(img);
        })
        .catch( console.warn );