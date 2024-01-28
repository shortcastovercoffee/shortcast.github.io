# Website Carbon Badges

This badge displays a live calculation of the carbon emissions per page view of any page it is embedded on. Powered by [Website Carbon](https://websitecarbon.com) and made with minimum bytes by [Wholegrain Digital](https://wholegraindigital.com)

To raise issues, contribute or check out the code, visit the [Gitlab repo](https://gitlab.com/wholegrain/website-carbon-badges/).

## Installation
Adding the badge to your site is as simple as inserting the following lines into your markup where you would like the badge to appear:

```html
<div id="wcb" class="carbonbadge"></div>
<script src="https://unpkg.com/website-carbon-badges@1.1.2/b.min.js" defer></script>
```

![Badge - Light Version](./public/badge-light.png "Badge - Light Version")

If you need the badge to work on a dark background, add the class, `.wcb-d` to the div container:

```html
<div id="wcb" class="carbonbadge wcb-d"></div>
<script src="https://unpkg.com/website-carbon-badges@1.1.2/b.min.js" defer></script>
```

![Badge - Dark Version](./public/badge-dark.png "Badge - Dark Version")

See a working example [here](./light.html).

## More Info

To reduce data transfer and server load, the badge caches the result on the user's device and will only make a maximum of one API call per day for each page it is embedded on. If a user visits the same page more than once within a day, the result will have been cached.

## Development Info
To get started:
- `npm install`
- `npm start` (build and watch for changes)
- `npm build` (runs the gulp build process)

The build process compresses the `src/b.css` file and then inserts it into the javascript file before uglifying the js file. Both b.min.css and b.min.js are output into the root but only b.min.js is used by the badge.
