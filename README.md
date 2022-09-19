## Themeanager

---

A simple extension to display your theme in the status bar and and/or in
window notifications.

---

Themeanager, the assistant to your theme manager. If you use VSCode and have multiple themes that you use, this extension is for you! If you use VSCode and stream, this extension is for you NOW!

##### Installion:

## Installation

```
<!-- Get it here: TODO: insert link to download from VSCode Marketplace -->

Or if you'd prefer:
    1. Open Extensions sideBar panel in VSCode click the Extensions icon
    2. Search for Themeanager
    3. Click Install
    4. Click Reload, if required

```

This extension will display your current theme in the status bar and/or in a window notification. This is useful for when you are streaming and want to show your viewers what theme you are using. It is also useful for when you are using multiple themes and want to know what theme you are using at a glance.

###### - Display your theme in the status bar of VSCode:

![Themeanager in status bar](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-statusbar-example.jpg)

###### - Display a theme and/or font notification in the command pallette or with shorcut keys:

![Themeanager in notification](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-notification-popup-example.jpg)

###### - Display a theme notification at startup:

![Themeanager at startup](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-startup-notification-example.jpg)

###### - Display a theme/font notification with keycommand or command pallette:

![Themeanager with keycommand](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-keycommand-example.jpg)

![Themeanager with command pallette](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-command-pallette-example.jpg)

##### Configuration:

After installing themeanager you you are set to go! Your current theme and
font family will be shown in the status bar. Here are the current options
available for configuring the extension (changes take effect after reload):

configure in settings.json

```
// Show theme and font information in statusbar (true/false default: true).
  "themeanager.showThemeInStatusBar": true,
// Show notifcation popup with theme and font family at VSCode startup.
    (true/false default: true)
  "themeanager.showCurrentThemeAndFontAtStartup": true
```

![Themeanager settings.json configuration](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-settings-json-example.jpg)

Using VSCode settings menu ("cmd" + ","):
![Themeanager settings menu configuration](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-settings-menu-example.jpg)

##### Using Keyboard Shortcuts:

If you want to display a notification popup with your current theme and/or font
family, you can use the following key commands (Be sure to change the keyboard shortcuts to a combination that fits your preferences):

![Themeanager key commands](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-keyboard-shortcuts-example.jpg)

##### Notes:

Many of us have watched our share of streams and videos. I have often seen streamers use a theme, a color or font that I would like to use. Up until now, someone in chat would need to ask the streamer or use the !theme flag. You can almost bet on it, especially if the streamer has a unique or new theme. I have also observed streamers have to repeat themselves, or sometimes get distracted or disrupted(understandbly) by this repitive and frequent question. But let's face it we spend a ton of time in our editors.

Well say goodbye to those on stream "Theme checks" homie! Themeanager has got your back. From now on during streams your theme and font are on display in the status bar for your audience to see without disrupting your show or calling on your bot/service! Like chat using the !theme flag, themeanager stays out of the way and your flag can continue business as normal. Themeanager can also be a great way to introduce a theme you or a friend made and want to show it off. Themeanager makes it easy for new people to find and download themes their favorit streamers are sporting!

##### Known Issues:

1. _Theme and font info may not show in statusbar if you have selected several items to display. Try unselecting items that may not need to be displayed in the statusbar. I am working on an option to shorten what is rendered in the statusbar, or only show theme or font family. I apologize in advance for this inconvenience._

1. _Currently working at using VSCode state to listen for configuration changes. This will allow for the extension to update the statusbar and/or notification popup without having to reload VSCode._

#### Build with:

```

npm install
npm run vscode:prepublish

```

## Contributing

Contributions are always welcome!

See `contributing.md` (coming soon!) for ways to get started.

Please adhere to this project's `code of conduct`(coming soon!).

##### Release Notes

###### 0.0.1

Initial release of themeanager to the VSCode Marketplace.

##### FAQs:

###### Why was Themeanager released before all the great features are added for non-streamers?

- 1st and foremost, I am so new to coding and slow the extension might
  not have been published until 2027 and it solves a small problem
  today as it is.
- When I decided to build an extension originally, it was to help the streamers
  I watched. Along with other theme hoarders like myself be able to easily see
  the streamers font and theme without buggin'.
- Well, we are slightly less important, j/k. I said just kidding! I am a non-streamer,
  there is no them without us to watch!

###### What are the plans for Themeanager?

As a non-streamer, I am pretty excited about future features that will help me
to manager my themes and improve my code experience without the work. A theme
for the morning, a theme for the afternoon or for those late nights, I want a
couple different choices. My eyes sometimes have a hard time focusing or the light
affects them differently that day.

I have collected a fair amount of themes and it's a nice surprise when i load
a theme that I forgot how much I liked. I am totally inspired by john-papa's
Peacock extension! Great extension! Add touches of color and it surprises me if I want.

###### Can I contribute to Themeanager I have an idea for a feature?

Please and Thank you! Your help and skill of any level is appreciated.

- testing: Yes Please! I have no experience in testing so far. However I am
  sure good help at this stage while the extension is so small, I will watch,
  participate and learn. I will work at understanding enough to be able to grow
  the testing along with the extension.
- open to all participants! I am a beginner and I am sure there are many
  ways to improve the code and the extension. I am open to all ideas and
  suggestions. I am also open to learning and growing with the community.

###### I am new to coding should I try building an extension?

Most Definetely! Coding an extension has been a great experience. You will
see right away that it is not as difficult as you may imagine. I also have really enjoyed working on a tool for VSCode which is my main tool for writing code. I believe that if you try your hand at extensions it will help you to actually build something that you can use right away, without the worries of hosting and databases. VSCode is a great IDE and it's free, often being worked on by coders just like you, that's incredible! The team at VSCode has also done much of the"heavy lifting" in order for us to add more functionality to a great product. You won't have to worry about the full scope of state or setting up the entire project. Try it out? You'll be spending a ton of time in VSCode make it yours, make it better for us all! Good luck!

##### Feedback

If you have any feedback, please reach out to us at themeanagerextension@gmail.com

##### Acknowledgements:

- [John Papa](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)
- [tylerleonhardt](https://twitter.com/TylerLeonhardt)
- [octokatherine](https://readme.so)
- [codewithluke](https://twitter.com/codewithluke)
-
- working on this list...please be patient, you know I appreciate you!

## License

[MIT](https://choosealicense.com/licenses/mit/)
