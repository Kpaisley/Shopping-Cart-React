namespace Shopping_Cart_Demo_Feb23.Data
{
    public class Cart
    {
        public List<CartItem> Items = new List<CartItem>();


        public void addCartItem(CartItem itemToAdd)
        {
            this.Items.Add(itemToAdd);
        }

        public void deleteCartItem(int id)
        {
            for(int i = 0; i < this.Items.Count; i++)
            {
                if (this.Items[i].ProductId == id)
                {
                    Items.RemoveAt(i);
                    break;
                }
            }
        }


        public void editItemQuantity(int id, int qty)
        {
            for (int i = 0; i < this.Items.Count; i++)
            {
                if (this.Items[i].ProductId == id)
                {
                    this.Items[i].Quantity = qty;
                    break;
                }
            }
        }


        public void clearCart()
        {
            this.Items.Clear();
        }





    }
}
