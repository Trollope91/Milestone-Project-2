# Luke's Portfolio

## User-Centric Front end Development Milestone Project.

![Project_image](/assets/documentation/project-image.png)

The Website presents my portfolio as a full stack web developer, prospective employers and partners will be able to access my skill and find out information relating to my self, as well as contact me and find social links to other platforms.

This project is for educational purposes only.

The main aim of this project is to build a responsive website that uses HTML and CSS as well as some elements from bootstrap powered by some java script

## [View luke's portfolio in github pages](https://trollope91.github.io/Milestone-Project-One/)
---

# UX

## Website owner business goals

The main goal of the website is to present myself as a competent developer displaying my skills within the site and through the quality of it's design. Also the user will be able to request contact through email, find my other social links and download a CV through a link on my about me page. 

## User goals

### New user goals:
- user is able to find information about myself and what I offer
- user can easily navigate the site and find the information relevant to them
- find a CV, contact me, browse my skills or find my other social spaces.

## User stories

### As a business owner:
* I would like to present my skills to the prospective employer or partner in the best light possible
* I need to make sure that the prospective employer can easily find the relevant information they need.
* I want the prospective employer to be able to see my level of ability through the quality of the website itself
* I would like to be able to arrange new social links and relationships through requested contact.

### As a new customer:
* I wish to find information about the candidate.
* I would like to contact the site owner easily.
* I would like to be able to find all relevant information needed on the page.


## Structure of the website

The website is designed to be simple and effective displaying competent use of HTML and CSS with attention to UI and UX, it will be responsive and adapt to all resolutions shifting layout and size to accomodate mobile, tablet and desktop. the page is designed in a one page layout with smooth scrolling and animation to denote the links and interactive elements on the page.

## Wireframes

I used the balsamiq programme to create the initial wireframes.

![Mobile-Wireframes](/assets/documentation/mobile-wireframes.png)

![Mobile-Wireframes](/assets/documentation/desktop-wireframes.png)

### Changes

Initially the site was to contain a dedicated contact me section but I thought with the links in the footer I could add a modal to the intial home page for a better use of space and look overall.

### Colors

Main colours used in a project:
Text in paragraphs: Azure
Brand and headers: rgb(161, 152, 17,)


### Fonts 

* As a main font I used Cormorant, and as a backup font sans-serif

### Images

* I used mostly original images modified with photoshop to create my website

___
# Features

The website consists of 4 pages, a home, skills page, about me and a project page headed by a floating nav bar and footed with a small section that contains a brand and social links

The website has below features:

## Navigation bar

* #### Navigation bar is fixed to the top of the screen and conforms to the resolution of the device it is used on relegating to a hamburger button and removing the email contact button for a better look

    * On left side there is a brand logo. It can be used as navigation link to the main page.
    * On right side there are four links or burger menu. It contains:
       *Skills
       *About me
       *Projects

       ![project images](/assets/documentation/project1.png)

## Footer

* Footer has social links centered as icons that animate upon hover. 

![project images](/assets/documentation/project6.png)

## Home

* Home is designed to display design skills and be an immediate introduction to myself and the level of skill at which I currently operate with the ability to contact me via an email modal.

![project images](/assets/documentation/project2.png)

## Skills

* Skills page gives a bit more specific insight into my current level of knowledge and experience.

![project images](/assets/documentation/project3.png)

## About me

* About me gives information about myself my professional background and where I aspire to take my career

![project images](/assets/documentation/project4.png)

## Projects 

* projects page contains a list of the works I have created as an example for prospective employers.

![project images](/assets/documentation/project5.png)

##  Future implementations

* A method to arrange a live meeting 

___
# Technologies used

### HTML5
* As a structure language.

### CSS
* As a style language.

### Bootstrap 
* Bootstrap@4.6.2 as a CSS framework to keep responsive, mobile first aproach.

### Font Awesome
* As an icon library for a social links.

### Google fonts
* As a font resource.

### GitHub
* As a software hosting platform to keep project in a remote location.

### Git
* As a version-control system tracking.

### Gitpod
* As a development hosting platform.

### Balsamiq
* As a wireframing tool.

### Photoshop CS2
* As an image editor.



___
# Testing

## Functionality testing 

 I used Chrome developer tools throughout the project for testing and solving problems with responsiveness and style issues.

## Media Query / Resolution testing 

 ![resolution test](/assets/documentation/resolution-test.png)


## Compatibility testing
 Site was tested across multiple virtual mobile devices and browsers. I checked all supported devices in Chrome developer tools. 
 
 I tested on hardware devices such as: Dell Latitude with Windows OS's, Huawei P30 smartphone with Android OS on google chrome browser and samsung A7 lite with Android OS.

![Mobile test](/assets/documentation/mobile-hardware.gif)

## User stories testing

### As the Site Owner:

- I would like to present myself and my skills to prospective employers.
    > Site immediately loads into a well designed hero page with functioning animations and nav bar.
- I need to make sure that prospective employers are able to navigate the site and easily find what they are looking for 
    > Site is easy to visually navigate with links that take the user to the relevant areas of interest.
- I want prospective employers to be able to find me on other social platforms easily
    > Footer contains animated icons that link to my other relevant platforms of contact.
- I want prospective emplyers to be able to see my relevant projects that show my experience and skills
    > Project sections contains most relevant pieces of work and about me section contains a link to download a CV for a more in depth look at my professional qualifications.

    ![User story test](/assets/documentation/user-story.gif)

### As a new customer:
- Wish to find relevant information relating to the site owner
    > user is presented with all relevant navigation information and a contact me prompt upon starting the site.
- I would like to see the relevant skills the site owner has.
    > user can find a more in depth description of the fields that I operate in within it's own page.
- I want to find out more about the site owner as an individual.
    > The about me section provides a more in depth backstory regarding myself as an individual and my career aspirations, as well as as button that allows the user to download a CV.
- I want to be able to contact the site owner.

![User story test](/assets/documentation/user-story2.gif)
    
---
## Issues found during site development

I had issues targeting the specific parts of bootstrap which lead to a few issues that I rectified by different means 

when trying to change the brand name to the site specific colors and add an animation on hover I found the only way to rectify it was to use inline styling to circumvent the issue

`style="color: rgb(161, 152, 17); font-size: xx-large;" onmouseover="this.style.color='#d4c715'" onmouseout="this.style.color='rgb(161, 152, 17)`

* #### 
![testing_issue_1](/assets/documentation/brand.png)
![testing_issue_1](/assets/documentation/brand2.png)

when attempting to remove the stock boot strap color schemes with my own I decided to use the built in (btn-dark) feature to create a cohesive and intentional feel to the design.
* #### 

![testing_issue_2](/assets/documentation/modal-submit.png)
![testing_issue_2](/assets/documentation/modal-submit2.png)


## Performance testing

I run [Lighthouse](https://developers.google.com/web/tools/lighthouse/) tool to check performance of the website.

![Performance-desktop](/assets/documentation/response-desktop.png)
![Performance-mobile](/assets/documentation/response-mobile.png)

## Code Validation
 At the and of the project I used two websites to validate a code
 
 * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to validate CSS
 * [Nu Html Checker](https://validator.w3.org/) to test HTML

 ![Html-validation](/assets/documentation/html-check.png)
 ![Css-validation](/assets/documentation/css-check.png)



___
# Deployment

The project was deployed on GitHub Pages. I used Gitpod as a development environment where I committed all changes to git version control system.

## Repository

https://github.com/Trollope91/Milestone-Project-One

## Live link

https://trollope91.github.io/Milestone-Project-One/

## Copying the repository

A user can make a local copy of my repository by going to the GitHub repository page of my project and clicking on the "Code" button which will open a dropdown menu, select the protocol (HTTPS or SSH) for the clone URL and copy it to the clipboard.
Open a terminal on their local machine and navigate to the directory where they want to store the project then type the command "git clone" followed by the URL they copied in step 3, and press Enter.
Wait for the cloning process to complete.

## Clone link

https://github.com/Trollope91/Milestone-Project-One/archive/refs/heads/main.zip


## Forking the repository

To fork the repository the user can go to the GitHub repository page of the project and click on the "Fork" button in the upper right-hand corner of the page, select the account they want to fork the project to and then wait for GitHub to create a copy of the project in their account.
Once the fork is complete the project will be available under their account with the option to clone to their local machine.

___
# Credits


* To complete this project I used Code Institute student template: [gitpod full template](https://github.com/Code-Institute-Org/gitpod-full-template)

* Ideas and knowledge library:

    * [w3schools.com](https://www.w3schools.com)

    * [css-tricks.com](https://css-tricks.com/)

    * [getbootstrap.com/docs](https://getbootstrap.com/docs/4.6.2/getting-started/introduction/)
        I used code for navbar from Bootstrap.

### Code

* Bootstrap: [Burger menu](https://getbootstrap.com/docs/4.6.2/components/navbar/#text)

### Images:

back ground of project 1

https://www.pexels.com/photo/turned-on-silver-imac-with-might-mouse-and-keyboard-930530/ project image

boxing image

Photo by Andrea Piacquadio from Pexels: https://www.pexels.com/photo/close-up-photography-of-man-wearing-boxing-gloves-927437/

gaming image

Photo by Lucie Liz from Pexels: https://www.pexels.com/photo/flatlay-of-gaming-equipments-3165335/

fashion image 
 
Photo by Godisable Jacob from Pexels: https://www.pexels.com/photo/woman-in-brown-and-gray-t-shirt-sitting-on-brown-wooden-table-949670/

keyboard image 

https://www.pexels.com/photo/grey-laptop-keypad-60626/