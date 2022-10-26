## Themeanager

---

A simple extension to display your theme in the status bar and and/or in
window notifications.

---

### Overview

Themeanager, assistant to the theme manager. If you use VSCode and have more than a couple themes, this extension is for you! If you use VSCode and stream you should have Themeanager. This extension helps to alleviate "stream stress" and "theme awareness deprivation"! (warning: overconsumption and/or hoarding of themes may lead to: procrastination, low productivity, distraction, increased scrolling, forgetting that one theme and/or a general lack of focus. Please theme responsibly.)

---

### Installation

> [Get it here!](https://marketplace.visualstudio.com/items?itemName=homiecoder.vscode-themeanager)
>
> #### Or if you'd prefer:
>
> >     1. Open Extensions sideBar panel in VSCode click the Extensions icon
> >     2. Search for Themeanager
> >     3. Click Install
> >     4. Reload, if required

Themeanager will display your current theme in the status bar and/or in a window notification. This is useful for when you are streaming and want to share with viewers what theme and font you are using. It is also useful if you're a multi-themer want to quickly know what theme you are using at a glance.

#### - Display your theme in the status bar:

![Themeanager in status bar](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-statusbar-example.jpg)

#### - Display a theme and/or font notification :

![Themeanager in notification](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-notification-popup-example.jpg)

#### - Display a theme notification at startup:

![Themeanager at startup](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-startup-notification-example.jpg)

#### - Display a theme/font notification with keyboard shortcut:

![Themeanager with keyboard shortcut](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-keyboard-shortcuts-example.jpg)

#### - or with command pallette:

![Themeanager with command pallette](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-using-command-pallette.jpg)

### Configuration:

After installing themeanager you you are set to go! Your current theme and
font family will be shown in the status bar. Here are the current options
available for configuring the extension (changes take effect after reload):

using the _settings.json_ file:

```
// Show theme and font information in statusbar (true or false default: true).
  "themeanager.showThemeInStatusBar": true,
// Show notifcation popup with theme and font family at VSCode startup.
    (true or false default: true)
  "themeanager.showCurrentThemeAndFontAtStartup": true
```

![Themeanager settings.json configuration](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-settings-json-example.jpg)

Using VSCode settings menu (macos: "cmd" + "," | windows: "ctrl" + ","):

![Themeanager settings menu configuration](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-settings-menu-example.jpg)

#### Using Keyboard Shortcuts:

If you want to display a notification popup with your current theme and/or font
family, you can use the following keyboard shortcut, (Be sure to change the keyboard shortcut to a combination that fits your preferences):

![Themeanager key commands](https://raw.githubusercontent.com/tnfdesigns/themeanager/main/assets/themeanager-keyboard-shortcuts-example.jpg)

### Known Issues:

1. _Theme and font info may not show in statusbar due to size constraints. Try right-clicking and unselecting items that may not need to be displayed in the statusbar. I am working on an option to shorten what is rendered in the statusbar, or only show theme or font family. I apologize in advance for this inconvenience._

1. _Currently working at using VSCode state to listen for configuration changes. This will allow for the extension to update the statusbar and/or notification popup without having to reload VSCode._

### Build with:

```
yarn install
yarn run vscode:prepublish
```

### Notes:

Many of us have watched our share of streams and videos. I've seen streamers use a theme, a color, or font that I gotta have! Up until now, someone in chat had to ask the streamer or use the !theme flag. You can almost bet on it, especially if the streamer has a unique or new theme. I have also watched streamers have to repeat themselves, or sometimes get distracted or disrupted(understandbly) by this repitive and frequent question. But let's face it we spend a ton of time in our editors, and a good theme make it more fun, or relaxing or easier to see, or straight hyped to write code.

Well say goodbye to on stream "Theme checks" homie! Themeanager has got your back. From now on during streams your theme and font are on display in the status bar for your audience to see without disrupting your show or calling on your bot/service. Ok, so you like chat using the "!theme" flag, themeanager stays out of the way and your flag can continue business as normal. Themeanager doesn't get jealous, or like to be in the way. Themeanager can also be a great way to share a theme, that you or a friend made and you want to show it off. Themeanager makes it easy for new people to find and download themes from their favorite streamers!

I thought it was cool how the the name worked out. Even though it's spelled weird, it sounds right.

### Sponsors:

If you have yet to sponsor an open source project yet, or you often find yourself rooting for the underdog, here is your chance! If you tried the extension, thank you.
If you find this extension useful, please consider supporting themeanager. I would greatly appreciate it. If you have feedback/suggestions, please let me know. I am always looking to improve my skills and this extension.
The honest truth, I would appreciate the help and support rather than a donation. I am very new to development and this is my first extension. I am learning as I go and I am sure there are many things I could be doing better. I am open to any and all [feedback](themeanagerextension@gmail.com). Thank you!

![Sponsor me on GitHub](https://raw.githubusercontent.com/tnfdesigns/themeanager)

## Contributing

Contributions are always welcome!

See `contributing.md` (coming soon) for ways to get started.

Please adhere to this project's `code of conduct`(coming soon).

### Release Notes

#### 1.0.0

Initial release of themeanager to the VSCode Marketplace.

### FAQs:

#### Why was Themeanager released before all the great features are added, especially for non-streamers?

- 1st and foremost, I am new to coding and pretty slow right now. So the
  extension might not have been published until 2027. It solves a problem,
  very well, today as it is.
- When I decided to build an extension originally, it was to help the streamers
  I watched. Along with other theme hoarders like myself be able to easily see
  the streamers font and theme without buggin'.
- Many themes are close in colors and/or fonts, I like being reminded whenever
  I open VSCode which theme I'm using.
- Well, we are slightly less important, j/k. I said just kidding! I'm a
  non-streamer, almost every streamer wants an audience!

#### What are the plans for Themeanager?

As a non-streamer, I am pretty excited about future features that will help me
to manager my themes and improve my code experience without the work. A theme
for the morning, a theme for the afternoon or for those late nights, I want a
couple different choices. My eyes sometimes have a hard time focusing or the light affects them differently that day.

I have collected a fair amount of themes and it's a nice surprise when i load
a theme that I forgot how much I liked. I am totally inspired by john-papa's
Peacock extension! Great extension! Add touches of color and it surprises me if I want.

#### Can I contribute to Themeanager I have an idea for a feature?

Please and Thank you! Your help and skill of any level is appreciated.

- testing: Yes Please! I have no experience in testing so far. However I am
  sure good help at this stage while the extension is so small, I will watch,
  participate and learn. I will work at understanding enough to be able to grow
  the testing along with the extension.
- open to all participants! I am a beginner and I am sure there are many
  ways to improve the code and the extension. I am open to all ideas and
  suggestions. I am also open to learning and growing with the community.

#### I am new to coding should I try building an extension?

Most Definetely! Coding an extension has been a great experience. You will
see right away that it is not as difficult as you may imagine. I also have really enjoyed working on a extending VSCode, which is my main tool for writing code. I believe that if you try your hand at buildin an extension, it will help you to actually build something. Something, that you can use right away without the worries of hosting and databases. The boiler plate is an actual working extension, that's a head start. VSCode is a great IDE and it's free, often being worked on by coders just like you, that's incredible! The team at VSCode has already done much of the "heavy lifting" in order for us to add more functionality to a great product. You won't have to worry about the full scope of state or setting up the entire project. Try it out? You'll be spending a ton of time in VSCode make it yours, make it better for us all! Good luck! Hit me up when you publish, I'll check it out.

#### Why does you have an email spefically for Themeanager? It has 2 installs and 0 sponsors?

3 reasons:

- I weighed the tech debt (go watch some Theo or Prime and get ur dev game up!).
- I was told by a wise business owner, "You gotta act big to be big.
  Treat your business like you want people to treat your business."
- Cost.

### Feedback

If you have any feedback, please reach out to me @:
<themeanagerextension@gmail.com>

### Acknowledgements:

- [Kevin Powell](https://twitter.com/KevinJPowell)
- [Jenn Junod](https://twitter.com/JennJunod)
- [Jay Miller](https://twitter.com/kjaymiller)
- [BenDMyers](https://twitter.com/BenDMyers)
- [Rizel](https://twitter.com/blackgirlbytes)
- [James Q Quick](https://twitter.com/jamesqquick)
- [codinggarden](https://twitter.com/coding_garden)
- [Luke](https://twitter.com/codewithluke)
- [Theo](https://twitter.com/t3dotgg)
- [WebDevJunkie](https://github.com/codyseibert)
- [Dan Jutan](https://twitter.com/jutanium)
- [Danny Thompson](https://twitter.com/DThompsonDev)
- [Nikita Koselev](https://twitter.com/NikitaKoselev)
- [tylerleonhardt](https://twitter.com/TylerLeonhardt)
- [Primeagan](https://twitter.com/ThePrimeagen)
- [John Papa](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock)
- [octokatherine](https://readme.so)
-
-
- working on this list..., you know I appreciate you!

## License

[MIT](https://choosealicense.com/licenses/mit/)
