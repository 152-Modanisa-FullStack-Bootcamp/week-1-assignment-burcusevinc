import "./style.css";
import axios from "axios";

getProductData();
function getProductData(){
  axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products") //promise döner.
  .then((response) => { 
  // Firstly, log response to the console,
  console.log(response);

  // inspect the response and see that it has data field

  // Assign data field of the response to
  // products variable below by destructuring
  // You can use alias
  const {data:products} = response;
  
  //const products = null; 

  // Print names of all product to the console
  // by calling foreach  method (use arrow function)
  products
  .map(product => product.name)
  .forEach(name => console.log(name));
  
  // Get all products that contain "Şal" in their name (use filter method)
  // map filtered products to new object having only image and name field
  // assign mapped items to mappedProducts variable 

  const mappedProducts = products
  .filter(product => product.name.includes("Şal"))
  .map(product => ({
    image:product.image, name:product.name
  })); 
  console.log(mappedProducts);


    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method

    const imageNameElements = document.getElementById("img-name");
    mappedProducts.forEach((mappedProduct) => {
      let divElement = document.createElement("DIV");
      let productName = document.createTextNode(mappedProduct.name);
      let _img = document.createElement('img');
      _img.src = mappedProduct.image;
      //_img.width = "300"
      divElement.classList.add("content-item");
      divElement.appendChild(productName);
      divElement.appendChild(_img);
      document.getElementById("content").appendChild(divElement);

    })

  

    //CSS:
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish


  }).catch((error) => {
    console.log(error);
  });
}