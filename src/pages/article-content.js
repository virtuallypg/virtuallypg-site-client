const articles = [
  {
    name: 'article1',
    title: 'Javascript in the Command Line? Yes please!',
    content: [
      `So simple and yet so satisfying. In my initiative tentative steps into learning to code I followed the advice to explore C as my primer. OK so I didn’t go so deeply into the ins and outs of this language but enough to derive some satisfaction out of holding a conversation with a computer under its hood and asking it to perform some simple tasks. Sooner or later the drive to make some real world apps and content pushed me towards learning Objective-C for iOS development and later on Javascript so I could create content for the web. These days I’m consuming a diet of mostly javascript, along with the full MERN (Mongoose, Express, React, NodeJS) stack. However, I have reflected on the days when I’d use the command line as a primary resource in solving coding challenges. That is until I discovered Node.js! At first sight (it’s bound to get much more complex!) It’s so simple. Just download Node onto my Mac then hit the command line, touch a new js file, open it in Atom, write some code with console.log output. Then hey presto type in ‘node’ followed by the file name and there’s the output - just like the good old days of writing C!`,
      ``,
      ``
    ]
  },
  {
    name: 'article2',
    title: 'Getting my Bootstraps on!',
    content: [
      `So I’m the first to admit that I’ve not explored the full depths of the power and versatility of CSS3 but these days there’s such a wealth of front end libraries and frameworks out there… the water is warm and ready to jump in!

At first instance Bootstrap may seem like little more than a collection of easy tweaks to HTML classes - rather than creating an add margin-left class, it’s already for us in the form of ml-#. But then there’s the layout functionality. Bootstrap’s use of containers, rows and columns offers complexity and specificity when needed but, in essence, it is super simple and intuitive to use. This is particularly so if you’re designing a responsive Card UI (a popular choice these days). Everything is easily tweakable but the essential framework presents you with the following scenario:`,

  '<div class="container">',
  <t>&emsp; &lt;div class=“row”></t>,
   <t>&emsp;&emsp; &lt;div class = “col-lg-4”></t>,
   <t>&emsp;&emsp;&emsp; &lt;img src=“image1.jpg” alt=“image 1”/></t>,
   <t>&emsp;&emsp; &lt;/div></t>,
   <t>&emsp;&emsp; &lt;div class = “col-lg-4”></t>,
   <t>&emsp;&emsp;&emsp; &lt;img src=“image2.jpg” alt=“image 2”/></t>,
   <t>&emsp;&emsp; &lt;/div></t>,
   <t>&emsp;&emsp; &lt;div class = “col-lg-4”></t>,
   <t>&emsp;&emsp;&emsp; &lt;img src=“image3.jpg” alt=“image 3”/></t>,
   <t>&emsp;&emsp; &lt;/div></t>,
   <t>&emsp; &lt;/div></t>,
   <t>&lt;/div></t>
      ,
      `The UI then repositions according to your screen size, so on a mobile device the blocks would snap to a vertical alignment.

Getting started with Bootstrap is super simple too. Just head over the website below where you can either download the necessary stylesheets and jQuery plugins. Alternatively just hook up your app to the CDN. There’s is a useful starter template here that contains the relevant links. Furthermore, there are a wide selection of tailored UI design templates which you can use as you launchpad into exploring the Bootstrap framework.

In terms of browser support, Bootstrap has all bases covered, including iOS, Android, Safari, Firefox, Chrome, Edge, IE10+ and Opera. For older browser versions (e.g. IE 8-9), Bootstrap 4 is not supported though Bootstrap 3 is.`,

  <a href="https://getbootstrap.com/docs/3.3/getting-started/">Bootstrap - get started</a>,
  <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">Bootstrap - starter template</a>
    ]
  },
  {
    name: 'article3',
    title: 'Are Old Programming Books Still Worthwhile Reads? ',
    content: [
      'Just as is the case with spoken languages, no computing language is static. Each one experiences regular updates involving new features, replacing old ones, enhancing the language’s ability to communicate with APIs etc.', <t>I recently read a book called <i>Javascript: The Good Parts</i> by Douglas Crockford which, in spite of the relatively long time since its publication in 2008, still garners great reviews and recommendations from Javascript enthusiasts. Javascript is now one of the world’s most popular programming languages which may seem surprising since it was originally created under time pressure as a simple and accessible Scheme for the browser that could be employed by non-developers. Due to these inauspicious beginnings, Javascript’s increasingly abundant usage has copped more than its fair share of criticism – to many, the language has always lacked the elegance of say C#. In Crockfords book he, as the title implies, highlights some of the better features of Javascript such as the way it implements functions, along with its baked in selection of methods and compatibility with Regular Expressions. However, Crockford also concedes that Javascript is a ‘sloppy’ language, and he is keen to highlight some of its shortcomings – included in the book is not only an appendix on ‘Bad Parts’, but also an appendix on ‘Awful Parts’. At front and centre of all things awful is the dreaded global variable. While the allowance of implied global variables (that make it unnecessary to declare variables before using them) was intended to be a feature to make the language more user friendly, implied globals can easily create bugs that can be very hard to find, such as the masking of misspelled names.</t>,
      `The most recent iteration of Javascript, known as ECMAScript6 (ES6), has mitigated some of the issues regarding variables, such as the introduction of ‘let’ which allows variables to be scoped to an immediate enclosing block, something which the ‘var’ declaration fails to do. It also seems that the deployment of ES6 coincides with Javascript being treated increasingly as a functional language. For example the inclusion of the ‘const’ keyword which, while not exactly immutable, is a step towards the immutability requirement intrinsic to functional languages. Overall it seems that ES6 has brought about features that fix some of the issues highlighted in Crockford’s book. Does this mean that the book is less of a worthwhile read? Indeed, to what extent do books on programming have a particularly short existence in terms of their value and relevance to the ever fast moving world of software development? I guess it depends on each reader’s own philosophy. Yes, software developers may need to work with legacy code that uses some fairly antiquated scripts, thus an understanding of earlier versions and design patterns of a particular language or framework is valuable. To this reader, though, understanding where a language came from and how it has evolved is an extremely valuable part of really understanding what makes a language tick and how to get the most out of it.  `,
      <t>With this spirit I look forward to one of my next reads which is <i>React Quickly</i> by Azat Mardan. For a modern framework such as React this book’s publication date is somewhat distant and yes, popular features have come along since then such as the use of hooks and a seemingly common preference for functions over classes when scripting components. However, the book is well reviewed and sure to be a great foundation for deepening my understanding of React.</t>
    ]
  }
];

export default articles;
