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


        public void increaseItemQty(int id)
        {
            for(int i = 0; i < Items.Count; i++)
            {
                if (Items[i].ProductId == id)
                {
                    Items[i].Quantity++;
                    return;
                }
            }
        }

        public void decreaseItemQty(int id)
        {
            for(int i = 0; i < Items.Count; i++)
            {
                if (Items[i].ProductId == id)
                {
                    if (Items[i].Quantity < 2) 
                    {
                        return;
                    }

                    Items[i].Quantity--;
                    return;
                }
            }
        }


        public void clearCart()
        {
            this.Items.Clear();
        }





    }
}
