# Email templates

Email templates for BOSS Revolution projects

## Installation

Install if not installed:

* Node.js
* git
* Gulp (gulp-cli)

and then run `npm install`.

## Development

`docpad run` to start project on http://localhost:9778.

`gulp mvno` to generate inlined MVNO emails.
`gulp bossdtc` to generate inlined BOSSDTC emails.
`gulp retailersmvno` to generate inlined RETAILERSMVNO emails.
`gulp retailers` to generate inlined RETAILERS emails.


## Deploy

Open command promt and run:

```
git remote add deploy https://USERNAME:PASSWORD@github.com/IDTdesign/emails.git
```

where USERNAME , PASSWORD is your github credentials.

Run `grunt deploy` inside your projects directory to compile the site and push it to https://idtdesign.github.io/emails/.

You should be collaborator in this repository to be able to deploy.
