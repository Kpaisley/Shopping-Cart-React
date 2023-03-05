using Microsoft.AspNetCore.Mvc;
using Shopping_Cart_Demo_Feb23.Data;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Shopping_Cart_Demo_Feb23.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        

        private readonly List<Product> _products = new List<Product> { new Product { ProductId=1, ProductName="Burger", UnitPrice=6.99, ImageUrl="Burger.jpg"},
                                                                       new Product { ProductId=2, ProductName="Nachos", UnitPrice=7.99, ImageUrl="Nachos.jpg"},
                                                                       new Product { ProductId=3, ProductName="Pepperoni Pizza", UnitPrice=5.49, ImageUrl="Pizza.jpg"},
                                                                       new Product { ProductId=4, ProductName="Hot Dog", UnitPrice=5.49, ImageUrl="Hotdog.jpg"},
                                                                       new Product { ProductId=5, ProductName="Fries", UnitPrice=4.99, ImageUrl="Fries.jpg"},
                                                                       new Product { ProductId=6, ProductName="Cesar Salad", UnitPrice=6.99, ImageUrl="Cesar.jpg"},
                                                                       new Product { ProductId=7, ProductName="Tea", UnitPrice=2.99, ImageUrl="Tea.jpg"},
                                                                       new Product { ProductId=8, ProductName="Coffee", UnitPrice=2.99, ImageUrl="Coffee.jpg"},
                                                                       new Product { ProductId=9, ProductName="Chocolate Milkshake", UnitPrice=5.99, ImageUrl="Chocolate.jpg"}};


        // GET: api/<ProductsController>
        [HttpGet]
        public List<Product> Get()
        {
            return _products;
        }
      
    }
}
