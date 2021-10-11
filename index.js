// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path')


// TODO: Create an array of questions for user input
const questions = [
	{
		type : 'input',
		name : 'title',
		message : 'What is the title of your project?',
	},
	{
		type : 'input',
		name : 'description',
		message: 'tell me what is this project about ?'
	},
	{
		type : 'input',
		name : 'installation',
		message: 'what is the installation instruction?'
	},
	{
		type : 'input',
		name : 'usage',
		message: 'what is the user know using this application?'
	},
	{
		type : 'input',
		name : 'contributing',
		message: 'What does the user need to know about contributing to your application?'
	},
	{
		type : 'list',
		name : 'license',
		message: 'Please select one of these GitHub licenses? (if no license is needed select none)',
		choices:['MIT', 'APACHE 2.0', 'GPL', 'BSD', 'none']
	},
	{
		type : 'input',
		name : 'test',
		message: 'How does the users test your application?'
	},
	{
		type : 'input',
		name : 'github',
		message: 'What is your github username ?'
	},
	{
		type : 'input',
		name : 'email',
		message: 'What is your email address?'
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then(function(responses){
		writeToFile('README.md', generateMarkdown(responses))
	})

}

// Function call to initialize app
init();
