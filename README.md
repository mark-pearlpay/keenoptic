
![Image of Keen Optic](https://gamepedia.cursecdn.com/dota2_gamepedia/d/dc/Keen_Optic_icon.png)
#  KeenOptic 
Analyze and track team member's impact

### Overall Goal
- Find a quantitative way to measure team productivity and performance

### Benefits
- Understand what team members are accomplishing
- Track the evolution of team members
- Make evaluation decisions based on historical data rather than opinion

### How will we measure?
- Experiments, product features, enhancements and bug fixes are always divided in a set of shippable PULL REQUESTS. Work that is deployed to the server holds always hold value. We can quantify the volume of work here by files and modifications, because that will represent mechanical time investment into typing, searching and replacing, running codemods, etc.

- Manual PR REVIEW is another unit of meaningful work, where time spent is of importance for the company. They are also the biggest transfer of knowledge between developers. There we point out each other approaches to implement a feature or use the syntax. It’s another elegant way to teach and learn, without explicitly pair programming.

- Reviews from automated tests or bots are also another important form of metric. Just like peer reviews, they are a reactive, implicit, way to teach about the code base infrastructure. This gives the PRs other dimensions that are useful to measure in a precise way: (1) whether the developer does not create regressions bugs, (2) coverage increases or decreases, (3) requires changes on the testing infrastructure because tests are failing, but –adds technical debt — needs to be merged.

### Primary Metrics:
- Average PR Time
	The average time for a pull request is calculated by averaging the time between the opening and merging of a pull request.

- Commits per PR
	The average number of commits per pull requests.

- Average Review Time
	The average amount of time it takes from when the pull request is pushed until it is last reviewed.

- Time to Open PR
	The average amount of time between each pull request.

- Review
	The last work has been done on the pull request and it will soon be looked over.

- Review with Commits
	The review has been done, but more work needs to be done on the pull request before it can be merged.
