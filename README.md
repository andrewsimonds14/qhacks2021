# QuickFit
## QHacks 2021 Submission
### By Andrew Simonds, Michael Kurdyla, and Matthew Tanel

![Logo](/src/assets/QuickFit.jpg)

## Installation instructions
- **git clone** the repository
- In the root directory run **yarn** to install dependencies
- run **yarn start** to start the React app
- Default browser will open the app and you can navigate around


## Inspiration
With the current global pandemic, gyms across Canada have been closed to the public's use, and as such has opened a need in the market for people to be able to properly workout and exercise. Since the upfront cost for a home gym is very high at the moment, not everyone has the ability to purchase adequate equipment, and so that is where QuickFit "fits" in, as it allows home gym owners to recoup some of the cost of purchasing their own equipment by renting time slots for use by individuals, and allows individuals to workout in an equipped gym for a small renting fee.

## What it does
QuickFit allows home gym owners to rent out time slots for people to workout in their gym, and allows users to search around their area for a home gym they want to workout in and book times. Similar to Airbnb, QuickFit handles the booking of time slots between users and owners, with an easy to use dashboard for each.

![Login](/src/assets/QuickFitLogin.png)

## How we built it
We built QuickFit with React, Redux, multi-page routing, and pulled in the Google Maps API for searching users local area for home gyms to rent out. We also used styled-components, @material-ui, and Formik to help with the UI components of the project.

## Challenges we ran into
This project went a lot smoother than we were anticipating. Two of our team members had never touched React before, but we've all been coding for a while, so learning on the fly came naturally. This project didn't have many "brick wall" challenges that stopped us in our tracks, but we consistently ran into small issues like getting design elements to work with each other or getting the google maps API to work the way we expected. The biggest challenge we ran into was a lack of time. We had a lot of ideas that we wanted to get into the project, and we had to keep cutting features to make sure we would have enough time to create the core functionality of QuickFit.

## Accomplishments that we're proud of
We're most proud of creating a finished product, which sounds super basic, but hear us out. Only one of us had experience with React, and even though the event is Friday to Sunday, we realistically only had about 15 hours to complete the project (life tends to get in the way when it's work from home). As such, we couldn't spend a ton of time trying to learn the basics of the tech stack we were using, and it was more of a hit the ground running sort of weekend. We're very happy with the fact that we were able to build an entire website, create functionality, and demo it all in such a short time, as it really goes to show how far we've come as Hackers and as software developers.

## What we learned
We learned a TON this weekend, but I've shortened it to a concise list for your viewing pleasure:

- Taking even an hour to whiteboard your idea and create a flow chart/UML diagram will pay dividends in time later when you're in the thick of things and stuff starts to get confusing. It's like having a map when you visit a new city.
- When learning something new, it's always good to have someone who's experienced to be a second pair of eyes since they will be a lot easier to bounce ideas off of than that 2 year old StackOverflow post.
- When none of your team members are designers, a minimalistic design is your best friend. Just make sure everything is consistent across the board, and you shouldn't run into any issues.
- It's great to be ambitious, and we really wanted to test our limits with this project, but with testing those limits actually comes the "limits" part. We learned that cutting features isn't the end of the world, especially if those features would have meant that we wouldn't have finished. Just gives us something to work on next weekend!
- Lastly, the tech. Everything in the "How We built it" section was learnt on the fly, and while we love our new found knowledge, it was like learning how to run before learning how to walk. While it worked this time, we know that we should (and will) put in the time to go over the basics to really strengthen our foundation of the technology, so that next time we can push ourselves even further, and create another awesome project!

## What's next for QuickFit
QuickFit needs a few tweaks before we'd consider it production ready. At the moment, we only have booking functionality, but no transaction is going through. As such, we liked to implement handling payments, and properly fleshing out the security of the app. As well, we attempted to host the app with our own domain using domain.com, but we ran into some early difficulties and decided to shelve the idea to allocate more time to creating the product. Finding a suitable hosting service, and linking to our custom domain would a next step. Lastly, cleaning up our code to make sure it uses best practices would definitely help with further development, and making the UI consistent (and prettier) would be a nice touch.
