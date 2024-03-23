const express = require("express");
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isAuthor } = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
const reviewController = require("../controller/review.js")
//review post route
router.post(
  "/",
  validateReview,
  wrapAsync(reviewController.createReview)
);

//Delete review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
