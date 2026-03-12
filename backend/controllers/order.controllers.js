export const placeOrder= async(req, res) => {
    try {
        const {cartItems, paymentMethod, deliveryAddress} = req.body;
        if(cartItems.length==0 || !cartItems) {
            return res.status(400).json({message: "Cart is empty"});
        }
        if(!deliveryAddress.text || !deliveryAddress.latitude || !deliveryAddress.longitude) {
            return res.status(400).json({message: "Invalid delivery address"});
        }

        const groupItemsByShop = {}
        cartItems.forEach((item) => {
            const shopId=item.shop
            groupItemsByShop[shopId]
        });
            
    } catch (error) {
        res.status(500).json({message: "Error placing order"});
    }
}