import { eventLogger } from './eventLogger';

// TODO: Implement for Part 1
// Goal:
// When clicking on the colored square, we should send
// the following payload through network request:
// {
//   "events": [{
//     "eventName": "click",
//     "hostname": "1ic4u.csb.app", // Hostname of the current page
//     "timestamp": "2021-04-06T00:33:42.304Z", // Current UTC time in ISOString format
//     "data": {
//        "color": "rgb(255, 80, 0)" // Background color of the square
//     }
//   }]
// }
var boxes = document.getElementsByClassName('square');
for (var i = 0; i < boxes.length; i++) {
  // var date = new Date();
  // console.log(boxes[i].style.backgroundColor);
  boxes[i].addEventListener('click', (e) => {
    const data = {
      events: [
        {
          eventName: 'click',
          hostname: window.location.hostname, // Hostname of the current page
          timestamp: new Date().toUTCString(), // Current UTC time in ISOString format
          data: {
            color: e.target.style.backgroundColor, // Background color of the square
          },
        },
      ],
    };
    eventLogger.logEvent(e, data);
  });
}
