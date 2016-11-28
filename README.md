#Write Up

#Title: 
UBEAR EATS
#Team Members: 
Vishnu Kumar, John Ang, Stefan Steiner, Jack Barnett, Jeevan Mokkala
#Demo link:
https://www.youtube.com/watch?v=M0B_SIYYzO8&feature=youtu.be

#Idea: 
Ordering system where students can log in and order menu items from Cal Dining Restaurants

#Models and Descriptions
#User
  -has name, password, email, cart
  -must be logged in to add to cart
  
#Cart
  -has items, can remove and add to cart if logged in
  
#Item
  -belongs to carts
   -has name, price, quantity, restaurant
 
#Features:
-user can login/logout
-users can add and remove to cart
-uses google maps to track your order

#Division of Labor
John Ang- integrated Google Maps API, made Cart Tracking View, generated routes
Stefan Steiner- created the devise login/signup page and generated Items model
Jeevan Mokkala- styled the view of the app and generated views of the controllers
Vishnu Kumar- generated cart/item models and relationships
Jack Barnett- created the user/cart/item controllers and their methods

