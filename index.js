// Your code goes here

document.addEventListener('DOMContentLoaded', function() {
    let text = document.getElementById('text');
    text.textContent = 'This is really cool!';
  }
);

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

//   <script src="index.js" defer></script>
// The defer attribute tells the browser to only execute the script once the HTML document has been fully loaded. This is useful when you need to guarantee the order of your script execution, or if your script relies on elements in the HTML.
// The defer attribute is supported in all modern browsers, except for Internet Explorer 9 and earlier. If you need to support Internet Explorer 9 or earlier, you can use the following code snippet to add a script to the DOM and set the defer attribute:
// const script = document.createElement('script');
// script.src = 'index.js';
// script.defer = true;