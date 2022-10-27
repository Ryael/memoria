# Memoria

### A website for a memory-card game, allowing users to improve their short term memories while having fun.

[Memoria - Live Website](https://ryael.github.io/memoria//)

Memory is a fundamental part of our lives. Without memories, our perception of time would be distorted and lose most of its meaning. Short term memory, however, while not as grandiose or important, still holds significant meaning. It's our to ability to recall recent experiences, knowledge, and emotions, paving the way for those short term memories to become long term memories. That doesn't, however, mean that this improving our memory needs to be a chore! In fact, it can be a lot of fun.

Growing up, I was always fond of browser based games and spent many a day on the computer playing all sorts of mini-games on the family computer. Out of those mini-games, my personal favourite was memory card games where you're presented with a set amount of images and upon interaction with them, they will flip up and reveal what sort of design is hidden underneath. Your objective is to memorise which designs are where and match up pairs, until the entire board is matched. It's quite simple in theory but it can also put your short-term memory to the test, and it definitely is fun to see how well you can push yourself to achieve the fastest time possible. Without cheating, of course! Nobody likes cheaters and I believe that you aren't a cheater!

![AmIResponsive Mock-up Image](docs/screenshots/responsive.png)

This is my second milestone project as part of Code Institute's Diploma in <strong>Software Development (E-commerce Applications)</strong>.

I decided to create an interactive memory-card game using JavaScript that used emoji icons as its hidden images. The key term I'd use to describe the pool of emoji chosen is "traditional role-playing game concepts". This includes but is not limited to: bow-and-arrow, bomb, fire, water, lightning, ribbon, puzzle-piece, anchor, and die. The idea here was to evoke a sense of traditional fantasy concepts that feels familiar, straightforward, and cozy.

This website is a single-page-application (SPA) that has a consistent design throughout all its content and is both simple and pleasing to navigate. Content is either toggled between displayed and hidden as necessary, or is generated and destroyed via the use of JavaScript. All content present adheres to my themeatic vision and only contains what is necessary. My vision for this website was for it to feel and act like an application, which is why transitions were added to make the process of navigating the menus as smooth and pleasant as possible. The content includes the memory game itself available on three different difficulities, a main menu, a rules and difficulty menu, a leaderboards section showing the top ten players for each difficulty via another menu, a credits section with instructions on how to report bugs and attribution links for the images used, and links to my social media in the footer.

The website is fully responsive at all screen sizes, adapting well to smaller resolutions for tablets, phones, and even landscape view on the aforementioned. It also works as intended on all popular web browsers. 

## Table of Contents

1. [Project Goals](#project-goals)
    - [User Goals](#user-goals)
    - [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    - [Target Audience](#target-audience)
    - [User Stories](#user-stories)
3. [User Interface](#user-interface)
    - [Design Philosophy](#design-philosophy)
    - [Fonts](#fonts)
    - [Wireframes](#wireframes)
4. [Features](#features)
5. [Validation](#validation)
    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
6. [Testing](#testing)
    - [Accessibility](#accessibility)
    - [Performance](#performance)
    - [Device Testing](#device-testing)
    - [Browser Compatibility](#browser-compatability)
    - [Testing User Stories](#testing-user-stories)
7. [Bugs](#bugs)
8. [Future Updates](#future-updates)
9. [Deployment](#deployment)
10. [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks & Tools](#frameworks-&-tools)
11. [Credits](#credits)
12. [Acknowledgements](#acknowledgements)

## Project Goals

The aim of this project is two-fold:
- To demonstrate my knowledge of JavaScript in tandem with HTML and CSS, to document my experiences, difficulties, and solutions developed. No other languages or frameworks were used in the development of this project.
- To adhere to my thematic vision of a SPA from a UI/UX perspective, creating a website that allows for an enjoyable experience for anyone visiting the website. 

### User Goals

- Find a mini-game that can distract you for a short period of time
- Find a mini-game that can help train and improve your short-term memory
- Find a mini-game that kids can enjoy while training their short-term memory
- Find a mini-game with a sense of progression in terms of difficulty
- Find a clear and concise elaboration of the game-rules and how to play
- Find the developer's contact details
- Contact the developer about any bugs, game-breaking or otherwise
- Read about how to report bugs and where the images were found
- Check to see if they have created any other games

### Site Owner Goals

- Provide an enjoyable mini-game that has memory benefits
- Provide different difficulites, creating a sense of progression
- Provide feedback to the player after they finish a game
- Create a smooth experience in navigating the menus
- Provide a clear explanation of the game rules and difficulty
- Provide links to the developer's social media should players discover any bugs
- Make the website responsive for mobile devices, as [over 50% of traffic comes from mobile users](https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/)

[Back to Top &uarr;](#memoria)
<hr>

## User Experience 

### Target Audience

- People who are looking of an enjoyable way to train their short-term memory
- People who are looking for a quick break in an otherwise hectic lifestyle
- People who are looking for a mini-game that's simple enough that kids of any age can play
- Fans of memory card games
- Fans of traditional fantasy concepts
- People who are looking for a mini-game with an escalating level of difficulty

### User Stories

#### First Time Visitors

1. As a first-time visitor, I want to easily understand the main purpose of the game.
2. As a first-time visitor, I want to easily navigate the menus without getting lost.
3. As a first-time visitor, I want to learn about the developer.
4. As a first-time visitor, I want to learn where the images were gotten from.
5. As a first-time visitor, I want to learn what the game-rules are.
6. As a first-time visitor, I want to know what difficulities are available to me.
7. As a first-time visitor, I want to feel engaged when playing the game.
8. As a first-time visitor, I want to be provided visual feedback upon beating a round.

#### Returning Visitors

9. As a returning visitor, I want to quickly check if the game has been updated.
10. As a returning visitor, I want to quickly check if any new difficulties or game modes have been added.
11. As a returning visitor, I want to check if any other new featues have been added.
12. As a returning visitor, I want to see if the UI has evolved.

#### Site Owner

13. As the site owner, I want to clearly showcase the memory game.
14. As the site owner, I want users to be able to navigate the menus smoothly and easily.
15. As the site owner, I want to adhere to a specific vision and provide users with a very engaging game via its design and imagery.
16. As the site owner, I want to provide a clear explanation of the game-rules and the different difficulties.
17. As the site owner, I want to provide the my social media contacts if users need to report a bug.
18. As the site owner, I want to provide attribution links to the website where I used images from.
19. As the site owner, I want to provide players a fun and beneficial game that can be enjoyed by players of all ages.

[Back to Top &uarr;](#memoria)
<hr>

## User Interface

### Design Philosophy

The design of this website began with a simple vision: I wanted to craft a clean and simple SPA with that was based on the old predominately [blue PS3 home theme](). With this as my core inspiration, the overall design of the website began to take form in my mind's eye. My idea was to find and use an image as the background that had a smooth and stuble light-blue to dark-blue gradient. After much searching I found [this lovely specimen on Freepik](https://www.freepik.com/free-vector/gradient-particles-background_4298560.htm#query=gradient%20particle%20background&position=0&from_view=search&track=sph). It has that exact colour-scheme and wave-like particles that I had in mind, after some manipulation I arrived at the current [background image](). This, combined with some simple and sleek visual menu elements is what makes the foundation of this project. I had hoped for the end result to be a combination of flashy and clean, which is a difficult balance to achieve but I think I was mostly successful and quite happy with the visual end result overall.

All sections of the website follow a similar structure with the "Memoria" title at the top of the page, the footer with the social icons at the bottom, and all interactive elements have similar hover/focus effects wherein they fade-in on mouse-over/interaction and fade-out gently on mouse-leave. This is done to establish a consistency throughout the website such that users become familiar with how interactive elements respond. The rules & difficulty, leaderboards, and credits section have a white with a slight hexagonal pattern as their main element as they contain text elements. Otherwise, the game portions of the website all possess complementary elements to the rest of the site, creating a sense of flow familiarity for new users.

On smaller viewports, the content expands to 80-100% of the width to reduce user scrolling burden and to allow for easier viewing. The exception to this is the memory game itself. On the easy and normal difficulties, the game-board always keep to a square ratio. However, on the hard difficulty, the game-board takes the shape of rectangle to best use as much of the available vertical space. This is intentional, as otherwise the cards become far too small on smaller resolutions to interact with and would be an accessibility nightmare.

You can find the images used for all the backgrounds below:

<details>
    <summary>Website Background</summary>
    <img src="docs/features/hero-image.jpeg" alt="Background image used for website">
</details>

<details>
    <summary>Game Background</summary>
    <img src="docs/features/hero-small-image.png" alt="Background image used for the game-board">
</details>

<details>
    <summary>Settings Background</summary>
    <img src="docs/features/404.jpeg" alt="Background image used for the settings windows">
</details>

### Colours 

No pre-set colour palettes were used in the designing of this website. My goal was to create a monochromatic look, focusing mostly using shades of black, white, and grey. My vision was to have the site feel simple, clean, but also fancy and packing a bit of a flavourful punch.  I wanted to focus on primarily three colours: blue, white, and purple. Shades of blue are used to establish structures and give form to the most important structures in the background, the game itself, and the game background. White is mainly used as the font and the buttons. Purple is used as an accent to the blue, often being being used the link and highlight colour. [Color-Name](https://www.color-name.com/) was used to find slightly lighter and darker shade variations of the colours used for this project. The text content is primarily dark-blue on a white background with darker titles. Buttons and their text elements are either entirely white that transition to purple or vice versa.

### Fonts

The fonts I chose for this project are Jost and Fredoka. Fredoka is the font for the general content, whereas Jost is used for title content. Prior to Jost, I had chosen and used Josefin Sans as my title font of choice. I saw it used [as a title here](https://elementor.com/blog/font-pairing/) and decided it was that geometric and retro look I wanted to introduce the user to the website. However, it unfortunately had uneven padding on its top and bottom, which is simply just how the font was designed. This made it very difficult to creative even padding areas. As such, I ended up looking for a similar font and fortunately Jost is visually very similar, and in fact, the shape of the capital "M" is even better than what Josefin Sans had to offer. 

Fredoka was chosen because of it's round edges and overall bold and daring appearance. It epitomises "fun" and I figured this was perfect for text content a for browser game website. They complement each other well although I hadn't found any pairings that used these too before. I think this is a pretty specific case that works which otherwise wouldn't work if the design philsophy was more minimalistic.

Font-weights of 300, 400, and 600 were chosen for Jost and font-weights of 400 and 500. 400 was used as the default for both. 600 was used for a bit more weight and clarity, primarily in titles and especially the "Memoria" page title.

### Wireframes

The conceptualisation of the layout used in this project began with simple pen and paper sketches, which were then transformed into wireframes via Balsamiq. Everything shown here is a rough beta of the layout, some of which has changed during development.

This is the prototype of the project, which changes over the course of project development.

<details>
    <summary>Main Menu</summary>
    <img src="docs/wireframes/main.png" alt="Wireframe of the Main Menu">
</details>
<details>
    <summary>Settings Window</summary>
    <img src="docs/wireframes/settings.png" alt="Wireframe of the Settings Window">
</details>
<details>
    <summary>Game Board</summary>
    <img src="docs/wireframes/game.png" alt="Wireframe of the Game Board">
</details>

[Back to top &uarr;](#memoria)
<hr>

## Features

### Header Title

![Navigation Bar](docs/features/navigation-bar.png)

Every single page on the website has this Navigation Bar at the very top. Due to the darker hero-images behind it, it is easy to see even if the bar itself is fully transparent. It is very simple and intuitive, focusing primarily on the function of allowing users to effectively navigate the website. The current page is highlighted in a white brighter than the rest of the links, which are displayed in a more grey colour. The Victory Fitness logo is a link that re-directs the user to the Home page. For smaller viewports, a hamburger menu appears with a black background, to make the links easier to see and interact with. This makes it fully responsive across all viewports.

![Hero Image - Home](docs/features/hero-image.jpeg)

This hero image is the foundation upon which the entire website was built. It perfectly encapsulates the brand and vision of Victory Fitness in a single image. It is the very first thing new users see, and ultimately is the deciding factor in whether new users will continue to interact and explore or click off the website. First impressions hold a lot of power and that's why a good first impression is incredibly important. This is a crop of a full image that puts focus on the white letter "V" with the red logo V itself, which draws the user's attention towards the middle of the screen. This is further enhanced by the two coaches standing side by side, making sure the user's eyes do not stray from where they are visually directed. That brings the user to the Victory Fitness text logo, and subsequently, the address of the gym. With just one look, in a matter of seconds, the brand and reputation of the gym is established. This allows the user to form an impression, as well as understand where the gym is located. Further, a ‘Call to Action’ button is located under the address, which brings them to the Contact page, where they can avail of a 7-Day Free Trial.

![Home Page - First Half](docs/features/home-part1.png)

The first half of the Home page is a relatively simple section as it offers the user a bit more information about the gym, its ethos, and the services being offered. The full-width image is used to great effect in creating contrast between the white sections above and below. This also helps to break up the text-only content. A button is also present, which inverts its colour schemes upon interaction, giving the user a direct means of accessing the coaching page.

![Home Page - Second Half](docs/features/home-part2.png)

The second half of the Home page continues the brief introductory content of the first half, providing reasons as to why this gym is worth choosing. This was a direct request from Ronan Kiely, who believes in selling what makes your gym and services special. He dislikes transformation pictures as they tend to convey to the user that the only thing that matters is the end results. However, Ronan feels that there is so much more to it than that – for instance, the journey, the starting point, and the struggles. For this reason, there's no section showing transformations or successes. They may bring great business, but this brand prefers to focus on other aspects of their clients’ fitness journeys.

Below that, there is another section with a full-width background image that helps to break up the text whilst simultaneously showcasing the gym. This section informs the user of a 7-day no commitment free trial, with a ‘Call to Action’ button below that brings them to the Contact page where they can learn more.

![Footer](docs/features/footer.png)

Like the Navigation Bar, the Footer is present across all pages. It is fully responsive across all viewports and houses three icons that provide links to Victory Fitness's social media accounts and email. These buttons change colour upon interaction, and the links all open in a new page so the user isn't forced to leave the website and can continue exploring. Below these icons is a line of text that describes Victory Fitness as the copyright holder for this website.

![Hero Image - Other](docs/features/hero-small-image.png)

As mentioned earlier, the About, Coaching, Gallery, and Contact pages utilise a much shorter hero image. This is to bring the user to the page content quickly and to make navigation more fluid, as having to navigate a full-height viewport image when loading each page can be cumbersome. This section also serves as a darker backdrop for the transparent navigation bar and houses location title text within, informing the user of the section.

![About](docs/features/about.png)

The About page provides the user with a detailed history of Victory Fitness, a more in-depth dive into their ethos as a gym and coaching service, which is supported by a photograph of the two coaches in the gym. The text content here uses the same amount of width as the image, providing a very fluid reading experience.

![Coaching](docs/features/coaching.png)

The Coaching page delves into greater depth regarding the coaching services offered. It's broken up into three sections: 1) Premium Coaching, 2) Semi-private Coaching, and 3) Online Coaching. Each of these sections has a photograph accompanying them. This helps to break up the text and prevents information overload. Consistent with the About page, the width of the text content never exceeds the width used by the images.

![Gallery](docs/features/gallery.png)

The Gallery page is dedicated to showcasing the gym and all of the available equipment and facilities, allowing the users to see the gym for themselves through the professional photographs. The images are displayed in two columns and are fully responsive across all viewports, shrinking down to one column as the viewport grows narrower. 

![Contact - Form](docs/features/contact.png)

The Contact page allows users to get in touch with Victory Fitness directly via filling out the online form. Users are also educated about the free trial and can avail of it through the form. The form has both labels and placeholder text in place, ensuring both accessibility and clarity. A line of text below the form-fields informs the user that all fields are required to be filled for the form to be successfully submitted. The details submitted are not stored, as the user is simply redirected to the Thank You page.

![Contact - Map](docs/features/google-map.png)

The Google Maps section of the Contact page informs users of where the gym is located, should they want to see it first-hand. Photographs are beneficial but seeing the location in person is preferred. A face-to-face conversation with one of the coaches is also a possibility, which tend to be a bit more personal, warmer, and more comfortable than online correspondence. The embed for this maps section is provided by Google itself. Unfortunately, the Google Maps section didn't make it into the final build. It was instead replaced by a static image of the location due to major performance issues.

![Thank You](docs/features/thank-you.jpeg)

After successful completion of the form on the Contact page, the user is redirected to this page. This contains a simple ‘Thank You’ message that lets them know their message was received successfully and someone will be in touch with them shortly. Any details submitted are not stored. This page employs the same sort of approach as the Home page, using a full-screen hero image with text overlayed on top of it. It differs in that the opacity is increased to 50% to bring the viewer's attention to the message.

![Error 404](docs/features/404.jpeg)

Should the user navigate to a page that doesn't exist, an HTTP 404 error will occur. Upon doing so, the 404 Page will be loaded, informing the user that this page does not exist. All the usual means of navigation are present in the Navigation Bar and the Footer, but with the addition of a button to take them home. This is located under the error text. This page employs the same approach as both the Home and Thank You pages, using a full-screen hero image with text overlayed on top of it.

![Favicon](docs/features/favicon.png)

As with all websites, this one also has a favicon that is displayed beside the title of the page. A user can discern what pages they have opened or are currently viewing by simply glancing at the tabs and titles.

[Back to top &uarr;](#memoria)
<hr>

## Validation

### HTML Validation

[W3C Markup Validation Service](https://validator.w3.org/nu/) was used to validate HTML code. No errors were found. Please see the summaries below for the results.

<details>
    <summary>Home</summary>
    <img src="docs/validation/home-validation.png" alt="Validation of Home page">
</details>
<details>
    <summary>About</summary>
    <img src="docs/validation/about-validation.png" alt="Validation of About page">
</details>
<details>
    <summary>Coaching</summary>
    <img src="docs/validation/coaching-validation.png" alt="Validation of Coaching page">
</details>
<details>
    <summary>Gallery</summary>
    <img src="docs/validation/gallery-validation.png" alt="Validation of Gallery page">
</details>
<details>
    <summary>Contact</summary>
    <img src="docs/validation/contact-validation.png" alt="Validation of Contact page">
</details>
<details>
    <summary>Thank You</summary>
    <img src="docs/validation/thank-you-validation.png" alt="Validation of Thank You page">
</details>
<details>
    <summary>404</summary>
    <img src="docs/validation/404-validation.png" alt="Validation of 404 page">
</details>

### CSS Validation

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) was used to validate CSS code. No errors were found. 

<details>
    <summary>Style Page</summary>
    <img src="docs/validation/css-validation.png" alt="Validation of the CSS Style page">
</details>

[Back to top &uarr;](#memoria)
<hr>

## Testing

### Accessibility

[WAVE WebAIM](https://wave.webaim.org/report#/https://ryael.github.io/victory-fitness) was used to validate CSS code. One error was found, and this related to the hamburger menu having an empty label. This was fixed and is covered in the bugs section. Otherwise, there were some contrast errors that came up and they were simply fixed by increasing the colour of the fonts used. One such example was changing #777 to #575757, which now passes all accessibility checks.

Additionally, the address below the text-logo as well as the button on the Home page are flagged as contrast errors. This also concerns any text on an image-background on other pages. However, attempting to follow the suggestions provided by the tool seemed to impact actual accessibility negatively, despite satisfying the actual tool. Please find a screenshot example of the colour suggestion for said area. As such, these contrast errors will be disregarded as they are not picked up by Lighthouse.

<details>
    <summary>Contrast Error Example</summary>
    <img src="docs/testing/contrast-error.png" alt="Contrast error via the WAVE tool colour suggestion">
</details>

Below are the results for every page, with no errors present (aside from the disregarded contrast ones):

<details>
    <summary>Home</summary>
    <img src="docs/testing/wave-home.png" alt="Accessibility of Home page">
</details>
<details>
    <summary>About</summary>
    <img src="docs/testing/wave-about.png" alt="Accessibility of About page">
</details>
<details>
    <summary>Coaching</summary>
    <img src="docs/testing/wave-coaching.png" alt="Accessibility of Coaching page">
</details>
<details>
    <summary>Gallery</summary>
    <img src="docs/testing/wave-gallery.png" alt="Accessibility of Gallery page">
</details>
<details>
    <summary>Contact</summary>
    <img src="docs/testing/wave-contact.png" alt="Accessibility of Contact page">
</details>
<details>
    <summary>Thank You</summary>
    <img src="docs/testing/wave-thank-you.png" alt="Accessibility of Thank You page">
</details>
<details>
    <summary>404</summary>
    <img src="docs/testing/wave-404.png" alt="Accessibility of 404 page">
</details>

### Performance

Google Lighthouse was used to assess the performance of all webpages. All pages have a score of 100 Accessibility, 100 Best Practices, and 100 SEO across all devices. However, Performance seems to fluctuate between 72-95 for all pages. Multiple browsers have been used incognito to disable any extensions that could be potentially hindering performance. I investigated this, finding that webpages that had scores of 100 Performance also seemed to produce different results when I tested the websites on my end. Regardless, all webpages have been optimised for load speed and performance, netting in 85-92 scores across the board without any cherry-picking.

The results can be seen below.

<details>
    <summary>Home</summary>
    <img src="docs/testing/lighthouse-home.png" alt="Performance of Home page">
</details>
<details>
    <summary>About</summary>
    <img src="docs/testing/lighthouse-about.png" alt="Performance of About page">
</details>
<details>
    <summary>Coaching</summary>
    <img src="docs/testing/lighthouse-coaching.png" alt="Performance of Coaching page">
</details>
<details>
    <summary>Gallery</summary>
    <img src="docs/testing/lighthouse-gallery.png" alt="Performance of Gallery page">
</details>
<details>
    <summary>Contact</summary>
    <img src="docs/testing/lighthouse-contact.png" alt="Performance of Contact page">
</details>
<details>
    <summary>Thank You</summary>
    <img src="docs/testing/lighthouse-thank-you.png" alt="Performance of Thank You page">
</details>
<details>
    <summary>404</summary>
    <img src="docs/testing/lighthouse-404.png" alt="Performance of 404 page">
</details>

### Device Testing

The website was tested on many different devices, such as:

- Samsung Galaxy S10
- Samsung Galaxy S21
- MSI GE72 6QF Apache Pro
- iPhone 10
- iPhone 12
- iPad Mini (Landscape and Portrait)
- iPad (Landscape and Portrait)
- Vivo S1 Pro

### Browser Compatibility

- Mozilla Firefox
- Google Chrome
- Opera
- Safari
- Microsoft Edge

### Testing User Stories

1. As a first-time visitor, I want to easily understand the main purpose and ethos of the gym.
    - Upon navigating to the website, the user is automatically greeted with a clean and easily readable Navigation Bar to go to their page of choice. The Hero Image and ‘Call to Action’ button draws the user's attention and starts to establish the gym's brand and purpose.
    - At this point, users can navigate to another page, in this case About, or scroll down, both of which will delve into the ethos of the gym.

2. As a first-time visitor, I want to easily navigate the page to find all the relevant information.
    - The website was designed to be easy to navigate and fluid. The top of each page has a Navigation Bar, with clearly described links so the user has an idea of where they'll end up upon interaction.
    - There are ‘Call to Action’ buttons present throughout the website that help with funnelling the user into any topic they might be interested in.
    - Upon successful submitting of the form on the Contact page, the user is brough to a Thank You page. They then have the option to interact with the links on the Navigation Bar or the button below the thank you text.

3. As a first-time visitor, I want to learn about the gym and its history.
    - Upon reading the "Strive for Greatness" section on the home page, or even after they finish reading the home page, they can then navigate to the About page via the navigation links. Here, they can find more information on the gym, its ethos, and its history.

4. As a first-time visitor, I want to learn where the gym is located.
    - The user is instantly introduced to where the gym is located based on the title text present on under the Victory Fitness text logo on the home page.
    - Furthermore, there is a detailed Google map on the Contact page, allowing a solid understanding of the location.

5. As a first-time visitor, I want to know when I can book my session.
    - Due to the fluidic nature of the home page, the user will arrive at the Why Choose Us section which will provide details for session booking.
    - Additionally, through the About and Coaching pages, information is laid out in a way that makes the user understand that clients are put first and a time that suits them can be agreed upon.

6. As a first-time visitor, I want to know how to best contact the gym.
    - Once the user has read any page, they will find icons in the footer that link to the gym's social media accounts and email.
    - Additionally, if the user has navigated to the Contact page via the navigation links or the ‘Call to Action’ button on the Home page, they can find a form to fill out for a 7-day free trial.

7. As a returning visitor, I want to quickly check the coaching services offered and the differences between them.
    - Upon returning to the website, this information can be found via a ‘Call to Action’ button on the Home page, which directs the user to the Coaching page.
    - Here, the user is told about all the coaching services provided in great detail.

8. As a returning visitor, I want to quickly access all of the social media to find any changes in opening times.
    - This is made very easy by the inclusion of the Footer, which is present across all pages.
    - Here, the user may find links to the gym's Instagram and Facebook, which are their main social media accounts.

9. As a returning visitor, I want to check if the 7-day free trial offer is still available.
    - Returning to the website, all the user has to do is interact with the "Join Now" button on the Hero Image of the Home page, scroll down to see the Contact section which lists the current offer, or navigate to the Contact page which has the full details regarding the current ongoing offer.

10. As a returning visitor, I want to see if there are any new promotions available.
    - The newest promotions are always linked to with the ‘Call to Action’ button on the Hero Image of the Home page.
    - Alternatively, users are incentivised to contact the gym via the form on the Contact page. As such, there is always an offer present there to encourage this.

11. As a returning visitor, I want to easily find the location of the gym via the Google Map section.
    - This can be accomplished by navigating to the Contact page via the ‘Call to Action’ button portion of the Free Trial section on the Home page, or by interacting with the Contact navigation link.
    - Here, the user can find a detailed Google Map detailing where the gym is located.

12. As a returning visitor, I want to see if any professional photoshoots have been uploaded to the gallery since my last visit.
    - All new professional competitions and photoshoots will be uploaded to the Gallery page, which the user can easily navigate to using the links on the Navigation Bar.

13. As the site owner, I want to clearly showcase the different coaching services available and the differences between them.
    - This is easily accomplished by the Coaching page, which can be quickly accessed via ‘Call to Action’ button under the Coaching section, or simply navigated to using the Navigation Bar links.

14. As the site owner, I want users to navigate the website smoothly and easily.
    - The website has a very clear Navigation Bar, with easily seen links due to the contrast of the background and the colour of the links. This allows for a smooth navigation experience.
    - Each section is built to be fluidic and flow in a coherent manner where the user learns relevant information as they go through each section of each page.

15. As the site owner, I want to provide photographs of the inside of the gym and the facilities available.
    - The Gallery page accomplishes this, allowing the site owner to display whichever photos they may like to their userbase.
    - The Gallery page is also easily accessible due to the easy-to-use navigation links.

16. As the site owner, I want to provide contact details for users.
    - Users can find contact details through the address on the Home page, the social media accounts in the icons in the footer, and an online form on the Contact page.
    - Additionally, a Google Map is also present should the users want to make a trip to the gym in person.

17. As the site owner, I want to provide links to the gym's social media accounts.
    - The links to the gym's social media accounts are easily found and accessed through the footer, which is present throughout every page on the website. 
    - No matter where the user is, they are always just a short scroll away from accessing the social media accounts.

18. As the site owner, I want to provide users with a free, no commitment, 7-day trial upon filling out the online form.
    - Often it can be difficult to convince users to fill out forms as other communication can be easier and more readily available. However, a free trial is sufficient incentive for this.
    - This free trial can be viewed via the Home page in one of two ways: it can be accessed via the ‘Call to Action’ Join Now button on top of the Hero Image and/or it can be found in the Free Trial section, which also has its own ‘Call to Action’ button.
    - Lastly, the users can navigate to the Contact page via the Navigation Bar links, where they can find all the details regarding the free trial and the form.

[Back to top &uarr;](#memoria)
<hr>

## Bugs

1. Accessibility Error - Empty Label detected as part of the hamburger navigation menu. 
    - Fix: Add <span> with text inside the label, and attach a CSS class to this span that uses "display: none;".
    - This satisfies the error as the label is no longer empty, even if the content is never displayed.

2. Font Awesome Icons Displayed Incorrectly on Mobile - Icons seem to have been nudged slightly to the right and downwards.  This is a very minor visual bug. This issue only exists on mobile, specifically the Samsung Galaxy S10. I have been unable to recreate it with other mobile phones. This could have something to do with the OS of the S10. This display issue is the same with FA icons on all websites.
    - Fix: None. I have researched the Internet extensively and there is no documentation of this issue or any similar issues.
    - [Here](docs/screenshots/icon-bug.jpg) is a link to a screenshot of the issue. The icons are slightly off-center.

Otherwise, all bugs were due to my own code and were usually fixed as soon as identified due to the fact that they originated from my own mistake. No pervasive bugs, aside from the accessibility error described above.

[Back to top &uarr;](#memoria)
<hr>

## Future Updates

1. Sticky Navigation Bar - This was part of my vision for the website but I was unable to find a solution to this without relying on JavaScript. My vision is as follows: I wanted the Navigation Bar to be transparent when it was resting above the Hero Images, but once it left those regions, it would become an opaque black colour as it follows the user down the page.

2. Fullscreen Hamburger Menu - This is very difficult to accomplish without JavaScript and I found myself struggling with the current hamburger menu as is. My vision for this was to have the entire screen to be covered in white with links in black structured in a column appearing the middle.

3. Coaching Pricing Plan Comparisons - This was part of the plan for the website but I found myself not having the time necessary to bring this idea to light. Hence, I plan to work on it in the future and put it at the top of Coaching page, so users are available to compare plans with just a single glance.

4. Google Map - This was originally a part of the website but it caused major performance issues and hence was removed and instead replaced by an image.

5. Testimonials - This was originally a part of the plan for this project but unfortunately, Google Reviews aren't too easy to embed without having to pay for the service. The alternatives are well over my head but it's definitely something I'd like to look into in the future.

I'd like to revisit this project in the future after having learned more about JavaScript, especially if Ronan Kiely of Victory Fitness would be interested in using this website.

## Deployment

This project was deployed to GitHub Pages using the following steps:

1. Log in to GitHub and locate the repository: [Victory Fitness](https://github.com/Ryael/victory-fitness).
2. Locate the Settings button, and then click it.
3. Scroll down to the Pages section, which is found under "Code and automation".
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will then automatically refresh.
6. Scroll back to the top of the page to locate the now published website link.

It can also be forked via the following steps:

1. Log in to GitHub and locate the repository again, as described above.
2. At the top right corner of the repository, you will see a "Fork" button. Click on it.
3. You will then be asked where you want to save it, so choose a location.
4. You now should have a copy of this repository in your own GitHub account.

[Back to top &uarr;](#memoria)
<hr>

## Technologies Used

### Languages

- HTML 5
- CSS 3

### Frameworks & Tools

- [GitPod](https://gitpod.io) - IDE used to code and build this project.
- [GitHub](https://github.com/) - The repository was created here, is currently stored here, and was deployed via the GitHub Pages features.
- [Balsamiq](https://balsamiq.com) - Used to create wireframes.
- [Obsidian](https://obsidian.md/) - Used to take notes and create to-do lists.
- [Adope Photoshop](https://www.adobe.com/products/photoshop.html) - Used to crop, resize, and edit images.
- [W3C HTML Validator](https://validator.w3.org/) - Used to validate HTML code.
- [W3C JigSaw Validator](https://jigsaw.w3.org/css-validator/) - Used to Validate CSS code.
- [WAVE WebAIM](https://wave.webaim.org/) - Used to check accessibility.
- [Google Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) - Used to check performance, SEO, accessibility, and best practices.
- [Mozilla Firefox Developer Tools](https://www.mozilla.org/en-US/firefox/new/) - Used to check and test the project.
- [AmIResponsive](https://ui.dev/amiresponsive) - Used to create the Am I Responsive image mock-up.
- [FreeConvert](https://www.freeconvert.com/jpg-to-webp) - Used to convert .PNG to .WEBP.
- [TinyPNG](https://tinypng.com/) - Used to compress images.
- [Google Fonts](https://fonts.google.com/) - Fonts were imported from here.
- [Font Awesome](https://fontawesome.com/) - Icons are used from here.
- [Favicon.io](https://favicon.io/) - Used to create a favicon out of a .PNG.
- [ShareX](https://getsharex.com/) - Used to take screenshots.
- [Color-Name](https://www.color-name.com/) - Used to find complementary shades of colours used.
- [CoralNodes](https://www.coralnodes.com/best-google-font-combinations/) - Used to find Google Font combinations.

## Credits

1. [Victory Fitness](https://victoryfitnesstraining.com/?ad=ie) - This project was only possible due to Ronan Kiely letting me base this website on his business. He helped provide me with information, text, photographs, logos, advice, and direxction. All of the content belongs to Victory Fitness.
2. [Code Institute Template](https://github.com/Code-Institute-Org/gitpod-full-template) - This project was first based off the repository created by Code Institute. This template made it very easy to work with in GitPod.
3. [Alvaro Trigo](https://codepen.io/alvarotrigo/pen/MWEJEWG) - This codepen is what my own hamburger menu was based on due to me running into so many issues with trying to do it alone. Their code helped me understand how animations function with smaller icons in CSS, as well as how to use media queries to manipulate the navigation bar. The code has partially modified but otherwise the idea is taken from this codepen.
4. [Stack Overflow](https://stackoverflow.com/) & [W3Schools](https://www.w3schools.com/) - These two website were instrumental in me furthering my understanding of HTML and CSS.
5. [Code Institute](https://codeinstitute.net/ie/) - Last but certainly not least, this project wouldn't have been possible without the course and material presented there.


## Acknowledgements 

- Akshat Garg - Akshat is an absolutely amazing mentor that's friendly, knowledgeable, and helpful. He's been super helpful in providing me with suggestions and advice.
- My family and friends, who have been incredibly supportive and have been instrumental in keeping me motivated throughout this project. Thank you all so much! All of you who helped proofread, test, provide feedback on the UI, code, and etc... I couldn't have done it without you all!
- The Code Institute community on Slack - Easy, straightforward, and always willing to help and provide advice.
- Love Running - Ultimately, it wasn't until we went through this project that I realised that this was something I could do. A lot of the website is loosely based on it, too.