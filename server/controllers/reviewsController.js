const { Reviews } = require("../models/Reviews");

exports.addReviews = async (req, res) => {
  console.log(req.body);
  const newReview = Reviews({ ...req.body});
  try {
    await newReview.save()
      res.status(201)
      res.send({ success: "Review Added Successfully" });
  } catch (error) {
    res.status(400);
    res.send({ error: error });
  }    
};

exports.getReviews = async(req, res) => {
try {
    const data =  await Reviews.find()
    res.status(200)
    res.send(data);
} catch (error) {
    res.status(400);
    res.send({ error: error });
}
 
   
      
};
