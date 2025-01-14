# Bistro Boss Client with Image Upload

Client Repo Link - [Bistro Boss Server with Image Upload](https://github.com/ProgrammingHero1/bistro-boss-server-with-image-upload-part_6)
Client Repo Link - [Bistro Boss Server with Image Upload](http://localhost:5000)

## Overview
BistroBoss is a comprehensive restaurant management system designed to streamline operations, enhance customer experience, and improve overall efficiency. The system leverages modern web technologies to provide a robust, scalable, and high-performance solution for managing complex data structures and interactions within a restaurant environment .

## What We Learn Today

### Why We Use React-Query, Axios, and React Hook Form
- **React-Query**: Simplifies data fetching and state management, providing caching, synchronization, and background updates to enhance user experience and performance.
- **Axios**: A promise-based HTTP client that makes it easier to make requests to the server, handle responses, and manage errors compared to the native `fetch` API.
- **React Hook Form**: Provides a flexible and efficient way to handle form inputs, validations, and submission, reducing boilerplate code and improving performance with minimal re-renders .

### Create Add Item Form Using React Hook Form
We learn how to create a user-friendly and dynamic form for adding new menu items using React Hook Form, ensuring smooth data handling and validation with minimal code.

### Design Form Using Daisy UI and React Hook Form
Incorporate Daisy UI to style our forms seamlessly, combining it with React Hook Form to ensure that our forms are both visually appealing and functionally robust.

### Upload Image to Image Hosting Server Imgbb and Get Image URL
Learn the process of uploading images to the Imgbb image hosting service, retrieving the image URL, and handling this URL within our application to store image references efficiently.

### Save Menu Item to the Server and Make API Secure
Understand how to securely save new menu items to the server, ensuring data integrity and security through proper API design and implementation.

### Create Manage Items Admin Route and Load All Menu Items
Develop an administrative route for managing menu items, including loading all items from the server and displaying them in a structured and manageable way.

### Delete Menu Item with VerifyAdmin Middleware
Implement functionality to delete menu items securely, using the VerifyAdmin middleware to ensure that only authorized users can perform deletion operations. 

### Create Update Menu Item Form
Learn to create a form for updating existing menu items, allowing for efficient editing and ensuring that changes are accurately reflected in the system.



## File Structure

Install my-project with npm
```plaintext

src/
├── api/
│   └── utils.js
├── assets/
│   └── images/
├── components/
│   ├── FoodCard/
│   │   └── FoodCard.jsx
│   ├── SectionTitle/
│   │   └── SectionTitle.jsx
│   ├── SocialLogin/
│   │   └── SocialLogin.jsx
├── firebase/
│   └── firebase.config.js
├── hooks/
│   ├── useAdmin.jsx
│   ├── useAuth.jsx
│   ├── useAxiosPublic.jsx
│   ├── useAxiosSecure.jsx
│   ├── useCart.jsx
│   └── useMenu.jsx
├── Layout/
│   ├── Dashboard.jsx
│   └── Main.jsx
├── pages/
│   ├── Dashboard/
│   │   ├── AddItems.jsx
│   │   ├── AdminHome/
│   │   │   └── AdminHome.jsx
│   │   ├── AllUsers/
│   │   │   └── AllUsers.jsx
│   │   ├── Cart/
│   │   │   └── Cart.jsx
│   │   ├── ManageItems/
│   │   │   └── ManageItems.jsx
│   │   ├── Payment/
│   │   │   ├── _payment_steps_.js
│   │   │   ├── CheckoutForm.jsx
│   │   │   └── Payment.jsx
│   │   ├── PaymentHistory/
│   │   │   └── PaymentHistory.jsx
│   │   └── UpdateItem/
│   │       └── UpdateItem.jsx
│   ├── UserHome/
│   │   ├── UserHome.jsx
│   │   └── _Page_level_security_.js
│   ├── Home/
│   │   ├── Banner/
│   │   │   └── Banner.jsx
│   │   ├── Category/
│   │   │   └── Category.jsx
│   │   ├── Featured/
│   │   │   ├── Featured.css
│   │   │   └── Featured.jsx
│   │   ├── PopularMenu/
│   │   │   └── PopularMenu.jsx
│   │   ├── Testimonials/
│   │   │   └── Testimonials.jsx
│   │   └── Home.jsx
│   ├── Login/
│   │   └── Login.jsx
│   ├── Menu/
│   │   ├── Menu.jsx
│   │   └── MenuCategory.jsx
│   ├── Order/
│   │   ├── Order.jsx
│   │   └── OrderTab.jsx
│   └── Shared/
│       ├── Cover/
│       │   └── Cover.jsx
│       └── Footer/
│           └── Footer.jsx
├── NavBar/
│   └── NavBar.jsx
├── providers/
│   └── AuthProvider.jsx
├── Routes/
│   ├── AdminRoute.jsx
│   ├── PrivateRoute.jsx
│   └── Routes.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx


```

