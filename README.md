# Infinite Pagination

## Problem

There's this legacy API that contains info gathered across decades of existence. Your team needs to use one of the endpoints of that API to build a new web app.

This specific endpoint returns millions of items, paginated at 100 per page.

You job is to build a web app with a single page that lists all the items available in this legacy API in an infinite scrolling page. Whenever the user clicks in one of the items, the item becomes greyed out. This should persist even after refreshing the page.

Here's what you need to know:

- The legacy API is at http://sf-legacy-api.now.sh
- A simple `GET /items` will return the first 100 items.
- To go to a specific page you use `GET /items?page=20` for instance.
- The response will contain info about the total number of items, and the link to the next page.

## Guidelines

Here's the important stuff that we take into account when reviewing this exercise:

- It should be simple to start your solution
- It should contain some setup instructions
- It should work correctly (this also means no performance issues)
- It should look good
- It should have an automated way to prove it's working correctly
- It should use React.

**Ideally** we want this exercise to take you **around 90 minutes**. This time limit is just a reference so you can infer the level of polish we expect from your solution. You're free to spend as much time on it as you wish.

## Delivery

You will be given access to a github repository to work on your exercise. To submit your solution, open a pull request against the master branch. Use the body of the pull request to briefly describe your solution, what might be incomplete and why, etc. In case of any doubts please open an issue in the repository. We'll try to answer it as fast as possible.

## Important

We will **not** consider submissions that either don't work when following provided instructions or that were pushed directly to master (you need to open a pull request and leave it open).
