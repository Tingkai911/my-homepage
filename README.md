## My personal homepage build using React Framework.
Original template build by [Dennis Ivanov](https://github.com/divanov11/portfolio-website) using vanilia HTML/CSS and JavaScript. I have rebuild this homepage using React so that it is easier to update the contents of the webpage more easily.

# How to use this template?
First, you need to have node.js and React installed in your PC. Next, go to the command prompt and your desired directory and build a new project using "npx create-react-app". Finally, download this repository and replace the files inside your React Project.

# Layout of the project.
The homepage is split into different components. They are:
- Heading.js to display the name, profile and buttons to change between color themes
- About.js for a short introduction, download links to your resume and links to your socials and contacts
- Portfolio.js to display the projects that you want to show
- Project.js is the container insider Portfolio.js for each projects, directs users to ProjectDetauil.js
- ProjectDetail.js which contains the details, github repository links of your project
- Footer.js to direct users from the homepage to this repository

ContactForm.js is an incomplete implementation of a contact form. To be completed with React Hooks in the future. Each of the components are reusable and generally do not require further changes. One just have to edit the contents inside homepageData.json and import the appropriate images and resume in App.js to add/change the contents.

# How to edit or add new contents to this homepage?
Refer to homepageData.json. Add the desired description to the appporiate keys. **DO NOT change the keys or add new keys in homepageData.json.**
- "heading" corresponds to the contents displayed in Heading.js
- "about" corresponds to the contents displayed in About.js
- "project" corresponds to the contents displayed in Portfolio.js, Project.js and ProjectDetail.js
- "homepageRepository" is the link for the footer to direct users to this repository

After adding the contents in homepageData.json. Save all your images in src/images and resume in src/resume. Import the files in App.js accordingly according to the instructions in App.js.

All the CSS stylings are in src/css/default.css. Feel free to change the font size, background color and images to customise the webpage.

# How to run and deploy the homepage?
Run "npm start" in the command prompt to see the completed project. Refer to the [documentation](https://create-react-app.dev/docs/deployment/) by the React Developers on how to deploy the homepage to your desired host.
