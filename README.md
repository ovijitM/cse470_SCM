
<h1>Secondary Car Marketplace and Service Platform</h1>
<p>
This project offers a unified platform to buy, sell, rent, and maintain used cars. The goal is to provide fair pricing, efficient management, and an authentic service experience for all users.
</p>

<h2>Features</h2>
<ul>
    <li>Buy, sell, and rent pre-owned vehicles</li>
    <li>Schedule and manage car maintenance services</li>
    <li>User-friendly interface with quick navigation</li>
</ul>

<h2>Installation</h2>
<ol>
    <li>Clone this repository</li>
    <li>Run <code>npm install</code> to install project dependencies</li>
    <li>Run <code>npm install react-bootstrap bootstrap</code> for UI components</li>
    <li>Run <code>npm install react-router-dom</code> for routing functionality</li>
    <li>Launch the development server using <code>npm start</code></li>
</ol>

<h2>Dependencies</h2>
<ul>
    <li>React</li>
    <li>React Bootstrap</li>
    <li>Bootstrap</li>
    <li>React Router DOM</li>
</ul>

<h2>Backend Installation</h2>
<ol>
    <li>Install Node.js and npm</li>
    <li>Run <code>npm install express mongoose nodemon</code></li>
</ol>

<h2>Backend Dependencies</h2>
<ul>
    <li>Express</li>
    <li>Mongoose</li>
    <li>nodemon</li>
</ul>

<p>
Contributions and issues are welcome.
</p>

<div align="center">
  <h1>Secondary Car Marketplace and Service Platform</h1>
  <p>
    This project offers a unified platform to buy, sell, rent, and maintain used cars. The primary objective is to create a transparent, efficient, and user-friendly service ecosystem that caters to all car-related needs.
  </p>
</div>



<h2>Overview</h2>
<p>
  This platform is designed to streamline the process of buying, selling, renting, and maintaining cars. With a focus on security, transparency, and user experience, it connects buyers, sellers, renters, and service providers seamlessly. It also integrates essential features like car verification, secure transactions, and cost management.
</p>


<h2>Features</h2>

<h3><strong>Car Buy and Sell</strong></h3>
<ul>
  <li>Allow users to buy cars from our own company.</li>
  <li> Users can sell cars to our company by comparing the current condition price.</li>
  <li> Enables users to buy/sell used cars via a peer-to-peer (P2P) marketplace.</li>
  <li> View car history and condition from site posts.</li>
</ul>

<h3><strong>User Accessibility and Tools</strong></h3>
<ul>
  <li> Filtering by search.</li>
  <li> Side-by-side comparison (model, price, etc.).</li>
  <li>User dashboard for activity management.</li>
  <li> Secure transaction management.</li>
</ul>

<h3><strong>Rental and Booking</strong></h3>
<ul>
  <li> Users can rent a car.</li>
  <li> Check car availability for rent.</li>
  <li> Schedule rentals and manage costs.</li>
  <li> Check driver reviews.</li>
</ul>

<h3><strong>Maintenance and Repair Services</strong></h3>
<ul>
  <li> Schedule maintenance dates.</li>
  <li> Track maintenance updates and work status.</li>
  <li> Manage costs (parts price and condition).</li>
  <li>Delivery confirmation for serviced vehicles.</li>
</ul>

<h3><strong>Security and Transparency</strong></h3>
<ul>
  <li> User and car verification (NID, photo, etc.).</li>
  <li> Chatting and secure negotiation for P2P transactions.</li>
  <li> Generate receipts and records for every legal transaction and deal.</li>
  <li> Help, support, and FAQ section for user assistance.</li>
</ul>


<h2>Dependencies Installation</h2>

<h3>Frontend</h3>
<ol>
  <li>
    Clone the repository:
    <pre><code>git clone https://github.com/ovijitM/cse470_SCM.git
cd cse470_SCM </code></pre>
  </li>
  <li>
    Install the required packages:
    <pre><code>npm install</code></pre>
  </li>
  <li>
    Install Node , UI and routing dependencies:
    <pre><code>npm install </code></pre>
    <pre><code>npm install react-bootstrap bootstrap react-router-dom</code></pre>
  </li>
  <li>
    Start the development server:
    <pre><code>npm run dev </code></pre>
  </li>
</ol>

<h3>Backend</h3>
<ol>
  <li>
    Navigate to the backend folder.
  </li>
  <li>
    Install backend dependencies:
    <pre><code>npm install express mongoose nodemon</code></pre>
  </li>
  <li>
    Start the backend server:
    <pre><code>nodemon server.js</code></pre>
  </li>
</ol>



<h2>Collection Structure</h2>

<h3>Database Collections</h3>
<ul>
  <li><strong>Book_car:</strong> Contains booking details for car rentals or purchases.</li>
  <li><strong>Driver:</strong> Stores driver information, including reviews and ratings.</li>
  <li><strong>New_cars:</strong> Details about new cars available for sale.</li>
  <li><strong>Parts:</strong> Inventory of car parts, including pricing and condition.</li>
  <li><strong>Rent_Cars:</strong> Data on cars available for rent, including availability status.</li>
  <li><strong>Used_cars:</strong> Listings of used cars for sale, including condition and history.</li>
  <li><strong>User_history:</strong> Tracks user activities like transactions, rentals, and bookings.</li>
  <li><strong>Users:</strong> Stores user information and verification details.</li>
</ul>



<h2>Contributing</h2>
<p>
  @ovijitM
  @mdrakib719
  @TheOnlyNaimur
</p>



{
  "_id": ObjectId(),
  "make": String,          // Car manufacturer, e.g., "Toyota"
  "model": String,         // Car model, e.g., "Corolla"
  "year": Number,          // Manufacturing year, e.g., 2022
  "mileage": Number,       // Distance the car has been driven, e.g., 50000 (in km or miles)
  "color": String,         // Car color, e.g., "Red"
  "price": Number,         // Selling price, e.g., 15000
  "description": String,   // Detailed description of the car
  "image": String,         // URL or file path to the car image
  "seller": {
    "name": String,        // Seller's name
    "phone": String,       // Seller's phone number
    "email": String        // Seller's email address
  },
  "createdAt": Date,        // Timestamp when the document is created
  "updatedAt": Date         // Timestamp when the document is updated
}
