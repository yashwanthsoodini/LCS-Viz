# Longest Common Subsequence Animation


The longest common subsequence (LCS) problem is the problem of finding the longest subsequence common to all sequences in a set of sequences (often just two sequences). This web app presents the viewers with a simple and intelligible visualization of the solution for two sequences. The solution has two approaches : Top-Down Approach and Recursive Approach.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Apart from a modern web-browser that supports Javascript, you will need PHP (we used version 7.1.6) installed on your machine.

### Installing

Unzip the contents of [lcs.zip] into a folder on your PHP server. Once your server's up and running head to the following URL in your browser:


http://localhost:YOUR_PORT_NUMBER/YOUR_FOLDER_NAME/index.php

If you're on a Mac and using MAMP, it will look like this:

```
http://localhost:8888/LCS/index.php
```

## Tutorial

[index.php] is the landing page. You are asked to select the approach for which you want to see the visualization. You are then redirected to either [index1.php] or [index2.html] depending on your choice.

Top-Down Approach Page:
  You are asked to enter two sequences. You also have a fast forward option available that will make the animation run faster. After submitting the sequences, the animation will start. After the LCS table is filled, you will have to click the 'GET LCS' button to read out the actual subsequence.

Recursive Approach Page:
  You are asked to enter two sequences. After submitting the sequences, the animation will start. The length of the LCS is printed on the left side of the screen.

## Screenshots

![](./screenshots/2.png)

![](./screenshots/3.png)

![](./screenshots/6.png)

![](./screenshots/7.png)

![](./screenshots/8.png)

![](./screenshots/9.png)

## Built With

* [d3.js](https://d3js.org/) - a JS library for manipulating documents based on data.
* [PHP](http://www.php.net/) - a general-purpose scripting language suited to web development.
* [Bootstrap](https://getbootstrap.com/) - an open source toolkit for developing with HTML, CSS, and JS.

## Known Issues

* Some issues with the LCS being printed at the bottom were observed.

* And also the app will create a new js file for every instance of the animation. So it is suggested to go to your root folder and delete those after you're done.

## Authors

* *Mohit Verma*
[GitHub](https://github.com/mohit155)
* *Yashwanth Soodini* [GitHub](https://github.com/yashwanthsoodini)
