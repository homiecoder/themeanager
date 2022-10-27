### Flow:

- [x] should the ext be active when vscode starts? | vscode default: activates when export funciton activate is called?
- [x] why is disposable used as far as the commands.
- [x] add state to currentTheme/font
  - [x] be sure to set state fallback to ""
  - [x] how do i use global state?
- [x] is an event listener enough?
- [x] https://www.npmjs.com/package/vsls
- [x] get key commands working
- [x] gotta fix the settings so you can manage them tried from the alert popup and he said nope not working. come back to this.
- [] what about vscode-test package?
- []
- []
- []
- []
- []
- []

#### TODO:

- [] randomize the theme and font.
- [] set theme based on time of day.
- [] what about vscode-test package?
- [] what about tslint package?
- [] Need to update the settings in the command pallete to be easy to use/select
- [] allow to post link to get the theme and font if publically available maybe in notification popup. But it would be sick to have the link posted in live chat?
- []
- []

##### favoriteThemes:

- [] Should the user be able to pick the theme and font from a list?

###### setFavoriteThemes:

- [] create an array of the user installed vscode themes
- [] save the array to a variable
- [] create a quickpick menu from the array
- [] set the selected theme from array as the current active theme
- [] create an array of favoriteThemes
- [] allow user to add themes to favoriteThemes array
- [] set the default favoriteThemesArray to include currently active theme.
- []

##### selectRandomTheme

- [] select randomTheme from array of user installed vscode themes.
- [] set cuurent theme as calculated randomTheme.

### setTimeOfDayTheme:

- []
- []
- []

##### Update package.json:

- [] add: "license": "MIT?",
- []
- []
- []
- []
- []


- [ ] Whats the best way to get rid of the old build and see the active changes I am making?
    - [ ] right now in my vscode that i'm working in, has the old package.
- [ ]
- [ ] I would like to rebase, do you?
- [ ] I am trying to add an option to change the size of the status bar text: ()
    - [ ] full
    - [ ] short
    - [ ] rotate
    - As opposed to read-configuration line: 40
    - 1st challenge is update-config.ts line
- [ ] How do I get a logger/console.log to see what info is being passed, etc.
        - [ ] When trying to update/change the vscode window.title I am unable to remove the title without destroying the "original" title.
    - I am unable to "inject" the following back into the package.json as "window.title" (line483 my settings.json):
        - "window.title": "${activeEditorShort} ${separator} ${rootName}"
- [ ] Can/should i async/await these helpers.
    - sometimes the variables are undefined, how/can/should i fix this?



jay's extension:
- if there is a new project created/ or prompt if there is no code of conduct prompt would you like to create one prompt?
- 