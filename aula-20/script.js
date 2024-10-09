const API_BASE_URL = 'https://services-products.p7fvz0.easypanel.host/api'


async function getProducts(){
  try {
    const reponse = await fetch(`${API_BASE_URL} /products)`)
    const data = await reponse.json()
    console.log(data);
  } catch (error) {
    console.log(error);
    
  }
}

getProducts()

async function getProducts() { }
async function getProductById(id) { }
async function patchProduct(id) { }
async function deleteProduct(id) { }

