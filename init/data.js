const sampleListings = [

  //rooms
  {
  title: 'Luxury Private Room',
  description: 'A comfortable private room ideal for solo travelers or couples.',
  image: {
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXMlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 2800,
  location: 'Toronto',
  country: 'Canada',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'rooms',
},
{
  title: 'Luxury Private Room',
  description: 'A comfortable private room ideal for solo travelers or couples.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1678297270523-8775c817d0b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXMlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 2800,
  location: 'Vancouver',
  country: 'Canada',
  reviews: [],
  owner:'698331faa53d1fc9cea342c9',
  category: 'rooms',
},
{
  title: 'Luxury Private Room',
  description: 'A comfortable private room ideal for solo travelers or couples.',
  image: {
    url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXMlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 2800,
  location: 'New York',
  country: 'United States',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'rooms',
},
{
  title: 'Luxury Private Room',
  description: 'A comfortable private room ideal for solo travelers or couples.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbXMlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 2800,
  location: 'Los Angeles',
  country: 'United States',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'rooms',
},
{
  title: 'Luxury Private Room',
  description: 'A comfortable private room ideal for solo travelers or couples.',
  image: {
    url: 'https://images.unsplash.com/photo-1710651984071-4ca1d2faf9d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb21zJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 2800,
  location: 'Sydney',
  country: 'Australia',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'rooms',
},
{
  title: 'Luxury Private Room',
  description: 'A comfortable private room ideal for solo travelers or couples.',
  image: {
    url: 'https://images.unsplash.com/photo-1743410976099-6114097db9ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXMlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 2800,
  location: 'Melbourne',
  country: 'Australia',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'rooms',
},
{
  title: 'Luxury Private Room',
  description: 'A comfortable private room ideal for solo travelers or couples.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9vbXMlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 2800,
  location: 'Zurich',
  country: 'Switzerland',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'rooms',
},
{
  title: 'Luxury Private Room',
  description: 'A comfortable private room ideal for solo travelers or couples.',
  image: {
    url: 'https://images.unsplash.com/photo-1725962479542-1be0a6b0d444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbXMlMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 2800,
  location: 'Lucerne',
  country: 'Switzerland',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'rooms',
},
{
  title: 'Luxury Private Room',
  description: 'A comfortable private room ideal for solo travelers or couples.',
  image: {
    url: 'https://images.unsplash.com/photo-1667403206415-0e51a54727d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJvb21zJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 2800,
  location: 'Goa',
  country: 'India',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'rooms',
},
{
  title: 'Luxury Private Room',
  description: 'A comfortable private room ideal for solo travelers or couples.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1661777872222-6ff4f83bc914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHJvb21zJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 2800,
  location: 'Kandy',
  country: 'Sri Lanka',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'rooms',
},

//mountains
{
  title: 'Mountain View Retreat',
  description: 'A cozy stay surrounded by breathtaking mountain views and fresh air.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1754251249087-570065936685?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBvbiUyMG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 3500,
  location: 'Manali',
  country: 'India',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'mountains',
},
{
  title: 'Mountain View Retreat',
  description: 'A cozy stay surrounded by breathtaking mountain views and fresh air.',
  image: {
    url: 'https://images.unsplash.com/photo-1646376350957-1b2c1813bcab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBvbiUyMG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 3500,
  location: 'Leh',
  country: 'India',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'mountains',
},
{
  title: 'Mountain View Retreat',
  description: 'A cozy stay surrounded by breathtaking mountain views and fresh air.',
  image: {
    url: 'https://images.unsplash.com/photo-1659784305324-4c30efe004b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlJTIwb24lMjBtb3VudGFpbnN8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 3500,
  location: 'Banff',
  country: 'Canada',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'mountains',
},
{
  title: 'Mountain View Retreat',
  description: 'A cozy stay surrounded by breathtaking mountain views and fresh air.',
  image: {
    url: 'https://images.unsplash.com/photo-1616363766181-d411c4b06f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlJTIwb24lMjBtb3VudGFpbnN8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 3500,
  location: 'Whistler',
  country: 'Canada',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'mountains',
},
{
  title: 'Mountain View Retreat',
  description: 'A cozy stay surrounded by breathtaking mountain views and fresh air.',
  image: {
    url: 'https://images.unsplash.com/photo-1660295555475-20ae54258715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlJTIwb24lMjBtb3VudGFpbnN8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 3500,
  location: 'Aspen',
  country: 'United States',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'mountains',
},
{
  title: 'Mountain View Retreat',
  description: 'A cozy stay surrounded by breathtaking mountain views and fresh air.',
  image: {
    url: 'https://images.unsplash.com/photo-1642878542442-46f76aaae355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlJTIwb24lMjBtb3VudGFpbnN8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 3500,
  location: 'Zermatt',
  country: 'Switzerland',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'mountains',
},
{
  title: 'Mountain View Retreat',
  description: 'A cozy stay surrounded by breathtaking mountain views and fresh air.',
  image: {
    url: 'https://images.unsplash.com/photo-1661333564983-a36df20b3314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlJTIwb24lMjBtb3VudGFpbnN8ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 3500,
  location: 'Interlaken',
  country: 'Switzerland',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'mountains',
},
{
  title: 'Mountain View Retreat',
  description: 'A cozy stay surrounded by breathtaking mountain views and fresh air.',
  image: {
    url: 'https://images.unsplash.com/photo-1600298882525-1ac025c98b68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 3500,
  location: 'Queenstown',
  country: 'New Zealand',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'mountains',
},
{
  title: 'Mountain View Retreat',
  description: 'A cozy stay surrounded by breathtaking mountain views and fresh air.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1764687865276-87e0739a34b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdW50YWlucyUyMHJvb21zfGVufDB8fDB8fHww',
    filename: 'listingimage'
  },
  price: 3500,
  location: 'Pokhara',
  country: 'Nepal',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'mountains',
},
{
  title: 'Mountain View Retreat',
  description: 'A cozy stay surrounded by breathtaking mountain views and fresh air.',
  image: {
    url: 'https://images.unsplash.com/photo-1769952180972-fc91c7190158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnRhaW5zJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 3500,
  location: 'Ella',
  country: 'Sri Lanka',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'mountains',
},

//iconic citites
{
  title: 'Iconic City Stay',
  description: 'Stay in the heart of one of the world’s most iconic cities with easy access to major attractions.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1690921287957-016981122c78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNvbmljJTIwY2l0aWVzfGVufDB8fDB8fHww',
    filename: 'listingimage'
  },
  price: 4200,
  location: 'Paris',
  country: 'France',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'iconic cities',
},
{
  title: 'Iconic City Stay',
  description: 'Stay in the heart of one of the world’s most iconic cities with easy access to major attractions.',
  image: {
    url: 'https://images.unsplash.com/photo-1629750929988-ae2d4befe343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aWNvbmljJTIwY2l0aWVzfGVufDB8fDB8fHww',
    filename: 'listingimage'
  },
  price: 4200,
  location: 'New York',
  country: 'United States',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'iconic cities',
},
{
  title: 'Iconic City Stay',
  description: 'Stay in the heart of one of the world’s most iconic cities with easy access to major attractions.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1692130333300-85055a6141d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aWNvbmljJTIwY2l0aWVzfGVufDB8fDB8fHww',
    filename: 'listingimage'
  },
  price: 4200,
  location: 'London',
  country: 'United Kingdom',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'iconic cities',
},
{
  title: 'Iconic City Stay',
  description: 'Stay in the heart of one of the world’s most iconic cities with easy access to major attractions.',
  image: {
    url: 'https://images.unsplash.com/photo-1613402900762-25b427ea5d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGljb25pYyUyMGNpdGllc3xlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 4200,
  location: 'Rome',
  country: 'Italy',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'iconic cities',
},
{
  title: 'Iconic City Stay',
  description: 'Stay in the heart of one of the world’s most iconic cities with easy access to major attractions.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1661963277538-195c9d6b698b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGljb25pYyUyMGNpdGllc3xlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 4200,
  location: 'Dubai',
  country: 'United Arab Emirates',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'iconic cities',
},

//artic
{
  title: 'Arctic Escape Stay',
  description: 'A unique stay surrounded by icy landscapes, northern lights, and pure wilderness.',
  image: {
    url: 'https://images.unsplash.com/photo-1761433071153-fd8f00ddd19c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aWMlMjBwbGFjZXN8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 6000,
  location: 'Tromsø',
  country: 'Norway',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'arctic',
},
{
  title: 'Arctic Escape Stay',
  description: 'A unique stay surrounded by icy landscapes, northern lights, and pure wilderness.',
  image: {
    url: 'https://images.unsplash.com/photo-1766833686572-e0223ec33635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aWMlMjBwbGFjZXN8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 6000,
  location: 'Rovaniemi',
  country: 'Finland',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'arctic',
},
{
  title: 'Arctic Escape Stay',
  description: 'A unique stay surrounded by icy landscapes, northern lights, and pure wilderness.',
  image: {
    url: 'https://images.unsplash.com/photo-1764957079149-12d1e4f9a3d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aWMlMjBwbGFjZXN8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 6000,
  location: 'Longyearbyen',
  country: 'Norway',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'arctic',
},
{
  title: 'Arctic Escape Stay',
  description: 'A unique stay surrounded by icy landscapes, northern lights, and pure wilderness.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1688071660394-553f874cd371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFydGljJTIwcGxhY2VzfGVufDB8fDB8fHww',
    filename: 'listingimage'
  },
  price: 6000,
  location: 'Reykjavík',
  country: 'Iceland',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'arctic',
},
{
  title: 'Arctic Escape Stay',
  description: 'A unique stay surrounded by icy landscapes, northern lights, and pure wilderness.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1757322537430-ca9306b803f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydGljJTIwcGxhY2VzfGVufDB8fDB8fHww',
    filename: 'listingimage'
  },
  price: 6000,
  location: 'Nuuk',
  country: 'Greenland',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'arctic',
},


//domes
{
  title: 'Dome Stay Experience',
  description: 'A unique dome-style stay offering comfort and scenic surroundings.',
  image: {
    url: 'https://images.unsplash.com/photo-1671760085670-2be5869f38dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 4500,
  location: 'Jaisalmer',
  country: 'India',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'domes',
},
{
  title: 'Dome Stay Experience',
  description: 'A unique dome-style stay offering comfort and scenic surroundings.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1678373135081-38386501f9e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9tZXN8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 4500,
  location: 'Wadi Rum',
  country: 'Jordan',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'domes',
},
{
  title: 'Dome Stay Experience',
  description: 'A unique dome-style stay offering comfort and scenic surroundings.',
  image: {
    url: 'https://images.unsplash.com/photo-1534787666419-9092b111c0d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvbWVzfGVufDB8fDB8fHww',
    filename: 'listingimage'
  },
  price: 4500,
  location: 'Atacama',
  country: 'Chile',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'domes',
},
{
  title: 'Dome Stay Experience',
  description: 'A unique dome-style stay offering comfort and scenic surroundings.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1678373454570-7f92d0781436?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvbWVzfGVufDB8fDB8fHww',
    filename: 'listingimage'
  },
  price: 4500,
  location: 'Marrakech',
  country: 'Morocco',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'domes',
},
{
  title: 'Dome Stay Experience',
  description: 'A unique dome-style stay offering comfort and scenic surroundings.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1694475226455-1bc1f12bccd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2UlMjBvbiUyMGRvbWVzfGVufDB8fDB8fHww',
    filename: 'listingimage'
  },
  price: 4500,
  location: 'Sedona',
  country: 'United States',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'domes',
},


//camping
{
  title: 'Nature Camping Stay',
  description: 'A peaceful camping experience surrounded by nature, perfect for adventure lovers.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1664358190450-2d84d93b9546?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 1800,
  location: 'Rishikesh',
  country: 'India',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'camping',
},
{
  title: 'Nature Camping Stay',
  description: 'A peaceful camping experience surrounded by nature, perfect for adventure lovers.',
  image: {
    url: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 1800,
  location: 'Pushkar',
  country: 'India',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'camping',
},
{
  title: 'Nature Camping Stay',
  description: 'A peaceful camping experience surrounded by nature, perfect for adventure lovers.',
  image: {
    url: 'https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 1800,
  location: 'Yosemite',
  country: 'United States',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'camping',
},
{
  title: 'Nature Camping Stay',
  description: 'A peaceful camping experience surrounded by nature, perfect for adventure lovers.',
  image: {
    url: 'https://images.unsplash.com/photo-1602391833977-358a52198938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 1800,
  location: 'Banff National Park',
  country: 'Canada',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'camping',
},
{
  title: 'Nature Camping Stay',
  description: 'A peaceful camping experience surrounded by nature, perfect for adventure lovers.',
  image: {
    url: 'https://images.unsplash.com/photo-1625834509314-3b12c6153624?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 1800,
  location: 'Lake Tekapo',
  country: 'New Zealand',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'camping',
},

//trending
{
  title: 'Trending Stay',
  description: 'A popular stay loved by travelers for its location, comfort, and experience.',
  image: {
    url: 'https://images.unsplash.com/photo-1719582116435-a11ea85bb2f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJlbmRpbmclMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 5000,
  location: 'Tokyo',
  country: 'Japan',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'trending',
},
{
  title: 'Trending Stay',
  description: 'A popular stay loved by travelers for its location, comfort, and experience.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 5000,
  location: 'Seoul',
  country: 'South Korea',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'trending',
},
{
  title: 'Trending Stay',
  description: 'A popular stay loved by travelers for its location, comfort, and experience.',
  image: {
    url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 5000,
  location: 'Bali',
  country: 'Indonesia',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'trending',
},
{
  title: 'Trending Stay',
  description: 'A popular stay loved by travelers for its location, comfort, and experience.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 5000,
  location: 'Barcelona',
  country: 'Spain',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'trending',
},
{
  title: 'Trending Stay',
  description: 'A popular stay loved by travelers for its location, comfort, and experience.',
  image: {
    url: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 5000,
  location: 'Istanbul',
  country: 'Turkey',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'trending',
},

//boats
{
  title: 'Boat Stay Experience',
  description: 'A unique stay on water offering beautiful views and a relaxing experience.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1732030991370-f6df41743a70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcCUyMGhvdXNlfGVufDB8fDB8fHww',
    filename: 'listingimage'
  },
  price: 5500,
  location: 'Alleppey',
  country: 'India',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'boats',
},
{
  title: 'Boat Stay Experience',
  description: 'A unique stay on water offering beautiful views and a relaxing experience.',
  image: {
    url: 'https://images.unsplash.com/photo-1658588616249-0d52cedc2545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcCUyMGhvdXNlfGVufDB8fDB8fHww',
    filename: 'listingimage'
  },
  price: 5500,
  location: 'Amsterdam',
  country: 'Netherlands',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'boats',
},
{
  title: 'Boat Stay Experience',
  description: 'A unique stay on water offering beautiful views and a relaxing experience.',
  image: {
    url: 'https://images.unsplash.com/photo-1673012126173-3d59a04b287c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXAlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 5500,
  location: 'Venice',
  country: 'Italy',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'boats',
},
{
  title: 'Boat Stay Experience',
  description: 'A unique stay on water offering beautiful views and a relaxing experience.',
  image: {
    url: 'https://images.unsplash.com/photo-1668449958402-36fa3d55530d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXAlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
    filename: 'listingimage'
  },
  price: 5500,
  location: 'Stockholm',
  country: 'Sweden',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'boats',
},
{
  title: 'Boat Stay Experience',
  description: 'A unique stay on water offering beautiful views and a relaxing experience.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1733295623590-3db6cf845354?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcCUyMGhvdXNlfGVufDB8fDB8fHww',
    filename: 'listingimage'
  },
  price: 5500,
  location: 'Halong Bay',
  country: 'Vietnam',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'boats',
},
{
  title: 'Peaceful Farm Stay near Jaipur',
  description: 'A relaxing farm stay surrounded by open fields, fresh air, and a calm rural atmosphere, perfect for a peaceful getaway.',
  image: {
    url: 'https://plus.unsplash.com/premium_photo-1674624682288-085eff4f98da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFybXN8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 1800,
  location: 'Jaipur',
  country: 'India',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'farms',
},
{
  title: 'Green Countryside Farm Retreat',
  description: 'Experience a refreshing stay in the countryside with lush greenery, open spaces, and a simple farm lifestyle.',
  image: {
    url: 'https://images.unsplash.com/photo-1569239591652-6cc3025b07fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFybXN8ZW58MHx8MHx8fDA%3D',
    filename: 'listingimage'
  },
  price: 2200,
  location: 'Kerala',
  country: 'India',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'farms',
},
{
  title: 'Organic Farm Stay in Coorg',
  description: 'Stay at an organic farm surrounded by coffee plantations and misty hills, offering a calm and natural experience.',
  image: {
    url: 'https://images.unsplash.com/photo-1561682709-ce152c5b789a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhcm1zfGVufDB8fDB8fHww',
    filename: 'listingimage'
  },
  price: 2500,
  location: 'Coorg',
  country: 'India',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'farms',
},
{
  title: 'Rustic Farmhouse Escape',
  description: 'A charming farmhouse offering a simple and peaceful rural stay, ideal for families and nature lovers.',
  image: {
    url: 'https://images.unsplash.com/photo-1598403099921-35590773af6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhcm1zfGVufDB8fDB8fHww',
    filename: 'listingimage'
  },
  price: 2000,
  location: 'Nashik',
  country: 'India',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'farms',
},
{
  title: 'Riverside Farm Stay',
  description: 'Enjoy a quiet farm stay near a river with scenic views, fresh food, and a relaxing countryside vibe.',
  image: {
    url: 'https://images.unsplash.com/photo-1663595476091-09de03244ef3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhcm1zfGVufDB8fDB8fHww',
    filename: 'listingimage'
  },
  price: 2300,
  location: 'Rishikesh',
  country: 'India',
  reviews: [],
  owner: '698331faa53d1fc9cea342c9',
  category: 'farms',
}

]


module.exports = { data: sampleListings };






