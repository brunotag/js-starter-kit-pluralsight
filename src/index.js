import {getUsers, deleteUser} from './restAPI/userRestAPI'
import './index.css';
import numeral from 'numeral';

getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody += `
      <tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
      </tr>`

      global.document.getElementById('users').innerHTML = usersBody;

      const deleteLinks = global.document.getElementsByClassName('deleteUser');

      // Must use array.from to create a real array from a DOM collection
      // getElementsByClassName only returns an "array like" object
      Array.from(deleteLinks, link => {
        link.onclick = function(event) {
          const element = event.target;
          event.preventDefault();
          deleteUser(element.attributes["data-id"].value);
          const row = element.parentNode.parentNode;
          row.parentNode.removeChild(row);
        }
      })
  });
});

const courseValue = numeral(1000).format('$0,0.00');
//debugger //uncomment this to create a breakpoint and see sourcemaps working.
global.document.getElementById('message').innerHTML = `I would pay ${courseValue} for this awesome course!`;
