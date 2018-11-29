[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

# First Contributions into Node Express Server App

So let's start your journey! Journey into Node.js world. In here you will make Your first contribution into open source project!
Here you will learn how to create route in Node Express server.

- What is Node.js [About Node.js](https://nodejs.org/en/about/)
- What is Express.js [About Express.js](https://expressjs.com/)

## Requirements

To start with Node.js you have to install it on Your machine. Choose the LTS - Long Time Support - version of installer [get Node here](https://nodejs.org/en/)
To make your first contribution you must have git installed [get git here](https://git-scm.com/downloads)

## Fork

First step in Your contribution process is to fork this repository. Click on the "Fork" button on the top of this page. After that this will create a copy of this repository in your account.

## Clone

To clone the repository on your local machine, go to your GitHub profile, open repository that you just forked, click on the clone button then copy the link.
After that, open a terminal and run this command:

```
git clone "copied_url"
```

"copied_url" is a url that you copied from your forked repository

## Create new branch

At first you have to change repository directory on your machine:

```
cd node-express-contribution
```

Next, to create a new branch run this command in your terminal:

```
git checkout -b <new-branch-name>
```

where "new-branch-name" can be your GitHub name, for example:

```
git checkout -b MarekDzw
```

## Add your route in Node Express Server

Now starts the real work! You will create your own route on server!!
In your terminal go inside "server" folder. To do this run the following command:

```
cd server
```

Now you need to install all dependencies needed to run Node Express app.
In terminal run this command:

```
npm install
```

Wait for installation to complete.

Now open your code editor and go to the "server" folder.
Inside code editor open "app.js" file.
To create a new route do the following steps:

- Copy this line and paste it below "Add route require below" commented line:

```
let Your_GitHub_Name = require('./routes/Your_GitHub_Name');
```

where "Your_GitHub_Name" is your GitHub profile name for ex. MarekDzw

- Next step is to add the route. Copy this line and paste it below "Add route below" commented line:

```
app.get('/Your_GitHub_Name', Your_GitHub_Name.profile);
```

where "Your_GitHub_Name" is your GitHub profile name for ex. MarekDzw

Save the file!

Now, in your code editor, open "route-template.js" file and copy whole code.
Next step is to create route file.
To do that open "routes" folder and add new ".js" file.
Here is an exapmle:

```
Your_GitHub_Name.js
```

where "Your_GitHub_Name" is your GitHub profile name for ex. MarekDzw
Then open this file that you just created and paste the code you copied from "route-template.js"

Now, inside "Your_GitHub_Name.js", change the following line:

```
res.send('Your_GitHub_Name Your_GitHub_Link');
```

where "Your_GitHub_Name" is your GitHub profile name and "Your_GitHub_Link" for the link to your GitHub profile/repository
Then just save!

## See your new route!

To see your newly created route in terminal (inside "/server" folder) run this command:

```
node server.js
```

this will create a local server.
Now open [http://localhost:3000/](http://localhost:3000/) in your browser.
To see your own route at endpoint to url, which should looks like this:

```
http://localhost:3000/Your_GitHub_Name
```

where "Your_GitHub_Name" is your GitHub profile name.
Hit Enter! Now server will go to your route! You should see your linked GitHub name!

## Push changes to GitHub

Push your changes using the command `git push`:

```
git push origin <new-branch-name>
```

replace "new-branch-name" with the name of branch you created earlier.

## Submit your changes

If you go to your repository on GitHub, you'll see a "Compare & pull request" button. Click on that button. Next hit "Create pull request".
Now just wait for merge, which I will do, to merge all your changes into the master branch of this project.

## Learn Node:

[More Node/Git/JS tutorials](https://nodeschool.io/)
