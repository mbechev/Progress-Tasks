TASK 1: Grid 
Completed requirements:
1. Create a Kendo UI for Angular Grid consuming data from some remote API (for example
https://jsonplaceholder.typicode.com/)
2. Introduce data-processing operations like paging and sorting (client-side)
4. Use a Kendo UI for Angular Switch component to toggle the visibility of the User ID column (for
example)

TASK 2: Tickets
////////////////
/// Ticket 1 /// 
////////////////
Hello,
I understand you struggle and I am here to help you. When you defines grid height you cannot pass % with [height] property, in your case, Kendo has a solution, set
<kendo-grid
[style.height] = 'something  (in px, %, vh, em, rem) '
>
</kendo-grid>

instead 

<kendo-grid
[height] = 'something'
>
</kendo-grid>

this option supports units such as px, %, em, rem, and others.
I checked it an if you passed
<kendo-grid
[style.height] = "'100vh'"
>
</kendo-grid>
it should work like you want. This will stretch to the full height on your window.
Note: pay attention with quotes.
Or you can pass 100% height in your css file with appropriate class name.
If these solutions still doesn't work, please send me back simple code example.

Best of luck

////////////////
/// Ticket 2 /// 
////////////////

Hello,
If your third party API returns you a bunch of unnecessary items, you can simply use high order function for this, like reduce for example:
If your API returs you JSON like this 
[
    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  .
  .
  .
  and so on
]
real url address is https://jsonplaceholder.typicode.com/users

and you want to filter only the names you can do this

const serverData = [ {}, {}, {} ] <= this is the returned JSON from the server 

const names: Array<{ text: string, value: number }> = serverData.reduce((acc, element) => {
        const user = {
          name: el.name,
          value: el.id
        };
        acc.push(user);
        return acc;
}, []);

this will make an array of objects like 
[
    {
       name: John,
       id:1
    },
    {
       name: Peter,
       id:2
    }

    .
    .
    .
    and so on
]

after you have the reduced JSON you can pass it to [data] property of the  <kendo-dropdownlist>

If this example doesn't answer to your question, please send me back a simple example of your retured JSON and what exactly you want to filter.

Best wishes

////////////////
/// Ticket 3 /// 
////////////////

Hi
100% stacked charts doesn't support vertical bars, we are sorry about that, but our team is working on it and very soon the documentation will be updated with more and detailed examples and we will make 100% stacked bars to support vertical ones. I recommend you to look Bar Charts/Column Charts https://demos.telerik.com/kendo-ui/bar-charts/column instead. We are here to help you, so don't hesitate to ask us if you have any questions.

Have a nice day

