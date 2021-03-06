# Portfolio
## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description
Aggregate code I've learn so far in my bootcamp. Well more than just that, I want to use the basics I've learn to make something cool.

## Google Sheet

Include link to your google sheet here. [Link](https://docs.google.com/spreadsheets/d/12ayaNOj50jTxSo0pVE2Rl60CJYdHl0UspqmoAOqjSmY/edit#gid=0)

*Note: the above link is the google sheet we made in class, it will be refactored for the portfolio project.

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile & Desktop](https://i.imgur.com/ZjGYgql.jpg)

## Time/Priority Matrix 

[Link](https://i.imgur.com/ydBSNMd.jpg)


Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Hamburger | M | 2hr | -hr | 2hr|
| Project Thumbnails | H | 3hr | -hr | 2hr|
| Regular Nav | M | 1hr | -hr | 1hr|
| Contact Form | M | 4hr| -hr | 2hr |
| Grid, Flex and CSS| H | 5hr | -hr | 5hr|
| Working with API | H | 2hr| -hr | 2hr |
| Total | H | 17hrs| -hrs | 14hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Banner Animation | M | 3hr | -hr | -hr|
| Bootstrap | L | 3hr | -hr | -hr|
| Overlays | L | 3hr | -hr | -hr|
| Social Media Icons | L | 2hr | -hr | 1hr|
| Total | H | 11+hrs| -hrs | 1hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

 JQuery
 Bootstrap
 Fontawesome

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function app(projectsArr) {
        projectsArr.forEach( project => {
            let title = $('<div>').text(project.title).addClass('project-card')
            let image = $('<img>').attr('src', project.image).attr('alt', 'Project Image').addClass('project-image')
            let description = $('<p>').text(project.description).addClass('project-desc')
            let url = $('<a>').attr('href', project.url).text('VIEW').addClass('project-link')
            $projectsLinks.append(title)
            title.prepend(image).append(description).append(url)
        })
    }
```
There really wasn't a lot of code in my project, but I wanted to talk a little about the snippet above. The code above is an expanded version of what we did in class. I was intimidated by the prospect expanding this out to be able to pull data from our google sheets. What really surprised me is when I got to this point in the project was how intuitive it was to implement. All the hard parts were done in class, I just needed to logically repeat the process for the additional entries. I'm mostly happy at the fact I didn't over think it.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

```
**ERROR**: The internal links were broken and did not redirect the user to the correct portion of the page                                

**RESOLUTION**: After discussing the problem with a classmate, discovered that the <a> has to be <a href="id"> not ,<a href="class">. I guess in hindsight that makes sense, you shouldn't have a single link potentially point to multiple sections on a page.

```
-----
```
**ERROR**: My images and url data pulled from the google sheet only displayed the alt information

**RESOLUTION**: While I was certain that my google sheet was pulling data I could not figure out for the life of me why the images weren't displaying in the project cards and the urls links were broken. After watching a classmate talk about their code during a standup I realized I had a syntax error. I had inadvertly turned the data variable into a string. 

let image = $('<img>').attr('src', 'project.image').attr('alt', 'Project Image').addClass('project-image')
instead of
let image = $('<img>').attr('src', project.image).attr('alt', 'Project Image').addClass('project-image') 
```