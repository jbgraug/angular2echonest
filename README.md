# angular2echonest
Angular2 (Alpha 47) playground with Echonest API.

You may also want to have a look at the two complementary blog posts I wrote about this sample project, for a (nearly) step-by-step explanation.

https://medium.com/@marcosloic/writing-a-basic-application-with-angular-2-5811cf6d6bb#.itnamrq49
https://medium.com/@marcosloic/managing-state-in-angular-2-using-rxjs-b849d6bbd5a5#.p8vdim65o

#Installation
- git clone https://github.com/marcosloic/angular2echonest.git
- cd angular2echonest
- npm install
- Provide your own Echonest key in '/src/app/services/Echonest' (Please)
- npm start

#Description
Since Angular 2 is still in alpha, the documentation is scarce and/or incomplete and/or outdated. This sample aims to provide real-life and up-to-date*ish* examples of use :

- Querying an API with http module and using the data
- Using the router, using router-parameters
- Passing data from parent to child component through @Input()
- ng-for, ng-if, etc.
- Using pipes
- Holding the app state in a Reactive store

There isn't a styleguide that carry nearly-authoritative weight right now (As there was John Papa's for Angular 1), but this sample tries to follow some concepts I picked from using React/redux, where smart components do the heavy lifting and pass the data to their dumb childs.
