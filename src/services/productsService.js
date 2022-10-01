const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/products`


async function allProducts(){
    const res = await fetch(BASE_URL)
    return res.json()
}
async function productInfo(slug) {
    const res = await fetch(`${BASE_URL}/slug/${slug}/`, {
        method: 'GET'
    })
    return res.json(slug)
}

export { allProducts, productInfo }
