/*const updateCounter = () => {
    fetch('dat/dat.json')
      .then(response => response.json())
      .then(data => {
        const views = data.views;
        const counterElement = document.getElementById("ct");
        counterElement.textContent = views + " Views";
      })
      .catch(error => console.error('Error fetching JSON:', error));
  };
  
async function increment() {  // Function name changed to "increment"
  try {
    // 1. Fetch the JSON data
    const response = await fetch('./dat/dat.json');
    const data = await response.json();

    // 2. Increment the "views" property
    data.views++;

    // 3. Write the updated data back to the JSON file
    await fetch('dat/dat.json', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });

    // 4. Display the updated views in the <h1> element
    const counterElement = document.getElementById("ct");
    counterElement.textContent = data.views;

  } catch (error) {
    console.error('Error updating views:', error);
    // Handle errors gracefully, e.g., display a fallback message
  }
}

// Initial update and display
increment();  // Call the function with the new name
updateCounter();
// Update counter periodically (optional)
//setInterval(updateCounter, 10000); // Update every 10 seconds (adjust as needed)
*/
// Configure API key (if using a private bin)
/*
import JSONbin from './node_modules/JSONbin-io.js/src/JSONbin-io.js';
JSONbin.configure({
  auth: '$2a$10$dw.e5rVLunQy/0bG.hXYduHS5l231MNtyrC/pfpm29zBk6lqJwsV6' // Replace with your actual API key
});

async function updateAndDisplayViews() {
  try {
    // Get the current views count
    const data = await JSONbin.read(`https://api.JSONbin.io/v3/b/658935801f5677401f13061f`);
    const currentViews = data.views;

    // Increment the views count
    const updatedViews = currentViews + 1;

    // Update the bin with the new views count
    await JSONbin.update(`https://api.JSONbin.io/v3/b/658935801f5677401f13061f`, { views: updatedViews });

    // Retrieve the updated views count to ensure consistency
    const updatedData = await JSONbin.read(`https://api.JSONbin.io/v3/b/658935801f5677401f13061f`);
    const finalViews = updatedData.views;

    // Display the updated views in the <h1> element
    const viewsElement = document.getElementById('ct');
    viewsElement.textContent = `Views: ${finalViews}`;

  } catch (error) {
    console.error('Error updating or displaying views:', error);
    // Handle errors gracefully, e.g., display an error message to the user
  }
}

// Call the function to update and display views
updateAndDisplayViews();
*/
/*
const gistUrl = 'https://gist.githubusercontent.com/FrozenNotes/96b2fd47c0dd84ad345488a1b0e08627/raw/fnpublicdat.json';
var views;
async function updateAndDisplayViews() {
  try {
    const response = await fetch(gistUrl);
    const data = await response.json();
    views = (data.views)+1;
    const counterElement = document.getElementById("ct");
    counterElement.textContent = views + " Views";
  } catch (error) {
    console.error('Error Reading Data', error)
  }
}
const token = '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'; // Replace with your actual token

async function updateGistData(updatedData) {
  try {
    const response = await fetch(gistUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });

    if (response.ok) {
      console.log('Gist updated successfully!');
    } else {
      console.error('Failed to update gist:', response.statusText);
    }
  } catch (error) {
    console.error('Error updating gist:', error);
  }
}
updateAndDisplayViews();
const updatedData = { views: views };
updateGistData(updatedData);

// ...
*/
/*let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open("GET", "https://api.jsonbin.io/v3/b/658935801f5677401f13061f | latest>", true);
req.setRequestHeader("X-Master-Key", "$2a$10$dw.e5rVLunQy/0bG.hXYduHS5l231MNtyrC/pfpm29zBk6lqJwsV6");
req.send();
*/


let req = new XMLHttpRequest();
let views;
let req1 = new XMLHttpRequest();

req1.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log("Yo! Welcome to FrozenNotes!");
  }
};

req1.open("PUT", "https://api.jsonbin.io/v3/b/658935801f5677401f13061f", true);
req1.setRequestHeader("Content-Type", "application/json");
req1.setRequestHeader("X-Access-Key", "$2a$10$dw.e5rVLunQy/0bG.hXYduHS5l231MNtyrC/pfpm29zBk6lqJwsV6");


req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    if (req.status == 200) { // Check for successful response
      try {
        const data = JSON.parse(req.responseText);
        // Now you have the parsed JSON data in the `jsonData` constant
        views = (data.views)+1;
        const counterElement = document.getElementById("ct");
        counterElement.textContent = views + " Views";
        req1.send('{"views": '+views+'}');
        // Use the data for further processing or display
      } catch (error) {
        console.error('Error parsing JSON:', error);
        // Handle parsing errors gracefully
      }
    } else {
      console.error('Request failed:', req.statusText);
      // Handle request failures appropriately
    }
  }
};
console.log("Runnin JS Stuff...");
req.open("GET", "https://api.jsonbin.io/v3/b/658935801f5677401f13061f", true);
req.setRequestHeader("X-Access-Key", "$2a$10$dw.e5rVLunQy/0bG.hXYduHS5l231MNtyrC/pfpm29zBk6lqJwsV6");
req.setRequestHeader("X-Bin-Meta", "false");
req.send();