#fuzzbuzz <br>
FizBuzz Code Exercise - NodeJS<br>


Code Explaintation:
Input: [1, 2, 3, 15, 'aa', 23]
Output:
[
  "Divided '1' by 3",
  "Divided '1' by 5",
  "Divided '2' by 3",
  "Divided '2' by 5",
  'fizz',
  "Divided '3' by 5",
  'fizzbuzz',
  'Invalid Item',
  "Divided '23' by 3",
  "Divided '23' by 5"
] 


// Small description about CI/CD pipeline & Junkin for automation test cases in NodeJs  <br> 
I am going to build a simple NodeJS App and will be host it in the provided server. In addition, I am going to configure an automation server and host Jenkins on a separate server instance. <br><br>

Jenkins will make me to automate my code using CI/CD process. On every code change from my end, after commiting to server, Jenkin will get notified and will pull the modified code to the server . The following are the steps performed by Junkin,<br><br>

1) It will Install if any dependencies are there 
2) And will run the integration test 
3) If all tests pass, Jenkins is going to deploy the app to the node server 
4) If it fails, a I(developer) will be notified.


#Yata Sai Raju
