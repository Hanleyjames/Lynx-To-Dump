# Lynx-To-Dump
A live lynx-to-dump api with working [chrome extension](https://chrome.google.com/webstore/detail/lynx-dumper/njmakncdojaioikpepfopefdmfchidnb?hl=en&authuser=0)

This project consists of an ExpressJS api running on a docker container that has lynx (a text web browser). The API executes a lynx command and returns the results to an email.
The Chrome Extension just makes it simple with a small/lightweight ui with vanilla js.
To install, follow [this link](https://chrome.google.com/webstore/detail/lynx-dumper/njmakncdojaioikpepfopefdmfchidnb?hl=en&authuser=0).To install the unpacked version, go to chrome://extensions and turn on developer mode. Unzip the lynx chrome extension and in the browser click on 'load unpacked' and point it to the unzipped folder.

# Design Choices
Why the icon choice for the chrome extension? I don't have time to design one nor do I care to do so at this time.
Why did you make this? Think of this more as an MVP where I was much more interested in understanding at a basic level how chrome extensions are built. It was also important for me to see how to integrate console commands in docker images.
# Privacy Stuff
As of now the project keeps emails sent on a seperate account. I have yet to make a function to delete them. So the contents of your request are stored in my gmail account. I will soon be implementing an email block filter, so if there is an issue you can send an email to abuse+lynxdumps@gmail.com and I will block any emails to your account. This is more of a personal project than it is one for major use. so please, while I am not sure why you would abuse this... don't.
