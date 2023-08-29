# ✨SuperText Extension: Ultimate Web Content Summarizer!

SuperText extension is ultimate tool for quickly summarizing content and highlighting key insights. It uses OpenAI's GPT technology to condense long web page content into easy-to-understand nuggets of wisdom. Try out the SuperText extension now!

## 💡Description

Experience the SuperText extension, your ultimate content summarization tool! With the power of OpenAI's advanced GPT technology, SuperText effortlessly extracts content from your active browser tab and transforms them into concise summaries and highlights. You can also copy the summary and highlights easily to your clipboard with a single click.

Keep track of your reading history, access it whenever you need, and stay informed about your online/offline status. Plus, SuperText gracefully handles errors related to restricted content, data loading issues, data changes, and other network errors. Elevate your browsing experience with SuperText!

<br/>

## 🚀Features

   ### 📃Extract Summary & copy to 📋clipboard
   <br/>

   ![summary](public/summary.gif)

   - Effortlessly extract and summarize web page content with the SuperText extension.
   - It condenses lengthy articles into a concise format, allowing you to quickly copy the summarized form to your clipboard with a single click!

   <hr/>

   ### 🔦Extract Highlights & copy to 📋clipboard
   <br/>

   ![highlights](public/highlights.gif)

   - Effortlessly Extracts and provides highlights from web page content. It condenses lengthy articles and delivers the key points in bullet form.
   - You can easily copy the highlights to your clipboard with a single click!

   <hr/>

   ### 🔍Search History Tracking & 🗑️Remove Data:
   <br/>

   ![history-clear](public/history_clear.gif)

   - Stores and displays your recent search history for summaries and highlights. Easily revisit your past queries for quick reference.
   - Wipe both your current search data and entire history, putting you in control of your browsing experience.

   <hr/>

   ### 🌐Real-Time Online Status Indicator
   <br/>

   ![online-offline](public/online_offline.gif)

   - SuperText features a real-time online and offline status indicator, conveniently displayed at the top of your interface. Stay connected effortlessly!

   <br/>

## 🪄Setup and Installation

   ### 📌Prerequisites

   - NPM needs to be installed on your system in order to build the extension. If it's not already installed, please install it.
   - You must have the Chrome Browser installed on your system to run the extension. If it's not already installed, please install it.

   <br/>

   ### ⚙️Setup

   1. Clone the repo

      ```sh
      git clone https://github.com/ayush-pr0/super-text-summarizer-extension
      ```

   2. Install NPM packages

      ```sh
      npm install
      ```

   3. Get your free API Key at [https://rapidapi.com/restyler/api/article-extractor-and-summarizer](https://rapidapi.com/restyler/api/article-extractor-and-summarizer)

   4. Create .env and enter your API key

      ```js
      ARTICLE_SUMMARIZER_API = "ENTER_YOUR_API_KEY_HERE";
      ```

   5. Develop/Built Project

      ```
      "copy": "cp -r \"public\\dev\\\" \"dist\"",
      "build-copy": "cp -r \"public\\minified\\\" \"dist\""
      ```

      > **_NOTE:_** If you are using Mac OS or Linux OS then first go to `packege.json` file, apply the above changes.

      <br/>

      ```sh
      # Start project in development mode
      npm start

      #or

      # Build project in production mode (Recommended to create extension)
      npm run build
      ```

   > 🎉 Voila! The SuperText extension has been created successfully!! Now `dist` folder contains all the required files for the SuperText extension to be installed in your Chrome browser. You can rename the `dist` folder or relocate it to a different directory if you wish.

   <br/>

   ### 🔧Installation
   
   1. Open Chrome browser. 

   2. Go to `chrome://extensions/`.

   3. At the top right, turn on Developer mode.

   4. Click Load unpacked.

   5. Find and select the app or extension folder.

   > 🎉 SuperText extension installed successfully!! Start using super power of SuperText and say goodbye to information overload and hello to effortless comprehension.

<br/>

📧 **Contact:** If you have any questions or feedback, you can reach out to me at ayushkhandelwal9083@gmail.com