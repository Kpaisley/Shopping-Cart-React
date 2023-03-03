using Microsoft.AspNetCore.Mvc;
using Shopping_Cart_Demo_Feb23.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Shopping_Cart_Demo_Feb23.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CartsController : ControllerBase
    {
        private static readonly Cart _cartRepo = new Cart() { Items = new List<CartItem>() };
        // GET: api/<CartsController>
        [HttpGet]
        public List<CartItem> Get()
        {
            return _cartRepo.Items;
        }

        // GET api/<CartsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CartsController>
        [HttpPost]
        public void Post([FromBody] CartItem item)
        {
            bool isMatch = false;
            for (int i = 0; i < _cartRepo.Items.Count; i++)
            {
                if (_cartRepo.Items[i].ProductId == item.ProductId)
                {
                    _cartRepo.Items[i].Quantity += 1;
                    isMatch = true;
                    break;
                }
            }
            if (isMatch == false)
            {
                _cartRepo.addCartItem(item);
            }
        }

        // PUT api/<CartsController>/5
        [HttpPut]
        public List<CartItem> Put([FromBody] CartItemIncrease item)
        {
            if (item.increaseQuantity == true)
            {
                _cartRepo.increaseItemQty(item.Id);
            }
            else
            {
                _cartRepo.decreaseItemQty(item.Id);
            }

            return _cartRepo.Items;
            
        }




        // DELETE api/<CartsController>/5
        [HttpDelete("{id}")]
        public List<CartItem> Delete(int id)
        {
            _cartRepo.deleteCartItem(id);
            return _cartRepo.Items;
        }


        // DELETE api/<CartsController>
        [HttpDelete]
        public void Delete()
        {
            _cartRepo.clearCart();
        }

    }
}
