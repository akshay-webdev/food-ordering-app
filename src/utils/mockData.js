const mockData = [
    
       {
          "id": "37467",
          "name": "Subway",
          "image": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
          
          "locality": "Chandrabhaga Nagar Rd",
          "areaName": "Katraj",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Healthy Food",
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ]
        },
        {
          "id": "336913",
          "name": "Pizza Hut",
          "image": "https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "locality": "Village Dhayri",
          "areaName": "Dhayari",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ]
        },
        {
          "id": "21395",
          "name": "Brahma Garden",
          "image": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "locality": "Sinhagad Road",
          "areaName": "Sinhagad Road",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese",
            "Juices",
            "Biryani",
            "Punjabi"
          ]
        },
        {
          "id": "218321",
          "name": "Theobroma",
          "image": "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "locality": "Kothrud",
          "areaName": "Kothrud",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Bakery",
            "Desserts"
          ]
        },
        {
          "id": "68577",
          "name": "Baskin Robbins - Ice Cream Desserts",
          "image": "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "locality": "Manik Baug",
          "areaName": "Sinhgad Road",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ]
        },
        {
          "id": "255146",
          "name": "Faasos - Wraps, Rolls & Shawarma",
          "image": "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
          "locality": "Datta nagar chowk",
          "areaName": "Ambegaon Bk",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages"
          ]
        },
        {
          "id": "81625",
          "name": "NIC Ice Creams",
          "image": "https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=600",
          "locality": "Bharti Vidyapeeth",
          "areaName": "Katraj",
          "costForTwo": "₹120 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ]
        },
        {
          "id": "255147",
          "name": "Behrouz Biryani",
          "image": "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
          "locality": "Datta nagar chowk",
          "areaName": "Ambegaon Bk",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Beverages",
            "Desserts"
          ]
        },
        {
          "id": "255155",
          "name": "LunchBox - Meals and Thalis",
          "image": "https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "locality": "Datta nagar chowk",
          "areaName": "Ambegaon Bk",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Punjabi",
            "Healthy Food",
            "Desserts",
            "Beverages"
          ]
        },
        {
          "id": "317437",
          "name": "Natural Ice Cream",
          "image": "https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "locality": "MOHITE TWIN TOWERS",
          "areaName": "Sinhgad Road",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ]
        },
        {
          "id": "56903",
          "name": "The Belgian Waffle Co.",
          "image": "https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "locality": "Goel ganga khaugalli",
          "areaName": "Sinhgad Road",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Waffles",
            "Desserts"
          ]
        },
        {
          "id": "36954",
          "name": "Sarjaa",
          "image": "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "locality": "J M Road",
          "areaName": "Deccan Gymkhana",
          "costForTwo": "₹550 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Fast Food",
            "Street Food",
            "Desserts",
            "Beverages"
          ]
        },
        {
          "id": "57333",
          "name": "Cafe Goodluck",
          "image": "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "locality": "Goodluck Chowk",
          "areaName": "Deccan Gymkhana",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Fast Food",
            "Beverages",
            "Cafe",
            "Desserts"
          ]
        },
        {
          "id": "53301",
          "name": "Cafe Peter Donuts",
          "image": "https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "locality": "Navi Peth",
          "areaName": "Sadashiv Peth",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Cafe",
            "Bakery",
            "Desserts"
          ]
        },
        {
          "id": "70513",
          "name": "Burger King",
          "image": "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "locality": "Ambegaon Bk",
          "areaName": "Ambegaon Bk",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Fast Food",
            "Beverages"
          ]
        },

]
export default mockData;