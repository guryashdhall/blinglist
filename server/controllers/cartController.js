const { Cart } = require("../models/Cart");
exports.addCart = async (req, res) => {
  try {
    console.log(req.body.userid)
    let cart = await Cart.findOne({userid: req.body.userid})
    console.log(cart)
    if(cart !== null){
      cart.items = req.body.items;
      await cart.save();
    }
    else{
      const newCart = Cart(req.body)
      await newCart.save()
    }
    res.status(201);
    res.send({ success: "Cart Added Successfully" });
  } catch (error) {
    res.status(400)
    res.send({ error: error });
  }
}
exports.getCart = async(req,res) => {
  try {
    const cart = await Cart.findOne({userid: req.body.userid})
    res.status(200)
    res.send(cart)
  } catch (error) {
    res.status(404)
    res.send({error:404})
  }
}
